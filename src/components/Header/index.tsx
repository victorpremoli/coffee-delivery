import logoImg from '../../assets/Logo.svg'
import '../Header/index.css'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <img src={logoImg} alt="Logo Coffee Delivery" />
        <div className="actions">
          <span className="location">
            <MapPin size={22} weight="fill" />
            Eunápolis, Ba
          </span>
          <a href="/cart">
            <span className="cart">
              <ShoppingCart size={22} weight="fill" />
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
