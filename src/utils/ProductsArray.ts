type ProductProps = {
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

const productsArray: ProductProps[] = [
    {
        title: 'iPhone X',
        desc: 'This is iPhone X',
        type: 'phone',
        capacity: '512',
        price: 1000,
    },
    {
        title: 'iPhone 14',
        desc: 'This is iPhone 14',
        type: 'phone',
        capacity: '256',
        price: 800,
    },
    {
        title: 'iPhone 13',
        desc: 'This is iPhone 13',
        type: 'phone',
        capacity: '128',
        price: 700,
    },
    {
        title: 'iPhone 12',
        desc: 'This is iPhone 12',
        type: 'phone',
        capacity: '64',
        price: 600,
    },
    {
        title: 'iPhone 11',
        desc: 'This is iPhone 11',
        type: 'phone',
        capacity: '32',
        price: 400,
    },
    {
        title: 'iPhone 10',
        desc: 'This is iPhone 10',
        type: 'phone',
        capacity: '16',
        price: 30,
    },
]

export default productsArray
