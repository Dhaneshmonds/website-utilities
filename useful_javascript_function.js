

function isValidGuid(val) {
    let regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    return regexExp.test(val);
}

function getNewGUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


function validateEmail(theForm) {
if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theForm.email-id.value)){
return(true);
}
alert("Invalid e-mail address! Please enter again carefully!.");
return(false);
}

function generateRandomAlphaNum(len) {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
    return  rdmString.substr(0, len);

}


let getRandomNumber = (min, max) => {
     return Math.round(Math.random() * (max - min) + min);
 } 
console.log(getRandomNumber(0, 100));


function escapeHTML(text) {  
    var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", """: "&quot;"};                      
    return text.replace(/[<>&"]/g, function(character) {  
        return replacements[character];  
    }); 
}
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
const dif1 = [1,2,3,4,5,6].diff( [3,4,5] );  
console.log(dif1); // => [1, 2, 6]
