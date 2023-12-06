


// add-to-cart button // 

let carts = document.querySelectorAll('.button');



for (let i=0; i < carts.length; i++) {
   carts[i] .addEventListener('click', () => {

    cartNumbers(products[i]);
    totalCost(products[i]);

   })

}

function onLoadCartNumbers(){
    

 
}

function cartNumbers (product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');
 
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
 
        localStorage.setItem('cartNumbers', productNumbers +1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

    } else {

        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;

    } 

    setItems(product);

  
    

}






  
onLoadCartNumbers();
localStorage.clear();





                    