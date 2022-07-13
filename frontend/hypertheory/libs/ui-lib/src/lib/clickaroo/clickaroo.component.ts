import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hypertheory-clickaroo',
  templateUrl: './clickaroo.component.html',
  styleUrls: ['./clickaroo.component.css']
})
export class ClickarooComponent  {
  @Output() buttonClicked = new EventEmitter<string>();
  doIt(el:HTMLInputElement){
    // clear out the text box.
    // put the cursor focus in the text box
    this.buttonClicked.emit(el.value);
    el.value = '';
    el.focus();
  }
}
