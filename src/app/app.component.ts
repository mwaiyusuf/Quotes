import { Component } from '@angular/core';
// import { Quote } from '@angular/compiler';
import { Quote } from './Quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes pro!!';
  quotes =[
    new Quote(1,'Never give up bro'),
    new Quote(2, 'God is with you')
  ];
   
}
