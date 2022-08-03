// console.log(document.domain)// for domain
// console.log(document.title);
// console.log(document.URL);
// document.title='her';
// console.log(document.head);
// console.log(document.body);
//  console.log(document.getElementsByTagName('h1'));//for all body tags 
// console.log(document.forms);
// console.log(document.images);



//seclecting methods

// var main=document.getElementById('head');
// console.log(main);
// main.textContent='hello';

//  var baby = document.getElementsByClassName('head');
 // console.log(baby);
// baby[0].style.color = 'green';  // while hitting the variable we have to target the array type index
// baby[0].style.borderBottom='2px black solid';
// var baby1 = document.getElementsByClassName('header');
// baby1[0].style.borderBottom='3px solid blue';
// list1[3].style.backgroundColor='yellow';

// const lis=document.getElementsByClassName('iteams');

// for(var i=0; i<lis.length; i++){

//     lis[i].style.backgroundColor='yellow';


// }



// //querry selector

// var header=document.querySelector('#frame');
// console.log(header);
// header.style.borderBottom='#333 3px solid';
// header.style.borderRadius='5px';

// var input =document.querySelector('input');
// input.value='enter details';

// var input1=document.querySelector('input[type="submit"]');
// input1.value='send'
// input1.style.background='red';




// input1.addEventListener('mouseover',(e)=>{// properties mouseover mouseout click etc
//   e.preventDefault();
// input1.style.background='black';

// });


//querry select all

// var header1=document.querySelectorAll('#frame');
// console.log(header1);
// header1[0].textContent='hello'

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i<odd.length; i++){
// odd[i].style.backgroundColor='yellow';

// }


//traversing the dom



//parentnode

// var ltitem=document.querySelector('.list');
// console.log(ltitem.parentNode);
// ltitem.parentNode.parentNode.parentNode.style.backgroundColor='red'


//parentElement


// var ltitem=document.querySelector('.list');
// console.log(ltitem.parentElement);
// ltitem.parentElement.parentElement.parentElement.style.backgroundColor='red'



//childNodes

// console.log(ltitem.childNodes);
// console.log(ltitem.children);


// for(var i=0; i<ltitem.children.length; i++){
//     ltitem.children[i].style.backgroundColor='yellow';    //children are better than childNodes

// }

//first child
// console.log(ltitem.firstElementChild);

// ltitem.firstElementChild.style.backgroundColor='blue';
// ltitem.firstElementChild.textContent='hello';



// last child

// console.log(ltitem.lastElementChild);

// ltitem.lastElementChild.style.backgroundColor='blue';
// ltitem.lastElementChild.textContent='hello';


// //nextsilibing
// console.log(ltitem.nextSibling);

// //nextElementSibling
// console.log(ltitem.nextElementSibling);

//create element
 

// //create div

// var newdiv=document.createElement('div');



// //adding class and id
// newdiv.className='divclass'
// newdiv.id='divid'

// // add attribute
// newdiv.setAttribute('attribute', 'attributehere');

// // create a text node

// var newdivtxt=document.createTextNode('its textnode');


// // add text to div 
// newdiv.appendChild(newdivtxt);

// // adding to dom
// var container =document.querySelector('header .container1');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newdiv , h1);
 
// console.log(container);



// events
  

// var btn=document.querySelector('.btn1').addEventListener('click',buttonClick);


// function buttonClick(){
//     // console.log('Button clicked');
//     document.querySelector('.head').textContent='changed';
//     document.querySelector('body').style.backgroundColor='#000'
//     document.querySelector('.container').style.backgroundColor='red'
//     document.querySelector('.container').style.boxShadow=('0.5px 15px 15px 0.5px white');


// }


// var btn=document.querySelector('.btn1').addEventListener('click',buttonClick);
var box=document.querySelector('.box');

// function buttonClick(e){
// //  console.log(e.target);
//  console.log(e.target.className);
//     // document.querySelector('.head').textContent='changed';
//     // document.querySelector('body').style.backgroundColor='#000'
//     // document.querySelector('.container').style.backgroundColor='red'
//     // document.querySelector('.container').style.boxShadow=('0.5px 15px 15px 0.5px white');
 var output=document.querySelector('.output');
//     output.innerHTML='<h3>'+e.target.className+'</h3>';
//    console.log(e.ctrlKey)
//    console.log(e.shiftKey)
//    console.log(e.altKey)
//    console.log(e.offsetX)

// }

// box.addEventListener('mouseenter', run);
// // box.addEventListener('mouseleave', run);
// box.addEventListener('mouseover', run);
// // box.addEventListener('mouseout', run);

// box.addEventListener('mousemove', run);



// function run(e){
//     console.log('event :'+e.type);
//     output.innerHTML='<h3>mouseX:'+e.offsetX+'</h3><h3> mouseY:'+e.offsetY+'</h3>';
// }


// function run(e){
//     console.log('event :'+e.type);
//     document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
// }




// for input area


// const run=document.querySelector('input[type="textarea"]');
// // run.addEventListener('input',eventrun);
// // run.addEventListener('cut',eventrun);
// // run.addEventListener('paste',eventrun);
// // run.addEventListener('keyup',eventrun);
// // run.addEventListener('keydown',eventrun);
// // run.addEventListener('focus',eventrun);
// // run.addEventListener('blur',eventrun);


//for selector


// function eventrun(e){
// console.log(e.type)
// document.querySelector('.box').innerHTML='<h1>'+e.target.value+'</h3>';
// }

// var run=document.querySelector('select');
// run.addEventListener('input',eventrun);

// // run.addEventListener('keyup',eventrun);
// // run.addEventListener('keydown',eventrun);
// // run.addEventListener('focus',eventrun);
// // run.addEventListener('blur',eventrun);





// function eventrun(e){
// document.querySelector('.box').innerHTML=('<h2>'+e.target.value+'</h2>');
// document.getElementById('area').value = e.target.value;

// // var run=document.querySelector('input[type="text"]').textContent=(+e.target.value+);
// }





var form =document.querySelector('#add');
var itlist=document.querySelector('#itm');

//form submit event
form.addEventListener('submit', added);
//delete items
itlist.addEventListener('click',remove);




//removing function
function remove(e){
if(e.target.classList.contains('delete')){
    if(confirm('are u sure?')){
        var li=e.target.parentElement;
        itlist.removeChild(li);
    }
}
}



// adding function
function added(e){
    e.preventDefault();

        // get input value
   var add=document.querySelector('#area').value;
  
// creating new li

var li=document.createElement('li')


//add classes
li.className='iteams';


//adding value

li.appendChild(document.createTextNode(add));


// add deleted
var deleteBtn=document.createElement('button')
// add del btn class
deleteBtn.className='delete';
deleteBtn.appendChild(document.createTextNode('X'));

deleteBtn.className='delete';


//append button to li

li.appendChild(deleteBtn);
//append li to list
itlist.appendChild(li);



}


// for filter

var fun=document.querySelector('.eng');
fun.addEventListener('keyup',filt);

function filt(e){
  var text=e.target.value.toLowerCase();

  var items=itlist.getElementsByTagName('li');
console.log(items)

Array.from(items).forEach(function(e1){
var itName=e1.firstChild.textContent;
   
if(itName.toLocaleLowerCase().indexOf(text) !=-1){
e1.style.display='block';
}
else{
    e1.style.display='none';
}
});

}















