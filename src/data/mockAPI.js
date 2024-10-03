export function getProducts({ categoryId = null, productId = null } = {}) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (productId) {
                resolve(products.find(product => product.id === productId));
            } else if (categoryId) {
                resolve(products.filter(product => product.category === categoryId));
            } else {
                resolve(products);
            }
        }, 500);
    });
}

const products = [
    {
        id: '1',
        category: 'Fuego',
        name: 'Cenizarr',
        description: 'Un heroe habil para las batallas a distancia.',
        price: '6500',
        imageUrl: '/product-images/cenizarr.webp',
        stock: 10,
    },
    {
        id: '2',
        category: 'Fuego',
        name: 'Hookshows',
        description: 'heroe habil a distancia, habilidades desgastantes.',
        price: '4800',
        imageUrl: '/product-images/Hookshows.webp',
        stock: 10,
    },
    {
        id: '3',
        category: 'Fuego',
        name: 'SpedDoubledagger',
        description: 'Combate cuerpo a cuerpo ligero, debil contra stun.',
        price: '6500',
        imageUrl: '/product-images/SpedDoubledagger.webp',
        stock: 10,
    },
    {
        id: '4',
        category: 'Premium',
        name: 'Paladin-Dragon',
        description: 'excesiva vida, tanque, debil contra heroes que relentizan.',
        price: '6500',
        imageUrl: '/product-images/Paladin-Dragon.webp',
        stock: 10,
    },
    {
        id: '5',
        category: 'Premium',
        name: 'Nerfeus',
        description: 'Habil contra cualquier clase, cada basico disminuye el daño enemigo durante 1 mn.',
        price: '18000',
        imageUrl: '/product-images/Nerfeus.webp',
        stock: 10,
    },
    {
        id: '6',
        category: 'Premium',
        name: 'Noctronen',
        description: 'Amplia velocidad de movimento en la oscuridad, debil contra heroes de Luz.',
        price: '6500',
        imageUrl: '/product-images/Noctronen.webp',
        stock: 10,
    },
    {
        id: '7',
        category: 'Clasico',
        name: 'SpeedArrays',
        description: 'Slow permanente con sus flechas.',
        price: '7000',
        imageUrl: '/product-images/SpeedArrays.webp',
        stock: 10,
    },
    {
        id: '8',
        category: 'Clasico',
        name: 'Morfeus',
        description: 'Curador veloz a distancia, complementar con tanque.',
        price: '4800',
        imageUrl: '/product-images/Morfeus.webp',
        stock: 10,
    },
    {
        id: '9',
        category: 'Clasico',
        name: 'Katarina',
        description: 'Heroina asesina veloz.',
        price: '9800',
        imageUrl: './product-images/Katarina.webp',
        stock: 10,
    },
];

