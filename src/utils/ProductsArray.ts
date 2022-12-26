type ProductProps = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

const productsArray: ProductProps[] = [
    {
        id: 1,
        title: 'iPhone X',
        desc: 'This is iPhone X',
        type: 'phone',
        capacity: '512',
        price: 1000,
    },
    {
        id: 2,
        title: 'iPhone 14',
        desc: 'This is iPhone 14',
        type: 'phone',
        capacity: '256',
        price: 800,
    },
    {
        id: 3,
        title: 'iPhone 13',
        desc: 'This is iPhone 13',
        type: 'phone',
        capacity: '128',
        price: 700,
    },
    {
        id: 4,
        title: 'iPhone 12',
        desc: 'This is iPhone 12',
        type: 'phone',
        capacity: '64',
        price: 600,
    },
    {
        id: 5,
        title: 'iPhone 11',
        desc: 'This is iPhone 11',
        type: 'phone',
        capacity: '32',
        price: 400,
    },
    {
        id: 6,
        title: 'iPhone 10',
        desc: 'This is iPhone 10',
        type: 'phone',
        capacity: '16',
        price: 300,
    },
]

export default productsArray
