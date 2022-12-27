if(localStorage.getItem('products')===null) {
    localStorage.setItem('products',JSON.stringify([]))
}

let buttons=document.querySelectorAll('.btn');
for(let btn of buttons){
    btn.onclick=function(e){
        e.preventDefault();
        let pr_name=e.target.previousElementSibling.previousElementSibling;
        console.log(pr_name);
    }
}