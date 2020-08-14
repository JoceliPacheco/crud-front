import { Injectable } from '@angular/core';
import { ApiRequest } from './api.requests';
 import { NotificationService } from './notifica.service';
declare var $: any;

@Injectable()
export class ApiGrid {
    public tab = '';
    public add = false;
    public loadTable = false;
    public loadSave = false;
    public itens: any = [];
    public itensSel: any = [];
    public coluna = '';
    public dir = false;
    public p = 1;
    public header = [];
    public search = '';
    public checks = 0;
    public all = true;
    public dados: any = {name: '', email: '',  cores: []};
    public sublista = [];
    public dias = ['domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
    public agenda = [];
    public onde = [];
    public hoje = '';

    public status = ['Agendado', 'Realizado', 'Cancelado', 'Pago'];
    public statusClass = ['alert-success', 'alert-primary', 'alert-danger', 'alert-warning'];
    constructor(public api: ApiRequest, public notifica: NotificationService) {

        
        
    }

    public list() {
         
        this.loadTable = true;
        this.api.post('class.' + this.tab + '.php', 'listar', {}, {})
        .subscribe((data: any) => {
            if (!data.erro) {
                this.itens = data.lista;
                if (data.agenda){
                    this.agenda = data.agenda;
                }
                if (data.onde){
                    this.onde = data.onde;
                }
                if (data.hoje){
                    this.hoje = data.hoje;
                }
            } else {
                this.itens = [];
                this.notifica.open(data.msg);
            }
        }, (err) => {
            this.itens = [];
            this.notifica.open('Houve um erro tente novamente!#');
        }).add(() => {
            this.all = true;
            this.itensSel = [];
            this.checks = 0;
            this.loadTable = false;
        });
    }

    public sublist(tab) {

        this.api.post('class.' + tab + '.php?', 'listar', {}, {})
        .subscribe((data: any) => {
            if (!data.erro) {
                this.sublist[tab] = data.lista;
            } else {
                this.sublist[tab] = [];
            }
        }, (err) => {
            this.sublist[tab] = [];
        });
    }

    public save(d) {
        if (!(this.validaCampo('.modal'))) {
            return false;
        }
        this.loadSave = true;
        this.api.post('class.' + this.tab + '.php', 'cadastrar', d)
            .subscribe(
                (data: any) => {
            this.notifica.open(data.msg);
            //   this.listaItens();
            }, (err) => {
            this.notifica.open('Houve um erro tente novamente!#');
            }).add(() => {
                
                this.dados.servicos = [];
                this.list();
                $('#myModal').modal('hide');
                this.loadSave = false;
        });
    }

    public delete(a) {

        if (a.lenght <= 0) {
          this.notifica.open('Houve um erro tente novamente');
          return false;
        }
        this.api.post('class.' + this.tab + '.php', 'excluir', a)
        .subscribe(
            (data: any) => {
          this.notifica.open(data.msg);
        }, (err) => {
          this.notifica.open('Houve um erro tente novamente');
        }).add(() => {
            this.checks = 0;
            this.itensSel = [];
            this.list();
        });
      }

    public addCheck() {
        this.checks = 0;
        this.itensSel = [];
        for (const index in this.itens) {
            if (this.itens[index].checked) {this.checks++; this.itensSel.push(this.itens[index]); }
        }
        if (this.checks === this.itens.length) {
            this.all = false;
        }else{
            this.all = true;
        }
        console.log(this.checks, this.itens.length)

    }

    public openModal(i) {
        this.dados = i;
        $('#myModal').modal('show');
    }

    public allCheck() {
        // tslint:disable-next-line:forin
        for (const index in this.itens) {
            this.itens[index].checked = this.all;
        }
        this.addCheck();
       // this.all = !this.all;
    }

    public validaCampo(c= '.model') {
        $('.erro').removeClass('erro');
        let e = 0;
        $( c + '  input').each(function( index ) {
            if (this.value === '' && this.type !== 'file' && (this.required)) {
            $(this).addClass('erro');
            e++;
            }
        });
        $(  c + '  select' ).each(function( index ) {
            
            // tslint:disable-next-line:max-line-length
            if (($(this).children('option:selected').val() === '' || $(this).children('option:selected').val() === 'null' || $(this).children('option:selected').val() === null  )  && (this.required)) {
                $(this).addClass('erro');
                console.log('->', $(this).children('option:selected').val())
                e++;
            }
        });
        if ( e > 0) {return false; } else {return true; }
    }

    public maskBug(event, d) {
        console.log('maskBug->', event);
        this.dados[d] = event;
    }

    public limpaCampo() {
        $( ' input.erro' ).each(function( index ) {
            if (this.value !== '' ) {
                $(this).removeClass('erro');
            }
        });
        $( ' select.erro' ).each(function( index ) {
            // tslint:disable-next-line:max-line-length
            if (($(this).children('option:selected').val() === '' || $(this).children('option:selected').val() === 'null' || $(this).children('option:selected').val() === null  )) {
               // teste
            } else {
                $(this).removeClass('erro');
            }
        });
    }

}

