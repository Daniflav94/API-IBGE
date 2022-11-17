import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cidade } from 'src/app/Interface/cidade';
import { Estado } from 'src/app/Interface/estado';
import { PontoVenda } from 'src/app/Interface/pontoVenda';
import { ApiIbgeService } from 'src/app/Services/api-ibge.service';

@Component({
  selector: 'app-cadastro-ponto-de-venda',
  templateUrl: './cadastro-ponto-de-venda.component.html',
  styleUrls: ['./cadastro-ponto-de-venda.component.css']
})
export class CadastroPontoDeVendaComponent implements OnInit {

  constructor(
    private ibgeService: ApiIbgeService,
     
  ){ }

  form: FormGroup = new FormGroup({
    nome: new FormControl('', [ Validators.required ]),
    estado: new FormControl(''),
    cidade: new FormControl('', [ Validators.required ]),
    pontoDeVenda: new FormControl('', [ Validators.required ]),
    horarioInicio: new FormControl('', [ Validators.required ]),
    horarioFinal: new FormControl('', [ Validators.required ])
  })

  listaEstados!: Estado[]
  listaMunicipios!: Cidade[]
  pontosDeVenda: PontoVenda[] = []

  salvar(){
    const ponto: PontoVenda = this.form.value
    this.pontosDeVenda.push(ponto)
  }

  listarCidades(sigla: string){
    this.ibgeService.listarMunicipios(sigla).subscribe(
      (cidades) => {
        this.listaMunicipios = cidades
      }
    ) 
  }
  
  ngOnInit(): void {
    this.ibgeService.listaEstados().subscribe(
      (estados) => {
        this.listaEstados = estados
      }
    ) 
  }

}
