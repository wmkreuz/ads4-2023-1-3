import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public estados: string[] = ['SC', 'PR', 'RS'];

  public selectedEstado: string = '';

  public show: string = '';

  public cidades: string[] = [];

  public cidadesPorEstado: Array<any> = [
    { id: 1, nome: 'Criciúma', estado: 'SC' },
    { id: 2, nome: 'Porto Alegre', estado: 'RS' },
    { id: 3, nome: 'Curitiba', estado: 'PR' },
    { id: 4, nome: 'Florianópolis', estado: 'SC' },
    { id: 5, nome: 'Flores da Cunha', estado: 'RS' },
    { id: 6, nome: 'Içara', estado: 'SC' }
  ];

  public limpar(){
    while(this.cidades.length){
      this.cidades.pop();
    }
  }
  
  public enviar() {
    this.show = 'Sim';
    this.limpar();
    for(let i = 0; i < this.cidadesPorEstado.length; i++){
      if(this.selectedEstado == this.cidadesPorEstado[i].estado){
        this.cidades.push(this.cidadesPorEstado[i].nome);
      }
    }
  }

}
