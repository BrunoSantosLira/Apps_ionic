import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servico/cliente.service';
import { ModalClientePage } from '../modal-cliente/modal-cliente.page';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  
clientes : Cliente[] | undefined
  constructor(private service: ClienteService, private modalCtrl: ModalController, private toast: ToastController) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.clientes = response
    })
  }

  remover(id: any){
    this.service.remove(id).subscribe(() => {
      //atualizando lista
      this.service.getAll().subscribe(response => {
        this.clientes = response
      })
    })
  }

  novoCliente(){
    this.modalCtrl.create({
      component: ModalClientePage
    }).then(modal => {
       
      modal.present()
      return modal.onDidDismiss()
    }).then(({data}) => {
      console.log(data)
      this.service.getAll().subscribe(response => {
        this.clientes = response
        
        this.toast.create({
          message: 'Cliente Cadastrado',
          duration: 2000
        }).then(toast =>{
          toast.present()
        })
      })
    })
    
  }

  atualizar(c: Cliente){
    this.modalCtrl.create({
      component: ModalClientePage,
      componentProps: {c} //enviando as informações para o Modal Cliente Page(.ts)
    }).then(modal => {
      modal.present()
      return modal.onDidDismiss()
    }).then(({data}) => {
      console.log(data)
      this.service.getAll().subscribe(response => {
        this.clientes = response
        
        this.toast.create({
          message: 'Cliente Atualizado',
          duration: 2000
        }).then(toast =>{
          toast.present()
        })
      })
    })
  }

}
