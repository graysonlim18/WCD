/* 
   Revisions Bookstore and Cafe 
   Filename: script.js

   Author:   Grayson Lim Chuan Kai 
   Date:     16/7/2018
   HTML5 and CSS3 Illustrated Unit M, Visual Workshop
 */

 //decalring var belongs to class in html doc
var smallerClick = document.querySelector(".smaller-size");
var normalClick = document.querySelector(".selected-button");
var biggerClick = document.querySelector(".larger-size");
var htmldoc = document.querySelector("html");

//declaring functions 
function smallersize() {
  smallerClick.className = "selected-button";
  htmldoc.className = "smaller-size";
  normalClick.className = "html, default-button";
  biggerClick.className = "larger-size";
}
function largersize(){
  biggerClick.className = "selected-button";
  htmldoc.className = "larger-size";
  normalClick.className = "html, default-button";
  smallerClick.className = "smaller-size";
}
function normalsize(){
  normalClick.className = "selected-button";
  htmldoc.className = "html";
  biggerClick.className = "larger-size";
  smallerClick.className = "smaller-size";
}

//when clicked call the functions
var smallertoClick = smallerClick.addEventListener("click",smallersize);
var biggertoClick = biggerClick.addEventListener("click",largersize);
var normaltoClick = normalClick.addEventListener("click", normalsize);

