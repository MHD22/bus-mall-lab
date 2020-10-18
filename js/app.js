'use strict';
//names of products
var names=[
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep.png',
    'tauntaun',
    'unicorn',
    'usb.gif',
    'water-can',
    'wine-glass'
]

var productsArray=[];
// declare the constructor:
function Product(pName){
    this.productName = pName.includes('.')? pName.slice(0, pName.indexOf('.')) : pName; // check if the pName has an extension? , truncate the string and return the name without the extension
    this.productImagePath = pName.includes('.')? `img/${pName}` : `img/${pName}.jpg`; // check if the pName has an extension  differe of .jpg ... add it as it come, else.. add the .jpg ext.
    this.views =0;
    this.clicks =0; 
    productsArray.push(this); // add this object to the products Array
}

//create instances of Product:
for(let i=0 ; i<names.length ; i++){
    new Product(names[i]);
}

// render three different images at a time..
var img1= document.getElementById('img1');
var img2= document.getElementById('img2');
var img3= document.getElementById('img3');

var product1;
var product2;
var product3;
function renderImages(){

    // get three different random numbers in an array.
    var randArray = getThreeDiffRandom(0 , ( productsArray.length -1 ));
    

    //pick three random products..
    product1 = productsArray[randArray[0]];
    product2 = productsArray[randArray[1]];
    product3 = productsArray[randArray[2]];
    
    // render the products' images
    img1.src=product1.productImagePath;
    img2.src=product2.productImagePath;
    img3.src=product3.productImagePath;

    // add views' value to these products.
    product1.views ++;
    product2.views ++;
    product3.views ++;

}
renderImages();


// add event listener to the images container ...
var imagesContainer = document.getElementById('imgs');

imagesContainer.addEventListener('click',function(event){

    //check which one was clicked..
    var clickedID = event.target.id ;
    
    if(clickedID !== 'imgs'){ // the user didn't click on the images container.
        
        if(clickedID === 'img1'){
            product1.clicks ++ ;  // increase the clicks value for first image if it was clicked
        }
        else if (clickedID ==='img2'){
            product2.clicks ++ ;
        }
        else if (clickedID ==='img3'){
            product3.clicks ++ ;
        }
        renderImages(); // render next new three images..
    }

});







// helper functions:
function randomInt(min,max){
    return Math.floor( Math.random()*(max-min +1) + min);
}
function getThreeDiffRandom(min,max){
    var rand1= randomInt(min,max); // return a random index to pick a random object from the products array..
    var rand2= randomInt(min,max); 
    var rand3= randomInt(min,max);

    while(rand2 === rand1){ //change the second value if its equal the first.

         rand2= randomInt(min,max);
    }
    while(rand3 === rand2 || rand3 === rand1){ //change the second value if its equal the first.

         rand3= randomInt(min,max);
   }

   return [rand1,rand2,rand3]; // return an array of three different random values
}