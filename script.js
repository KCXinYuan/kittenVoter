// Create array and push kitten contestants inside. Awwwwwwwwww so cute.

this.kittenVote = [];
$localStorage = $('localStorage');

$(document).ready(function(){

var contestants = function kittens(id,name,pic,votes) {
  this.id = id;
  this.name = name;
  this.pic = pic;
  this.votes = votes
}

var kOne = new contestants(0,"Bella","img/01.jpg",0)
var kTwo = new contestants(1,"Kuro","img/02.jpg",0)
var kThree = new contestants(2,"Tibby","img/03.jpg",0)
var kFour = new contestants(3,"Shoestring","img/04.jpg",0)
var kFive = new contestants(4,"Ginny","img/05.jpg",0)
var kSix = new contestants(5,"The Rosie Family","img/06.jpg",0)
var kSeven = new contestants(6,"Boots","img/07.jpg",0)
var kEight = new contestants(7,"Tiggy","img/08.jpg",0)
var kNine = new contestants(8,"Sheets","img/09.jpg",0)
var kTen = new contestants(9,"Spidercat","img/10.jpg",0)
var kEleven = new contestants(10,"OmNomNom","img/11.jpg",0)
var kTwelve = new contestants(11,"Sunny","img/12.jpg",0)
var kThirteen = new contestants(12,"Nibbler","img/13.jpg",0)
var kFourteen = new contestants(13,"Soul Crusher von Rektienschnein the IX","img/14.jpg",0)

kittenVote.push(kOne);
kittenVote.push(kTwo);
kittenVote.push(kThree);
kittenVote.push(kFour);
kittenVote.push(kFive);
kittenVote.push(kSix);
kittenVote.push(kSeven);
kittenVote.push(kEight);
kittenVote.push(kNine);
kittenVote.push(kTen);
kittenVote.push(kEleven);
kittenVote.push(kTwelve);
kittenVote.push(kThirteen);
kittenVote.push(kFourteen);

console.log(kittenVote)

var initialize = function() { // create localStorage to store votes if needed
  if (localStorage.votes == null) {
    localStorage.setItem("votes", JSON.stringify(kittenVote));
  }
  else {
    console.log('good to go');
  }
}

initialize();

console.log(localStorage);

// Random selection of two kitten contestants
var kittyRandom = function randomCat() {
  return Math.floor(Math.random() * (14));
};

var $kittenOne = $('#kittenOne');
var $kittenTwo = $('#kittenTwo');
var $nameOne = $('#nameOne');
var $nameTwo = $('#nameTwo');
var rdmIntOne = kittyRandom();
var rdmIntTwo = kittyRandom();

console.log(rdmIntOne);
console.log(rdmIntTwo);

var firstKitten = kittenVote.forEach(function (cat) {
  if (rdmIntOne === cat.id) {
    $kittenOne.html("<img src=" + cat.pic+"></img>");
    $nameOne.html(cat.name);
    //console.log(rdmIntOne);
  };
});

var secondKitten = kittenVote.forEach(function (cat) {
  while (rdmIntTwo === rdmIntOne) { //reroll if kittens chosen are the same
    rdmIntTwo = kittyRandom();
  };

  if (rdmIntTwo === cat.id) {
    $kittenTwo.html("<img src=" + cat.pic + "></img>");
    $nameTwo.html(cat.name);
    //console.log(rdmIntTwo);
  }
});
//console.log(rdmIntTwo);



// Button Vote

var $kittenOneBtn = $('#kittenOneBtn');
var $kittenTwoBtn = $('#kittenTwoBtn');

$kittenOneBtn.click(function() {
  var votes = JSON.parse(localStorage.votes);
  votes.forEach(function(kitten) {
    if(rdmIntOne === kitten.id) {
      kitten.votes += 1;
      console.log(kitten);
    }
  })
  localStorage.setItem("votes", JSON.stringify(votes));
  console.log(localStorage);
});

$kittenTwoBtn.click(function() {
  var votes = JSON.parse(localStorage.votes);
  votes.forEach(function(kitten) {
    if(rdmIntTwo === kitten.id) {
      kitten.votes += 1;
      console.log(kitten);
    }
  })
  localStorage.setItem("votes", JSON.stringify(votes));
});

// Display results on a chart
var localVotes = JSON.parse(localStorage.getItem("votes"));
var createChart = function () {
var ctx = $("#kittenChart").get(0).getContext("2d");
var kittenChart = new Chart(ctx);

var data = {
    labels: [kittenVote[rdmIntOne].name, kittenVote[rdmIntTwo].name],
    datasets: [
        {
            label: "Votes",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [localVotes[rdmIntOne].votes,localVotes[rdmIntTwo].votes]
        }
    ]
};

var kittenBar = new Chart(ctx).Bar(data);
}

$showRslt = $('#showRslt');
$showRslt.on('click',createChart)
// Promote user to vote again

});
