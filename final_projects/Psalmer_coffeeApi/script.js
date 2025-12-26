const coffeeImg = document.getElementById('coffeeImg');
const newCoffeeBtn = document.getElementById('newCoffeeBtn');


async function fetchCoffee() {

    // The API URL for a random image
    // Adding a timestamp (?v=...) at the end forces the browser to bypass cache
    const newImageUrl = `https://coffee.alexflipnote.dev/random?v=${new Date().getTime()}`;
//`https://coffee.alexflipnote.dev/random`;
  
    
    // Create a temporary image object to "pre-load" the image
    const tempImage = new Image(); //this creates an instance oof htmlimageelements same as const img = document.createElement("img");
    tempImage.src = newImageUrl;

    tempImage.onload = () => {
        // Once the new image is fully downloaded in the background:
        coffeeImg.src = newImageUrl;
        
    };
}


newCoffeeBtn.addEventListener('click', fetchCoffee);

