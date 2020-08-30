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
