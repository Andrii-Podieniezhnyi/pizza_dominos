import { pizzaUser, pizzaBD, topping_count} from "./data-pizza.js";

const table = document.querySelector(".table");



const pizzaSelectSize = (e) => {
    if(e.target.tagName === "INPUT" && e.target.checked){
        pizzaUser.size = pizzaBD.size.find(el=>el.name === e.target.id);
    }
    show(pizzaUser)
};


if(window.matchMedia("(max-width: 1024px)").matches) {             // 

    const source = document.querySelector(".ingridients");
    source.addEventListener("click", (elem) => {
        switch (elem.target.id) {
            case "sauceClassic" : pizzaUser.sauce = pizzaBD.sauce.find(el => el.name === elem.target.id);
            break;

            case "sauceBBQ" : pizzaUser.sauce = pizzaBD.sauce.find(el => el.name === elem.target.id);
            break;

            case "sauceRikotta" : pizzaUser.sauce = pizzaBD.sauce.find(el => el.name === elem.target.id);
            break;

            case "cheese_1" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.target.id)), topping_count.cheese_1++;
            break;

            case "cheese_2" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.target.id)), topping_count.cheese_2++;
            break;

            case "cheese_3" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.target.id)), topping_count.cheese_3++;

            break;
            case "telya" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.target.id)), topping_count.telya++;

            break;
            case "tom" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.target.id)), topping_count.tom++;

            break;
            case "mush" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.target.id)), topping_count.mush++;

            break;
        }

        show(pizzaUser);

        if(elem.target.tagName === "IMG"){
            table.insertAdjacentHTML("beforeend",`<img src="${elem.target.src}" alt = "${elem.target.id}">`)                              // додавання зображення до коржа

            let images = Array.from(table.querySelectorAll("div.table > img"));                                             // формуємо масив зображень 


            let filtered_sauce = images.filter(function(images){                                                            // фільтрація масиву зображень за соусами
                return images.alt === "sauceClassic" || images.alt === "sauceBBQ" || images.alt === "sauceRikotta"
            })

            if(filtered_sauce[1] != null){                                                                                  // видалення забраження попереднього соусу при додаванні наступного 
                 filtered_sauce[1].parentNode.removeChild(filtered_sauce[0]);
            }
        }
    }
    )

} else {
    
    const source = document.querySelector(".ingridients");           // drag & drop

    source.addEventListener("dragstart", (e) => {
       
        e.dataTransfer.setData("Text", e.target.id);
    }, false);

    table.addEventListener("dragover", (e) => {
        if (e.preventDefault) e.preventDefault();
        return false
    }, false)



    table.addEventListener("drop", (e) => {

        if (e.preventDefault) e.preventDefault();
        if (e.stopPropagation) e.stopPropagation();
        e.target.style.border = "";
        let id = e.dataTransfer.getData("Text");
        let elem = document.getElementById(id);
        


            switch (elem.id) {
                case "sauceClassic" : pizzaUser.sauce = pizzaBD.sauce.find(el => el.name === elem.id);
                break;

                case "sauceBBQ" : pizzaUser.sauce = pizzaBD.sauce.find(el => el.name === elem.id);
                break;

                case "sauceRikotta" : pizzaUser.sauce = pizzaBD.sauce.find(el => el.name === elem.id);
                break;

                case "cheese_1" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.id)), topping_count.cheese_1++;
                break;

                case "cheese_2" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.id)), topping_count.cheese_2++;
                break;

                case "cheese_3" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.id)), topping_count.cheese_3++;

                break;
                case "telya" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.id)), topping_count.telya++;

                break;
                case "tom" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.id)), topping_count.tom++;

                break;
                case "mush" : pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === elem.id)), topping_count.mush++;

                break;
            }



        show(pizzaUser);

        if(e.target.tagName === "IMG"){
            table.insertAdjacentHTML("beforeend",`<img src="${elem.src}" alt = "${elem.id}">`)                              // додавання зображення до коржа

            let images = Array.from(table.querySelectorAll("div.table > img"));                                             // формуємо масив зображень 


            let filtered_sauce = images.filter(function(images){                                                            // фільтрація масиву зображень за соусами
                return images.alt === "sauceClassic" || images.alt === "sauceBBQ" || images.alt === "sauceRikotta"
            })

            if(filtered_sauce[1] != null){                                                                                  // видалення забраження попереднього соусу при додаванні наступного 
                 filtered_sauce[1].parentNode.removeChild(filtered_sauce[0]);
            }
        }


        return false;

    }, false)
}
    






function show (pizzaUser) {
    const price = document.getElementById("price");
    const sauce = document.getElementById("sauce");
    const topping = document.getElementById("topping");
    

    let totalPrice = 0;
    if(pizzaUser.size !== ""){
        totalPrice += parseFloat(pizzaUser.size.price);
    }

    if(pizzaUser.sauce !== ""){
        totalPrice += parseFloat(pizzaUser.sauce.price);
    }
    
    

    if(pizzaUser.topping.length){
        totalPrice += pizzaUser.topping.reduce((a,b)=>a + b.price, 0)
    }

    price.innerText = totalPrice;
   
    if(pizzaUser.sauce !== ""){
        sauce.innerHTML = `<span class="topping">${pizzaUser.sauce.productName}</span>`    
    }


    const filtered_toppingArr = Array.from(new Set(pizzaUser.topping.map(obj => obj.name)))                // фільтрація масиву (без повторів топінгу)
    .map(name => {
        return pizzaUser.topping.find(obj => obj.name === name)
    });






  if(Array.isArray(filtered_toppingArr)){
    topping.innerHTML = filtered_toppingArr.map((el) => `<span class = "topping">${el.productName}<span class = "topping_quantity" id="${el.secondName}"></span><button class = "button_del_quantity" id = "${el.buttonKey}">&#10060</button></span>`).join("");      
} 
    



    
    if(document.getElementById("cheese_ordinary") != null) {
        document.getElementById("cheese_ordinary").innerHTML = topping_count.cheese_1
    }

    if (document.getElementById("feta_cheese") != null) {
        document.getElementById("feta_cheese").innerHTML = topping_count.cheese_2
    }
    
    if (document.getElementById("mozzarella") != null) {
        document.getElementById("mozzarella").innerHTML = topping_count.cheese_3
    }

    if (document.getElementById("beef") != null) {
        document.getElementById("beef").innerHTML = topping_count.telya
    }

    if (document.getElementById("tomatoes") != null) {
        document.getElementById("tomatoes").innerHTML = topping_count.tom
    }
    
    if (document.getElementById("mushrooms") != null) {
        document.getElementById("mushrooms").innerHTML = topping_count.mush
    }

  
///////////////////        кнопки видалення  X        ///////////////////////////////////////


    if (document.querySelector("#cheese_ordinary_button") != null ) {
        document.querySelector("#cheese_ordinary_button").onclick = function(e) {                                 
            if(e.target.id === "cheese_ordinary_button") {
                let a = pizzaUser.topping.find(el=>el.secondName === "cheese_ordinary");
                
                let index = pizzaUser.topping.indexOf(a);
                
                if(index !== -1){
                    pizzaUser.topping.splice(index, 1);
                }
                if(topping_count.cheese_1 > 0){
                    topping_count.cheese_1--
                    
                }
                if(topping_count.cheese_1 === 0){
                    const images =  table.querySelectorAll("div.table > img");
                    let matchingImg = null;
                    images.forEach((img) => {
                        if(img.alt === "cheese_1"){
                            matchingImg = img;
                            matchingImg.parentNode.removeChild(matchingImg)
                        }
                    });
                }
            }
            show(pizzaUser); 
        }  
    }

    
    if (document.querySelector("#feta_cheese_button") != null){
        document.querySelector("#feta_cheese_button").onclick = function(e) {
            if(e.target.id === "feta_cheese_button") {
                let a = pizzaUser.topping.find(el=>el.secondName === "feta_cheese");
                let index = pizzaUser.topping.indexOf(a);
                if(index !== -1){
                    pizzaUser.topping.splice(index, 1);
                }
                if(topping_count.cheese_2 > 0){
                    topping_count.cheese_2--
                }
                if(topping_count.cheese_2 === 0){
                    const images =  table.querySelectorAll("div.table > img");
                    let matchingImg = null;
                    images.forEach((img) => {
                        if(img.alt === "cheese_2"){
                            matchingImg = img;
                            matchingImg.parentNode.removeChild(matchingImg)
                        }
                    });
                }
            }
            show(pizzaUser);
        }
    }


    if (document.querySelector("#mozzarella_button") != null){
        document.querySelector("#mozzarella_button").onclick = function(e) {
            if(e.target.id === "mozzarella_button") {
                let a = pizzaUser.topping.find(el=>el.secondName === "mozzarella");
                let index = pizzaUser.topping.indexOf(a);
                if(index !== -1){
                    pizzaUser.topping.splice(index, 1);
                }
                if(topping_count.cheese_3 > 0){
                    topping_count.cheese_3--
                }
                if(topping_count.cheese_3 === 0){
                    const images =  table.querySelectorAll("div.table > img");
                    let matchingImg = null;
                    images.forEach((img) => {
                        if(img.alt === "cheese_3"){
                            matchingImg = img;
                            matchingImg.parentNode.removeChild(matchingImg)
                        }
                    });
                }
            }
            show(pizzaUser);
        }
    }
    

    if (document.querySelector("#beef_button") != null){
        document.querySelector("#beef_button").onclick = function(e) {
            if(e.target.id === "beef_button") {
                let a = pizzaUser.topping.find(el=>el.secondName === "beef");
                let index = pizzaUser.topping.indexOf(a);
                if(index !== -1){
                    pizzaUser.topping.splice(index, 1);
                }
                if(topping_count.telya > 0){
                    topping_count.telya--
                }
                if(topping_count.telya === 0){
                    const images =  table.querySelectorAll("div.table > img");
                    let matchingImg = null;
                    images.forEach((img) => {
                        if(img.alt === "telya"){
                            matchingImg = img;
                            matchingImg.parentNode.removeChild(matchingImg)
                        }
                    });
                }
            }
            show(pizzaUser);
        }
    }



    if (document.querySelector("#tomatoes_button") != null){
        document.querySelector("#tomatoes_button").onclick = function(e) {
            if(e.target.id === "tomatoes_button") {
                let a = pizzaUser.topping.find(el=>el.secondName === "tomatoes");
                let index = pizzaUser.topping.indexOf(a);
                if(index !== -1){
                    pizzaUser.topping.splice(index, 1);
                }
                if(topping_count.tom > 0){
                    topping_count.tom--
                }
                if(topping_count.tom === 0){
                    const images =  table.querySelectorAll("div.table > img");
                    let matchingImg = null;
                    images.forEach((img) => {
                        if(img.alt === "tom"){
                            matchingImg = img;
                            matchingImg.parentNode.removeChild(matchingImg)
                        }
                    });
                }
            }
            show(pizzaUser);
        }
    }


    if (document.querySelector("#mushrooms_button") != null){
        document.querySelector("#mushrooms_button").onclick = function(e) {
            if(e.target.id === "mushrooms_button") {
                let a = pizzaUser.topping.find(el=>el.secondName === "mushrooms");
                let index = pizzaUser.topping.indexOf(a);
                if(index !== -1){
                    pizzaUser.topping.splice(index, 1);
                }
                if(topping_count.mush > 0){
                    topping_count.mush--
                }
                if(topping_count.mush === 0){
                    const images =  table.querySelectorAll("div.table > img");
                    let matchingImg = null;
                    images.forEach((img) => {
                        if(img.alt === "mush"){
                            matchingImg = img;
                            matchingImg.parentNode.removeChild(matchingImg)
                        }
                    });
                }
            }
            show(pizzaUser);
        }
    }
/////////////////////////////////////////////////////////////////////////////////////////////



    
   
    pizzaUser.price = totalPrice;
    pizzaUser.data = new Date()
}


// Полигаючий блок знижки
const discount_block = document.getElementById("banner");
discount_block.addEventListener("mouseenter", () => {
    const x = Math.random() * (window.innerWidth - discount_block.offsetWidth);
    const y = Math.random() * (window.innerHeight - discount_block.offsetHeight);

    discount_block.style.left = `${x}px`;
    discount_block.style.top = `${y}px`;

})

// Валідація вводу
function validate(pattern, value) {
    return pattern.test(value);
}

export {pizzaSelectSize, show, validate}