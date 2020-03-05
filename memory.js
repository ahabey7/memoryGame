//Create array of cards
var lastRow = document.querySelectorAll(".row")[4];
var lastColumn= lastRow.querySelectorAll(".col-3")[3];
$pointsbox= document.querySelector("input");



class Game{
    constructor(cards){
    this.cards=cards;
    this.matches=0;
    this.cardsClicked=[];
    this.points=0;
    }



shuffleCards(){
    var cards = this.cards;
    var shuffled = 0;
    //get randomIndex
    while(shuffled<30){
        // extract a random card from the deck
        var randomExtractIndex= Math.floor(Math.random()*cards.length);
        var randomCard =   cards[randomExtractIndex];
        cards.splice(randomExtractIndex, 1);
        // insert a random card from the deck
        var randomInsertIndex= Math.floor(Math.random()*cards.length);
        cards.splice(randomInsertIndex,0, randomCard);
        shuffled++;
    }
    return cards;

}
isaMatch(img1,img2){
        if(img1.src===img2.src){
            this.matches++;
            return true;
        }else{
            return false;
        }
}

isGameOver(){
    if(this.matches=8){
        return true;
    }
}



loadImages(){

var rows = document.querySelectorAll(".row");
var shuffledCards = game.shuffleCards(this.cards);
$pointsbox= 0;
    for (var rowIndex = 0; rowIndex <rows.length-1; rowIndex++){
    
        var rowDiv =rows[rowIndex];
        var columns = rowDiv.querySelectorAll(".col-3");
            for (var columnIndex = 0; columnIndex < columns.length; columnIndex++){
                //get parent div
                var columnDiv = columns[columnIndex];
                //create image element
                var img = document.createElement('img'); 
                //get the image source
            
                img.src = shuffledCards[(rowIndex*columns.length)+ columnIndex].source;
                //append to div
                img.class='image';
                img.style.width = '100px';
                img.style.height = '100px';

                img.style.zIndex=-1;
                img.style.yIndex=5;
                columnDiv.appendChild(img);
            }
    }

}
clearImages(points){
    //clear Images
    var rows = document.querySelectorAll(".row");
    for (var rowIndex = 0; rowIndex <rows.length-1; rowIndex++){
        var rowDiv =rows[rowIndex];
        var columns = rowDiv.querySelectorAll(".col-3");
        for (var columnIndex = 0; columnIndex < columns.length; columnIndex++){
            var columnDiv = columns[columnIndex];
            columnDiv.innerHTML="";

        }
    }
    //clear points
    this.matches=0;
    document.querySelector("input").value=this.matches;


}



}
document.querySelectorAll('.card').forEach(card => {
        card.onclick = function() {
          // TODO: write some code 
          
          //check if cards are not already open
          if(game.cardsClicked.length<2 &&  (this.querySelector('img').style.zIndex!=1))  {
          this.querySelector('img').style.zIndex =1;
          game.cardsClicked.push(this);
          }

          setTimeout(function(){  
                    if(game.cardsClicked.length===2){
                        var pointsbox= lastColumn.querySelectorAll(".points")[0];
                        //two image
                        var image1= game.cardsClicked[0].querySelector('img');
                        var image2 = game.cardsClicked[1].querySelector('img');
                        var isaMatch= game.isaMatch(image1, image2);
                        if(isaMatch){
                            game.cardsClicked=[];
                            console.log("is a match");
                            pointsbox.value=game.matches;
                            var audio = new Audio('images/positive tone.mp3');
                            audio.play();
                            if (game.matches==8){
                                alert("You have won!");
                            }
                          
                            
                        }else{
                            //flip the cards back
                            game.cardsClicked[0].querySelector('img').style.zIndex= -1;
                            game.cardsClicked[1].querySelector('img').style.zIndex = -1;
                            //empty the array
                            game.cardsClicked=[];
                        }

                    }
          }, 2000)
          

          console.log('Card clicked: ', card);
        };
});


document.querySelector("button").onclick = function($pointsbox){
    game.clearImages($pointsbox);
    game.loadImages();
    
};




    
var cards = [
    {source: 'images/fish4.png',
    name: "fish",
    },
    {source: "images/rabbit.gif",
    name: "rabbit"
    },
    {source: "images/owl1.png",
    name: "owl"
    },
    {source: "images/tortoise.png",
    name: "tortoise"
    },
    {source: 'images/dog.png',
    name: "dog",
    },
    {source: "images/tree.png",
    name: "tree"
    },
    {source: "images/star.png",
    name: "star"
    },
    {source: "images/cat.png",
    name: "cat"
    },
    {source: 'images/fish4.png',
    name: "fish",
    },
    {source: "images/rabbit.gif",
    name: "rabbit"
    },
    {source: "images/owl1.png",
    name: "owl"
    },
    {source: "images/tortoise.png",
    name: "tortoise"
    },
    {source: 'images/dog.png',
    name: "dog",
    },
    {source: "images/tree.png",
    name: "tree"
    },
    {source: "images/star.png",
    name: "star"
    },
    {source: "images/cat.png",
    name: "cat"
    }
]

var game = new Game(cards);
console.log(game.shuffleCards());



game.loadImages();


