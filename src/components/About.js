import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../avatar.png'
const About = () => {
  return (
    <section class="py-24 relative text-white flex items-center justify-center">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                    <h2 class="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">I am, Shivanshu Prajapati</h2>
                    <p class="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">As, A Full Stack Developer by MERN Stack. I am learning and practicing my skills by making Projects like this.</p>
                </div>
                <button class="sm:w-fit w-full px-3.5 py-2 bg-blue-600 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <Link class="px-1.5 text-white text-sm font-medium leading-6" to="https://github.com/ShivanshuPrajapati212">Get in Touch</Link>
                </button>
            </div>
            <img class="lg:mx-0 mx-auto rounded-3xl object-cover md:h-96" src={avatar}  alt="about Us image" />
        </div>
    </div>
</section>
  )
}

export default About
