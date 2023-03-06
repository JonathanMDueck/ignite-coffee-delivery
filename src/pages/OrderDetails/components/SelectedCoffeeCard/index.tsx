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

export function SelectedCoffeeCard() {
  return (
    <>
      <CoffeeCard>
        <img src={coffeeImages[0].image} alt="" />
        <Details>
          <span>Expresso Tradicional</span>
          <Actions>
            <AmountContainer>
              <Minus />
              <p>1</p>
              <Plus />
            </AmountContainer>
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </Actions>
        </Details>
        <PriceTag>R$ 9,90</PriceTag>
      </CoffeeCard>
      <CoffeeCard>
        <img src={coffeeImages[0].image} alt="" />
        <Details>
          <span>Expresso Tradicional</span>
          <Actions>
            <AmountContainer>
              <Minus />
              <p>1</p>
              <Plus />
            </AmountContainer>
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </Actions>
        </Details>
        <PriceTag>R$ 9,90</PriceTag>
      </CoffeeCard>
    </>
  )
}
