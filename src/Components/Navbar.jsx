import { Link, useLocation } from "react-router-dom";
import '../css/navbar.css'

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
        <div className='logo'><Link className="logo__link" to='/'>#VANLIFE</Link></div>
        <ul>
            <li className={location.pathname === '/about' ? 'active' : ''}><Link className="link" to='/about'>About</Link></li>
            <li className={location.pathname === '/vans' ? 'active' : ''}><Link className="link" to='/vans'>Vans</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar