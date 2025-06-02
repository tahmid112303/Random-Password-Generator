let password=document.getElementById('pass')
function GeneratePassword(){
    let chars= "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passLen=15;
    let pass="";
    for(let i=0;i<passLen;i++){
        let RandomNum=Math.floor(Math.random()*chars.length)
        pass+=chars.substring(RandomNum,RandomNum+1)
    }
    password.value=pass
}

function copyPass(){
    let copyText=document.getElementById('pass')
    copyText.select()
    document.execCommand("copy")
    alert("Copied")
}

window.onload = function() {
    password.value = "";
}