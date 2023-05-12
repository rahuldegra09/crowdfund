import React from 'react'
import { useNavigate } from 'react-router-dom';
import { connect } from '../assets';

const Footer = () => {
  return (

       <div className="items-center justify-center bg-[#082f49]">
           <div className="h-auto tems-center justify-center">
               <div className="w-auto h-[180px]  text-center items-center justify-center">
                   <h1 className="pt-[40px] pb-[30px] lg:text-7xl md:text-5xl sm:text-3xl font-serif text-4xl capitalize font-bold tracking-wide text-green-300/100">You Can Help Now</h1>
                  <h3 className="mx-[100px] font-sans lg:text-3xl md:text-xl sm:text-lg text-xl text-sky-300/100">Your Small Effort,Big Opportunity For Others !</h3>
                   <hr className="mt-[30px] py-[5px] h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-40 dark:opacity-100" />

               </div>
               <div className=" mt-[60px] ms:mt-[30px] flex  gap-[20px] items-center justify-centre">
                  <div className="h-48  flex justify-centre items-center mb-4 flex-col">
                      <img className="w-[60px] sm:w-[80px] md:w-[502px] lg:w-[802px] h-[100px] text-blue-500  object-contain"
                           src={connect}/>
                           <h3 className="pt-[15px] text-center text-pink-300/100 font-bold">JOIN US</h3>
                      <p className="pt-[15px] text-sm sm:text-lg text-stone-100 text-center">donate some fund to join us.</p>
                   </div>
                  <div className="h-48  px-[10px] flex justify-centre items-center mb-4 flex-col">
                      <img className="w-[60px] sm:w-[80px] md:w-[202px] lg:w-[900px] h-[100px] text-blue-500  object-contain"
                          src={connect} />
                      <h3 className="pt-[15px] text-center text-pink-300/100 font-bold">ABOUT US</h3>
                      <p className="pt-[15px] text-sm sm:text-lg text-stone-100 text-center">Know more what we do for.</p>
                   </div>
                    <div className="h-48  px-[10px] flex justify-centre items-center mb-4 flex-col">
                      <img className="w-[60px] sm:w-[80px] md:w-[502px] lg:w-[802px] h-[100px] text-blue-500  object-contain"
                          src={connect} />
                      <h3 className="pt-[15px] text-center text-pink-300/100 font-bold">FOLLOW US</h3>
                      <p className="pt-[15px] text-sm sm:text-lg text-stone-100 text-centre">follow us for more Queries.</p>

                   </div>

               </div>
           </div>
       </div>
  )
}

export default Footer