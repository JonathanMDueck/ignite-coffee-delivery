import { ReactNode, createContext, useState } from 'react'
import { produce } from 'immer'
interface OrderContextProviderProps {
  children: ReactNode
}

interface Order {
  cep: string
  rua: string
  numero: number
  complemento?: number
  bairro: string
  cidade: string
  uf: string
  payment?: string
}

interface OrderContextType {
  order: Order | undefined
  createNewOrder: (order: Order) => void
  updatePaymentType: (paymenteType: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>({
    cep: '',
    rua: '',
    numero: 0,
    complemento: 0,
    bairro: '',
    cidade: '',
    uf: '',
    payment: '',
  })

  function createNewOrder(newOrder: Order) {
    const tempOrder = {
      ...newOrder,
      payment: order.payment,
    }
    setOrder(tempOrder)
  }

  function updatePaymentType(paymenteType: string) {
    const tempOrder = produce(order, (draft) => {
      draft.payment = paymenteType
    })
    setOrder(tempOrder)
  }

  return (
    <OrderContext.Provider value={{ order, createNewOrder, updatePaymentType }}>
      {children}
    </OrderContext.Provider>
  )
}
