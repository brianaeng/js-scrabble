var Scrabble = function() {
  this.score = function(word) {
    var cases = {A: 1, E: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1, D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10};
    var letters = word.toUpperCase().split('');
    var total = 0;

    if (word.length == 7) {
      total += 50;
    }

    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      total += cases[letter];
    }

    return total;
  };

  this.highestScoreFrom = function(arrayOfWords) {
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

    return winningWord[0];
  };
};


// Create a new `Player` object. The object should have the following functions:
//
// - Constructor: Called when you use `new Player(name)`, sets up an instance with the instance variable `name` assigned
// - `name`: property which returns the value of the player's name
// - `plays`: property which returns an Array of the words played by the player
// - `play(word)`: Function which adds the input word to the `plays` Array
//     - Returns false if player has already won
// - `totalScore()`: Function which sums up and returns the score of the players words
// - `hasWon()`: Function which returns `true` if the player has over 100 points, otherwise returns `false`
// - `highestScoringWord()`: Function which returns the highest scoring word the user has played
// - `highestWordScore()`: Function which returns the `highestScoringWord` score

var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.play = function(word) {
    if (hasWon === true) {
      return false;
    }
    else {
      this.plays.push(word);
    }
  };
  this.totalScore = function() {
    var playersScore = 0;
    for (var i = 0; i < this.plays.length; i++) {
      total += Scrabble.score(this.plays[i]);
    }
    return playersScore;
  };
  this.hasWon = function() {
    if (Player.totalScore() > 100) {
      return true;
    }
    else {
      return false;
    }
  };
  this.highestScoringWord = function() {
    return Scrabble.highestScoreFrom(plays);
  };
  this.highestWordScore = function() {
    var word = Scrabble.highestScoreFrom(plays);
    return Scrabble.highestWordScore(word);
  };
};

// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
// module.exports = Scrabble;

// var newGame = new Scrabble();
// var wordScore = newGame.score("aaaaaaa");
// console.log(wordScore);
//
// var anotherGame = new Scrabble();
// var bestWord = anotherGame.highestScoreFrom(["xxxx", "hello", "aaaaa", "bloop", "xxxxx"]);
// console.log(bestWord);
