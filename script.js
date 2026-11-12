console .log( "Привет, мир!" );

let userName = prompt( "Как вас зовут?" );
alert( "Привет " + userName + "!" );

const myButton = document.getElementById("myBtn");
myButton.addEventListener("click", function(){alert("Кнопка нажата!")})

let clickCount = 0;
const buttons = document.getElementsByClassName("myBtn2");
button.addEventListener("click", function(){clickCount++; console.log("количество нажатий" +clickCount);});

