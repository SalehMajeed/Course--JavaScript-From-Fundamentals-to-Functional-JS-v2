var suspects = [
    {
        name: "Rusty",
        color: "orange"
    }, {
        name: "Miss Scarlet",
        color: "red"
    }
]

const firstColor = game.suspects[0].color
const secondColor = game.suspects[1].color

var [color, color2] = [suspects[0].color, suspects[1].color]

var [ {color: firstColor}, {color: secondColor}] = suspects

var [firstObj, secondColor] = suspects

var game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

var gameLoop = function(game){
    for (var i = 0; i < game.suspects.length; i++){
        for (var key in game.suspects[i]) {
            if(game.suspects[i][key] == "Rusty"){
                console.log('Found \'em !')
            } else {
                console.log('next time!')
            }
        }
    }
}

function foo(){
    for (let i = 0; i < game.suspects.length; i++){
        console.log(game.suspects[i])
    }
}

for(let pickly in obj){
    obj[pickly]
}

foo()

{"name": "Rusty", "room":"kitchen", "weapon":"candlestick"}