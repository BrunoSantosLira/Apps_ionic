import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { PuxarFeedService } from 'src/app/servico/puxar-feed.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  dados= {
    nome: "",
    email: "",
    telefone: "",
    senha:""
  }

  constructor(private service: PuxarFeedService, private toast: ToastController) { }

  ngOnInit() {
  }

  enviando(form: NgForm){
    const user = form.value
    console.log(user)
    
    //tratando o formulário
    //verificando se a senha é menor que 8 caracteres
    if(form.value.senha.length < 8){
      return this.toast.create({
        message: 'Senha não pode ter menos de 8 caracteres',
        color: 'danger',
        duration: 3000
      }).then(toast => {
        toast.present()
      })

    }else{
      //Envia as informações de cadaastro pro BD via PHP
    return this.service.create(form.value.nome, form.value.email, form.value.telefone, form.value.senha).subscribe(response => {
      console.log(response)

      //exibe o toast
      if(response == 'EMAIL JA REGISTRADO'){
        this.toast.create({
          message: 'Email já registrado na rede',
          color: 'danger',
          duration: 3000
        }).then(toast => {
          toast.present()
        })
      }else{
        this.toast.create({
          message: 'Usuário Cadastrado com sucesso!',
          color: 'success',
          duration: 3000
        }).then(toast => {
          toast.present()
        })
      }
     
      
    })
    
    }
   
  }

}
