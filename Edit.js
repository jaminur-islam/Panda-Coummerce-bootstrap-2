/* // h1 color change 
const h1 = document.getElementsByTagName('h1');
for (const heading of h1){
  // console.log(heading.innerText);
  heading.style.color = 'red';
}


// card section er bgcolor change 
const cardSection = document.getElementById('card-section');

cardSection.style.background  = 'pink';
cardSection.style.padding = '10px';



// card er border radius 30 px korlam
const card = document.getElementsByClassName('card');
for(const singlecard of card){
  singlecard.style.borderRadius = '30px';
}




//  btn e click korle console log korbe sorasori btn er moddhe function onclick
function cal() {
  const btn = document.getElementsByClassName('btn');
  console.log('button is clicked')
}





 

// btn e click korle button remove hoye jabe 
const btn = document.getElementsByClassName('btn');
for(const oneBtn of btn){
    console.log(oneBtn.childNodes)
 oneBtn.addEventListener('click' , function(event){
  console.log(event.target.parentNode.removeChild(event.target));
     
 })
} */



const btn = document.getElementsByTagName('button')[6];
console.log(btn);

const input = document.getElementById('input');

input.addEventListener('keyup' , function(event){
  console.log(event.target.value);
})