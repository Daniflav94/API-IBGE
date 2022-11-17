import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cidade } from '../Interface/cidade';
import { Estado } from '../Interface/estado';

@Injectable({
  providedIn: 'root'
})
export class ApiIbgeService {

  constructor(
    private http: HttpClient

  ) { }

    private readonly estadoURL: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    private readonly cidadeURL: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"

    listaEstados(){
      return this.http.get<Estado[]>(this.estadoURL)
    }

    listarMunicipios(estado: string){
      return this.http.get<Cidade[]>(this.cidadeURL + estado + "/municipios")
    }

}
