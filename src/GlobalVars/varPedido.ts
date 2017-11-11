import { ProdutoDAO } from './../DAO/ProdutoDAO';
import { FormaPagamentoDAO } from './../DAO/FormaPagamentoDAO';
import { CondicaoPagamentoDAO } from './../DAO/CondicaoPagamentoDAO';
import { ListaPrecoDAO } from './../DAO/ListaPrecoDAO';
import { ClienteDAO } from './../DAO/ClienteDAO';
import { TipoPedidoDAO } from './../DAO/TipoPedidoDAO';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

export class VarPedido {

    codCliente: string;
    codCondicaoPagamento: any;
    codFormaPagamento: any;
    codListaPreco: any;
    codTipoPedido: any;
    valorTota: any;

    constructor(
        public tipoPedido: TipoPedidoDAO,
        public produto: ProdutoDAO,
        public listaPreco: ListaPrecoDAO,
        public condicaoPagamento: CondicaoPagamentoDAO,
        public formaPagamento: FormaPagamentoDAO) {
        this.adicionarProdutos();


    }

    adicionarProdutos() {

        var prod = {
            codigo: '100',
            descricao: 'Meias',
            valor: '15'
        };
        this.produto.adicionarProduto(prod);

        var prod = {
            codigo: '200',
            descricao: 'Cueca',
            valor: '32'
        };
        this.produto.adicionarProduto(prod);

        var prod = {
            codigo: '300',
            descricao: 'Calção',
            valor: '40'
        };
        this.produto.adicionarProduto(prod);

        var prod = {
            codigo: '400',
            descricao: 'Calça',
            valor: '68'
        };
        this.produto.adicionarProduto(prod);
        var prod = {
            codigo: '500',
            descricao: 'Camiseta',
            valor: '58'
        };
        this.produto.adicionarProduto(prod);
        var prod = {
            codigo: '600',
            descricao: 'Camiseta',
            valor: '70'
        };
        this.produto.adicionarProduto(prod);
        var prod = {
            codigo: '700',
            descricao: 'Casaco',
            valor: '110'
        };
        this.produto.adicionarProduto(prod);

        var prod = {
            codigo: '800',
            descricao: 'Moleton',
            valor: '90'
        };
        this.produto.adicionarProduto(prod);
    }


}








