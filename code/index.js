import { pizzaSelectSize, show, validate} from "./functions.js";    
import { pizzaUser } from "./data-pizza.js"


document.querySelectorAll(".grid input")
    .forEach((input) => {
        if (input.type === "text" || input.type === "tel" || input.type === "email") {
            input.addEventListener("change", () => {
                if (input.type === "text" && validate(/^[А-я-іїґє]{2,}$/i, input.value)) {
                    
                    input.className = ""
                    input.classList.add("success")
                    pizzaUser.userName = input.value
    
                } else if (input.type === "tel" && validate(/^\+380\d{9}$/, input.value)) {
                    
                    input.className = ""
                    input.classList.add("success")
                    pizzaUser.userPhone = input.value
                    
                } else if (input.type === "email" && validate(/^[a-z0-9_.]{3,}@[a-z0-9._]{2,}\.[a-z.]{2,9}$/i, input.value)) {
                    
                    input.className = ""
                    input.classList.add("success")
                    pizzaUser.userEmail = input.value;
                    
                } else {
                    input.classList.add("error")
                }
            })


        } else if (input.type === "reset") {
            input.addEventListener("click", () => {
            })

        } else if (input.type === "button") {
            document.querySelector("#btnSubmit").onclick = function(e) {
                if(pizzaUser.userName != "" && pizzaUser.userPhone != "" && pizzaUser.userEmail != ""){    
                    localStorage.userInfo = JSON.stringify(pizzaUser);
                    console.log(JSON.stringify(pizzaUser));
                    document.location = "./thank_you/index.html"
                } 
            }
        }
    })
    



    

document.querySelector("#pizza")
    .addEventListener("click", pizzaSelectSize);

show(pizzaUser)

