/*-------------------------------- Constants --------------------------------*/



const stage3WestPassSing = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'You guys sounded so beautiful together! She has given you 700 years of good luck.',
    image: './images/stage3WestPassSing.png',
    choices: [],
    
    
}

const stage3WestPassNo = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'She got mad that you didn\'t want to jam and killed you and your crew.',
    image: './images/stage3WestPassNo.png',
    choices: [],
    
    
}



const stage3EastPassAttack = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'They had bigger cannons. Your ship has sunk!',
    image: './images/stage3EastPassAttack.png',
    choices: [],
    
}

const stage3EastPassFlee = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'They still got ya. Your ship is slow.',
    image: './images/stage3EastPassFlee.png',
    choices: [],
    
}



const stage2WestPass = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'A Siren asks you to sing with her. You down to jam out for a bit?',
    image: './images/stage2WestPass.png',
    choices :[
        {text: 'Sing', nextStage: stage3WestPassSing},
        {text: 'No, I\'m good', nextStage: stage3WestPassNo},
     
    ]
    
    
}


const stage2WestAttack = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'You\'ve come out victrorious in the battle! The ship had a bunch of treasure!',
    image: './images/stage2WestAttack.png',
    choices: [],
    
}



const stage2EastPass = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'The British Navy are in sight! Do you want to attack their ship or flee?',
    image: './images/stage2EastPass.png',
    choices :[
        {text: 'Attack', nextStage: stage3EastPassAttack},
        {text: 'Flee', nextStage: stage3EastPassFlee},
     
    ]
    
}

const stage2EastExploreIt = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'OOPS UR DEAD! You hit a rock coming in to the island',
    image: './images/stage2EastExploreIt.png',
    choices: []
    
}

const stage1East = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'You see a Island in the distance do you want to explore it?',
    image: './images/stage1East.png',
    choices :[
        {text: 'Pass', nextStage: stage2EastPass},
        {text: 'Explore it', nextStage: stage2EastExploreIt},
     
    ]
    
}

const stage1West = {
    stageLevel : 1,
    title : 'A Pirate\'s Voyage',
    instructions : 'You see an unmarked ship in the distance do you want to attack it?',
    image: './images/stage1West-new.png',
    choices :[
        {text: 'Pass', nextStage: stage2WestPass},
        {text: 'Attack', nextStage: stage2WestAttack},
       
    ]
    
}

const stageDetails = {


    
}

const stage0 = {
    stageLevel : 0,
    title : 'A Pirate\'s Voyage',
    instructions : 'On the quest for buried treasure, a group of pirates set sail across the seven seas. The wind blows from the north. Which way will you sail?',
    image: './images/stage0-image.png',
    choices :[
        {text: 'East', nextStage: stage1East},
        {text: 'West', nextStage: stage1West}
    ]
}


let stageToResetTo
let resetButton


const init = () => {
    
    renderStage()
    
    stageToResetTo = activeStage

    resetButton = document.createElement('button');
    resetButton.textContent = "Reset Game"
    resetButton.addEventListener("click", ()=> {
        activeStage = stageToResetTo
        gameElements.innerHTML = "";
        renderStage()
    })
    // Use stage to reset to to reset
    
}



const renderStage = () => {

const heading = document.createElement('h1');
heading.textContent = activeStage.title
heading.classList.add('stage-heading');
gameElements.appendChild(heading);

const image = document.createElement('img')
image.src = activeStage.image
image.classList.add('stage-image')
// image.id = "game-image";
gameElements.appendChild(image)
const stageImage = document.getElementById('game-image') 


// replace image rather than just add
// If it does replace it



const paragraph = document.createElement('p');
paragraph.textContent = activeStage.instructions
paragraph.classList.add('stage-text');
gameElements.appendChild(paragraph);



const flexContainer = document.createElement('div');
flexContainer.classList.add('flex-container');

// const button = document.createElement('button')
// button.textContent = buttonData.text
// button.classList.add('stage-button');
// flexContainer.appendChild(button)


gameElements.appendChild(flexContainer);

const renderButton = (buttonData) => {
    const button = document.createElement('button')
    button.textContent = buttonData.text
    button.addEventListener('click', () => {
        activeStage = buttonData.nextStage
        gameElements.innerHTML = "";
        renderStage()
    })
    flexContainer.appendChild(button)
}

// (function) => {
    // runs a function on the array
    //  function(value of array at index, index)
    // }

activeStage.choices.forEach(renderButton)
if (activeStage.choices.length === 0) {
    gameElements.appendChild(resetButton)
}
// what its doing:
// renderButton({text: 'East', nextStage: stage1East}, 0)
// renderButton({text: 'West', nextStage: stage1West}, 1)


}





// console.log(stage0.stageLevel = 1)

/*---------------------------- Variables (state) ----------------------------*/

let activeStage = stage0

/*------------------------ Cached Element References ------------------------*/

const gameElements = document.getElementById('game') 



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/





/*----------------------------- Runtime Code -----------------------------*/

init()

// activeStage = stage1

// renderStage()
