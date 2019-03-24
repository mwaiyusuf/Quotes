import { Component, OnInit,Output,EventEmitter } from '@angular/core';
export class QuoteFormComponent implements OnInit {
    newGoal=new Quote(0,"","",new Date());
    @Output() addQuote=new EventEmitter<Quote>();
    
    submitQuote(){
        this.addQuote.emit(this.newQuote);
    }
}