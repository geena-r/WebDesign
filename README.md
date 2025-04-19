# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Tageena Reserve**


## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
W3 schools 
StackOverFlow
Google


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
  When creating functions to play the sequence I had trouble getting it to work. I decided to go to the step before and checked if I made an error. I erased the javascript I had written to start over on a clean slate. It turns out I misspelled ‘button’ in the style sheet which caused it not to light up. I also had named the buttons buttonOne instead of button1 so the functions I implemented didn’t work as they were written to recognize the number. So I chose to go to the html and change the words into numbers since that was easier. I also set the guess counter to 0 inside the startGame function as let guessCounter=0; despite having it as a global variable so it triggered the loseGame alert after each guess when it wasn’t supposed to. I fixed this by adding a reset function to stop the error and I changed the call to guessCounter=0; so the game would reset when the player presses stop. This stopped the alert from setting off at the wrong time.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    I am curious to know how tasks are delegated to a team for bigger web development projects and how much time is typically given.This project made me think about the importance of time management as a software engineer. If the project had more facets and features to implement I imagined how long a team would be given to create certain aspects for the site. I also would like to know how they update features on websites without causing disruptions to users like social media or banking. For example apps usually need the user to update to see improvements after bugs are corrected. I rarely see websites go under for maintenance and when they do this for a day or so, what makes that necessary? 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
 If I had a few more hours to work on this project I would love to work on the visuals, accessibility and complexity of the project. First the complexity, the button sequence is predetermined by me and doesn’t change. Instead I would apply a function that changes the sequence in a random order everytime you restart the game. I could even add an additional button to complicate things after the game was won 4 times. This would keep the user playing and interested. Then for accessibility I could add a text to speech button and have features like the rules be read out. As for the visuals the buttons could have more dimension and texture so they look like real buttons. Using images, shadows or symbols could make it look more interesting. I think making the site compatible for various screen sizes would be a good idea.


## Video Walkthrough 

Add your screen recordings for specified implemented features here:
![losing screen recording](https://www.loom.com/share/8a6bd1b548684f5ba92f5c78497dbe88?sid=57ccee2f-bfb4-4917-86ac-4f509b9d47d0)

![winning screen recording](https://www.loom.com/share/511b1f73abb04087be093aebfc725381?sid=f846c78c-dd78-4e5b-86bb-0abe47b74e42)

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/6c9e17c44f5a46d5b85ce29b8e452aa2?sid=8b71b9ef-333e-4b58-aa7c-7b4a646e5d3b)


## License

    Copyright Tageena Reserve

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.