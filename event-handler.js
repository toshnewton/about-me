console.log('INFO: Starting to read JS');

console.log('INFO: Getting access to elements');
const inputElement1 = document.querySelector("#first");
const inputElement2 = document.querySelector("#second");
const btnElement = document.getElementById("calcButton"); 
const ansElement = document.getElementById("answer");

console.log('INFO: Configuring event handlers');
inputElement1.onclick = function () {
 alert("thanks for clicking input 1!");
};
inputElement2.ondblclick =  () => {
 alert("thanks for double clicking input 2!");
};
inputElement2.addEventListener("mouseover",  () => {
 alert("thanks for mousing over input 2!");
});

const repeat = async function (n, s){
    console.log(`Calling function with ${n} and ${s}`);
    let ans = "";
    for (let count=0; count<n; count++){
      ans = ans + s;
      console.log(`  After iteration ${count+1} the answer is ${ans}`);
    }
    return ans;
   }

 btnElement.onclick = async () => {
    const text1 = inputElement1.value;    // values are text!
    const text2 = inputElement2.value;
    const n = parseInt(text1);           // convert as needed
    const h = await repeat(n, text2);
     // use backtics for string interpolation
    ansElement.innerHTML = `Called n=${n} and string=${text2}: ${h}`;
}
   
