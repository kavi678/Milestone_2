console.log("this is working");

document.getElementById("mu").addEventListener("click", opendrop);

function opendrop() {

document.getElementById("ma").classList.toggle("active");


}


document.getElementById("m").addEventListener("click", opendrop_1);

function opendrop_1() {

document.getElementById("d").classList.toggle("active1");


}


document.getElementById("m1").addEventListener("click", opendrop_2);

function opendrop_2() {

document.getElementById("d1").classList.toggle("active2");
}

document.getElementById("m2").addEventListener("click", opendrop_3);

function opendrop_3() {

document.getElementById("d2").classList.toggle("active3")
}

var ma = document.getElementById("ma");
for (var i = 0; i < m.length; i++) {
  m[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active4");

  });
}
var ma = document.getElementById("ma");
for (var i = 0; i < m.length; i++) {
  m1[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active5");

  });
}
var ma = document.getElementById("ma");
for (var i = 0; i < m.length; i++) {
  m2[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active6");

  });
}
