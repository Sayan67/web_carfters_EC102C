import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function CartEntry({ url, name, description, cost, quantity, reviews  }: any) {
  return (
      <div className='flex gap-12'>
          <div className='shrink-0  w-[20%] aspect-[3/4] overflow-hidden rounded-lg'>
              <img src={url} className='w-full' />
          </div>
          <div>
              <div className='flex gap-8 mb-4'>
                  <div className='w-[65%]'>
                      <div className='font-space_grotesk font-black text-4xl mb-8'>{name}</div>
                      <div className='font-rorobot_con font-light mb-4'>{description}</div>
                  </div>
                  <div className='w-[35%]'>
                      <div className='font-rorobot_con font-semibold text-4xl mb-8'>
                          {cost}
                      </div>
                      <div className='mb-4'>
                          <div className='font-rorobot_con font-medium mb-2'>Quantity</div>
                          <div className='font-rorobot_con font-light'>{quantity}</div>
                      </div>
                      <div className=''>
                          <div className='font-rorobot_con font-medium mb-2'>Reviews</div>
                          <div className='font-rorobot_con font-light flex gap-2'>
                              {
                                  [1, 2, 3, 4, 5].map((v, id) => (
                                      <span key={id}>
                                          {v <= reviews ? <AiFillStar /> : <AiOutlineStar />}
                                      </span>
                                  ))
                              }
                          </div>
                      </div>
                  </div>
              </div>
              <div className='flex justify-between items-end gap-8'>
                  <div className='flex gap-4 font-light w-[65%] font-questrial'>
                      <button className='bg-black text-white px-4 py-2 uppercase cursor-pointer rounded'>Buy</button>
                      <button className='border-[1px] px-4 py-2 text-neutral-700 border-neutral-400 uppercase cursor-pointer rounded'>Remove</button>
                  </div>
                  <div className='w-[35%]'><a className='font-rorobot_con underline underline-offset-4'>View Product Details</a></div>
              </div>
          </div>
      </div>
  )
}
