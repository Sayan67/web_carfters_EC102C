import CartEntry from '@/components/CartEntry'
import React from 'react'
import products from '@/lib/products'

function page() {
    return (
        <div className='sm:py-12 sm:px-8 bg-black'>
            <div className='w-full min-h-screen flex justify-center bg-white sm:py-20 rounded-2xl'>
                <div className='w-full p-4 sm:p-0 sm:w-1/2 grow-0 shrink-0 flex flex-col gap-6 sm:gap-28'>
                    {
                        products.map((product, id) =>
                            <div className='border-b-[1px] border-b-neutral-300 pb-6 sm:pb-0 sm:border-none'>
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