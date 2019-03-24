import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-up-down-vote',
  templateUrl: './up-down-vote.component.html',
  styleUrls: ['./up-down-vote.component.css']
})
export class UpDownVoteComponent implements OnInit {
@Output() isComplete = new EventEmitter<boolean>();
uvotes = 0 ;
dvotes = 0 ;
upVote(){
  this.uvotes = this.uvotes + 1;
}
downVote(){
  this.dvotes + 1;
}
  constructor() { }

  ngOnInit() {
  }

}
