document.querySelector('#top-left-radius').addEventListener('input', () => {
    const topLeft = document.querySelector('#top-left-radius').value;
    const box = document.querySelector('#box');
    box.style.borderTopLeftRadius = `${topLeft}px`;
})

document.querySelector('#top-right-radius').addEventListener('input', () => {
    const topRight = document.querySelector('#top-right-radius').value;
    const box = document.querySelector('#box');
    box.style.borderTopRightRadius = `${topRight}px`;
})

document.querySelector('#bottom-left-radius').addEventListener('input', () => {
    const bottomLeft = document.querySelector('#bottom-left-radius').value;
    const box = document.querySelector('#box');
    box.style.borderBottomLeftRadius = `${bottomLeft}px`;
})

document.querySelector('#bottom-right-radius').addEventListener('input', () => {
    const bottomRight = document.querySelector('#bottom-right-radius').value;
    const box = document.querySelector('#box');
    box.style.borderBottomRightRadius = `${bottomRight}px`;
})