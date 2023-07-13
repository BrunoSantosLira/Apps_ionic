import { Component, NgModule, OnInit } from '@angular/core';
import { Itens, Noticias, PuxarFeedService } from 'src/app/servico/puxar-feed.service';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { InfiniteScrollCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  noticias_tecnologia : Noticias[] | any
  noticias_economia : Noticias[] | any

  itens : Itens[] | any
  itens_economia : Itens[] | any

  noticias_mundo : Noticias[] | any
  itens_mundo : Itens[] | any


  constructor(private service: PuxarFeedService, private platform: Platform, private links: InAppBrowser) { }

  ngOnInit() {
    //links : https://rss.tecmundo.com.br/feed e https://www.gazetadopovo.com.br/feed/rss/economia.xml
    //https://www.gazetadopovo.com.br/feed/rss/mundo.xml
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

gerarItems(){
  this.service.GetAll("https://www.gazetadopovo.com.br/feed/rss/economia.xml").subscribe(response =>{
      this.noticias_economia = response;
      this.itens_economia = this.noticias_economia['channel']['item']
      console.log(this.itens_economia)
      console.log(this.itens_economia[0]['enclosure']['@attributes']['url'])
      
    })

    this.service.GetAll("https://www.gazetadopovo.com.br/feed/rss/mundo.xml").subscribe(response =>{
      this.noticias_mundo = response;
      this.itens_mundo = this.noticias_mundo['channel']['item']
      console.log(this.itens_mundo)
      console.log(this.itens_mundo[0]['enclosure']['@attributes']['url'])
      
    })

}

onIonInfinite(ev: any) {
  this.gerarItems()
  setTimeout(() => {
    (ev as InfiniteScrollCustomEvent).target.complete();
  }, 3000);
}

}
