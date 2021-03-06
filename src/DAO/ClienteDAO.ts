import PouchDB from 'pouchdb';
import { Injectable } from '@angular/core';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';


export class ClienteDAO {

    db: any;
    dados: any;
    remote: any;

    constructor() {
        this.db = new PouchDB('cliente');
        this.remote = 'http://localhost:5984/cliente';
        let options = {
            live: true,
            retry: true
        };
        this.db.sync(this.remote, options);
    }

    adicionarCliente(cliente) {
        this.db.post(cliente).catch((err) => {
            console.log(err);
        })
    }

    atualizarCliente(cliente) {
        this.db.put(cliente).catch((err) => {
            console.log(err);
        });
    }

    excluirCliente(cliente) {
        this.db.remove(cliente).catch((err) => {
            console.log(err);
        });
    }


    ObterCliente() {
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