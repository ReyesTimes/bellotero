import reqService from './index.js';

export async function getMenu() {
    let { menu } = await reqService({ path: 'app.json' });
    return menu;
}

export async function getTestimonials() {
    let { slider } = await reqService({ path: 'page1.json' });
    return slider;
}

export async function getCalculatorInfo() {
    let res = await reqService({ path: 'page2.json' });
    return res;
}