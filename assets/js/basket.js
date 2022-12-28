function GetItems(){
    let basket=JSON.parse(localStorage.getItem('products'));
    let html='';
    for(let item of basket){
   html+=`
   <tr>
   <th scope="row">${item.Id}</th>
   <td> <img src=${item.Image} alt=""></td>
   <td>${item.Name}</td>
   <td>${item.count}</td>
   <td>${item.Price}</td>
 </tr>

   `
    }

    document.querySelector('table tbody').innerHTML=html
}
GetItems();