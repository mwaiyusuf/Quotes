import { Component, OnInit,Input, Output} from '@angular/core';
import {Quote} from '../quote'
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
@Input() quote:Quote;
@Output() isComplete= new EventEmitter<boolean>();
quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
  constructor() { }

  ngOnInit() {
  }

}
