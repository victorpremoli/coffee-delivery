import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import BannerImg from '../../assets/BannerImg.svg'
import '../Banner/index.css'

export function Banner() {
  return (
    <div className="bannerContainer">
      <section className="bannerContent">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="bannerContentTags">
          <div>
            <span>
              {' '}
              <ShoppingCart weight="fill" /> <p>Compra simples e segura</p>{' '}
            </span>
            <span>
              {' '}
              <Timer weight="fill" /> <p>Entrega rápida e rastreada</p>{' '}
            </span>
          </div>
          <div>
            <span>
              {' '}
              <Package weight="fill" /> <p>Embalagem mantém o café intacto</p>{' '}
            </span>
            <span>
              {' '}
              <Coffee weight="fill" /> <p>O café chega fresquinho até você</p>{' '}
            </span>
          </div>
        </div>
      </section>
      <section className="bannerImage">
        <img src={BannerImg} alt="" />
      </section>
    </div>
  )
}
