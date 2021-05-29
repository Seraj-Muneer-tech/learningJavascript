function myFunc(click){
    if(click=='hide'){
        document.getElementById("p1").style.display="none"
        document.getElementById("heading").style.fontSize="16px"
    }
    else if(click=='show'){
        document.getElementById("p1").style.display="block"
        document.getElementById("heading").style.fontSize="60px"
    }
}