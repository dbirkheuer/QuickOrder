import { TipoPedido } from './../pages/tipo-pedido/tipo-pedido';
import PouchDB from 'pouchdb';
import { Injectable } from '@angular/core';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

export class ListaPrecoDAO {

    db: any;
    dados: any;
    remote: any;

    constructor() {
        this.db = new PouchDB('listapreco');
        this.remote = 'http://localhost:5984/listapreco';
        let options = {
            live: true,
            retry: true
        };
        this.db.sync(this.remote, options);
        this.deletarTodosRegistros();
        this.adicionarListaPrecoNoBanco();
    }

    adicionarListaPrecoNoBanco() {
        var tipos = {
            codigo: '1',
            descricao: 'Santa Catarina'
        };

        this.adicionarListaPreco(tipos);
        var tipos1 = {
            codigo: '2',
            descricao: 'Região Rio Grande do Sul'
        };

        this.adicionarListaPreco(tipos1);
        var tipos3 = {
            codigo: '3',
            descricao: 'Região Sudeste'
        };

        this.adicionarListaPreco(tipos3);
        var tipos4 = {
            codigo: '4',
            descricao: 'Região Nordeste'
        };

        this.adicionarListaPreco(tipos4);
        var tipos5 = {
            codigo: '5',
            descricao: 'Região Norte'
        };

        this.adicionarListaPreco(tipos5);
    }

    adicionarListaPreco(listaPreco) {
        this.db.post(listaPreco).catch((err) => {
            console.log(err);
        })
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

    ObterListaPreco() {
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