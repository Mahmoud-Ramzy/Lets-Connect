let hidden=true;

function toggleDropbox(){
    if(hidden){
        document.getElementById("dropbox").style.maxHeight="1000px";
    }
    else{
        document.getElementById("dropbox").style.maxHeight="0px";
    }
    hidden=!hidden;
}
function toggleTheme(){
    document.getElementById("dark-btn").classList.toggle("dark-on");
    document.body.classList.toggle("dark-theme");
    
    if(localStorage.getItem("theme")==="light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}    

//Save the theme after exit from the website
if(localStorage.getItem("theme")==="light"){
    document.getElementById("dark-btn").classList.remove("dark-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")==="dark"){
    document.getElementById("dark-btn").classList.add("dark-on");
    document.body.classList.add("dark-theme");
}
else{//for first time
    localStorage.setItem("theme","light");
}

