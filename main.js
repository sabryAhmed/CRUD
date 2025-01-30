let form=document.querySelector('form')



let title=document.querySelector('#title')

 let price=document.querySelector('.price')

 let discount=document.querySelector('.discount')

 let taxes=document.querySelector('.taxes')

 let ads=document.querySelector('.ads')

 let category=document.querySelector('.category')

 let count=document.querySelector('.count')

 let search=document.querySelector('.search')
 let total =document.querySelector('.total')


let container=document.querySelector('tbody')

let btn=document.querySelector('.submit')

let ubdeat=document.querySelector('#ubdeat')



let deletAll=document.querySelector('.deletAll')

let label_2=document.querySelector('.total')

let creat_btn='creat'

let index

let data=[] ;
//  if(localStorage.getItem('products') == null){
//        data=[]
// }else{
//        data=JSON.parse(localStorage.getItem('producs'))

// }

onsubmit=function(e){

       e.preventDefault()
       

       // localStorage.setItem('products',JSON.stringify(data))

       let prodect={
              title:title.value,
              price:price.value,
              taxes:taxes.value,
              ads:ads.value,
              discount:discount.value,
              category:category.value,
              count:count.value,
              search:search.value,
               total:total.innerHTML
       }


       if(title.value != "" && price.value !="" && category.value != "" && count.value < 50 ){

              if (prodect.count > 1){
                     for(var i=0; i < prodect.count;i++){
                            
                            data.push(prodect)
                     }
       
       
       
              }
       
              if( creat_btn ==='creat'){
       
                     data.push(prodect)
              }else{
                     data[index]=prodect
       
                     btn.style.backgroundColor='#519cf3'
                     btn.innerHTML='create'
                     
                     creat_btn='creat'
       
              }
              
              show_data()
            
       }
       
       
       
       
}

function getTotal(){
       
       if(price.value != ""){
              let result= (+price.value + +ads.value +  +taxes.value) - +discount.value; 
              
              total.innerHTML= result;
              total.style.backgroundColor='red';
       

       }else{
               total.innerHTML= '';
               total.style.backgroundColor='gold';

        }

}




function show_data(){
       let items=''
       

              
       for(var i=0;i<data.length;i++){
              
              items+=`
                     <tr>
                     <td>${i+1}</td>
                     <td>${data[i].title}</td>
                     
                     <td>$${data[i].price}</td>
                     <td>${data[i].taxes}</td>
                     <td>${data[i].ads}</td>                      
                     <td>${data[i].discount}</td>                      
                     <td>${data[i].total}</td>                      
                     <td>${data[i].category}</td>                      
                     <td><button onclick="delet_prodect(${i})">delet</button></td> 
                     <td><button class="yallo" id="ubdeat" onclick="Ubdeat_prodects(${i})">UBdeat</button></td> 
                     </tr>
                     
                     
                     `
                     
              }
              container.innerHTML=items
              
              clear_vlaues()  
              delet_All()
         
              
              
              
       }








function delet_prodect(id){
       data.splice(id,1)
       // localStorage.prodect=JSON.stringify(data)
       show_data()
      
}

// let close=document.querySelector('.box')
// function closeCheckBox(){
//        close.style.display='none'

// }


function clear_vlaues(){
       title.value='',
       price.value='',
       discount.value='',
       count.value='',
       taxes.value='',
       ads.value='',
       category.value=''
             
        

}



function Ubdeat_prodects(counter){
       title.value=data[counter].titel,
       price.value=data[counter].price,
       discount.value=data[counter].discount,
       category.value=data[counter].category,
       ads.value=data[counter].ads,
       taxes.value=data [counter].taxes,

       count.value=data[counter].count

       btn.style.backgroundColor='gold'
       btn.innerHTML='Ubdeat Loding....'
       
       
       creat_btn='ubdeat'
       index=counter
       
       
}

// search
let search_='title'
function searchWith(id){
       if( id == 'SearchTitle'){
              search_ = 'title';
              search.placeholder='Search with Title'
       }else{
              search_= 'category';
              search.placeholder='Search with Category'

       }
    


       
}



function searchData(value){
       let items = "";
       if(search_ == 'title'){

              for(var i = 0; i < data.length;i++){
                     if(data[i].title.includes(value)){

                            
                            

                            items+=`
                            <tr>
                            <td>${i+1}</td>
                            <td>${data[i].title}</td>
                            
                            <td>$${data[i].price}</td>
                            <td>${data[i].taxes}</td>
                            <td>${data[i].ads}</td>                      
                            <td>${data[i].discount}</td>                      
                            <td>${data[i].total}</td>                      
                            <td>${data[i].category}</td>                      
                            <td><button onclick="delet_prodect(${i})">delet</button></td> 
                            <td><button class="yallo" id="ubdeat" onclick="Ubdeat_prodects(${i})">UBdeat</button></td> 
                            </tr>
                            
                            
                            `


                     }
              }
              
              
       }else{
              for(var i = 0; i < data.length;i++){
                     if(data[i].category.includes(value)){

                            
                            

                            items+=`
                            <tr>
                            <td>${i+1}</td>
                            <td>${data[i].title}</td>
                            
                            <td>$${data[i].price}</td>
                            <td>${data[i].taxes}</td>
                            <td>${data[i].ads}</td>                      
                            <td>${data[i].discount}</td>                      
                            <td>${data[i].total}</td>                      
                            <td>${data[i].category}</td>                      
                            <td><button onclick="delet_prodect(${i})">delet</button></td> 
                            <td><button class="yallo" id="ubdeat" onclick="Ubdeat_prodects(${i})">UBdeat</button></td> 
                            </tr>
                            
                            
                            `


                     }
              }
              
              
       }
       
       container.innerHTML=items
}
function delet_All(){
       if(data.length > 0){
              deletAll.style.display='block';
              deletAll.style.display='white';
       }else{
              deletAll.style.display='none';

       }
       deletAll.onclick=function(){
              data.splice(0)
              show_data()
       }
}
delet_All()