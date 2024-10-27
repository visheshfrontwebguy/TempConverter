const InputValue=document.getElementById("InputValue");
const tofarenheit=document.getElementById('tofarenheit');
const tocelsius=document.getElementById("tocelsius");
let temp;

function convert(){
   document.getElementById("hot").style.display='none';
   document.getElementById("cold").style.display='none';
   document.getElementById("normal").style.display='none';
   if(InputValue.value=='' || isNaN((Number(InputValue.value)))){
    window.alert('Please enter value/Correct Value');}
   else if(!tocelsius.checked && !tofarenheit.checked){
    window.alert('select conversion unit');}
    else{
        if(tocelsius.checked){
            temp=Number(InputValue.value);
            ConAnswer=(temp-32)*(5/9);
            document.getElementById(Cgif(ConAnswer)).style.display='block';
            document.getElementById('ConAnswer').textContent=ConAnswer.toFixed(2)+'°C';
        }
        if(tofarenheit.checked){
            temp=Number(InputValue.value);
            ConAnswer=(temp*(9/5))+32;
            document.getElementById(Fgif(ConAnswer)).style.display='block';
            document.getElementById('ConAnswer').textContent=ConAnswer.toFixed(2)+'°F';
        }
    }

}
function Cgif(t){
    if(t>=40){
        return 'hot';}
    if(t<=20){
        return 'cold';}
    else{
        return 'normal';
    }
}
function Fgif(t){
    if(t>=104){
        return 'hot';}
    if(t<=68){
        return 'cold';}
    else{
        return 'normal';
    }
}

