import { Component, NgModule, OnInit } from '@angular/core';
import { Itens, Noticias, PuxarFeedService } from 'src/app/servico/puxar-feed.service';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-mundo',
  templateUrl: './mundo.page.html',
  styleUrls: ['./mundo.page.scss'],
})
export class MundoPage implements OnInit {

  noticias_mundo : Noticias[] | any


  itens_mundo : Itens[] | any

  constructor(private service: PuxarFeedService, private platform: Platform, private links: InAppBrowser) { }

  ngOnInit() {
    this.service.GetAll("https://www.gazetadopovo.com.br/feed/rss/mundo.xml").subscribe(response =>{
      this.noticias_mundo = response;
      this.itens_mundo = this.noticias_mundo['channel']['item']
      console.log(this.itens_mundo)
      console.log(this.itens_mundo[0]['enclosure']['@attributes']['url'])
      
    })
  }

  openLink(url: string){
    this.links.create(url)
  }

}
