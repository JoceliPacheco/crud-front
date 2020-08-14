import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiGrid } from '../services/api.grids';

@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styleUrls: ['./controles.component.scss']
})


export class ControlesComponent  {
   @Input() checks: any;
   @Input() tab: any;
   @Input() itens: [];

   @Output() callback = new EventEmitter();

     constructor(
       public route: ActivatedRoute,
       public grid: ApiGrid
       ) {

        this.grid.add = true;

     }

     public emitEvent = () => {
      this.callback.emit();
    }




}
