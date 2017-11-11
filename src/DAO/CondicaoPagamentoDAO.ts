import { TipoPedido } from './../pages/tipo-pedido/tipo-pedido';
import PouchDB from 'pouchdb';
import { Injectable } from '@angular/core';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

export class CondicaoPagamentoDAO {

    db: any;
    dados: any;
    remote: any;

    constructor() {
        this.db = new PouchDB('condicaopagamento');
        this.remote = 'http://localhost:5984/condicaopagamento';
        let options = {
            live: true,
            retry: true
        };
        this.db.sync(this.remote, options);
        this.deletarTodosRegistros();
        this.adicionarCondicaoPagamentoNoBanco();
    }

    adicionarCondicaoPagamentoNoBanco() {
        var tipos = {
            codigo: '1',
            descricao: 'Avista'
        };
        this.adicionarCondicaoPagamento(tipos);

        var tipos2 = {
            codigo: '2',
            descricao: '30 dias'
        };
        this.adicionarCondicaoPagamento(tipos2);

        var tipos3 = {
            codigo: '3',
            descricao: '60 dias'
        };
        this.adicionarCondicaoPagamento(tipos3);

        var tipos4 = {
            codigo: '4',
            descricao: '90 dias'
        };
        this.adicionarCondicaoPagamento(tipos4);

        var tipos5 = {
            codigo: '5',
            descricao: '120 dias'
        };
        this.adicionarCondicaoPagamento(tipos5);
    }

    adicionarCondicaoPagamento(condicaoPagamento) {
        this.db.post(condicaoPagamento).catch((err) => {
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

    ObterCondicaoPagamento() {
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