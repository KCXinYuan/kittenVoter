
// Create array and push kitten contestants inside. Awwwwwwwwww so cute.

this.kittenVote = [];
$(document).ready(function(){

var contestants = function kittens(id,name,pic,votes) {
  this.id = id;
  this.name = name;
  this.pic = pic;
  this.votes = votes
}

var kOne = new contestants(1,"Bella","img/01.jpg",0)
var kTwo = new contestants(2,"Kuro","img/02.jpg",0)
var kThree = new contestants(3,"Tibby","img/03.jpg",0)
var kFour = new contestants(4,"Shoestring","img/04.jpg",0)
var kFive = new contestants(5,"Ginny","img/05.jpg",0)
var kSix = new contestants(6,"The Rosie Family","img/06.jpg",0)
var kSeven = new contestants(7,"Boots","img/07.jpg",0)
var kEight = new contestants(8,"Tiggy","img/08.jpg",0)
var kNine = new contestants(9,"Sheets","img/09.jpg",0)
var kTen = new contestants(10,"Spidercat","img/10.jpg",0)
var kEleven = new contestants(11,"OmNomNom","img/11.jpg",0)
var kTwelve = new contestants(12,"Sunny","img/12.jpg",0)
var kThirteen = new contestants(13,"Nibbler","img/13.jpg",0)
var kFourteen = new contestants(14,"Soul Crusher von Rektienschnein the IX","img/14.jpg",0)

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

console.log(kittenVote)

// Random selection of two kitten contestants
var kittyRandom = function randomCat() {
  return Math.floor(Math.random() * (14 - 1 + 1)) + 1;
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

// Button voting

var $kittenOneBtn = $('#kittenOneBtn');
var $kittenTwoBtn = $('#kittenTwoBtn');

$kittenOneBtn.click(function() {
  kittenVote[rdmIntOne].votes += 1;
  console.log(kittenVote[rdmIntOne].votes);
})

$kittenTwoBtn.click(function() {
  kittenVote[rdmIntTwo].votes += 1;
  console.log(kittenVote[rdmIntTwo].votes);
})

// Display results on a chart

// Prompt user to vote on two more kittens

// Store voting results in localStorage

});
