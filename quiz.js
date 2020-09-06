// Set of Question Object
var myQuestion = [
  {
    id: "Question 1",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "a",
  },
  {
    id: "Question 2",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "b",
  },
  {
    id: "Question 3",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "c",
  },
  {
    id: "Question 4",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "b",
  },
  {
    id: "Question 5",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "d",
  },
  {
    id: "Question 6",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "a",
  },
  {
    id: "Question 7",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "a",
  },
  {
    id: "Question 8",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "b",
  },
  {
    id: "Question 9",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "c",
  },
  {
    id: "Question 10",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "d",
  },
  {
    id: "Question 11",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "a",
  },
  {
    id: "Question 12",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "b",
  },
  {
    id: "Question 13",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "c",
  },
  {
    id: "Question 14",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "b",
  },
  {
    id: "Question 15",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "d",
  },
  {
    id: "Question 16",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "a",
  },
  {
    id: "Question 17",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "a",
  },
  {
    id: "Question 18",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "b",
  },
  {
    id: "Question 19",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "c",
  },
  {
    id: "Question 20",
    text: "This is sample question having answers listed below",
    a: "option a",
    b: "option b",
    c: "option c",
    d: "option d",
    answer: "d",
  },
];

// To Write Question Number
function createLegend(queObject) {
  var legend = document.createElement("legend");
  legend.id = "queID";
  legend.innerHTML = queObject.id;
  return legend;
}

// To Write Question Text
function createID(queObject) {
  var label = document.createElement("label");
  label.id = "que";
  label.innerHTML = queObject.text;
  return label;
}

// To create Option Div
function createOpt(queObject, optAns) {
  var divOpt = document.createElement("div");
  divOpt.className = "divOpt";
  var input = document.createElement("input");
  input.className = "opt";
  input.type = "radio";
  var label = document.createElement("label");
  label.className = "opt";
  label.id = optAns;
  label.innerHTML = queObject[optAns];
  divOpt.appendChild(input);
  divOpt.appendChild(label);
  return divOpt;
}

// Main function
function createDiv(queObject) {
  var queAppend = document.createElement("div");
  queAppend.className = "divQue";
  var fieldset = document.createElement("fieldset");
  var legend = createLegend(queObject);
  var label = createID(queObject);
  var divOptA = createOpt(queObject, "a");
  var divOptB = createOpt(queObject, "b");
  var divOptC = createOpt(queObject, "c");
  var divOptD = createOpt(queObject, "d");

  queAppend.appendChild(fieldset);
  fieldset.appendChild(legend);
  fieldset.appendChild(label);
  fieldset.appendChild(divOptA);
  fieldset.appendChild(divOptB);
  fieldset.appendChild(divOptC);
  fieldset.appendChild(divOptD);
  return queAppend;
}

// To clear Div of question
function clearBox(elementID) {
  var div = document.getElementById(elementID);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

// Set of variables
let que = 0;
let flag = 0;
let queNo;

// To Display first set of question
for (que, queNo = 5; queNo != 0 && que < myQuestion.length; que++, queNo--) {
  var queObjectDiv = createDiv(myQuestion[que]);
  document.getElementById("quizQuestions").appendChild(queObjectDiv);
}

// Next Button Operation
document.getElementById("btnNext").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  if (que < myQuestion.length) {
    clearBox("quizQuestions");
  }
  que += queNo;
  for (que, queNo = 5; queNo != 0 && que < myQuestion.length; que++, queNo--) {
    var queObjectDiv = createDiv(myQuestion[que]);
    document.getElementById("quizQuestions").appendChild(queObjectDiv);
  }
  if (que == myQuestion.length) {
    //alert("Submit");
    flag = 1;
  }
  if (flag == 1) {
    var x = document.getElementById("btnNext");
    x.value = "Submit";
    x.style.padding = "15px"; //For Proper Alignment
    var y = document.getElementById("btnPrev");
    y.style.padding = "15px"; //For Proper Alignment
  }
});

// Previous Button Operation
document.getElementById("btnPrev").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  que++;
  if (que > 6) {
    clearBox("quizQuestions");
  }
  for (
    que = que - 11, queNo = 5;
    queNo != 0 && 10 < que < myQuestion.length;
    que++, queNo--
  ) {
    var queObjectDiv = createDiv(myQuestion[que]);
    document.getElementById("quizQuestions").appendChild(queObjectDiv);
  }
});
