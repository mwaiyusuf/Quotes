export class QuoteComponent implements OnInit {
  quotes = [
      new Quote(1,'Watch Finding Nemo','Find an online version and watch merlin find his son'),
      new Quote(2,'Buy Cookies','I have to buy cookies for the parrot'),
      new Quote(3, 'Get new Phone Case','Diana has her birthday coming up soon'),
      new Quote(4, 'Get Dog Food','Pupper likes expensive sancks'),
      new Quote(5, 'Solve math homework','Damn Math'),
      new Quote(6, 'Plot my world domination plan','Cause I am an evil overlord'),

  ]
  completeQuote(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }

 
   

 