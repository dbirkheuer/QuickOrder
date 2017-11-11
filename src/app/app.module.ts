import { PedidoResumo } from './../pages/pedido-resumo/pedido-resumo';
import { DadosPedidoTempDAO } from './../DAO/dadosPedidoTempDAO';
import { VarPedido } from './../GlobalVars/varPedido';
import { ItemPedidoDAO } from './../DAO/ItemPedidoDAO';
import { ItensTempDAO } from './../DAO/ItensTempDAO';
import { ProdutoDAO } from './../DAO/ProdutoDAO';
import { FormaPagamentoDAO } from './../DAO/FormaPagamentoDAO';
import { CondicaoPagamentoDAO } from './../DAO/CondicaoPagamentoDAO';
import { ListaPrecoDAO } from './../DAO/ListaPrecoDAO';
import { TipoPedidoDAO } from './../DAO/TipoPedidoDAO';
import { ListagemClientesParaPedido } from './../pages/listagem-clientes-para-pedido/listagem-clientes-para-pedido';
import { Resumo } from './../pages/resumo/resumo';
import { Itens } from './../pages/itens/itens';
import { Dados } from './../pages/dados/dados';
import { TabsPedidoCadastro } from './../pages/tabs-pedido-cadastro/tabs-pedido-cadastro';
import { Pedidos } from './../pages/pedidos/pedidos';
import { TipoPedido } from './../pages/tipo-pedido/tipo-pedido';
import { FormaPagamento } from './../pages/forma-pagamento/forma-pagamento';
import { CondicaoPagamento } from './../pages/condicao-pagamento/condicao-pagamento';
import { ListaPreco } from './../pages/lista-preco/lista-preco';
import { PedidoDAO } from './../DAO/PedidoDAO';
import { Sincronizacao } from './../pages/sincronizacao/sincronizacao';
import { Produtos } from './../pages/produtos/produtos';
import { NovoPedido } from './../pages/novo-pedido/novo-pedido';
import { NovoCliente } from './../pages/novo-cliente/novo-cliente';
import { ListagemProdutos } from './../pages/listagem-produtos/listagem-produtos';
import { ListagemPedidos } from './../pages/listagem-pedidos/listagem-pedidos';
import { ListagemClientes } from './../pages/listagem-clientes/listagem-clientes';
import { ClienteDAO } from './../DAO/ClienteDAO';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListagemClientes,
    ListagemPedidos,
    ListagemProdutos,
    NovoCliente,
    NovoPedido,
    Produtos,
    Sincronizacao,
    ListaPreco,
    CondicaoPagamento,
    FormaPagamento,
    TipoPedido,
    Pedidos,
    TabsPedidoCadastro,
    Dados,
    Itens,
    Resumo,
    ListagemClientesParaPedido,
    PedidoResumo

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListagemClientes,
    ListagemPedidos,
    ListagemProdutos,
    NovoCliente,
    NovoPedido,
    Produtos,
    Sincronizacao,
    ListaPreco,
    CondicaoPagamento,
    FormaPagamento,
    TipoPedido,
    Pedidos,
    TabsPedidoCadastro,
    Dados,
    Itens,
    Resumo,
    ListagemClientesParaPedido,
    PedidoResumo

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Storage,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ClienteDAO, PedidoDAO, TipoPedidoDAO, ListaPrecoDAO, 
    CondicaoPagamentoDAO, FormaPagamentoDAO, ProdutoDAO, ItemPedidoDAO, DadosPedidoTempDAO
  ]
})
export class AppModule { }
