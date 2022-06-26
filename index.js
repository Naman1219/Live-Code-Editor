var htmlCode, cssCode, jsCode, output;

function run(){
htmlCode = document.getElementById("html-code").value;
cssCode = "<style>" + document.getElementById("css-code").value + "</style>";
jsCode = document.getElementById("js-code").value;
output = document.getElementById("output");

// console.log(htmlCode,cssCode,jsCode,output);

output.contentDocument.body.innerHTML = htmlCode + cssCode;
output.contentWindow.eval(jsCode);

}

document.getElementById("html-code").addEventListener("keyup",run);
document.getElementById("css-code").addEventListener("keyup",run);
document.getElementById("js-code").addEventListener("keyup",run);


//Used getElementById, and removed querySelector from the original code.