# Welcome to Storefront Project.
The whole assignment took me about 3 days.
I really began working on Thursday 17th in the evening and finished on Sunday 20th at night.

## How to install and run the project

1. Fetch the git repository via :

```
git clone https://github.com/seedy/storeFront
```

2. Install Node and NPM
- Node v6.9.4 (https://nodejs.org/en/download/)
- Then open a cmd and check your NPM version :
```
npm -v
```
- Version used for the project : 5.3.0
You can install this version through the command :
```
npm install -g npm@5.3.0
```

3. Install the project's dependencies

Open a terminal at the project's root
```
npm install
```

4. Launch the app locally

Within your terminal at the project's root
```
npm start
```
A browser page should open under (http://localhost:8080)
If not just go to the link on your browser.

## How to run unit-tests

### Prerequisite : install the project, then...

1. Within a terminal at the project's root

```
npm test
```

Will run the project's unit tests in your command line and launch karma's debugger on chrome.

2. (Optionnaly) You can keep the debugger up and running for debugging purposes via :

```
npm test:watch
```

## Development Choices and Comments

My stack for this project :
 
 - AngularJs
 
 As my javascript dev framework. Not the most optimal now, it is though very efficient and safe.
 I would have gone for Angular2 if I were allowed to develop with Typescript
 and some more time due to my lower experience of the framework.
 I took a long look at the expected functionalities and thought I was used to develop them via AngularJs.
 Therefore I knew it was my best choice to develop the app as quickly as I could.
 
 - Webpack2
 
 Quicker build tool than Gulp or Grunt in my opinion. It has replaced both the frameworks among the latest apps.
 I was more used to Gulp but in my opinion Webpack is much quicker to setup.
 I learned quite a lot in doing that!
 
 - Angular-Material
 
 I love material design and got pretty much bored of Bootstrap design pattern.
 Much more precise rendering, made very easy thanks to the flex and layout integration.
 The resulting design through the app is not exactly as in the screenshots, 
 for example when we take a look at the images and thumbnails. I thought it wouldn't be a problem, hope I will be right
 
 - Sass
 
 Easy and efficient tool for css design and organizing. 
 I follow Angular2's pattern for css scoping : I keep each component with its own design.
 I have no global styles applied, it could be a gain of time,
 but I too often end up breaking it all when changing html blocks.
 
 - Karma / Jasmine
 
 My bread and butter for unit-tests. I learnt how to build custom mocks, factorize helper functions, etc.
 
 
 ## Shortcuts
 
 - Unit-tests
 
 I tested only the components that were expected to be reused or shared.
 I also could have tested the views.
 In a perfect world with no deadlines I would have tried building end-to-end tests with protractor.
 
- Design
 
 Approximate design on colors, sizes and positioning.
 In my mind I tried to stop right before the time-cost/result curve got too tough.
 Circular icons and thumbnails instead of squares...
 
 - Reusability
 
 I could have split the code and responsibilities a lot more.
 Main example : the cart data is hold (sort of stored) by the Home component which is luckily never destroyed.
 
 1. I could have used an external singleton service to hold rootScope event watchers
 2. I would have stored the cart data in a LocalStorage to make sure session refresh wouldn't clear the data


- Refactoring
 
 Graphic elements manually repeated because of small differences.
 
 - Comments
 
 I didn't take time to write jsdoc or comments