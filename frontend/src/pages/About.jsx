import React from 'react';
import Title from '../components/Title';
import {assets} from '../assets/assets.js'
import NewsLetter from '../components/NewsLetter.jsx';


const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.hero} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, porro magnam ea praesentium officia perspiciatis quisquam laborum aperiam mollitia repellat alias similique itaque ad, laboriosam necessitatibus ipsa excepturi aliquam? Voluptatem sint incidunt obcaecati provident labore harum ipsa est fuga dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat similique praesentium in cupiditate quibusdam quis aperiam veniam inventore impedit voluptatibus reprehenderit officia, obcaecati rem dolore vero quo rerum minus velit quas cumque quisquam. Tenetur autem corporis sequi ipsum architecto expedita voluptates doloribus, quisquam perspiciatis recusandae, fugiat nobis nesciunt alias!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptatibus qui assumenda autem deleniti, voluptas repellat voluptatum numquam, iusto modi eius obcaecati magni blanditiis dolor sapiente et officia molestiae amet praesentium accusamus quaerat maxime? Suscipit odit ullam repudiandae incidunt placeat corrupti explicabo aliquid esse nostrum facilis reiciendis recusandae, itaque cum.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quantity Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa quos placeat dolore quidem vitae recusandae quo, praesentium iste quod necessitatibus eum possimus, doloremque atque.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa quos placeat dolore quidem vitae recusandae quo, praesentium iste quod necessitatibus eum possimus, doloremque atque.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional customer services:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et culpa quos placeat dolore quidem vitae recusandae quo, praesentium iste quod necessitatibus eum possimus, doloremque atque.</p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About