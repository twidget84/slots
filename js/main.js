$(function() {

function spin (){
    var reel1;
    var reel2;
    var reel3;
    var credit = 10;

var icons = 
["/Users/reymarquez/Documents/WDI/scratch/slots/images/71.png",
 "/Users/reymarquez/Documents/WDI/scratch/slots/images/banana1.png",
 "/Users/reymarquez/Documents/WDI/scratch/slots/images/ba1.png",
 "/Users/reymarquez/Documents/WDI/scratch/slots/images/cherry1.png" ]

     reel1 = Math.floor(Math.random() * (4-1+1) +1);
     reel2 = Math.floor(Math.random() * (4-1+1) +1);
     reel3 = Math.floor(Math.random() * (4-1+1) +1);

     $($('#reel1').html('<img src = "' + icons[reel1-1] + '">'));
     $($('#reel2').html('<img src = "' + icons[reel2-1] + '">'));
     $($('#reel3').html('<img src = "' + icons[reel3-1] + '">'));

     if ( reel1 === reel2 || reel2 === reel3 || reel1 === reel3){
         return (credit + 10)
     } else if ( reel1 === reel2 && reel2 === reel3 ) {
         return (credit + 50)
     } else {
         return (credit - 1)
     }

};

$('button').on('click', function (evt) {
    spin();
});



















});