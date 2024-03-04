import CartEntry from '@/components/CartEntry'
import React from 'react'

const elem = [
    {
        name: "White top",
        quantity: 1,
        price: 100,
    },
    {
        name: "Jeans",
        quantity: 1,
        price: 150,
    },
    {
        name: "Black Shirt",
        quantity: 1,
        price: 200,
    },
    {
        name: "Black top",
        quantity: 1,
        price: 180,
    },
    {
        name: "T-shirt",
        quantity: 1,
        price: 100,
    },
]

const product = {
    url: '/images/feature2.jpg',
    name: 'SYR X KRINK KIMONO',
    description: 'Lightweight and supportive, the Nike SB Check Canvas gives you what you need to roam in comfort. The durable canvas fabric up top is paired with a grippy rubber outsole on the bottom to help you stay comfortable on and off your board.',
    cost: '250.00',
    quantity: 2,
    reviews: 3,
}

function page() {
    return (
        <div className='sm:py-12 sm:px-8 bg-black'>
            <div className='w-full min-h-screen flex justify-center bg-white py-20 rounded-2xl'>
                <div className='w-1/2 grow-0 shrink-0 flex flex-col gap-28'>
                    {
                        [1, 2, 3, 5].map((_, id) =>
                            <div>
                                <CartEntry key={id} {...product} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


export default page