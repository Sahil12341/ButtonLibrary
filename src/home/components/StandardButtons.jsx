import React from 'react'
import Button from './Button'

const StandardButtons = () => {
  return (
    <div className='flex gap-4'>
      <Button variant='filled' type='primary' >PRIMARY</Button>
      <Button variant='filled' type='secondary'>SECONDARY</Button>
      <Button variant='filled' type='success'>SUCCESS</Button>
      <Button variant='filled' type='danger'>DANGER</Button>
      <Button variant='filled' type='warning'>WARNING</Button>
      <Button variant='filled' type='info'>INFO</Button>
      <Button variant='filled' type='light'>LIGHT</Button>
      <Button variant='filled' type='dark'>DARK</Button>
    </div>
  )
}

export default StandardButtons
