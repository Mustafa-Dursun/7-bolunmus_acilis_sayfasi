const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const container = document.querySelector('.container');


div1.addEventListener('mouseover', () =>{
    container.classList.remove('showBack');
    container.classList.add('showFront');
})

div2.addEventListener('mouseover', () =>{
    container.classList.remove('showFront');
    container.classList.add('showBack');
})

container.addEventListener('mouseout', () =>{
    container.setAttribute('class','container');
})