import React from 'react'
import { FaBullseye } from 'react-icons/fa'

const About = () => {
  const vision = () => (
    <div className='card border-0 shadow'>
      <FaBullseye className='card-img-top fs-1 text-primary' />
      <div className='card-body'>
        <h5 className='card-title fw-bold text-center'>Vision</h5>
        <p className='card-text'>
          To be the leading platform in offering climate smart agriculture
          technologies and training solutions that meets present and future
          needs of the customers.
        </p>
      </div>
    </div>
  )
  return (
    <div className='container mt-5'>
      <h5 className='text-center fw-bold  text-center text-primary'>
        Who We Are
      </h5>

      <div className='row'>
        <div className='col-md-10 mx-auto'>
          <p className='text-center'>
            Valleyseed enterprise is an innovative research and enterprise
            branch of Sayid Mohammed Technical Education College (SaMTEC), and
            active in research, plant breeding, seed production and marketing of
            certified seeds, valley seed was established in 2005 as an Aggrotech
            under SaMTEC. Our aim is to provide Horn of African farmers with
            best quality and high-yielding seed varieties. We focus on formal
            seed systems. Valleyseed enterprise produces and improves both
            hybrid and foundation seed varieties. Valleyseed enterprise has a
            strong research collaboration with Centre for Research and
            Integrated Development (CeRID) and other regional research
            institutions.
          </p>
        </div>
      </div>

      <div className='row mt-4 g-3'>
        <div className='col-lg-4 col-md-6 col-12'>{vision()}</div>
        <div className='col-lg-4 col-md-6 col-12'>{vision()}</div>
        <div className='col-lg-4 col-md-6 col-12'>{vision()}</div>
        <div className='col-lg-4 col-md-6 col-12'>{vision()}</div>
        <div className='col-lg-4 col-md-6 col-12'>{vision()}</div>
        <div className='col-lg-4 col-md-6 col-12'>{vision()}</div>
      </div>
    </div>
  )
}

export default About
