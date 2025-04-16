import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.buscarPorId(id).subscribe((pensamento: Pensamento) => {
      this.pensamento = pensamento;
    });
  }

  editarPensamento() {
    if (this.pensamento.id) {
      this.service.editar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
      alert('Pensamento editado com sucesso!');
    } else {
      alert('ID do pensamento não encontrado.');
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

}
