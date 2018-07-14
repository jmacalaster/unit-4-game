//First I need to define the variables 

var wins = 0;
var losses = 0;
var cardCount = 0;

//Have the computer randomly select a number between 2-100

function computerGuess(){
    randNum = Math.floor(Math.random()*100)+2;
    console.log(randNum);
}

//Then we have to initialize the game 

function initialize(){
    computerGuess();
    cardCount === 0;
    $(".computer-count").text(randNum);
    $(".your-count").text(cardCount);

}

computerGuess();

//Populate that number into the div .computer-count and .your-count and .wins and .losses

$(".computer-count").text(randNum);
$(".your-count").text(cardCount);
$(".losses").text(losses);
$(".wins").text(wins);

//Set up the cards to flip on hover (sadly had to do it this way since I could find a way to make the reverse happen on-click)

$("#card-nine").flip({
    axis: 'x',
    trigger: 'hover',
    reverse: true
});

$("#card-three").flip({
    axis: 'x',
    trigger: 'hover',
    reverse: true
});

$("#card-four").flip({
    axis: 'x',
    trigger: 'hover',
    reverse: true
});

$("#card-seven").flip({
    axis: 'x',
    trigger: 'hover',
    reverse: true
});

$("#card-two").flip({
    axis: 'x',
    trigger: 'hover',
    reverse: true
});

$("#card-eight").flip({
    axis: 'x',
    trigger: 'hover',
    reverse: true
});

$("#card-five").flip({
    axis: 'x',
    trigger: 'hover',
    reverse: true
});

$("#card-eleven").flip({
    axis: 'x',
    trigger: 'hover',
    reverse: true
});


//Have a function that starts on click if the user clicks on any of the 12 options (cards)
//Log the number associated with the div that the user clicked 
//Have the card flip over when it is clicked 
//Have the card flip back after 4 seconds 

//Card 9

$("#card-nine").on("click", function(){
    cardCount += 9;
    $(".your-count").text(cardCount);
    
    if (cardCount === randNum){
        alert("You Won!!");
        wins += 1;
        cardCount = 0;
        $(".wins").text(wins);
        initialize();
    }
    
    else if (cardCount >= randNum){
        alert("You Lost : (");
        losses += 1;
        cardCount = 0;
        $(".losses").text(losses);
        initialize();
    }
  })

  
  
//   function flipBack(){
//       $("#card-nine").flip(false);
//       console.log("Success 3!")
//   }
  
//   $("#card-nine").flip();
  //setTimeout(flipBack, 1000);

//Card Three

$("#card-three").on("click", function(){
    cardCount += 3;
    $(".your-count").text(cardCount);
    
    if (cardCount === randNum){
        alert("You Won!!");
        wins += 1;
        cardCount = 0;
        $(".wins").text(wins);
        initialize();
    }
    
    else if (cardCount >= randNum){
        alert("You Lost : (");
        losses += 1;
        cardCount = 0;
        $(".losses").text(losses);
        initialize();
    }
})
  
//   function flipBack(){
//       $("#card-three").flip(false);
//       console.log("Success 3!")
//   }
  
//   $("#card-three").flip();
  //setTimeout(flipBack, 1000);

  //Card Four 

$("#card-four").on("click", function(){
    cardCount += 4;
    $(".your-count").text(cardCount);
    
    if (cardCount === randNum){
        alert("You Won!!");
        wins += 1;
        cardCount = 0;
        $(".wins").text(wins);
        initialize();
    }
    
    else if (cardCount >= randNum){
        alert("You Lost : (");
        losses += 1;
        cardCount = 0;
        $(".losses").text(losses);
        initialize();
    }
})
  
//   function flipBack(){
//       $("#card-four").flip(false);
//       console.log("Success 4!")
//   }
  
//   $("#card-four").flip();
  //setTimeout(flipBack, 1000);

//Card Seven 

$("#card-seven").on("click", function(){
    cardCount += 7;
    $(".your-count").text(cardCount);
    
    if (cardCount === randNum){
        alert("You Won!!");
        wins += 1;
        cardCount = 0;
        $(".wins").text(wins);
        initialize();
    }
    
    else if (cardCount >= randNum){
        alert("You Lost : (");
        losses += 1;
        cardCount = 0;
        $(".losses").text(losses);
        initialize();
    }
})
  
//   function flipBack(){
//       $("#card-seven").flip(false);
//       console.log("Success!")
//   }
  
//   $("#card-seven").flip();
  //setTimeout(flipBack, 1000);

//Card Two 

$("#card-two").on("click", function(){
    cardCount += 2;
    $(".your-count").text(cardCount);
    
    if (cardCount === randNum){
        alert("You Won!!");
        wins += 1;
        cardCount = 0;
        $(".wins").text(wins);
        initialize();
    }
    
    else if (cardCount >= randNum){
        alert("You Lost : (");
        losses += 1;
        cardCount = 0;
        $(".losses").text(losses);
        initialize();
    }
  })
  
//   function flipBack(){
//       $("#card-two").flip(false);
//       console.log("Success!")
//   }
  
//   $("#card-two").flip();
  //setTimeout(flipBack, 1000);

  //Card Eight 

  $("#card-eight").on("click", function(){
    cardCount += 8;
    $(".your-count").text(cardCount);
    
    if (cardCount === randNum){
        alert("You Won!!");
        wins += 1;
        cardCount = 0;
        $(".wins").text(wins);
        initialize();
    }
    
    else if (cardCount >= randNum){
        alert("You Lost : (");
        losses += 1;
        cardCount = 0;
        $(".losses").text(losses);
        initialize();
    }
  })
  
//   function flipBack(){
//       $("#card-eight").flip(false);
//       console.log("Success!")
//   }
  
//   $("#card-eight").flip();
  //setTimeout(flipBack, 1000);

  //Card Five 

  $("#card-five").on("click", function(){
    cardCount += 5;
    $(".your-count").text(cardCount);
    
    if (cardCount === randNum){
        alert("You Won!!");
        wins += 1;
        cardCount = 0;
        $(".wins").text(wins);
        initialize();
    }
    
    else if (cardCount >= randNum){
        alert("You Lost : (");
        losses += 1;
        cardCount = 0;
        $(".losses").text(losses);
        initialize();
    }
  })
  
//   function flipBack(){
//       $("#card-five").flip(false);
//       console.log("Success!")
//   }
  
//   $("#card-five").flip();
  //setTimeout(flipBack, 1000);

  //Card Eleven

  $("#card-eleven").on("click", function(){
    cardCount += 5;
    $(".your-count").text(cardCount);
    
    if (cardCount === randNum){
        alert("You Won!!");
        wins += 1;
        cardCount = 0;
        $(".wins").text(wins);
        initialize();
    }
    
    else if (cardCount >= randNum){
        alert("You Lost : (");
        losses += 1;
        cardCount = 0;
        $(".losses").text(losses);
        initialize();
    }
  })
  
  
//   function flipBack(){
//       $("#card-eleven").off(".flip");
//       console.log("Success Eleven!")
//   }
  
//   $("#card-eleven").flip({reverse: true}, function(){
//       setTimeout(flipBack, 3000);
//       cardCount += 11;
//       $(".your-count").text(cardCount);
//     })

  //Create logic where if the user's count is < the computer's count, let the user keep guessing
  //If the user's count is = to the computer's count, alert the user that they won and log a win
  //If the user's count is > the computer's count, alert the user that they lost and log a loss 


// if (cardCount === randNum){
//     alert("You Won!!");
//     wins += 1;
//     $(".wins").text(wins);
// }

// else if (cardCount >= randNum){
//     alert("You Lost ::sad face::");
//     losses += 1;
//     $(".losses").text(losses);
//     initialize()
// }
