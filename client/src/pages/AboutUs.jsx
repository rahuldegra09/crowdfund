import React from 'react'
import {connect} from '../assets'




const AboutUs = () => {
    return (
     <div>
         <div className="bg-red-900 flex items-center justify-center pb-[30px]">
             <div className="px-auto mx-[50px] container flex flex-col  lg:flex-row items-center">
                 <img className="w-[60px] sm:w-[80px] md:w-[502px] lg:w-[802px] h-[100px] text-blue-500  object-contain"
                        src={connect} />

                    <div className="bg-red-900 w-full p-8 rounded-lg shadow-lg">
                     <h3 className="text-gray-400 text-lg md:text-2xl font-bold mb-4">our Vision</h3>
                     <h1 className="text-3xl md:text-5xl text-gray-900">BE a Surprise</h1>
                 </div>
            </div>
         </div>

            <div className="h-auto bg-gray-400 flex md:flex-row flex-col-reverse  p-4 md:p-8">
                <div className="mt-[50px]  flex flex-col">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-700">Welcome to our website!</h2>
                    <p className="mt-4 md:mt-8 text-lg md:text-xl text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec bibendum urna vel dolor ullamcorper, vel laoreet est suscipit. Sed euismod, eros eget ullamcorper euismod.</p>
                </div>
                <div className="flex items-center flex-col">
                    <img className="w-[100px] sm:w-[80px] md:w-[502px] lg:w-[802px] h-[100px] text-blue-500  object-contain"
                        src={connect} />
                </div>
            </div>


            <div className="bg-[#fcd34d] md:p-8 ">
                <div className='flex pt-[20px]'>
                    <h3 className="text-green-600 ml-[20px] md:mx-[150px]  text-2xl font text-gray-700">Our</h3>
                    <h3 className=" ml-[10px] mb-[60px] text-non-italic text-2xl text-gray-700">Misson</h3>
                </div>
                <p className="mx-[15px] md:mx-[150px] md:mt-8 text-lg md:text-xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec bibendum urna vel dolor ullamcorper, vel laoreet est suscipit. Sed euismod, eros eget ullamcorper euismod,
                    odio lacus bibendum velit, vel accumsan sapien diam ac nulla. Nullam eget turpis non magna malesuada sodales. Duis.</p>
                <a href="#" className="my-[15px] ml-[15px] sm:mx-[30px] md:mx-[180px] px-[80px] inline-block px-6 py-3 font-bold text-white bg-green-500 rounded-lg hover:bg-green-900">
                    Click me!
                </a>
                <img className="mt-[150px] w-[400px] sm:w-[800px] md:w-[502px] lg:w-[802px] h-[300px] object-contain"
                    src={connect} />
            </div>
            <div className='h-full pt-[20px] bg-red-100 h-[500px] items-center flex flex-col'>
                <div className='items-center'>
                <h4 className='text-center'>Meet The Team</h4>
                <div className='flex pt-[20px]'>
                    <h1 className='text-center flex flex-row '>Legends Of  </h1>
                    <h1 className='text-red-600 ml-[10px]'>Coinraise</h1>
                </div>
                </div> 
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 pt-[15px] flex flex-wrap '>
                    <div className='flex flex-col'>
                        <img className="w-[100px] sm:w-[80px] md:w-[502px] lg:w-[802px] h-[100px] text-blue-500  object-contain"
                            src={connect} />
                        <h2 className='mt-[10px] text-stone-1000 text-bold text-center'>Rahul Choudhary</h2>
                            <h4 className='text-center pb-[20px]'>Founder</h4>
                    </div>
                    <div className='flex flex-col'>
                        <img className="w-[100px] sm:w-[80px] md:w-[502px] lg:w-[802px] h-[100px] text-blue-500  object-contain"
                            src={connect} />
                        <h2 className='mt-[10px] text-stone-1000 text-bold text-center'>Sahil Gangwani</h2>
                        <h4 className='text-center pb-[20px]'>Co-Founder</h4>
                    </div>
                    <div className='flex flex-col'>
                        <img className="w-[100px] sm:w-[80px] md:w-[502px] lg:w-[802px] h-[100px] text-blue-500  object-contain"
                            src={connect} />
                        <h2 className='mt-[10px] text-stone-1000 text-bold text-center'>Jayant Kumar</h2>
                        <h4 className='text-center pb-[20px]'>AI-Designer</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs