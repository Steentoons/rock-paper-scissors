# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser

### Links
- Live Site URL: [Add live site URL here](https://steentoons.github.io/rock-paper-scissors/)

## My process
I started off by doing the design based development, planning how the elements will look and interact with each other. Customizing the colors, structuring my HTML and components, spacing and fonts.

After finishing up the CSS part, I introduced some basic javascript functions such as manipulating the DOM.

I then introduced the state, structured it, seperated the actions and reducers. Introduced a middleware and using redux dev tools to help manage the state. I then introduced functions that will be called on state changes, useEffects and so on. After my app was working as expected, I then saved the score state to the local storage.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Redux](https://redux.js.org/) - For state management
- Redux Middleware
- Redux dev Tools

### What I learned

I actually learnt some stuff from this particular project, I learnt how to seperate individual project files into seperate organized folders. from the Functions to Components, all Redux folders like Actions and Reducers.

Also practiced Middlewares in a real project 

```js
const choice = store => next => action => {
    if (action.type === "PLAYER_CHOICE") {
        if (action.payload === "player_paper") {
            next({ type: "PAPER" })
        } else if (action.payload === "player_scissors") {
            next({ type: "SCISSORS" })
        } else if (action.payload === "player_rock") {
            next({ type: "ROCK" })
        }
    } else {
        next(action)
    }

}
```

Persisting react state in redux using the local storage. I used a particular video from [egghead.io](https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage) there is a link to the repo they used also from the same page.

```js
store.subscribe(throttle(() => {
    saveState({
        computer: {
            userScore: store.getState().computer.userScore
        }
    })
}), 1000)
```

I also had to debug lots of code than I ever did using react and redux. Wont lie, at first, wasn't easy to get the real source of the problems in my code. but now I can pretty puch confidently find typos in my code more easily than before.

The choice buttons were the most tricky to achieve using the HTML and CSS. Simply because they were all seperate elements. The provided svg was to be wrapped with other elements to create one button. This was kinda tricky at first because of the responsiveness, but managed to do it as such 

```html
<>
  <div className="choice-button-thickness"></div>
  <div className="choice-button-bottom-thickness"></div>
  <div className="choice-button-main-circle"></div>
  <div className="choice-image-div">
    <img src="" alt="Rock" />
  </div>
</>
```

### Continued development
On my next projects, I will get more into the React Routers, more about the Async functions plus the Redux saga, including using more APIs and javascript Libraries that will help increase my knowledge and skills as a front-end developer.

### Useful resources

- [Egghead.io](https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage) - This helped me to persist the app state using the local storage. Used subscribe() and Lodash Throttle.

## Author

- Github - [@steentoons](https://github.com/Steentoons)
- Frontend Mentor - [@steentoons](https://www.frontendmentor.io/profile/steentoons)
- Twitter - [@steentoons](https://www.twitter.com/steentoons)
- Linked in - [@steen-toons](https://www.linkedin.com/in/steen-toons)
- Dribbble - [@steentoons](https://dribbble.com/Steentoons/)

