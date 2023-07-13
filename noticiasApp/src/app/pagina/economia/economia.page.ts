import { Component, NgModule, OnInit } from '@angular/core';
import { Itens, Noticias, PuxarFeedService } from 'src/app/servico/puxar-feed.service';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { InfiniteScrollCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-economia',
  templateUrl: './economia.page.html',
  styleUrls: ['./economia.page.scss'],
})
export class EconomiaPage implements OnInit {
  
  noticias_economia : Noticias[] | any


  itens_economia : Itens[] | any

  constructor(private service: PuxarFeedService, private platform: Platform, private links: InAppBrowser) { }

  ngOnInit() {
    this.service.GetAll("https://www.gazetadopovo.com.br/feed/rss/economia.xml").subscribe(response =>{
      this.noticias_economia = response;
      this.itens_economia = this.noticias_economia['channel']['item']
      console.log(this.itens_economia)
      console.log(this.itens_economia[0]['enclosure']['@attributes']['url'])
      
    })
  }

  openLink(url: string) {
    this.links.create(url)
}


}
