import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Charada {
  id: number,
  pergunta: string,
  resposta: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pergunta: Charada[] = [];
  resultado: boolean = true;
  url: string = 'http://lucasreno.kinghost.net/charada';

  constructor(
    public http: HttpClient,
  ) {
    this.Charada();
  }

  Charada(){
    this.http.get<Charada[]>(this.url).subscribe(
      (resposta: Charada[]) => {
        this.pergunta = resposta;
      }
    );
    this.resultado = true;
  }

  Resposta(){
    this.resultado = false;
  }
}