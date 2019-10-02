import { Component, OnInit } from '@angular/core';
import { HotdogService } from '../services/hotdog.service';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.page.html',
  styleUrls: ['./add-dog.page.scss'],
})
export class AddDogPage implements OnInit {
  //enjetar do hotdogService e o loading
  constructor(private dogservice:HotdogService, private louder:LoadingController, private nav:NavController, private toast:ToastController) { }

  ngOnInit() {
  }
  //mandar as informações para o banco
  async cadastrar(form){
    const dog = form.value;
    let spin = await this.louder.create({
      message:'Salvando hot dog'
    })

    spin.present()
   await  this.dogservice.addDog(dog)
   spin.dismiss()
   this.nav.back()
   let t = await this.toast.create({
     message:'HotDog cadastrado com sucesso',
     duration:200
   })
   t.present()
  }
}
