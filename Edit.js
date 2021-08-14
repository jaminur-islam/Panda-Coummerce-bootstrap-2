 // h1 color change 
const h1 = document.getElementsByTagName('h1');
for (const heading of h1){
  // console.log(heading.innerText);
  heading.style.color = 'red';
}


// card section er bgcolor change 
const cardSection = document.getElementById('card-section');
cardSection.addEventListener('dblclick' , function(){
  cardSection.style.background  = 'pink';
  cardSection.style.padding = '10px';

})



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
  alert('BUY NOW')   
 })
} 



// form desing js
 const btn2 = document.getElementsByTagName('button')[6];
console.log(btn2);

btn2.addEventListener('click' , function(){
  alert(input.value);
  input.value = '';
})

const input = document.getElementById('input');

input.addEventListener('keyup' , function(event){
 if (event.target.value == 'input'){
   btn2.removeAttribute('disabled');
 }else {
   btn2.setAttribute('disabled' , true);
 }
})

const subscribe = document.getElementById('subscribe');
input.addEventListener('focus' , function(){
  subscribe.style.backgroundColor = 'red';
})
input.addEventListener('blur' , function(){
  subscribe.style.backgroundColor = 'white';
}) 


const img = document.getElementsByTagName('img');
console.log(img);

for(const im of img){
  im.addEventListener('click' , function(){
    im.src = 'bags/bag-2.png';
  })

}