function sam(){
var name = prompt ('what is your name?');
console.log(name);

 
console.log(name.split(""));

const name2 =(`${name.length}`) ;
console.log(name2);
var name4 = 0;
for (let i=0; i<name2; i++){
    name3=name.charAt(i)
console.log(name3);
if (name3=="a" || name3=="e" || name3=="i" || name3=="o" || name3=="u"){
    name4=name4+5
}

else{
    if   (name3=="b" || name3=="c" || name3=="d" || name3=="f" || name3=="g" || name3=="h" || name3=="j" || name3=="k" || name3=="l"  || name3=="m" || name3=="n" || name3=="p" || name3=="q" || name3=="r" || name3=="s" || name3=="t" || name3=="v"  || name3=="w" || name3=="x" || name3=="y" || name3=="z") {
        name4=name4+2
    }
    else {name4=name4+1}
}
} 


    
console.log(name4);

var h1 = document.createElement('h1');
var sam = document.createTextNode('your name value is '+ name4);
h1.setAttribute('id', 'sam');
h1.appendChild(sam);
document.getElementById('flex-box-result').appendChild(h1);
}
function psjp(){
    window.location.replace(window.location.pathname + window.location.search + window.location.hash);
}