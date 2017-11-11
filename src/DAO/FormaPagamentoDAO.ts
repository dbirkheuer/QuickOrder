import { TipoPedido } from './../pages/tipo-pedido/tipo-pedido';
import PouchDB from 'pouchdb';
import { Injectable } from '@angular/core';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

export class FormaPagamentoDAO {

    db: any;
    dados: any;
    remote: any;

    constructor() {
        this.db = new PouchDB('formapagamento');
        this.remote = 'http://localhost:5984/formapagamento';
        let options = {
            live: true,
            retry: true
        };
        this.db.sync(this.remote, options);
        this.deletarTodosRegistros();
        this.adicionarFormaPagamentoNoBanco();
    }

    adicionarFormaPagamentoNoBanco() {
        var tipos = {
            codigo: '1',
            descricao: 'Crédito'
        };
        this.adicionarFormaPagamento(tipos);
        var tipos2 = {
            codigo: '2',
            descricao: 'Débito'
        };
        this.adicionarFormaPagamento(tipos2);
        var tipos3 = {
            codigo: '3',
            descricao: 'Dinheiro'
        };
        this.adicionarFormaPagamento(tipos3);
        var tipos4 = {
            codigo: '4',
            descricao: 'Boleto'
        };
        this.adicionarFormaPagamento(tipos4);
        var tipos5 = {
            codigo: '5',
            descricao: 'NF-e'
        };

        this.adicionarFormaPagamento(tipos5);
    }

    adicionarFormaPagamento(formaPagamento) {
        this.db.post(formaPagamento).catch((err) => {
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

    ObterFormaPagamento() {
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