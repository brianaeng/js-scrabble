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

    var winningWord = [null, 0];
    //Looks through scoredWords for highest scoring word
    for (var key in scoredWords) {
      if (scoredWords[key] > winningWord[1]) {
        winningWord[0] = key;
        winningWord[1] = scoredWords[key];
      }
      else if (scoredWords[key] == winningWord[1]) {
        if (key.length == 7 || key.length < winningWord[1].length) {
          winningWord[0] = key;
          winningWord[1] = scoredWords[key];
        }
      }
    }

    return winningWord[0];
  };
};

Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;

var newGame = new Scrabble();
var wordScore = newGame.score("aaaaaaa");
console.log(wordScore);

var anotherGame = new Scrabble();
var bestWord = anotherGame.highestScoreFrom(["xxxx", "hello", "aaaaa", "bloop", "xxxxx"]);
console.log(bestWord);
