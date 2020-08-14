import { ElementRef, Directive, Renderer2, HostListener, Input, Output, EventEmitter} from '@angular/core';
import { MaskService } from '../services/mask.service';


@Directive({
    selector: '[appMask]',
})

export class AppMaskDirective   {
  constructor(private element: ElementRef, private renderer: Renderer2, public mask: MaskService) {
    this.el = this.element.nativeElement;
  }
  @Input('appMask') tipo: string;
  public el;

  // tslint:disable-next-line:no-output-native
  @Output() public maskBug = new EventEmitter<string>();


  @HostListener('focus') focus() {
    this.highlight(this.tipo);
  }
  @HostListener('blur') blur() {
    this.highlight(this.tipo);
  }
  @HostListener('keyup') keyup() {
    this.highlight(this.tipo);
  }
  // ts
  @HostListener('ngModelChange') ngModelChange() {
    this.highlight(this.tipo);
  }
  // tslint:disable-next-line:use-lifecycle-interface
  @HostListener('ngAfterViewInit') ngAfterViewInit() {
    this.highlight(this.tipo);
  }

  public highlight(tipo: string) {
    switch (tipo) {
      case 'data':
        if ((this.el.innerText) && this.el.innerText !== '') {
          this.el.outerText =  this.mask.data(this.el.innerText);
        }
        if ((this.el.value) && this.el.value !== '') {
          this.el.value =  this.mask.data(this.el.value);
        }
        break;
      case 'hora':
        if ((this.el.innerText) && this.el.innerText !== '') {
          this.el.outerText =  this.mask.hora(this.el.innerText);
        }
        if ((this.el.value) && this.el.value !== '') {
          this.el.value =  this.mask.hora(this.el.value);
        }
        break;
      case 'cpf':
        if ((this.el.innerText) && this.el.innerText !== '') {
          this.el.outerText =  this.mask.cpf(this.el.innerText);
        }
        if ((this.el.value) && this.el.value !== '') {
          this.el.value =  this.mask.cpf(this.el.value);
        }
        break;
      case 'cep':
        if ((this.el.innerText) && this.el.innerText !== '') {
          this.el.outerText =  this.mask.cep(this.el.innerText);
        }
        if ((this.el.value) && this.el.value !== '') {
          this.el.value =  this.mask.cep(this.el.value);
        }
        break;
      case 'money':
        if ((this.el.value) && this.el.value !== '') {
          this.el.value = this.mask.money(this.el.value);
          // this.maskBug.emit(this.el.value);
        }
        break;
    }
    if ((this.el.value)) {
      this.maskBug.emit(this.el.value);
    }
  }



}
