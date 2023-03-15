// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰激淋了。');
// } else {
//   alert('但是巧克力才是我的最爱呀……');
// }
// document.querySelector('html').addEventListener('click', () => {
//   alert('别戳我，我怕疼。');
// });
//
// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);
//
// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/hua.jpg') {
    myImage.setAttribute('src', 'images/xiugou.jpeg')
  } else {
    myImage.setAttribute('src', 'images/hua.jpg')
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
myButton.onclick = function () {
  setUserName();
}

function setUserName() {
  // let myName = prompt('请输入你的名字。');
  // localStorage.setItem('name', myName);
  // myHeading.textContent = 'Mozilla 酷毙了，' + myName;

  if(!localStorage.getItem('name')) {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

}