// Create array and push kitten contestants inside. Awwwwwwwwww so cute.

this.kittenVote = [];

var contestants = function kittens(id,name,pic) {
  this.id = id;
  this.name = name;
  this.pic = pic;
}

var kOne = new contestants(1,"Bella","img/01.jpg")
var kTwo = new contestants(2,"Kuro","img/02.jpg")
var kThree = new contestants(3,"Tibby","img/03.jpg")
var kFour = new contestants(4,"Shoestring","img/04.jpg")
var kFive = new contestants(5,"Ginny","img/05.jpg")
var kSix = new contestants(6,"The Rosie Family","img/06.jpg")
var kSeven = new contestants(7,"Boots","img/07.jpg")
var kEight = new contestants(8,"Tiggy","img/08.jpg")
var kNine = new contestants(9,"Sheets","img/09.jpg")
var kTen = new contestants(10,"Spidercat","img/10.jpg")
var kEleven = new contestants(11,"OmNomNom","img/11.jpg")
var kTwelve = new contestants(12,"Sunny","img/12.jpg")
var kThirteen = new contestants(13,"Nibbler","img/13.jpg")
var kFourteen = new contestants(14,"Soul Crusher von Rektienschnein the IX","img/14.jpg")

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
var rdmIntOne = kittyRandom();
var rdmIntTwo = kittyRandom();
console.log(rdmIntOne);
console.log(rdmIntTwo);

var firstKitten = kittenVote.forEach(function (cat) {
  if (rdmIntOne === cat.id) {
    $kittenOne.html("<img src=" + cat.pic+"></img>");
    console.log(rdmIntOne);
  };
});

var secondKitten = kittenVote.forEach(function (cat) {
  while (rdmIntTwo === rdmIntOne) {
    rdmIntTwo = kittyRandom();
  };

  if (rdmIntTwo === cat.id) {
    $kittenTwo.html("<img src=" + cat.pic + "></img>");
    console.log(rdmIntTwo);
  }
});
console.log(rdmIntTwo);

// Prompt user to vote on two more kittens

// Store voting results in localStorage

// Display results on a chart
