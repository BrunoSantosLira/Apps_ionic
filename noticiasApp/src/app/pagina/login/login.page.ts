import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { PuxarFeedService, login_infos } from 'src/app/servico/puxar-feed.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
dados = {
  email: "",
  senha: ""
}
id  =  '';
nome = '';
email = '';

login_infos : login_infos[] | any;


  constructor(private service: PuxarFeedService, private app_comp: AppComponent, private toastCtrl: ToastController) { }

  ngOnInit() {
   
  }

  logar(form: NgForm){
  
    this.service.logar(form.value.email, form.value.senha).subscribe(response =>{
      //Object.keys(response).length

    if(Object.keys(response).length == 0){

      this.toastCtrl.create({
        message: 'Verifique seu email/senha!!',
        color: 'warning',
        duration: 2500
      }).then(toast => {
        toast.present()
      })

    }else{

      this.login_infos = response;
      console.log(this.login_infos[0].id);
 
       this.nome = this.login_infos[0].nome
       this.email = this.login_infos[0].email
       this.id = this.login_infos[0].id
      //passando informações pro app componente
     this.app_comp.mudarInfo(this.id, this.nome, this.email)
 
     this.toastCtrl.create({
       message: 'Usuario logado com sucesso!!',
       color: 'success',
       duration: 2500
     }).then(toast => {
       toast.present()
     })
 
    }
     
    })

    
  }

}
