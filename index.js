const button = document.getElementById("menu");
const tranpent= document.getElementById("tranpent-part")
const sidenav = document.getElementById("sidenav");
button.addEventListener(('click'),() =>{
    if (sidenav.style.right==='0vw') {
        sidenav.style.right = '-350vw';
        button.src = "/images/menu.png"

    }
    else{
        sidenav.style.right='0vw';
        button.src = "/images/close.png"

    }
});
tranpent.addEventListener(('click'),() =>{
    if (sidenav.style.right==='0vw') {
        sidenav.style.right = '-350vw';
        button.src = "/images/menu.png"

    }
    else{
        sidenav.style.right='0vw';
        button.src = "/images/close.png"

    }
});