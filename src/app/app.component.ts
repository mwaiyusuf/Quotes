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
    new Quote(1,'Never give up bro',',',new Date(2017,3,24)),
    new Quote(2, 'God is with you',',',new Date(2017,3,24)),
    new Quote(3,'Never give up bro',',',new Date(2017,3,24)),
    new Quote(4,'Never give up bro',',',new Date(2017,3,24)),
    new Quote(5,'Never give up bro',',',new Date(2017,3,24)),
    new Quote(6,'Never give up bro',',',new Date(2017,3,24)),
  ]
   
}
