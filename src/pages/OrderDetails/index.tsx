import { AddressContainer } from './components/AddressContainer'
import { SelectedCoffeeDetails } from './components/SelectedCoffeeDetails'
import { OrderDetailsContainer } from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/orderContext'
import { useNavigate } from 'react-router-dom'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o cep'),
  rua: zod.string().min(3, 'Informe a rua'),
  numero: zod.number().min(1).max(100000),
  complemento: zod.number().min(1).max(10000).optional(),
  bairro: zod.string().min(3, 'Informe o bairro'),
  cidade: zod.string().min(3, 'Informe a cidade'),
  uf: zod.string().min(2).max(2, 'Informe a UF'),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function OrderDetails() {
  const { createNewOrder } = useContext(OrderContext)

  const navigate = useNavigate()

  function navigateToConfirmedOrderPage() {
    navigate('/confirmedorder')
  }

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const { handleSubmit } = newOrderForm

  function handleCreateNewOrder({
    cep,
    bairro,
    cidade,
    numero,
    rua,
    uf,
    complemento,
  }: NewOrderFormData) {
    const newOrder = {
      cep,
      bairro,
      cidade,
      numero,
      rua,
      uf,
      complemento,
    }

    createNewOrder(newOrder)
    navigateToConfirmedOrderPage()
  }

  return (
    <FormProvider {...newOrderForm}>
      <OrderDetailsContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
        <AddressContainer />
        <SelectedCoffeeDetails />
      </OrderDetailsContainer>
    </FormProvider>
  )
}
