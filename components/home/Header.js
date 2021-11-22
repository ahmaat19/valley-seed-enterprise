import React from 'react'
import Image from 'next/image'
import { FaPage4, FaPagelines, FaSeedling } from 'react-icons/fa'

const Header = () => {
  const buttons = [
    'active in research',
    'plant breeding',
    'seed production',
    'marketing of certified seeds',
  ]

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 my-auto text-center'>
          <h1 className='fw-bold display-1 text-primary'>
            Valleyseed
            <sup className='text-success'>
              <FaSeedling className='fw-light fs-1 mb-5' />
            </sup>
          </h1>
          <h4 className='fw-light display-3 text-primary'>Enterprise</h4>
          <div className='mt-4'>
            {buttons.map((button, index) => (
              <button
                key={index}
                className='btn btn-primary btn-sm shadow-lg m-2 border-0  rounded-pill'
              >
                {button}
              </button>
            ))}
          </div>

          <div className='mt-5'>
            <span className='text-success'>
              <FaPagelines className='fw-light fs-1' />
            </span>
          </div>
        </div>
        <div className='col-md-6 my-auto'>
          <Image
            src='/images/header.png'
            alt='header image'
            width='1000'
            height='1000'
            className='img-fluid'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
