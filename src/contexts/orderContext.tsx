import { ReactNode, createContext, useReducer } from 'react'

import { SelectedCoffeeReducer } from '../reducers/selectedCoffee/reducer'
import {
  addCoffeeToListAction,
  decreaseCoffeeCounterAction,
  increaseCoffeeCounterAction,
  removeCoffeeFromListAction,
} from '../reducers/selectedCoffee/actions'

interface OrderContextProviderProps {
  children: ReactNode
}

interface SelectedCoffee {
  title: string
  quantity: number
  price: number
}

interface Order {
  selectedCoffee: SelectedCoffee[]
  address: {
    cep: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
  }
  payment: 'credito' | 'debito' | 'dinheiro'
}

interface SelectedCoffeeContextType {
  selectedCoffee: SelectedCoffee[]
  addCoffeeToList: (data: SelectedCoffee) => void
  countCoffeeQuantity: () => number
  increaseCoffeeCounter: (title: string) => void
  decreaseCoffeeCounter: (title: string) => void
  shoppingCartPrice: () => number
  removeCoffee: (title: string) => void
}

export const SelectedCoffeeContext = createContext(
  {} as SelectedCoffeeContextType,
)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [selectedCoffee, dispatch] = useReducer(SelectedCoffeeReducer, [])

  function addCoffeeToList(newCoffee: SelectedCoffee) {
    dispatch(addCoffeeToListAction(newCoffee))
  }

  function increaseCoffeeCounter(title: string) {
    dispatch(increaseCoffeeCounterAction(title))
  }

  function decreaseCoffeeCounter(title: string) {
    dispatch(decreaseCoffeeCounterAction(title))
  }

  function removeCoffee(title: string) {
    dispatch(removeCoffeeFromListAction(title))
  }

  function countCoffeeQuantity() {
    let counter = 0

    selectedCoffee.forEach((item) => {
      counter += item.quantity
    })

    return counter
  }

  function shoppingCartPrice() {
    let totalPrice = 0

    selectedCoffee.forEach((item) => {
      totalPrice += item.price * item.quantity
    })

    return totalPrice
  }

  return (
    <SelectedCoffeeContext.Provider
      value={{
        selectedCoffee,
        addCoffeeToList,
        countCoffeeQuantity,
        increaseCoffeeCounter,
        decreaseCoffeeCounter,
        shoppingCartPrice,
        removeCoffee,
      }}
    >
      {children}
    </SelectedCoffeeContext.Provider>
  )
}
