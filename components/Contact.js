import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = () => (
    <>
      <h5 className='text-uppercase fw-bold'>Head Office</h5>
      <address>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-primary'>
            <FaMapMarkerAlt className='mb-1' />
            Agriculture Training Center (ATC), Luuq Town, Gedo Region, Jubbaland
            State, Somalia
          </li>
          <li className='list-group-item text-primary'>
            <FaPhoneAlt className='mb-1' />
            <Link href='tel:+2521858352'>
              <a className='text-decoration-none'> +252 (1) 85 8352</a>
            </Link>
          </li>
          <li className='list-group-item text-primary'>
            <FaEnvelope className='mb-1' />
            <Link href='mailto:info@valleyseedenterprise.com'>
              <a className='text-decoration-none'>
                {' '}
                info@valleyseedenterprise.com
              </a>
            </Link>
          </li>
        </ul>
      </address>
    </>
  )

  return (
    <div className='container py-5 my-5' id='contact'>
      <h3 className='text-center text-primary display-6 fw-light'>
        Let Us Help You Overshoot Your Goals in the Right Ways.
      </h3>
      <h1 className='text-center display-6 fw-bold text-primary mt-4'>
        Get In Touch
      </h1>
      <div className='row mt-4'>
        <div className='col-md-6 col-12'>{contactInfo()}</div>
        <div className='col-md-6 col-12'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63697.22720392011!2d42.514084868323806!3d3.79346743824102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17c2ab550fd49a41%3A0x3b5653ef00a6ed17!2sLuuq!5e0!3m2!1sen!2sso!4v1638705765282!5m2!1sen!2sso'
            height='400'
            className='w-100'
            loading='lazy'
            style={{ border: '0' }}
            allowFullScreen=''
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
