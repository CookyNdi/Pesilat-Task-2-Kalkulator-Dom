let inputBoxLeft = document.getElementById("inputBoxLeft");
let inputBoxRight = document.getElementById("inputBoxRight");
let resultBox = document.querySelector(".resultBox");
let previewOperator = document.querySelector(".previewOperator");

let operatorInput = "";
let result = 0;

const clearInput = () => {
  inputBoxLeft.value = "";
  inputBoxRight.value = "";
  operatorInput = "";
  result = "";
  resultBox.innerHTML = result;
  previewOperator.innerHTML = operatorInput;
  inputBoxLeft.focus();
  statusInputBoxLeft = false;
  statusInputBoxRight = false;
};

const plusMinus = () => {
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    inputBoxLeft.value = inputBoxLeft.value * -1;
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    inputBoxRight.value = inputBoxRight.value * -1;
  }
};

let statusInputBoxLeft = false;
let statusInputBoxRight = false;

const handleInputBoxLeft = () => {
  statusInputBoxLeft = true;
  statusInputBoxRight = false;
};
const handleInputBoxRight = () => {
  statusInputBoxRight = true;
  statusInputBoxLeft = false;
};

inputBoxLeft.addEventListener("click", handleInputBoxLeft);
inputBoxRight.addEventListener("click", handleInputBoxRight);



const backspace = () => {
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    let str = inputBoxLeft.value.toString().slice(0, -1);
    parseInt(str);
    inputBoxLeft.value = str;
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    let str = inputBoxRight.value.toString().slice(0, -1);
    parseInt(str);
    inputBoxRight.value = str;
  }
};

// Number Function

const addOne = () => {
  if (inputBoxLeft == "") {
    inputBoxLeft.focus();
  }
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    inputBoxLeft.value += 1;
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    inputBoxRight.value += 1;
  }
};

const addTwo = () => {
  if (inputBoxLeft == "") {
    inputBoxLeft.focus();
  }
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    inputBoxLeft.value += 2;
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    inputBoxRight.value += 2;
  }
};

const addThree = () => {
  if (inputBoxLeft == "") {
    inputBoxLeft.focus();
  }
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    inputBoxLeft.value += 3;
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    inputBoxRight.value += 3;
  }
};

const addFour = () => {
  if (inputBoxLeft == "") {
    inputBoxLeft.focus();
  }
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    inputBoxLeft.value += 4;
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    inputBoxRight.value += 4;
  }
};

const addFive = () => {
  if (inputBoxLeft == "") {
    inputBoxLeft.focus();
  }
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    inputBoxLeft.value += 5;
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    inputBoxRight.value += 5;
  }
};

const addSix = () => {
  if (inputBoxLeft == "") {
    inputBoxLeft.focus();
  }
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    inputBoxLeft.value += 6;
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    inputBoxRight.value += 6;
  }
};

const addSeven = () => {
  if (inputBoxLeft == "") {
    inputBoxLeft.focus();
  }
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    inputBoxLeft.value += 7;
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    inputBoxRight.value += 7;
  }
};

const addEight = () => {
  if (inputBoxLeft == "") {
    inputBoxLeft.focus();
  }
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    inputBoxLeft.value += 8;
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    inputBoxRight.value += 8;
  }
};

const addNine = () => {
  if (inputBoxLeft == "") {
    inputBoxLeft.focus();
  }
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    inputBoxLeft.value += 9;
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    inputBoxRight.value += 9;
  }
};

const addZero = () => {
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    if (inputBoxLeft.value == "") {
      inputBoxLeft.value += "";
    } else {
      inputBoxLeft.value += 0;
    }
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    if (inputBoxRight.value == "") {
      inputBoxRight.value += "";
    } else {
      inputBoxRight.value += 0;
    }
  }
};

const addDoubleZero = () => {
  if (statusInputBoxLeft == true || statusInputBoxRight == false) {
    if (inputBoxLeft.value == "") {
      inputBoxLeft.value += "";
    } else {
      inputBoxLeft.value += 0;
      addZero();
    }
  } else if (statusInputBoxRight == true || statusInputBoxRight == false) {
    if (inputBoxRight.value == "") {
      inputBoxRight.value += "";
    } else {
      inputBoxRight.value += 0;
      addZero();
    }
  }
};

// Matematic Function

const division = () => {
  operatorInput = "/";
  previewOperator.innerHTML = operatorInput;
  if (inputBoxLeft.value == "") {
    inputBoxLeft.focus();
  } else {
    inputBoxRight.focus();
    statusInputBoxRight = true;
    statusInputBoxLeft = false;
  }
};

const multiplication = () => {
  operatorInput = "x";
  previewOperator.innerHTML = operatorInput;
  if (inputBoxLeft.value == "") {
    inputBoxLeft.focus();
  } else {
    inputBoxRight.focus();
    statusInputBoxRight = true;
    statusInputBoxLeft = false;
  }
};

const substraction = () => {
  operatorInput = "-";
  previewOperator.innerHTML = operatorInput;
  if (inputBoxLeft.value == "") {
    inputBoxLeft.focus();
  } else {
    inputBoxRight.focus();
    statusInputBoxRight = true;
    statusInputBoxLeft = false;
  }
};

const addition = () => {
  operatorInput = "+";
  previewOperator.innerHTML = operatorInput;
  if (inputBoxLeft.value == "") {
    inputBoxLeft.focus();
  } else {
    inputBoxRight.focus();
    statusInputBoxRight = true;
    statusInputBoxLeft = false;
  }
};

const equality = () => {
  const num1 = parseInt(inputBoxLeft.value);
  const num2 = parseInt(inputBoxRight.value);
  switch (operatorInput) {
    case "+":
      result = num1 + num2;
      resultBox.innerHTML = result;
      break;
    case "-":
      result = num1 - num2;
      resultBox.innerHTML = result;
      break;
    case "x":
      result = num1 * num2;
      resultBox.innerHTML = result;
      break;
    case "/":
      result = num1 / num2;
      resultBox.innerHTML = result;
      break;
    default:
  }
  return result;
};
