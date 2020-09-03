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

console.log("We got here! --- 1");
function createLegend(queObject) {
  var legend = document.createElement("legend");
  legend.id = "queID";
  legend.innerHTML = queObject.id;
  return legend;
}

function createID(queObject) {
  var label = document.createElement("label");
  label.id = "que";
  label.innerHTML = queObject.text;
  return label;
}

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

//var queObjectDiv = createDiv(myQuestion[0]);

//document.getElementById("my-form").appendChild(queObjectDiv);

let que = 0;

var x = document.getElementById("btn");

let flag = 0;

let queNo;

for (que, queNo = 5; queNo != 0 && que < myQuestion.length; que++, queNo--) {
  var queObjectDiv = createDiv(myQuestion[que]);
  document.getElementById("quizQuestions").appendChild(queObjectDiv);
}

document.getElementById("btnNext").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  que++;
  for (que, queNo = 5; queNo != 0 && que < myQuestion.length; que++, queNo--) {
    document.getElementById("my-form").appendChild(queAppend);
  }
  if (que == myQuestion.length - 1) {
    flag = 1;
  }
  if (que == myQuestion.length) {
    alert("Submit");
  }
  if (flag == 0) {
    x.value = "Next";
  } else {
    x.value = "Submit";
  }
});

document.getElementById("btnNext").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  que++;
  for (que, queNo = 5; queNo != 0 && que < myQuestion.length; que++, queNo--) {
    document.getElementById("my-form").appendChild(queAppend);
  }
  if (que == myQuestion.length - 1) {
    flag = 1;
  }
  if (que == myQuestion.length) {
    alert("Submit");
  }
  if (flag == 0) {
    x.value = "Next";
  } else {
    x.value = "Submit";
  }
});
