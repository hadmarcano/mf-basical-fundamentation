import faker from "faker";

const mount = (el) => {

    let products = '';
    
    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    };
    
    el.innerHTML = products;
}

// Context/Situation #1
// Development in isolation
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el);
    }
}

// Context/Situation #2
// Running through container
export { mount };
