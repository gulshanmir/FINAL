

if(localStorage.getItem('products')===null){
    localStorage.setItem('products',JSON.stringify([]))
}


let buttons=document.querySelectorAll('.btn');
 for(let btn of buttons){
    btn.onclick=function(e){
        e.preventDefault();

        let pr_id=e.target.parentElement.parentElement.id;
        let pr_name=e.target.previousElementSibling.previousElementSibling.innerHTML;
        let pr_price=e.target.previousElementSibling.innerHTML;
        let pr_image=e.target.parentElement.previousElementSibling.firstChild.src;
        

        let  basket=JSON.parse(localStorage.getItem('products'));
        let exist_prod=basket.find(pr=>pr.Id==pr_id);
        if(exist_prod===undefined){
            basket.push({
                Id: pr_id,
                Name: pr_name,
                Price: pr_price,
                Image: pr_image,
                Count:1
            })
            document.querySelector('#alert p').innerHTML='Product was added to cart successfully!';
            document.getElementById('alert').style.right='20px';
        }
        else{
            exist_prod.Count +=1;
        }

       
        localStorage.setItem('products',JSON.stringify(basket));
        document.getElementById('alert').style.right='20px'
        BasketCount();
        setTimeout(()=>{
            document.getElementById('alert').style.right='-500px'

        },1500)



    
    
    }
 }


 function BasketCount(){
    let basket=JSON.parse(localStorage.getItem('products'));
    document.getElementById('count').innerHTML=basket.length;
 }
 BasketCount();