const mediaQuery = window.matchMedia("(max-width:700px)");


const clicks=()=>{
    
    const clickOut= window;
    let navbar=document.getElementById("navi");
    
    if(navbar.style.display.endsWith("block") &&mediaQuery){
       return clickOut.addEventListener("scroll", ()=>{
            navbar.style.display="none"
        })
    } else{
        navbar.style.display="block"
    };

}

clicks();


// const navslide= ()=>{
//     let btn = document.getElementById("menuslid");
//     let navi = document.getElementById("navi");
//      btn.addEventListener("click", ()=>{
//         if (navi.style.display.endsWith("block") && mediaQuery){
//             navi.style.display="none"
//         } else{
//             navi.style.display="block"
//         }
//      })
// }

// navslide();


