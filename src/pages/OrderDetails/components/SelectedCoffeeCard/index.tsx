import { Minus, Plus, Trash } from 'phosphor-react'
import { coffeeImages } from '../../../Home/components/CoffeeCard/coffeeImages'
import {
  AmountContainer,
  Details,
  PriceTag,
  RemoveButton,
  CoffeeCard,
  Actions,
} from './styles'
import { useContext } from 'react'
import { SelectedCoffeeContext } from '../../../../contexts/orderContext'

export function SelectedCoffeeCard() {
  const {
    increaseCoffeeCounter,
    selectedCoffee,
    decreaseCoffeeCounter,
    removeCoffee,
  } = useContext(SelectedCoffeeContext)

  function getImageSource(imageName: string) {
    const image = imageName.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    return coffeeImages.find((item) => item.title === image)?.image
  }

  return (
    <>
      {selectedCoffee.map((item) => {
        return (
          <CoffeeCard key={item.title}>
            <img src={getImageSource(item.title.replaceAll(' ', ''))} alt="" />
            <Details>
              <span>{item.title}</span>
              <Actions>
                <AmountContainer>
                  <Minus onClick={() => decreaseCoffeeCounter(item.title)} />
                  <p>{item.quantity}</p>
                  <Plus onClick={() => increaseCoffeeCounter(item.title)} />
                </AmountContainer>
                <RemoveButton onClick={() => removeCoffee(item.title)}>
                  <Trash size={16} />
                  REMOVER
                </RemoveButton>
              </Actions>
            </Details>
            <PriceTag>R$ {item.price}</PriceTag>
          </CoffeeCard>
        )
      })}
    </>
  )
}
