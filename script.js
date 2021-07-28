let numberOfDrumButtons=document.querySelectorAll(".drum").length;

for (let i=0 ; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].
    addEventListener("click", function(){
        let buttonInnerHtml = this.innerHtml;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress",
function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){

        case "a":
        let tom = new Audio("sounds/tom.wav");
        tom.play();
        break;

        case "s":
        let snare = new Audio("sounds/snare.wav");
        snare.play();
        break;
        
        case "d":
        let ride = new Audio("sounds/ride.wav");
        ride.play();
        break;
        
        case "f":
        let openHat = new Audio("sounds/openhat.wav");
        openHat.play();
        break;

        case "z":
        let kick = new Audio("sounds/kick.wav");
        kick.play();
        break;

        case "x":
        let boom= new Audio("sounds/boom.wav");
        boom.play();
        break;

        case "c":
        let hiHat = new Audio("sounds/hihat.wav");
        hiHat.play();
        break;

        default: console.log(key);

    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}