import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier

      phrase: '',
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: ''
    }
  }

  // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin.

  myPigLatinCodeHere = () => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // variable to indicate the location of the vowel in the array
    let vowelIndex = 0;

    // the variable 'userInput' will contain the text input from the user
    let userInput = this.state.phrase;

    // variable to store translated currentWord
    let pigLatinWord = '';

    // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
    let translatedWordsArray = [];

    // taking the user input and spliting the text into an array of words
    let splitUserInput = userInput.toLowerCase().split(" ");

    // now that we have an array of words, we can map over the array and access each word
    splitUserInput.map(currentWord => {
      // use vowels array to see if the 1st letter of currentWord is a vowel
      if (currentWord[0] === 'q' && currentWord[1] === 'u') {
          console.log(pigLatinWord = `${currentWord.slice(2)}-${currentWord.slice(0, 2)}ay`);
      } else if (currentWord[1] === 'q' && currentWord[2] === 'u') {
          console.log(pigLatinWord = `${currentWord.slice(3)}-${currentWord.slice(0, 3)}ay`)
      } else if (vowels.includes(currentWord[0])) {
        pigLatinWord = `${currentWord}-way`;
      } else {
          // use a for of loop to go through each array item until it reaches a vowel
          for (let letter of currentWord) {
            // vowels array to find where the 1st vowel appear within the
            if (vowels.includes(letter)) {
              vowelIndex = currentWord.indexOf(letter);
              // since we found out where the vowel is, we break out so it stops running
              break;
            }
          }
          // storing the translated word
          console.log(pigLatinWord = `${currentWord.slice(vowelIndex)}-${currentWord.slice(0, vowelIndex)}ay`);
        }

      return translatedWordsArray.push(pigLatinWord);
    })


    // joining the array back to a string of translated words
    let translatedWords = translatedWordsArray.join(" ");

    // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
    this.setState({ phraseTranslated: translatedWords });
  }

  setUpPreventDefault = (e) => {
    // this method prevents react from refreshing the page unnecessarily
    e.preventDefault();
    this.myPigLatinCodeHere();
  }

  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({ phrase: e.target.value });
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    this.setState({
      phrase: '',
      phraseTranslated: ''
    })
  }

  render() {
    return (
      <div>
        <h1>Pig Latin Translator</h1>
          <div id="pigImage">
            <img
              src="https://lh3.googleusercontent.com/QvvsRY5ShwDNEouVMK8_z7QCwS3grkgd4mzZOlom23Hurralk54ObvsyEMM8ZSNR5pEFBeBMzltzEEcgi2llYJnhXTuXClN3njmMjtw3vgn8Go5jr40fHMNzfI64eYRrnHbZUutxCA=w2400"
              alt="pig with butcher cut names in pig latin"
              id="butcherPig"
            />
          </div>
          <div className="box">
            <h4>Enter phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button onClick={ this.setUpPreventDefault }>Submit</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Clear</button>
            </div>
            {/* where the translated phrase will display */}
            <p>{ this.state.phraseTranslated }</p>
          </div>
        <footer>
          Coded by ~your name here~
        </footer>
      </div>
    )
  }
}

export default App
