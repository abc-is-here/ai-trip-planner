import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between px-5'>
      <img src="/logo.svg" alt="Logo"/>
      <div>
        <Button>Sign in</Button>
      </div>
    </div>
  )
}

export default Header