import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Revendedor } from 'src/app/local-cep.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() revendedor: Revendedor;
  @Output() saved = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}



