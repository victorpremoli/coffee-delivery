import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Coffees } from '../../coffees'

import '../CoffeeList/index.css'

export function CoffeeList() {
  return (
    <div className="coffeeListContainer">
      <h1>Nossos cafés</h1>
      <div className="coffeeListContent">
        {Coffees.map((coffee) => {
          return (
            <div key={coffee.id} className="coffeeCard">
              <img src={coffee.imageUrl} alt="" />
              <div className="coffeeTypes">
                {coffee.types.map((type) => {
                  return <span key={type}>{type}</span>
                })}
              </div>
              <strong>{coffee.name}</strong>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <footer>
                <p>
                  R$ <strong>9,90</strong>
                </p>
                <div className="minusPlus">
                  <button>
                    <Minus weight="bold" />
                  </button>
                  <input type="number" value="1" />
                  <button>
                    <Plus weight="bold" />
                  </button>
                </div>
                <button className="cartButton">
                  <ShoppingCart weight="fill" />
                </button>
              </footer>
            </div>
          )
        })}
      </div>
    </div>
  )
}
