import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../Quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailComponent implements OnInit {
 @Input() quote:Quote;
  constructor() { }

  ngOnInit() {
  }

}