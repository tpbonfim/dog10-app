import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {

  }

  dogList: Array<object> = [{

    "title":"Dogão 1",
    "preco":"1 Salsicha, 1 folha de Alface, mostarda e   purê de batata",
    "desc":"R$:3,50",
    "image": "assets/dog1.jpg"

  }, {
    "title":"Dogão 2",
    "preco":"1 Salsicha, mostarda, purê de batata, Ketchup e batata-palha",
    "desc":"R$:4,50",
    "image": "assets/dog3.jfif"
  }, {
    "title":"Dogão 3",
    "preco":"2 Salsicha, Tomate, mostarda, purê de batata, Ketchup e batata-palha",
    "desc":"R$:5,50",
    "image": "assets/dog2.jpg"
  }]

  listarEnderecos(){

  }
  detalhes(title, img, preco){
    this.router.navigate(['/finalizar-pedido', title, img, preco ]);
  }

}

