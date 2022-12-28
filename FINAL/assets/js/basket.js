function GetItems(){
    let basket=JSON.parse(localStorage.getItem('products'));

    if(basket.length===0){

    }
    else{
      document.querySelector('.table').classList.remove('d-none')
      
    let html='';
    for(let item of basket){
   html+=`
   
   <tr>
   <th scope="row">${item.Id}</th>
   <td> <img src=${item.Image} alt=""></td>
   <td>${item.Name}</td>
   <td>
   <input type="number" value=${item.Count}>
   </td>
   <td>${item.Price}</td>
 </tr>
   
   
   `
  
    }


    document.querySelector('table tbody').innerHTML=html
}
    }


    
GetItems();



function BasketCount(){
  let basket=JSON.parse(localStorage.getItem('products'));
  document.getElementById('count').innerHTML=basket.length;
}
BasketCount();