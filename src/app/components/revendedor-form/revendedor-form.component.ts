import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Revendedor } from 'src/app/local/local.page';

@Component({
  selector: 'app-revendedor-form',
  templateUrl: './revendedor-form.component.html',
  styleUrls: ['./revendedor-form.component.scss'],
})
export class RevendedorFormComponent implements OnInit {
  @Input() revendedor: Revendedor;
  @Output() saved = new EventEmitter;

  constructor() { }

  ngOnInit() {}

}
