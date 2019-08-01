# Algo Rithms Challenge // Audience Wave

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
  `https://github.com/Coralie19/Audience-Wave`

Fork this repo and then `git clone` your forked repo to your computer.
Once you're happy with your solution, `git push` and submit a pull request at
`https://github.com/Coralie19/Audience-Wave`.

## 2. Challenge
The Audience Wave is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

Your task is to create a function that turns a string into an Audience Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

The input string will always be lower case but maybe empty.
If the character in the string is whitespace then pass over it as if it was an empty seat.

### 2.1. Examples
```js
wave("hello") // returns ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
```

### 2.2. Testing your solution
To test your solution, run `npm i` in the root directory and then run `npm t` to run the automated tests.

### 2.3. Submitting your solution

To submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.
