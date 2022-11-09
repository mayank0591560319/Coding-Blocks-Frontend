
console.log(document);
console.log(document.getElementById(para));
console.log(para);
for(let i=0;i<para.children.length;i++){
    console.log(para.children[i]);
}
const courses=document.getElementById("header");
console.log(Headers);
const liItem=document.querySelectorAll('li');
console.log(liItem);
const myPara=document.querySelector('#para');
console.log(myPara);
const headers=document.getElementById('header');
console.log(headers);
for(let course of courses){
    course.innerText+='-Courses';
}