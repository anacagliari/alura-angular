import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'Sua tarefa é descobrir o seu trabalho e, então, com todo o coração, dedicar-se a ele.',
    autoria: 'Buda',
    modelo: 'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  alterarIconeFavorito() {
    if(!this.pensamento.favorito) {
      return 'inativo'
    } else {
      return 'ativo'
    }
  }

  atualizarFavoritos() {
    this.service.alterarFavorito(this.pensamento).subscribe(() => {
      if (this.pensamento.favorito) {
        this.listaFavoritos.push(this.pensamento);
      } else {
        const index = this.listaFavoritos.findIndex((pensamento: Pensamento) => pensamento.id === this.pensamento.id);
        this.listaFavoritos.splice(index, 1);
      }
    }
    );
  }

}
