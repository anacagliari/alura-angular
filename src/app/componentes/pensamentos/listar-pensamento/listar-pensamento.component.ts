import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos =[
    {
      conteudo: 'Sua tarefa é descobrir o seu trabalho e, então, com todo o coração, dedicar-se a ele.',
      autoria: 'Buda',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.',
      autoria: 'Frank Tibolt',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Você Mesmo: Lembre-se de que você mesmo é o melhor secretário de sua tarefa, o mais eficiente propagandista de seus ideais, a mais clara demonstração de seus princípios, o mais alto padrão do ensino superior que seu espírito abraça e a mensagem viva das elevadas noções que você transmite aos outros. Não se esqueça, igualmente, de que o maior inimigo de suas realizações mais nobres, a completa ou incompleta negação do idealismo sublime que você apregoa, a nota discordante da sinfonia do bem que pretende executar, o arquiteto de suas aflições e o destruidor de suas oportunidades de elevação - é você mesmo.',
      autoria: 'Chico Xavier',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Cada dia a natureza produz o suficiente para nossa carência. Se cada um tomasse o que lhe fosse necessário, não havia pobreza no mundo e ninguém morreria de fome.',
      autoria: 'Martin Luther King',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
