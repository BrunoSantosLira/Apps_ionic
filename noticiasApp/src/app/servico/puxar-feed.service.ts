import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Noticias {
  '@attributes': {
    version: string;
  };
  'channel': {
    description: string;
    image: {
      link: string,
      title: string
    };
    item: object,
    language: string,
    lastBuildDate: string,
    link: string,
    title: object,
    ttl: string
    // outras propriedades
  };
  // outras propriedades
}

export interface Itens{
category: string,
description: object,
enclosure: object,
attributes: object,
guid: string,
link: string,
pubDate: string,
title: string
}

export interface login_infos{
  0:{
    id: string,
    nome: string,
    email: string,
    telefone: string,
  }

}

export interface User{
  nome: string,
  email: string,
  telefone: string,
  senha: string
}




@Injectable({
  providedIn: 'root'
})
export class PuxarFeedService {
  private url = "http://127.0.0.1/teste_rss/"
  private url_criar = "http://localhost/teste_rss/conexao.php";
  private url_logar = "http://localhost/teste_rss/login.php"


  constructor(private http: HttpClient) { }

  GetAll(link: string){
    return this.http.get(this.url + `?url=${link}`)
  }

  create(nome: string, email:string, telefone: string, senha:string){
    return this.http.get(this.url_criar + `?nome=${nome}&email=${email}&telefone=${telefone}&senha=${senha}`)
  }

  logar(email:string, senha: string){
    return this.http.get(this.url_logar + `?email=${email}&senha=${senha}`)
  }
}
