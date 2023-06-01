const div1 = document.querySelector('.div1');
const div1Baslik = document.querySelector('.div1Baslik');
const div2Baslik = document.querySelector('.div2Baslik');
const div2 = document.querySelector('.div2');
const container = document.querySelector('.container');



div1.addEventListener('mouseover', () =>{
    container.classList.remove('showBack');
    container.classList.add('showFront');
    div2Baslik.classList.remove('buyuk');
    div1Baslik.classList.add('buyuk');
})

div2.addEventListener('mouseover', () =>{
    container.classList.remove('showFront');
    container.classList.add('showBack');
    div1Baslik.classList.remove('buyuk');
    div2Baslik.classList.add('buyuk');
})


container.addEventListener('mouseout', () =>{
    container.setAttribute('class','container');
    div1Baslik.classList.remove('buyuk');
    div2Baslik.classList.remove('buyuk');
})


