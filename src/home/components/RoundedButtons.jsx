import React from 'react'
import Button from './Button'

const RoundedButtons = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='rounded' type='primary' >PRIMARY</Button>
      <Button variant='rounded' type='secondary'>SECONDARY</Button>
      <Button variant='rounded' type='success'>SUCCESS</Button>
      <Button variant='rounded' type='danger'>DANGER</Button>
      <Button variant='rounded' type='warning'>WARNING</Button>
      <Button variant='rounded' type='info'>INFO</Button>
      <Button variant='rounded' type='light'>LIGHT</Button>
      <Button variant='rounded' type='dark'>DARK</Button>
    </div>
  )
}
export default RoundedButtons