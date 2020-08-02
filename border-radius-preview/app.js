const tlr = document.querySelector('#top-left-radius');
const trr = document.querySelector('#top-right-radius');
const blr = document.querySelector('#bottom-left-radius');
const brr = document.querySelector('#bottom-right-radius');
const check = document.querySelector('#css-code');
const div =  document.querySelector('.text-container');
const section = div.querySelector('section');
const allInput = document.querySelectorAll('.rad-value');

allInput.forEach(el => {
    el.addEventListener('input', borderChange);
    el.addEventListener('input', textCode)
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
        section.innerHTML = `border-radius: ${tlr.value}`;
    }else if(tlr.value === trr.value && blr.value === brr.value){
        section.innerHTML = `border-top-radius: ${tlr.value} <br>
        border-bottom-radius: ${brr.value}
        `;
    }else if(tlr.value !== trr.value && blr.value === brr.value){
        section.innerHTML =`border-top-left-radius: ${tlr.value} <br> border-top-right-radius: ${trr.value} <br>
        border-bottom-radius: ${brr.value}`;
    }else if(blr.value !== brr.value && tlr.value === trr.value){
        section.innerHTML =`border-bottom-left-radius: ${blr.value} <br> border-bottom-right-radius: ${brr.value} <br>
        border-top-radius: ${trr.value}`;
    }else{
        section.innerHTML = `border-top-left-radius: ${tlr.value} <br> border-top-right-radius: ${trr.value} <br> border-bottom-left-radius: ${blr.value} <br> border-bottom-right-radius: ${brr.value} <br>`;
    }
}

check.addEventListener('click', () => {
    section.classList.toggle('oncheck');
})