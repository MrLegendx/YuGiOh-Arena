//YGO JavaScript

//Array for Deck
var deck = [];

// Arrays hold information for Cards according to Rank
var arrayRank1 = ["Feral Imp", "Winged Dragon, Guardian of the Fortress 1", "Shield & Sword", "Eternal Rest", "Mountain", "Dragon Treasure", "The Reliable Guardian", "Block Attack", "White Magical Hat", "Princess of Tsurugi", "Big Eye", "Time Wizard", "Milus Radiant", "Karate Man", "Armored Lizard", "Masaki the Legendary Swordsman", "Flame Manipulator", "Baby Dragon", "Swordsman of Landstar", "Witty Phantom", "Reverse Trap", "Dragon Capture Jar", "Last Will", "Sorcerer of the Doomed", "Magical Ghost", "Ancient Elf", "Book of Secret Arts", "Sword of Dark Destruction", "Claw Reacher", "Silver Fang", "Mammoth Graveyard", "Celtic Guardian", "Beaver Warrior", "Hitotsu-Me Giant", "Ryu-Kishin", "The Wicked Worm Beast", "Mystic Horseman", "Terra The Terrible", "Dark Titan of Terror", "Dark Assailant", "The Flute of Summoning Dragon", "Lord of D.", "The Inexperienced Spy", "De-Spell", "Two-Pronged Attack", "D. Human", "Invigoration", "Dark Energy", "Ogre of the Black Shadow", "Mystic Clown", "Unknown Warrior of Fiend", "Master & Expert"];
var arrayRank2 = ["Darkfire Soldier 1", "Fake Trap", "Malevolent Nuzzler", "Penguin Soldier", "Maha Vailo", "Island Turtle", "Spirit of the Harp", "Man-Eater Bug", "Yami", "Card Destruction", "Waboku", "Man-Eating Treasure Chest", "Baron of the Fiend Sword", "Neo the Magic Swordsman", "Wall of Illusion", "The Stern Mystic", "Ansatsu", "Doma The Angel of Silence", "Dragon Zombie", "Giant Soldier of Stone", "Great White", "Mystical Elf", "Koumori Dragon", "Uraby", "Rude Kaiser", "Castle Walls", "Hane-Hane", "Sogen", "Trap Master", "Mysterious Puppeteer", "Just Desserts", "Reinforcements", "Pale Beast", "Skull Red Bird", "Destroyer Golem", "Ookazi", "Gyakutenno Megami", "Kojikocy", ];
var arrayRank3 = ["Seven Tools of the Bandit", "Giant Trunade", "Sangan", "Magician of Faith", "Gearfriend the Iron Knight", "Sky Scout", "7 Colored Fish", "Gaia The Fierce Knight", "Soul Exchange", "Dian Keto the Cure Master", "Curse of Dragon", "Battle Ox", "Swordstalker", "Trap Hole", "Fissure", "La Jinn the Mystical Genie of the Lamp", "Judge Man", "Rogue Doll", ];
var arrayRank4 = ["Red-Eyes B. Dragon", "Scapegoat", "Change of Heart", "Dark Magician", "Summoned Skull", "Blue-Eyes White Dragon", "Monster Reborn", "Dark Hole", ];

// Array to hold each round of card selection phase according to odds table
var arrayRound1 = [];
var arrayRound2 = [];
var arrayRound3 = [];
var arrayRound4 = [];

// Function Generates all round odds for Arena
function genRounds() {
	//Generates Round 1 - 10 odds
	//1 - 70% | 2 - 20% | 3 - 9% | 4 - 1% |10 Cards
	var a;
	for (a = 0; a < 70; a++) {
		arrayRound1.push(arrayRank1[Math.floor(Math.random() * arrayRank1.length)]);
	}
	var b;
	for (b = 0; b < 20; b++) {
		arrayRound1.push(arrayRank2[Math.floor(Math.random() * arrayRank2.length)]);
	}
	var c;
	for (c = 0; c < 9; c++) {
		arrayRound1.push(arrayRank3[Math.floor(Math.random() * arrayRank3.length)]);
	}
	arrayRound1.push(arrayRank4[Math.floor(Math.random() * arrayRank4.length)]);

	//Generates Round 11-30 odds
	//1 - 55%| 2 - 27%| 3 - 15% | 4 - 3% | 20 Cards
	var d;
	for (d = 0; d < 55; d++) {
		arrayRound2.push(arrayRank1[Math.floor(Math.random() * arrayRank1.length)]);
	}
	var e;
	for (e = 0; e < 27; e++) {
		arrayRound2.push(arrayRank2[Math.floor(Math.random() * arrayRank2.length)]);
	}
	var f;
	for (f = 0; f < 15; f++) {
		arrayRound2.push(arrayRank3[Math.floor(Math.random() * arrayRank3.length)]);
	}
	var g;
	for (g = 0; g < 3; g++) {
		arrayRound2.push(arrayRank4[Math.floor(Math.random() * arrayRank4.length)]);
	}

	//Generates Round 31-35 odds
	//1 - 45%| 2 - 30%| 3 - 20% | 4 - 5% | 5 Cards
	var h;
	for (h = 0; h < 45; h++) {
		arrayRound3.push(arrayRank1[Math.floor(Math.random() * arrayRank1.length)]);
	}
	var i;
	for (i = 0; i < 30; i++) {
		arrayRound3.push(arrayRank2[Math.floor(Math.random() * arrayRank2.length)]);
	}
	var j;
	for (j = 0; j < 20; j++) {
		arrayRound3.push(arrayRank3[Math.floor(Math.random() * arrayRank3.length)]);
	}
	var k;
	for (k = 0; k < 5; k++) {
		arrayRound3.push(arrayRank4[Math.floor(Math.random() * arrayRank4.length)]);
	}

	//Generates Round 36-40 odds
	//1 - 40%| 2 - 30%| 3 - 23% | 4 - 7% | 5 Cards
	var l;
	for (l = 0; l < 40; l++) {
		arrayRound4.push(arrayRank1[Math.floor(Math.random() * arrayRank1.length)]);
	}
	var m;
	for (m = 0; m < 30; m++) {
		arrayRound4.push(arrayRank2[Math.floor(Math.random() * arrayRank2.length)]);
	}
	var n;
	for (n = 0; n < 23; n++) {
		arrayRound4.push(arrayRank3[Math.floor(Math.random() * arrayRank3.length)]);
	}
	var o;
	for (o = 0; o < 7; o++) {
		arrayRound4.push(arrayRank4[Math.floor(Math.random() * arrayRank4.length)]);
	}
}

// Selects the 3 cards that will be displayed throughout round 1
var selectCards = [];
function selectRound() {
	var deckLength = deck.length;
	var checker = selectCards.length;
	// round 1 odds
	if (deckLength < 10) {
		var var1;
		for (var1 = 0; var1 < 3; var1++) {
			selectCards.push(arrayRound1[Math.floor(Math.random() * 100)]);
			console.log("Current Selected Cards: " + selectCards);
			limitChecker(selectCards[var1]);

			if (selectCards.length < var1 + 1) {
				var1 = var1 - 1;
			}

		}
	}
	// round 2 odds
	else if (deckLength >= 10 && deckLength < 30) {
		var var2;
		for (var2 = 0; var2 < 3; var2++) {
			selectCards.push(arrayRound2[Math.floor(Math.random() * 100)]);
			console.log("Current Selected Cards: " + selectCards);
			limitChecker(selectCards[var2]);

			if (selectCards.length < var2 + 1) {
				var2 = var2 - 1;
			}
		}

	}
	// round 3 odds
	else if (deckLength >= 30 && deckLength < 35) {
		var var3;
		for (var3 = 0; var3 < 3; var3++) {
			selectCards.push(arrayRound3[Math.floor(Math.random() * 100)]);
			console.log("Current Selected Cards: " + selectCards);
			limitChecker(selectCards[var3]);

			if (selectCards.length < var3 + 1) {
				var3 = var3 - 1;
			}
		}
	}
	// round 4 odds
	else {
		var var4;
		for (var4 = 0; var4 < 3; var4++) {
			selectCards.push(arrayRound4[Math.floor(Math.random() * 100)]);
			console.log("Current Selected Cards: " + selectCards);
			limitChecker(selectCards[var4]);

			if (selectCards.length < var4 + 1) {
				var4 = var4 - 1;
			}
		}
	}
	displayCards();
	return true;
}

// clears 3 cards choosen from selectCards array
function clearSelectCards() {
	var csc;
	var scl = selectCards.length;
	for (csc = 0; csc < scl; csc++) {
		selectCards.pop();
	}
}

// Displays cards to 3 button fields based off selectedCards array
function displayCards() {
	var dc = 0;
	var card1 = selectCards[dc];
	var card2 = selectCards[dc + 1];
	var card3 = selectCards[dc + 2];

	// "/Users/sergi/OneDrive/Desktop/YuGiOh Arena/Pictures/Hitotsu-Me Giant.png";
	var img1 = "https://github.com/MrLegendx/YuGiOh-Arena/blob/master/Pictures2/" + card1 + ".jpg";
	var img1html = '<img src="' + img1 + '" />';
	var img2 = "/Users/sergi/OneDrive/Desktop/YuGiOh Arena/Pictures2/" + card2 + ".jpg";
	var img2html = '<img src="' + img2 + '" />';
	var img3 = "/Users/sergi/OneDrive/Desktop/YuGiOh Arena/Pictures2/" + card3 + ".jpg";
	var img3html = '<img src="' + img3 + '" />';

	document.getElementById("b1").innerHTML = img1html;
	document.getElementById("b2").innerHTML = img2html;
	document.getElementById("b3").innerHTML = img3html;
}

// Disables a button based off elementID
function buttonDisabled(elementId) {
	document.getElementById(elementId).disabled = true;
}

// Enables a button that is currently disabled
function buttonEnabled(elementId) {
	document.getElementById(elementId).disabled = false;
}

// Unhides a hidden element
function revealElement(elementID) {
	document.getElementById(elementID).style.visibility = 'visible';
}

// Informs user what card they have selected and places value onto selectedCard
var selectedCard;
function cardSelected(elementID) {
	if (elementID == "b1") {
		selectedCard = selectCards[0];
		document.getElementById("currentCard").innerHTML = "Current Selected Card:   " + selectedCard;
	} else if (elementID == "b2") {
		selectedCard = selectCards[1];
		document.getElementById("currentCard").innerHTML = "Current Selected Card:   " + selectedCard;

	} else if (elementID == "b3") {
		selectedCard = selectCards[2];
		document.getElementById("currentCard").innerHTML = "Current Selected Card:   " + selectedCard;

	} else {
		alert("Something did not work!!!");
	}

	//var text = document.createTextNode(" " + selectedCard);
	//document.getElementById("currentCard").appendChild(text);
	//alert("Press the CONFIRM BUTTON to select: " + document.getElementById(elementID).textContent);
}

// What happens when the confirm button is pressed
function confirmCard() {
	//clear current selected cards array
	clearSelectCards();

	//insert into deck array
	deck.push(selectedCard);

	//insert into table
	var currentTable = document.getElementById("deckTable");

	var newRow = currentTable.insertRow(-1);
	var newCell = newRow.insertCell(0);

	newCell.innerHTML = deck.length + ": " + selectedCard;

	//update Round Counter by ID
	var roundCounter = deck.length + 1;
	if (roundCounter == 41) {
		deck.sort();
		sortTable();
		createDecklist();
		revealElement("downloadButton");
		buttonEnabled("downloadButton");
		//document.getElementById("deck").innerHTML = deck;
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b1").style.visibility = 'hidden';
		document.getElementById("b2").style.visibility = 'hidden';
		document.getElementById("b3").style.visibility = 'hidden';
		document.getElementById("confirmButton").disabled = true;
		alert("You have finished building your Deck, please build it and GET READY TO D-D-D-D-D-D-D-DUEL!!!")
	} else {
		document.getElementById("roundCounter").innerHTML = "Round " + roundCounter;
		selectRound();
	}
	document.getElementById("currentCard").innerHTML = "Current Selected Card:   ";
}

function sortTable() {
	var table = document.getElementById("deckTable");
	var tableLength = document.getElementById("deckTable").rows.length;
	console.log(tableLength)

	for (var i = 0; i < tableLength; i++) {
		var rowCard = document.getElementById("deckTable").rows[i].cells;
		rowCard[0].innerHTML = deck[i]
	}
}

// checks if the card has reached it's limit yet
function limitChecker(card) {
	//Check if deck already has 3 copies of that card..
	var dl = deck.length;
	var scl = selectCards.length;
	var limitCounter = 0;
	var i;
	// Checks and increases limit counter if there are multiple cards of the same name already in the deck
	for (i = 0; i < dl; i++) {
		if (deck[i] == card && limitCounter != 3) {
			limitCounter++;
			console.log("Found duplicate copy of " + deck[i] + " : " + limitCounter)
		}
	}
	if (limitCounter == 3) {
		for (var x = 0; x < scl; x++) {
			if (selectCards[x] == card) {
				console.log("Limit Checker 1: " + selectCards);
				selectCards.splice(x, 1);
				console.log("Limit Checker 2: " + selectCards);
			}
		}
		limitCounter = 0;
	}
	return true;
}

// Function to create text file of deck list to later download
var decklist;
function createDecklist() {
	var decklistHolder = document.getElementById("deckListHolder");

	for (var i = 0; i < deck.length; i++) {
		var currentCard = document.createTextNode(deck[i] + "\n");
		decklistHolder.appendChild(currentCard);
	}
	decklist = document.getElementById("deckListHolder").innerHTML;
	return decklist;
}

// Function to download a text file
function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=uft-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}
