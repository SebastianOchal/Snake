import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();
const expansionRate = 1;
export function update(){
    if (onSnake(food)){
        expandSnake(expansionRate);
        food = getRandomFoodPosition();
    }
}
export function draw(gameBoard){
        const foodElement = document.createElement(`div`);
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        gameBoard.appendChild(foodElement)
        foodElement.classList.add("food")
}

function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}
