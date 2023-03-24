import React from 'react'
import NavItem from './NavItem'

export default function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg'>
    <NavItem title="fetured" param="trendings"/>
    <NavItem title="Top Rated" param="TopRated"/>
    </div>
  )
}
