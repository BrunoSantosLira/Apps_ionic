import { Component } from '@angular/core';
import { PuxarFeedService, login_infos } from './servico/puxar-feed.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Tecnologia', url: 'tecnologia', icon: 'wifi' },
    { title: 'Economia', url: 'economia', icon: 'cash' },
    { title: 'Mundo', url: 'mundo', icon: 'globe' },
    { title: 'Cadastro', url: 'cadastro', icon: 'person-add' },
    { title: 'Login', url: 'login', icon: 'arrow-redo' }
  ];
  public labels = [];

  public login_info : login_infos[] | any
  public lista = [
    '',
    'user',
    'email'
  ]

  constructor(private service: PuxarFeedService) {
    
  }

  mudarInfo(id: string, nome: string, email:string){
    this.lista[0] = id
    this.lista[1] = nome
    this.lista[2] = email
  }
}
