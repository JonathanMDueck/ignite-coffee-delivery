import { coffeeImages } from './coffeeImages'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CoffeeCardContainer,
  TagContainer,
  Tag,
  BuyContainer,
  PriceContainer,
  AmountContainer,
} from './styles'
import { useContext, useState } from 'react'
import { SelectedCoffeeContext } from '../../../../contexts/selectedCoffeeContext'

interface CofffeeCardProps {
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export function CoffeeCard({
  title,
  description,
  tags,
  price,
  image,
}: CofffeeCardProps) {
  function getImageSource(imageName: string) {
    return coffeeImages.find((item) => item.title === imageName)?.image
  }

  const { addCoffeeToList } = useContext(SelectedCoffeeContext)

  const [quantity, setQuantity] = useState(0)

  function addCoffee() {
    setQuantity(quantity + 1)
  }

  function dropCoffe() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  function addCoffeeToOrder() {
    const newCoffee = { title, quantity, price }

    addCoffeeToList(newCoffee)

    setQuantity(0)
  }

  return (
    <CoffeeCardContainer>
      <img src={getImageSource(image)} alt="" />
      <TagContainer>
        {tags.map((item) => {
          return <Tag key={item}>{item.toUpperCase()}</Tag>
        })}
      </TagContainer>
      <h2>{title}</h2>
      <p>{description}</p>
      <BuyContainer>
        <PriceContainer>
          <p>R$</p>
          <span>{price}</span>
        </PriceContainer>
        <AmountContainer>
          <Minus size={14} onClick={dropCoffe} />
          <span>{quantity}</span>
          <Plus size={14} onClick={addCoffee} />
        </AmountContainer>
        <button disabled={!quantity} onClick={addCoffeeToOrder}>
          <ShoppingCart weight="fill" size={22} />
        </button>
      </BuyContainer>
    </CoffeeCardContainer>
  )
}
