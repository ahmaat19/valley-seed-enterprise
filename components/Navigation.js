import Link from 'next/link'
import dynamic from 'next/dynamic'

const navItems = [
  { _id: 1, name: 'Who We Are', path: '/#about' },
  { _id: 2, name: 'Strategy', path: '/#strategy' },
  { _id: 3, name: 'Approach', path: '/#approach' },
  { _id: 4, name: 'Team', path: '/#team' },
  { _id: 5, name: 'Blog', path: '/blog' },
  { _id: 6, name: 'About Us', path: '/#about' },
  { _id: 7, name: 'Contact Us', path: '/#contact' },
]

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary sticky-top'>
      <div className='container'>
        <Link href='/'>
          <a className='navbar-brand'>Valleyseed Enterprise</a>
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            {navItems.map((nav) => (
              <li key={nav._id} className='nav-item'>
                <Link href={nav.path}>
                  <a className='nav-link  ' aria-current='page'>
                    {nav.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default dynamic(() => Promise.resolve(Navigation), { ssr: false })
