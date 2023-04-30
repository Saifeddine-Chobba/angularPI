import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal-front',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalFrontComponent {
  public visible: boolean = false;
  @Input() header: string = "";



}
