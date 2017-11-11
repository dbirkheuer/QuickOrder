import { TipoPedido } from './../pages/tipo-pedido/tipo-pedido';
import PouchDB from 'pouchdb';
import { Injectable } from '@angular/core';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

export class ProdutoDAO {

    db: any;
    dados: any;
    remote: any;

    constructor() {
        this.db = new PouchDB('produto');
        this.remote = 'http://localhost:5984/produto';
        let options = {
            live: true,
            retry: true
        };
        this.db.sync(this.remote, options);
        this.deletarTodosRegistros();
        this.adicionarProdutos();
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

    adicionarProduto(produto) {
        this.db.post(produto).catch((err) => {
            console.log(err);
        })
    }

    ObterProduto() {
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

    adicionarProdutos() {

        var prod = {
            codigo: '100',
            descricao: 'Meias',
            valor: '15'
        };
        this.adicionarProduto(prod);

        var prod = {
            codigo: '200',
            descricao: 'Cueca',
            valor: '32'
        };
        this.adicionarProduto(prod);

        var prod = {
            codigo: '300',
            descricao: 'Calção',
            valor: '40'
        };
        this.adicionarProduto(prod);

        var prod = {
            codigo: '400',
            descricao: 'Calça',
            valor: '68'
        };
        this.adicionarProduto(prod);
        var prod = {
            codigo: '500',
            descricao: 'Camiseta',
            valor: '58'
        };
        this.adicionarProduto(prod);
        var prod = {
            codigo: '600',
            descricao: 'Camiseta',
            valor: '70'
        };
        this.adicionarProduto(prod);
        var prod = {
            codigo: '700',
            descricao: 'Casaco',
            valor: '110'
        };
        this.adicionarProduto(prod);

        var prod = {
            codigo: '800',
            descricao: 'Moleton',
            valor: '90'
        };
        this.adicionarProduto(prod);
    }
}