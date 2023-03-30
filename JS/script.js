var keyList = "abcdefghijklmnopqurstuvwxyz1234567890!@#$%^&*";
var temp = "";

//floor = Returns the greatest integer less than or equal to its numeric argument. 
//charAt = Returns the character at the specified index.
//It will be a random number to my keylist length 
function genPassword(pLength){
    temp = "";
    for(var i = 0; i < pLength; i++){
        temp += keyList.charAt(Math.floor(Math.random()*keyList.length));                  
    }
    return temp;
} 

function filform(flength){
    document.gen.output.value = genPassword(flength);  //set the value to buy using genPassword fuction
}
//it will bring the value from filform.