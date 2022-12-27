let menu2=document.querySelector('#menu2');
let sidebar=document.querySelector('#sidebar');
let close=document.querySelector('#close');

menu2.addEventListener('click',()=>{
    sidebar.classList.add('active')
    this.style.visibility='hidden'
})

close.addEventListener('click',()=>{
    sidebar.classList.remove('active')
})

let register=document.querySelector('#register')
let login2=document.querySelector('#login2');
 
register.addEventListener('click',()=>{
  login2.classList.toggle('active')
})

let search=document.querySelector('#search');
let search2=document.querySelector('#search2');

search.addEventListener('click',()=>{
    search2.classList.toggle('active')
})