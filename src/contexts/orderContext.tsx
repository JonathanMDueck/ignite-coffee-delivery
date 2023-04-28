import { ReactNode, createContext, useState } from 'react'

import { produce } from 'immer'

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

interface OrderContextType {
  selectedCoffee: SelectedCoffee[]
  addCoffeeToList: (data: SelectedCoffee) => void
  countCoffeeQuantity: () => number
  increaseCoffeeCounter: (title: string) => void
  decreaseCoffeeCounter: (title: string) => void
  shoppingCartPrice: () => number
  removeCoffee: (title: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [selectedCoffee, setSelectedCoffee] = useState<SelectedCoffee[]>([])

  function addCoffeeToList({ title, quantity, price }: SelectedCoffee) {
    const coffee = selectedCoffee.findIndex((item) => item.title === title)

    let temporaryList = []

    if (coffee >= 0) {
      temporaryList = produce(selectedCoffee, (draft) => {
        draft[coffee].quantity += quantity
      })
    } else {
      temporaryList = produce(selectedCoffee, (draft) => {
        draft.push({ title, quantity, price })
      })
    }
    setSelectedCoffee(temporaryList)
  }

  function increaseCoffeeCounter(title: string) {
    const coffee = selectedCoffee.findIndex((item) => item.title === title)
    const temporaryList = produce(selectedCoffee, (draft) => {
      draft[coffee].quantity += 1
    })
    setSelectedCoffee(temporaryList)
  }

  function decreaseCoffeeCounter(title: string) {
    const coffee = selectedCoffee.findIndex((item) => item.title === title)

    if (selectedCoffee[coffee].quantity === 1) {
      removeCoffee(title)
    } else {
      const temporaryList = produce(selectedCoffee, (draft) => {
        draft[coffee].quantity -= 1
      })
      setSelectedCoffee(temporaryList)
    }
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

  function removeCoffee(title: string) {
    const updatedCoffee = selectedCoffee.filter((item) => {
      return item.title !== title
    })
    setSelectedCoffee(updatedCoffee)
  }

  return (
    <OrderContext.Provider
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
    </OrderContext.Provider>
  )
}
