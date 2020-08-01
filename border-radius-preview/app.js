const tlr = document.querySelector('#top-left-radius');
const trr = document.querySelector('#top-right-radius');
const blr = document.querySelector('#bottom-left-radius');
const brr = document.querySelector('#bottom-right-radius');
const check = document.querySelector('#css-code');

const allInput = document.querySelectorAll('.rad-value');

allInput.forEach(el => {
    el.addEventListener('input', borderChange);
    check.addEventListener('click', () => {
        check.classList.toggle('oncheck');
        if(check.classList.contains('oncheck')){
            el.addEventListener('input', textCode)
        }
    })
})


function borderChange(){
    const box = document.querySelector('#box');
    
    box.style.borderTopLeftRadius = `${tlr.value}`;
    box.style.borderTopRightRadius = `${trr.value}`;
    box.style.borderBottomLeftRadius = `${blr.value}`;
    box.style.borderBottomRightRadius = `${brr.value}`;
}

function textCode(){
    if(tlr.value === trr.value && tlr.value === blr.value && tlr.value === brr.value){
        console.log('same');
    }else if(tlr.value === trr.value){
        console.log('top radius are same');
    }else if(blr.value === brr.value){
        console.log('bottom radius are same');
    }else{
        console.log('not same');
    }
}