/*
    -DOM stands for Document Object Model, and it is what allows
     our javascript to interact with our HTML and CSS of the webpage.

     -every element in the Document-whether it is an HTML doc as a whole, the head, the table with in 
     the document, the table headers -- allparts of the DOM 
     they can all be manlipulated
*/
//Test
let x =10;
console.log(x);

//2. getElementByID
// document.getElementById('testParagraph').style.color = 'blue';
let testParagraph = document.getElementById('testParagraph');
testParagraph.style.color = 'red';

console.log(testParagraph);
/* 
    -getElementById will grab the first HTML element with the specified value- if we have muliple element 
    it wil only grab the first one.
*/
//3. querySelectorAll, innerText, innerHTML, and textContent
console.log(document.querySelectorAll('p.sampleClass'));//querySelectorAll retrunes a Nodelist containing all elements that 
// match this speifice group of selecors. NodeList objects are collection of nodes are simply various items in the HTML doc itself
//document.querySelector('p.sampleClass')[2].innerText
//need to use bracket notation to select an index from the NodeList array, even if there's only one element.
let changeAll = document.querySelectorAll('p.sampleClass');
changeAll.forEach(ptag => {
        // ptag.innerText ='My text has change to a forEach method!';
        // ptag.textContent ='My text has change to a forEach method!';
        ptag.innerHTML = '<h3> My text has change to a forEach method!</h3>';

})
/**
    INNERTEXT vs INNERHTML vs TEXTCONTENT

    -innertxt simply  references or allow us to change the text of a specific elelement. will return only visable texr
    -textContent does the same thing as innerText , bt  will return th FULL text if the 'node'
    -innerHTML allows us to set text as well as HTML elements, which will e nested inside the current HTML element we are referancing 



 */
// console.log(document.getElementById('spanTest').innerText);
// console.log(document.getElementById('spanTest').textContent);

//4. eventListeners -click
// document.getElementById('clickThisButton').addEventListener('click', event => {
//     event.target.style.backgroundColor = 'blue';
//     console.log(event);
//     console.log(event.target);
// })
//CHALLENGE- make button toggle between red and blue 
document.getElementById('clickThisButton').addEventListener('click', event => {
    if(event.target.style.backgroundColor == 'red'){
        event.target.style.backgroundColor = 'blue';
    }else {
        event.target.style.backgroundColor = 'red';
    }
    

})

//5. eventListeners - keyup/ getElementsByTagName
//getElementsByTagName will return all elemenets with the given tag name. We then need to using bracket notation to grab whech element we want to target
console.log(document.getElementsByTagName('p'));
document.getElementsByTagName('p')[1].innerText = 'nothing has been typed';

document.getElementById('nameInput').addEventListener('keyup', event => {
    console.log(event.target.value);
    document.getElementsByTagName('p')[0].innerText = 'Something Changed';

    if (event.target.value == ''){
        document.getElementsByTagName('p')[1].innerText = 'nothing has been typed';
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${event.target.value}`
    }
});