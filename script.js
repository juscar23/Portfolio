const albums=[

[
"images/first-date/1.jpg",
"images/first-date/2.jpg",
"images/first-date/3.jpg",
"images/first-date/4.jpg",
"images/first-date/5.jpg",
"images/first-date/6.jpg",
"images/first-date/7.jpg",
"images/first-date/8.jpg",
"images/first-date/9.jpg",
"images/first-date/10.jpg",
"images/first-date/11.jpg",
"images/first-date/12.jpg",
"images/first-date/13.jpg",
"images/first-date/14.jpg",
"images/first-date/15.jpg",
],

[
"images/adventures/1.jpg",
"images/adventures/3.jpg",
"images/adventures/4.jpg",
"images/adventures/5.jpg",
"images/adventures/6.jpg",
"images/adventures/7.jpg",
"images/adventures/8.jpg",
"images/adventures/9.jpg",
"images/adventures/10.jpg",
"images/adventures/11.jpg",
"images/adventures/12.jpg",
"images/adventures/13.jpg",
"images/adventures/14.jpg",
"images/adventures/15.jpg",
"images/adventures/16.jpg",
"images/adventures/17.jpg",
"images/adventures/18.jpg",
"images/adventures/19.jpg",
"images/adventures/20.jpg",

],

[
"images/food/1.jpg",
"images/food/2.jpg",
"images/food/3.jpg",
"images/food/4.jpg",
"images/food/5.jpg",
"images/food/6.jpg",
"images/food/7.jpg"
]

];

let currentAlbum=0;

let currentImage=0;

function openAlbum(index){

currentAlbum=index;

currentImage=0;

document.getElementById("viewer").style.display="flex";

show();

}

function closeAlbum(){

document.getElementById("viewer").style.display="none";

}

function show(){

document.getElementById("slide").src=albums[currentAlbum][currentImage];

document.getElementById("caption").innerHTML=(currentImage+1)+" / "+albums[currentAlbum].length;

}

function next(){

currentImage++;

if(currentImage>=albums[currentAlbum].length)

currentImage=0;

show();

}

function prev(){

currentImage--;

if(currentImage<0)

currentImage=albums[currentAlbum].length-1;

show();

}

const start=new Date("2024-01-01");

function updateCounter(){

const now=new Date();

const diff=now-start;

const days=Math.floor(diff/86400000);


}

updateCounter();

setInterval(updateCounter,1000);