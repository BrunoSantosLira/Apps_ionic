import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.page.html',
  styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {
@Input() c: Cliente | undefined //função que pegar um input automaticamente
atualizar = false;
dados = {
  nome: '',
  cidade: '',
  email: ''
}
  constructor(private modalCtrl: ModalController, private service: ClienteService) { }

  ngOnInit() {
    if(this.c){
      this.atualizar = true;
      this.dados = this.c
    }
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    const cliente = form.value;

    if(this.atualizar){
      this.service.update(cliente, this.c?.id).subscribe(response => {
        this.modalCtrl.dismiss(response)
      })
    }else{
      this.service.create(cliente).subscribe(response =>{
        this.modalCtrl.dismiss(response);
      })
    }
  }

}
