const min = document.querySelector('#min');
const max = document.querySelector('#max');
const gen = document.querySelector('#gen');
const random = document.querySelector('#random');


gen.addEventListener('click', () =>{
    number = Math.floor(Math.random() * (max.value - min.value) + min.value);
    random.value = number;
})