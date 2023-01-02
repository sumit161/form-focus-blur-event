let cl=console.log;
//||C||D||E||F||G||H||I||J||L||M||N||O||P||Q||R||S||T||U||V||W||X||Y||Z
//fullname
//DOM DECLARATION
const fullname = document.getElementById("fullname");
//CALLBACK FUNCTION
const focusOnfullname = (eve) => {
    eve.target.style.border = "2px solid orange";
}
const blurOnfullname = (eve) => {
    const userString = eve.target.value;
    eve.target.style.border = "2px solid orange";
  
    if(userString.length>=10 && userString.includes(" ") && (userString.indexOf(".")===userString.length-1) && (userString.includes("a") || userString.includes("b")||userString.includes("c") || userString.includes("d")||userString.includes("e") || userString.includes("f")||userString.includes("g") || userString.includes("h")||userString.includes("i") || userString.includes("j")||userString.includes("k") || userString.includes("l")||userString.includes("m") || userString.includes("n")||userString.includes("o") || userString.includes("p")||userString.includes("q") || userString.includes("r")||userString.includes("s") || userString.includes("t")||userString.includes("u") || userString.includes("v")||userString.includes("w") || userString.includes("x")||userString.includes("y") || userString.includes("z"))===false){
        cl(userString.length)
        eve.target.nextElementSibling.classList.remove("d-none");
        eve.target.nextElementSibling.nextElementSibling.classList.add("d-none");
        eve.target.nextElementSibling.style.color ="green";
        eve.target.nextElementSibling.style.fontWeight ="900";

        
    }else{
        cl(userString.length)
        //cl(userString)
        eve.target.style.backgroundColor = "yellow"
        eve.target.nextElementSibling.classList.add("d-none");
        eve.target.nextElementSibling.nextElementSibling.classList.remove("d-none");
        eve.target.nextElementSibling.nextElementSibling.style.color ="red";
        eve.target.nextElementSibling.nextElementSibling.style.fontWeight ="900";
    }
    
}

//EVENT HANDLER
fullname.addEventListener("focus",focusOnfullname)
fullname.addEventListener("blur",blurOnfullname)
//age
//DOM DECLARATION
const age = document.getElementById("age");
//CALLBACK FUNCTION
const focusOnage =(eve) => {
    //cl(eve.target.value)

}//(ageNumber.includes("19") || ageNumber.includes("20") || ageNumber.includes("21"))===true
const blurOnage =(eve) =>{
   let ageNumber = eve.target.value;
    if(ageNumber>=19 && ageNumber<=21 ){
        cl(eve.target.value)
        eve.target.nextElementSibling.nextElementSibling.classList.remove("d-none");
        eve.target.nextElementSibling.classList.add("d-none");
        eve.target.nextElementSibling.nextElementSibling.style.color ="green";
        eve.target.nextElementSibling.nextElementSibling.style.fontWeight ="900";
    }else{
         cl(eve.target.value)
         eve.target.nextElementSibling.nextElementSibling.classList.add("d-none");
         eve.target.nextElementSibling.classList.remove("d-none");
         eve.target.nextElementSibling.style.fontWeight = 900 ;
         eve.target.nextElementSibling.style.color = "red" ;
         eve.target.style.backgroundColor = "yellow" ;
        }
}
//EVENT HANDLER..
age.addEventListener("focus",focusOnage);
age.addEventListener("blur",blurOnage)

//DOM DECLARATION

const email =  document.getElementById("email");
//CALLBACK FUNCTION
const usefocus = (eve) => {
    eve.target.style.border = "2px solid orange";
 }
 const useblur = (eve) => {
     //cl(eve.target.value); //cl(eve.target)  // cl(eve.target.value.length)
    let represent =eve.target.value;
    cl(typeof represent)
     eve.target.style.border  = "2px solid pink";
    if(represent.includes("@")===true && 
    represent.includes(".")===true&& 
    (represent.indexOf("@")>2)&&
    (represent.indexOf(".")-represent.indexOf("@")>3)&&
    (represent.indexOf("com")===(represent.length-3))
    ){
    eve.target.nextElementSibling.nextElementSibling.classList.remove("d-none");
    eve.target.nextElementSibling.nextElementSibling.style.color = "green" ;
    eve.target.nextElementSibling.nextElementSibling.style.fontWeight = 900 ;
     eve.target.nextElementSibling.classList.add("d-none");
    
 }else{
     eve.target.nextElementSibling.classList.remove("d-none");
     eve.target.nextElementSibling.style.fontWeight = 900 ;
     eve.target.nextElementSibling.style.color = "red" ;
     eve.target.style.backgroundColor = "yellow" ;
     eve.target.nextElementSibling.nextElementSibling.classList.add("d-none");
 }
}


//EVENT HANDLER
email.addEventListener("focus",usefocus);
email.addEventListener("blur",useblur);

