import { Component, OnInit } from '@angular/core';
import { ApiGrid } from '../../services/api.grids';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(public grid: ApiGrid) {
     this.grid.sublist('cores');
    
    this.grid.tab = 'users';
    this.grid.header =  [{n: 'Nome', v: 'name'},{n: 'E-mail', v: 'email'}];
    this.grid.list();
    
   }

   // tslint:disable-next-line:use-lifecycle-interface
   ngAfterViewChecked() {
    this.grid.limpaCampo();
 }

  ngOnInit(): void {
  }

  public muda(id) {
    if ((this.grid.dados) && (this.grid.dados.cores[id])) {
      this.grid.dados.cores[id] = false;
    } else {
      this.grid.dados.cores[id] = true;
    }
  }
}
