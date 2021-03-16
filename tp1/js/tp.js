document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");

     let  target, footer, submit, anne, btn, warning, date
     warning = document.querySelector(".warning");
     submit = document.getElementsByTagName("input")[2]
     target = document.querySelector("ul")
     anne = new Date().getFullYear()
     date = new Date().getFullYear()

     submit.addEventListener("click",(e) =>{
         e.preventDefault()
         let createuser = new user(age, nom)
        createuser.verif()
        
         
    });
    
    
    
     class user {
        constructor(age, nom){
            this.age = document.getElementsByTagName("input")[0].value
            this.nom = document.getElementsByTagName("input")[1].value
        }
        
        getOut(){
            return `${this.age} : ${this.nom}`
        }
        
        
            //Number(prompt("votre age"))
            //document.getElementsByTagName("input")[0].value;

            verif(){if(this.age > anne || !this.nom || !this.age){

                warning.style.display = "block";
                warning.classList.remove("success")
                warning.classList.add("warning")
                warning.textContent = "vous n'etes pas né encore ou remplissez tout les champs"
                
            

            }
            else{
                warning.innerHTML= `<li>bonjour ${this.nom} votre anne de naissance : ${(anne-this.age)}</li>`
                //warning.style.display = "none";
                warning.classList.add("success")
                warning.classList.remove("warning")
                warning.style.display = "block";
                //warning.textContent = "<li>bonjour ${this.nom} votre anne de naissance : ${(anne-this.age)}</li>"


                //warning.classList.add("warning") 
                //warning.classList.remove("success")
            }
        }
        
                //target.innerHTML+=`<ul>${go}</ul>`
                //localStorage.setItem( age)
                
                     /* }
           
                      else{
                        warning.classList.add("warning")
                        target.innerHTML+=`<li>saisi ton age</li>`
               
            }*/
        
                
    
    //instances
   
        }
        date.innerHTML +=`<p>${date}</>  ` 
        
       
});