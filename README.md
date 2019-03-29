# Modern Lexicon

### Overview
A dictionary app for curious conversationalists. Search for definitions and see how your search word is showing up in the news. Also included are words recently recognized by Merriam Webster Dictionary as part of the English language - think "photobomb".

You can find the app [here](https://lm-modern-lexicon.herokuapp.com/)

![Image of web home page](https://i.imgur.com/lm4ANj1.png)
![Image of mobile home page](https://i.imgur.com/b9tT9Ox.png)
![Image of mobile search page](https://i.imgur.com/e9ucgty.png)
![Image of mobile buzzwords page](https://i.imgur.com/4DduiKr.png)

### Wireframes & Component Hierarchy
Find my wireframes [here](https://drive.google.com/file/d/1Lq3wMJ4ir3fx3PV7QszXnXj3L0nL3XqT/view?usp=sharing)

### MVP
* Find and use 2 external apis
    1. [Merriam Webster Collegiate Dictionary](https://dictionaryapi.com/products/api-collegiate-dictionary)
    2. [NewsAPI](https://newsapi.org/)
* Render data on page based on user input
    1. Render definitions with part of speech, pronunciation, and stems based on search keyword
    2. Render news articles based on search keyword
* React Router
    1. Home page
    2. Search page
    3. Buzzwords page

### POST MVP
* Add audio tags for word pronunciations
* Add images for buzzwords
* Render multiple definitions for words that have them
* Error message if user types in any data type that is not a string and is not a word in the dictionary

### Functional Components
* Home page
* Definition
* Footer

### Class Components
* App
* Buzzwords
* Search
* News

### Code Snippet
```css
@font-face {
  font-family: "Zangezi";
  src: url("fonts/Zangezi04-Regular.woff") format('woff');
}
```

### Issues
* Dealing with deeply nested data returned from my dictionary API
* Conditional rendering
* Toggle classes for displaying styled elements at the right time