//WAVE 1

var Scrabble = function() {};

Scrabble.prototype.score = function(word) {
    var cases = {A: 1, E: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1, D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10};
    var letters = word.toUpperCase().split('');
    var total = 0;

    //Adds 50 pt bonus for a seven letter word
    if (word.length == 7) {
      total += 50;
    }

    //Adds up letter points for full word score
    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      total += cases[letter];
    }

    return total;
  };

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
    var scoredWords = {};

    //Adds word and its score to scoredWords
    for (var i = 0; i < arrayOfWords.length; i++) {
      var score = this.score(arrayOfWords[i]);
      scoredWords[arrayOfWords[i]] = score;
    }

    var winningWord = null;
    var winningScore = null;
    //Looks through scoredWords for highest scoring word
    for (var key in scoredWords) {
      if (scoredWords[key] > winningScore) {
        winningWord = key;
        winningScore = scoredWords[key];
      }
      else if (scoredWords[key] == winningScore) {
        if (key.length == 7 || key.length < winningWord.length) {
          if (winningWord.length != 7) {
            winningWord = key;
            winningScore = scoredWords[key];
          }
        }
      }
    }

    return winningWord;
  };

// var newGame = new Scrabble();
// var wordScore = newGame.score("aaaaaaa");
// console.log(wordScore);
//
// var anotherGame = new Scrabble();
// var bestWord = anotherGame.highestScoreFrom(["xxxx", "hello", "aaaaa", "bloop", "xxxxx"]);
// console.log(bestWord);

//WAVE 2

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  //Checks if player already won, adds word to plays if they haven't
  if (this.hasWon() === true) {
    return false;
  }
  else {
    this.plays.push(word);
  }
};

Player.prototype.totalScore = function() {
  var playersScore = 0;

  //Scores each of the player's plays to get total score
  for (var i = 0; i < this.plays.length; i++) {
    playersScore += new Scrabble().score(this.plays[i]);
  }
  return playersScore;
};

Player.prototype.hasWon = function() {
  //Checks to see if player's score is over 100 (aka if they won)
  if (this.totalScore() > 100) {
    return true;
  }
  else {
    return false;
  }
};

Player.prototype.highestScoringWord = function() {
  //Returns highest scoring word from the player's plays
  return new Scrabble().highestScoreFrom(this.plays);
};

Player.prototype.highestWordScore = function() {
    //Gets the player's highest scoring word
    var word = this.highestScoringWord(this.plays);
    //Returns the score of the word
    return new Scrabble().score(word);
  };

// var newPlayer = new Player("briana");
// console.log(newPlayer.name);
// newPlayer.play("test");
// newPlayer.play("xxxxx");
// console.log(newPlayer.plays);
// console.log(newPlayer.totalScore());
// console.log(newPlayer.hasWon());
// console.log(newPlayer.highestScoringWord());
// console.log(newPlayer.highestWordScore());

// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
module.exports = Scrabble;
