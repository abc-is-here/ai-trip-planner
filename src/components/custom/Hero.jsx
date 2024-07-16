import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex items-center flex-col mx-56 gap-9'>
        <h1 className='font-extrabold text-[44px] text-center mt-14'>Life is short! But you can still live it to your fullest, <span className='text-[#f56551]'>But How you might ask!</span> Introducing our AI Trip Planner</h1>
        <p className='text-xl text-gray-500'>Explore our website today!</p>
        <Link to={'/create-trip'}>
            <Button>Get Started</Button>
        </Link>
    </div>
  )
}

export default Hero