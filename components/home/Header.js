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
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-6 my-auto text-center text-primary'>
          <h1 className='fw-bold display-1 '>
            Valleyseed
            <sup className='text-success'>
              <FaSeedling className='fw-light fs-1 mb-5' />
            </sup>
          </h1>
          <h4 className='fw-light display-3'>Enterprise</h4>
          <div className='mt-4'>
            {buttons.map((button, index) => (
              <button
                key={index}
                className='btn btn-primary btn-sm shadow-lg m-2 border-0 rounded-pill fw-light'
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
            src='/images/header.jpg'
            alt='header image'
            width='500'
            height='500'
            className='img-fluid'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
