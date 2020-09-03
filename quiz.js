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

let que = 0;

/*
document.getElementById("queID").textContent = myQuestion[que].id;
document.getElementById("que").textContent = myQuestion[que].text;
document.getElementById("a").textContent = myQuestion[que].a;
document.getElementById("b").textContent = myQuestion[que].b;
document.getElementById("c").textContent = myQuestion[que].c;
document.getElementById("d").textContent = myQuestion[que].d;

var x = document.getElementById("btn");

let flag = 0;

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  que++;
  if (que < myQuestion.length) {
    document.getElementById("queID").textContent = myQuestion[que].id;
    document.getElementById("que").textContent = myQuestion[que].text;
    document.getElementById("a").textContent = myQuestion[que].a;
    document.getElementById("b").textContent = myQuestion[que].b;
    document.getElementById("c").textContent = myQuestion[que].c;
    document.getElementById("d").textContent = myQuestion[que].d;
    if (que == myQuestion.length - 1) {
      flag = 1;
    }
  } else if (que == myQuestion.length) {
    alert("Submit");
  }
  if (flag == 0) {
    x.value = "Next";
  } else {
    x.value = "Submit";
  }
});
*/

createDiv(myQuestion);

function createDiv(queObject) {
  var queAppend = document.createElement("div");
  var fieldset = document.createElement("fieldset");
  var legend = createLegend(queObject);
  var label = createID(queObject);
  var divA = createOptA(queObject);
  var divB = createOptB(queObject);
  var divC = createOptC(queObject);
  var divD = createOptD(queObject);

  queAppend.appendChild(fieldset);
  fieldset.appendChild(legend);
  fieldset.appendChild(label);
  fieldset.appendChild(divA);
  fieldset.appendChild(divB);
  fieldset.appendChild(divC);
  fieldset.appendChild(divD);
}

function createLegend(queObject) {
  var legend = document.createElement("legend");
  legend.id = "queID";
  legend.innerHTML = myQuestion[que].id;
  return legend;
}

function createID(queObject) {
  var label = document.createElement("label");
  label.id = "que";
  label.innerHTML = myQuestion[que].text;
  return label;
}

function createOptA(queObject) {
  var divA = document.createElement("div");
  divA.className = "divOpt";
  var inputA = document.createElement("input");
  inputA.className = "opt";
  inputA.type = "radio";
  var labelA = document.createElement("label");
  labelA.className = "opt";
  labelA.id = "a";
  labelA.innerHTML = myQuestion[que].a;
  divA.appendChild(inputA);
  divA.appendChild(labelA);
  return divA;
}

function createOptB(queObject) {
  var divB = document.createElement("div");
  divB.className = "divOpt";
  var inputB = document.createElement("input");
  inputB.className = "opt";
  inputB.type = "radio";
  var labelB = document.createElement("label");
  labelB.className = "opt";
  labelB.id = "a";
  labelB.innerHTML = myQuestion[que].b;
  divB.appendChild(inputB);
  divB.appendChild(labelB);
  return divB;
}

function createOptC(queObject) {
  var divC = document.createElement("div");
  divC.className = "divOpt";
  var inputC = document.createElement("input");
  inputC.className = "opt";
  inputC.type = "radio";
  var labelC = document.createElement("label");
  labelC.className = "opt";
  labelC.id = "a";
  labelC.innerHTML = myQuestion[que].c;
  divC.appendChild(inputC);
  divC.appendChild(labelC);
  return divC;
}

function createOptD(queObject) {
  var divD = document.createElement("div");
  divD.className = "divOpt";
  var inputD = document.createElement("input");
  inputD.className = "opt";
  inputD.type = "radio";
  var labelD = document.createElement("label");
  labelD.className = "opt";
  labelD.id = "a";
  labelD.innerHTML = myQuestion[que].d;
  divD.appendChild(inputD);
  divD.appendChild(labelD);
  return divD;
}

/*
var queAppend = document.createElement("div");
var fieldset = document.createElement("fieldset");
var legend = document.createElement("legend");
legend.id = "queID";
legend.innerHTML = myQuestion[que].id;
var label = document.createElement("label");
label.id = "que";
label.innerHTML = myQuestion[que].text;
var divA = document.createElement("div");
divA.className = "divOpt";
var inputA = document.createElement("input");
inputA.className = "opt";
inputA.type = "radio";
var labelA = document.createElement("label");
labelA.className = "opt";
labelA.id = "a";
labelA.innerHTML = myQuestion[que].a;
var divB = document.createElement("div");
divB.className = "divOpt";
var inputB = document.createElement("input");
inputB.className = "opt";
inputB.type = "radio";
var labelB = document.createElement("label");
labelB.className = "opt";
labelB.id = "a";
labelB.innerHTML = myQuestion[que].b;
var divC = document.createElement("div");
divC.className = "divOpt";
var inputC = document.createElement("input");
inputC.className = "opt";
inputC.type = "radio";
var labelC = document.createElement("label");
labelC.className = "opt";
labelC.id = "a";
labelC.innerHTML = myQuestion[que].c;
var divD = document.createElement("div");
divD.className = "divOpt";
var inputD = document.createElement("input");
inputD.className = "opt";
inputD.type = "radio";
var labelD = document.createElement("label");
labelD.className = "opt";
labelD.id = "a";
labelD.innerHTML = myQuestion[que].d;

queAppend.appendChild(fieldset);
fieldset.appendChild(legend);
fieldset.appendChild(label);
fieldset.appendChild(divA);
divA.appendChild(inputA);
divA.appendChild(labelA);
fieldset.appendChild(divB);
divB.appendChild(inputB);
divB.appendChild(labelB);
fieldset.appendChild(divC);
divC.appendChild(inputC);
divC.appendChild(labelC);
fieldset.appendChild(divD);
divD.appendChild(inputD);
divD.appendChild(labelD);


//document.getElementById("my-form").appendChild(queAppend);

var x = document.getElementById("btn");

let flag = 0;

let queNo;

for (que, queNo = 5; queNo != 0 && que < myQuestion.length; que++, queNo--) {
  document.getElementById("my-form").appendChild(queAppend);
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


*/

/* let que = 0;

document.getElementById("queID").textContent = myQuestion[que].id;
document.getElementById("que").textContent = myQuestion[que].text;
document.getElementById("a").textContent = myQuestion[que].a;
document.getElementById("b").textContent = myQuestion[que].b;
document.getElementById("c").textContent = myQuestion[que].c;
document.getElementById("d").textContent = myQuestion[que].d;

var x = document.getElementById("btn");

let flag = 0;

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  que++;
  if (que < myQuestion.length) {
    document.getElementById("queID").textContent = myQuestion[que].id;
    document.getElementById("que").textContent = myQuestion[que].text;
    document.getElementById("a").textContent = myQuestion[que].a;
    document.getElementById("b").textContent = myQuestion[que].b;
    document.getElementById("c").textContent = myQuestion[que].c;
    document.getElementById("d").textContent = myQuestion[que].d;
    if (que == myQuestion.length - 1) {
      flag = 1;
    }
  } else if (que == myQuestion.length) {
    alert("Submit");
  }
  if (flag == 0) {
    x.value = "Next";
  } else {
    x.value = "Submit";
  }
}); */
