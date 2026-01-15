let characters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "0","1","2","3","4","5","6","7","8","9",
  "!","@","#","$","%","^","&","*","(",")",
  "_","+","-","=","{","}","[","]","|",
  ":", ";","<",">","?", "/", "~"
];
let copyBtn1 = document.getElementById("copy-btn1");
let copyBtn2 = document.getElementById("copy-btn2");
let p=0;
function generatePassword(){
    let pass1 = "";
    let pass2 = "";
    for(let i=1; i<=15; i++){
      pass1 += characters[Math.floor(Math.random() * 91)];
      pass2 += characters[Math.floor(Math.random() * 91)];
    }
    copyBtn1.textContent = pass1;
    copyBtn2.textContent = pass2;
    document.getElementById("generate-btn").textContent="Generate another passwords";
    
    if(p==0){
        document.getElementById("length-title").textContent="Click on the password to copy them to clipboard.";
        p=1;
    }
}
let copy1=document.getElementById("copy-btn1");
copy1.addEventListener("click", function(){
    navigator.clipboard.writeText(copyBtn1.textContent);
    alert("Password 1 copied to clipboard!");
});
let copy2=document.getElementById("copy-btn2");
copy2.addEventListener("click", function(){
    navigator.clipboard.writeText(copyBtn2.textContent);
    alert("Password 2 copied to clipboard!");
});