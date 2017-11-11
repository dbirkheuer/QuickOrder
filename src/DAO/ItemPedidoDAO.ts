import { TipoPedido } from './../pages/tipo-pedido/tipo-pedido';
import PouchDB from 'pouchdb';
import { Injectable } from '@angular/core';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

export class ItemPedidoDAO {

    db: any;
    dados: any;
    remote: any;

    constructor() {
        this.db = new PouchDB('itempedido');
        this.remote = 'http://localhost:5984/itempedido';
        let options = {
            live: true,
            retry: true

        };
        this.db.sync(this.remote, options);


    }

    deletarTodosRegistros() {
        this.db.allDocs({ include_docs: true }).then(allDocs => {
            return allDocs.rows.map(row => {
                return { _id: row.id, _rev: row.doc._rev, _deleted: true };
            });
        }).then(deleteDocs => {
            return this.db.bulkDocs(deleteDocs);
        });

    }
    adicionarItem(item) {
        this.db.post(item).catch((err) => {
            console.log(err);
        })
    }

    ObterItens() {
        if (this.dados) {
            return Promise.resolve(this.dados);
        }

        return new Promise(resolve => {
            this.db.allDocs({
                include_docs: true
            }).then((result) => {
                this.dados = [];
                let docs = result.rows.map((row) => {
                    this.dados.push(row.doc);
                });
                resolve(this.dados);
                this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', (change) => {
                    this.handleChange(change);
                });
            }).catch((error) => {
                console.log(error);
            });
        });
    }

    handleChange(change) {
        let changedDoc = null;
        let changedIndex = null;

        this.dados.forEach((doc, index) => {
            if (doc._id === change.id) {
                changedDoc = doc;
                changedIndex = index;
            }
        });

        //Documento deletado
        if (change.deleted) {
            this.dados.splice(changedIndex, 1);
        } else {
            if (changedDoc) {
                //Documento atualizado
                this.dados[changedIndex] = change.doc;
            } else {
                //Documento adicionado
                this.dados.push(change.doc);
            }
        }
    }
}