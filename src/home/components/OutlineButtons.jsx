import React from 'react'
import Button from './Button'

const OutlineButtons = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='outline' type='primary' >PRIMARY</Button>
      <Button variant='outline' type='secondary'>SECONDARY</Button>
      <Button variant='outline' type='success'>SUCCESS</Button>
      <Button variant='outline' type='danger'>DANGER</Button>
      <Button variant='outline' type='warning'>WARNING</Button>
      <Button variant='outline' type='info'>INFO</Button>
      <Button variant='outline' type='light'>LIGHT</Button>
      <Button variant='outline' type='dark'>DARK</Button>
    </div>
  )
}

export default OutlineButtons