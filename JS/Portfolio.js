let arrDesignation=["WEB DEVELOPER",".NET DEVELOPER","BACKEND DEVELOPER","FULL STACK .NET DEVELOPER"];
function typingEffect()
{
  //document.getElementById("output").innerHTML = "";
  //abc
  for (let word of arrDesignation) {
    for (let char of word) {
      document.getElementById("output").innerHTML +=char;
      setTimeout(typingEffect, 300); // 100ms delay
     // console.log(char);
    }
    setTimeout(typingEffect, 3000); // 300ms delay
    document.getElementById("output").innerHTML = "";
  }//abc
}
typingEffect();

// let arr = ["Azhar", "Hussain"];
// let text = arr.join("");   // Combine all strings
// let index = 0;

// function start() {
//   document.getElementById("output").innerHTML = "";
//   index = 0;
//   typeEffect();
// }

function typeEffect() {
  if (index < text.length) {
    document.getElementById("output").innerHTML += text[index];
    index++;
    setTimeout(typeEffect, 300); // 300ms delay
  }
}

//start();

// let arr = ["Azhar", "Hussain"];
// let text = arr.join("");
// let i = 0;

// function typeEffect() {
//     if (i < text.length) {
//         console.log(text[i]);
//         i++;
//         setTimeout(typeEffect, 300);
//     }
// }

// typeEffect();
