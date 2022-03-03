
import logo from '../logo/logo_hajime.jpg';

const Header = () => {
  return (
    <div className='app-wrapper'>
      <header className=''>
        <nav>
          <ul>
          <img src={logo} alt={"logo"} />
            <li className='nav_li'><a href="#s">Home</a></li>
            <li className='nav_li'><a href="#s">Track</a></li>
            <li className='nav_li'><a href="#s">Clips</a></li>
            <li className='nav_li'><a href="#s">Albums</a></li>
            <li className='nav_li'><a href="#s">About us</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;