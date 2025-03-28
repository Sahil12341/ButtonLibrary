import React from 'react'
import StandardButtons from './standardButtons'
import OutlineButtons from './OutlineButtons'
import RoundedButtons from './RoundedButtons'

const Home = () => {
  return (
    <div className='flex flex-col gap-5 items-center'>
       <StandardButtons />
       <OutlineButtons />
       <RoundedButtons />
    </div>
  )
}

export default Home