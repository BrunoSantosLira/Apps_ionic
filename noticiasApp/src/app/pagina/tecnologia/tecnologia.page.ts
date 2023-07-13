import { Component, NgModule, OnInit } from '@angular/core';
import { Itens, Noticias, PuxarFeedService } from 'src/app/servico/puxar-feed.service';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.page.html',
  styleUrls: ['./tecnologia.page.scss'],
})
export class TecnologiaPage implements OnInit {

  noticias_tecnologia : Noticias[] | any


  itens : Itens[] | any
  

  constructor(private service: PuxarFeedService, private platform: Platform, private links: InAppBrowser) { }

  ngOnInit() {
    this.service.GetAll("https://rss.tecmundo.com.br/feed").subscribe(response =>{
      this.noticias_tecnologia = response;
      this.itens = this.noticias_tecnologia['channel']['item']
      console.log(this.itens)
      console.log(this.itens[0]['enclosure']['@attributes']['url'])
      
    })
  }

  openLink(url: string) {
    this.links.create(url)
}

}
