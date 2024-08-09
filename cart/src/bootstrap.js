import faker from 'faker';

const mount = (el) => {
    const carText = `<div>You have ${faker.random.number()} items in your cart`;
    el.innerHTML = carText;
}

// Context/Situation #1
// Development in isolation
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');
    if (el) {
        mount(el);
    }
}

// Context/Situation #2
// Running through container
export { mount };


