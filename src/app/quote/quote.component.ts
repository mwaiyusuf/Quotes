export class QuoteComponent implements OnInit {
  quotes = [
      new Quote(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2017,3,24)),
      new Quote(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2017,3,24)),
      new Quote(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2017,3,24)),
      new Quote(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2017,3,24)),
      new Quote(5, 'Solve math homework','Damn Math',new Date(2017,3,24)),
      new Quote(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date(2017,3,24)),

  ]
  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(Are you sure you wanna delete ${this.quotes[index].name})
      if(toDelete){
        this.quotes.splice(index,1);
      }
        
        }
        }
      }
 
      

 