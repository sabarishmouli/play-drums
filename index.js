for (var i = 0; i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){


    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}
);
}


document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});
switch(buttonInnerHTML){
      case "z":
      var audio = new Audio ("sounds/tom-1.mp3");
      audio.play();
      break;
      case "x":
      var audio = new Audio ("sounds/tom-2.mp3");
      audio.play();
      break;
      case "c":
      var audio = new Audio ("sounds/tom-3.mp3");
      audio.play();
      break;
      case "v":
      var audio = new Audio ("sounds/tom-4.mp3");
      audio.play();
      break;
      case "b":
      var audio = new Audio ("sounds/snare.mp3");
      audio.play();
      break;
      case "n":
      var audio = new Audio ("sounds/crash.mp3");
      audio.play();
      break;
      case "m":
      var audio = new Audio ("sounds/kick-bass.mp3");
      audio.play();
      break;
}
function makeSound(key)
{  switch(key){
        case "z":
        var audio = new Audio ("sounds/tom-1.mp3");
        audio.play();
        break;
        case "x":
        var audio = new Audio ("sounds/tom-2.mp3");
        audio.play();
        break;
        case "c":
        var audio = new Audio ("sounds/tom-3.mp3");
        audio.play();
        break;
        case "v":
        var audio = new Audio ("sounds/tom-4.mp3");
        audio.play();
        break;
        case "b":
        var audio = new Audio ("sounds/snare.mp3");
        audio.play();
        break;
        case "n":
        var audio = new Audio ("sounds/crash.mp3");
        audio.play();
        break;
        case "m":
        var audio = new Audio ("sounds/kick-bass.mp3");
        audio.play();
        break;
  }
}


function buttonAnimation(currentkey){

  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
