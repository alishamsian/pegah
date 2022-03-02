import './header.css'
import logo from '../../assets/image/aalto_it.png'

const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header