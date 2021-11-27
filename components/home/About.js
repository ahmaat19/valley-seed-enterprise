import React from 'react'
// import Image from 'next/image'
import {
  FaBullseye,
  FaCheckCircle,
  FaHandsHelping,
  FaLowVision,
  FaTasks,
} from 'react-icons/fa'

const About = () => {
  const vision = () => (
    <div className='card border-0 shadow'>
      <FaLowVision className='card-img-top fs-1 text-primary' />
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

  const mission = () => (
    <div className='card border-0 shadow'>
      <FaBullseye className='card-img-top fs-1 text-primary' />
      <div className='card-body'>
        <h5 className='card-title fw-bold text-center'>Mission</h5>
        <p className='card-text'>
          Improving community livelihood through sustainable climate smart
          agricultural practices and cutting-edge innovation agriculture
          technologies.
        </p>
      </div>
    </div>
  )

  const coreValues = () => (
    <div className='card border-0 shadow'>
      <FaHandsHelping className='card-img-top fs-1 text-primary' />
      <div className='card-body'>
        <h5 className='card-title fw-bold text-center'>Core Values</h5>
        <p className='card-text'>
          We are sincere, exceptional, ethical and dynamic (SEED)
        </p>
        <ul className='list-group list-group-flush fw-light'>
          <li className='list-group-item '>
            <FaCheckCircle className='mb-1 text-primary' />
            <span className='fw-bold'>Sincere: </span> we do all our work with
            sincerity, honesty and integrity
          </li>

          <li className='list-group-item '>
            <FaCheckCircle className='mb-1 text-primary' />
            <span className='fw-bold'>Exceptional: </span> we excel what we do
            and do it exceptionally
          </li>
          <li className='list-group-item '>
            <FaCheckCircle className='mb-1 text-primary' />
            <span className='fw-bold'>Ethical: </span> all our dealings are
            based on moral principles which makes us ethically sound
          </li>
          <li className='list-group-item '>
            <FaCheckCircle className='mb-1 text-primary' />
            <span className='fw-bold'>Dynamic: </span> we are self-motivated and
            dynamic entity that brings changes
          </li>
        </ul>
      </div>
    </div>
  )

  return (
    <div id='about' className='container my-5'>
      <h4 className='fw-light display-3 text-center text-primary pt-5'>
        Who We Are
      </h4>

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
        <div className='col-lg-4 col-md-6 col-12'>{mission()}</div>
        <div className='col-lg-4 col-md-6 col-12'>{coreValues()}</div>
      </div>

      <div id='strategy' className='row'>
        <div className='col-md-6 my-auto'>
          <h4 className='fw-light display-3 text-primary pt-5'>
            Our Strategic Objectives
          </h4>
          <div className='mt-4'>
            <ul className='list-group list-group-flush fw-light'>
              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                To promote climate smart agriculture practices and adaptation
              </li>

              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                To promote and ensure high quality seed availability within Horn
                of African countries
              </li>
              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                To contribute efforts in reducing food insecurity and
                malnutrition in the Horn of Africa
              </li>
              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                To establish modern plant breeding and high-quality seed
                multiplication system
              </li>

              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                To establish value addition seed selling and marketing system
                within the Horn of Africa
              </li>

              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                To envisage quality research, Vocational trainings and
                Enterprise development
              </li>
            </ul>

            <p>
              we achieve our aim and strategic objectives with a partnership
              model approach, we engage related Governments authorities, United
              Nations specialized agencies such as Food and Agriculture
              Organization (FAO), regional and global research institutions such
              as CGIAR, Trade and Technology institutions, and interested
              enterprise development donor partners.
            </p>
          </div>
        </div>
        <div className='col-md-6 my-auto'>
          <img
            src='/images/objectives.svg'
            alt='objectives image'
            width='500'
            height='500'
            className='img-fluid '
          />
        </div>
      </div>

      <div id='approach' className='row'>
        <div className='col-md-6 my-auto pt-5'>
          <img
            src='/images/approach.svg'
            alt='approach image'
            width='500'
            height='500'
            className='img-fluid '
          />
        </div>
        <div className='col-md-6 my-auto'>
          <h4 className='fw-light display-3 text-primary'>
            Our strategy and approach
          </h4>
          <div className='mt-4'>
            <p>
              Our strategy is to advance climate smart agriculture, to research,
              profile, assort and market seed varieties and implement seed
              bulking and multiplication of selected cereals (maize, sorghum,
              wheat), legumes, vegetables and fruit seeds.
            </p>
          </div>
        </div>
      </div>

      <div className='row' id='team'>
        <div className='col-md-6 my-auto'>
          <h4 className='fw-light display-3 text-primary'>Our Team</h4>
          <div className='mt-4'>
            <p>
              Our team consist of experienced, focused and dedicated
              professionals in the field of agriculture with skill mixes
              matching those required for execution of seed related solutions
            </p>
          </div>
        </div>
        <div className='col-md-6 my-auto'>
          <img
            src='/images/team.svg'
            alt='team image'
            width='500'
            height='500'
            className='img-fluid '
          />
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6 my-auto'>
          <img
            src='/images/strengths.svg'
            alt='strengths image'
            width='500'
            height='500'
            className='img-fluid '
          />
        </div>
        <div className='col-md-6 my-auto'>
          <h4 className='fw-light display-3 text-primary'>Our Strengths</h4>
          <div className='mt-4'>
            <p>
              Affiliated with development, research and learning institutions,
              Valleyseed enterprise is well placed to fulfill value chain,
              enterprise development and job creation, and acts as a bridge
              between public and private sector development. Valleyseed
              enterprise fills the gap between research, adaption and linking to
              value chain through working with farmers, training institutions
              and enterprise development sector
            </p>
            <ul className='list-group list-group-flush fw-light'>
              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                Focusing on climate smart agriculture
              </li>

              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                Seed selection, seed testing and ensuring quality seed
                germination
              </li>
              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                Maintenance and multiplication of the breeder seeds, foundation
                seeds to produce certified seeds
              </li>
              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                Marketing certified seeds and identification of enterprise
                development opportunities
              </li>
              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                Research and development
              </li>
              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                Farmers training through farmer field school and demonstration
                plots
              </li>

              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                Training on Agricultural Vocation Education Students and
                production of training and extension materials
              </li>

              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                Policy advocacy and partnership development
              </li>

              <li className='list-group-item '>
                <FaCheckCircle className='mb-1 text-primary' />
                Exploring and establishing value addition initiative and
                industries
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
