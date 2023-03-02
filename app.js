const equalbuttonclick=document.getElementById('result');
const clearbuttonclick=document.getElementById('clearresult');
const textvalue=document.getElementById('textarea');
const backspace=document.getElementById('backspaceclear');


const resultfun=()=>{
    textvalue.value=eval(textvalue.value);
}
const clearfun=()=>{
    if(textvalue.value==''){
    alert('Field is empty');
    }
    else
    {
    textvalue.value='';
    }
    
}
const backclear=()=>{
    const output=textvalue.value.slice(0,-1)
    document.getElementById('textarea').value=output;
}

equalbuttonclick.addEventListener('click',resultfun);
clearbuttonclick.addEventListener('click',clearfun);
backspace.addEventListener('click',backclear);