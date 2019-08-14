import { Component, OnInit } from '@angular/core';
import Endereco from '../domain/Endereco';
import {AlertController, NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Button } from 'protractor';


@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.page.html',
  styleUrls: ['./finalizar-pedido.page.scss'],
})
export class FinalizarPedidoPage implements OnInit {

  title = this.route.snapshot.params.id;
  preco = this.route.snapshot.params.preco;
  img = this.route.snapshot.params.img;


  constructor(private alert: AlertController, private nav: NavController,  private route:ActivatedRoute) { }

  ngOnInit() {
  }
  alerta(){
    this.alert.dismiss()
    this.alert.create({
      header:"Endereço confirmado. Pagamento será realizado na entrega"

    })
    
  }
  buscar(cep){
    const cepString = cep.el.value
    if(cepString === '' || cepString.length !== 8 || !cepString.match(/^\d+$/g)){
      console.log("CEP inválido");
    }else{
      console.log("CEP válido");
      let retorno = fetch('https://viacep.com.br/ws/' + cepString + '/json')
      console.log ("enviando requisição...");
      retorno.then(dados => {
        return dados.json()
      }).then(endereco =>{
        if(endereco.erro){
          console.error ('CEP Inexistente')
        }else{
          this.alert.create({
            header: "Pode confirmar o endereço?",
            subHeader: `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf.toUpperCase()}`, 
            buttons: [{
              text:'Não'
            }, {
              text: "Sim",
              handler:()=>{
                this.alert.dismiss()
                this.alert.create({
                  header:"Qual o número do destino?",
                  inputs: [{
                    name:'numero',
                    type:'number'
                  }],
                  buttons:[{
                    text: "Cancelar"
                  },{
                    text:'Confirmar', 
                    
                  }]
                  
                }).then(alert =>{
                  alert.present()
                })
              } 
            }]
          }).then(alert => {
            alert.present()
        })
        
      }
    })
  }
  }
}
