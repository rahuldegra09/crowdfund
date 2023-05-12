import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '', 
    deadline: '',
    image: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setIsLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }

  return (
    
    <div className="bg-[#e5e5e5] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}

      
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-red-900 rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Create A Donation Card- </h1>
      </div>
      

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        
        
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Enter Your Name/organisation *"
            placeholder="Rahul Degra"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField 
            labelName="Donation Title *"
            placeholder="ex-Funds For Education,Cancer etc."
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>

        <div class="w-full flex flex-wrap justify-around gap-[40px]">
          <div class="flex-1" >

            <label for="small" class="block mb-2 text-sm font-medium text-gray-500 ">Country</label>
            <select id="small" class="w-full block p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Select Your Country</option>
              <option value="US">India</option>
              <option value="CA">USA</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div class="flex-1" >

            <label for="small" class="block mb-2 text-sm font-medium font-bold text-gray-500 ">Category </label>
            <select id="small" class="w-full block  p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Select a Type</option>
              <option value="US">Education </option>
              <option value="CA">Charity</option>
              <option value="FR">Medical </option>
              <option value="DE">Memorial </option>
              <option value="DE">Emergency</option>
            </select>

          </div>
        </div>
        

        <FormField 
            labelName="Brief about Your Campaign *"
            placeholder="Enter details For Create a Donation Card"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />


        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormField 
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div>

        <FormField 
            labelName="Campaign image * " 
            placeholder="Place image URL of your campaign"
            
            inputType="file" class="hidden" name="image" accept=""
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
            
          />

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#1dc071]"
            />
          </div>
      </form>

    </div>
  )
}

export default CreateCampaign