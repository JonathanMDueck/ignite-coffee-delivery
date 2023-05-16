import { MapPinLine } from 'phosphor-react'
import {
  CompleteYourOrderContainer,
  AddressInfo,
  AddressInfoContainer,
  CityInput,
  ComplementInput,
  DefaultInput,
  StackedInputs,
  StreetInput,
  UFInput,
} from './styles'
import { PaymentInfo } from '../PaymentInfo'
import { useFormContext } from 'react-hook-form'

export function AddressContainer() {
  const { register } = useFormContext()

  return (
    <CompleteYourOrderContainer>
      <span>Complete seu pedido</span>
      <AddressInfoContainer>
        <AddressInfo>
          <MapPinLine size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </AddressInfo>
        <DefaultInput type="text" placeholder="CEP" {...register('cep')} />
        <StreetInput type="text" placeholder="Rua" {...register('rua')} />
        <StackedInputs>
          <DefaultInput
            type="text"
            placeholder="Número"
            {...register('numero', { valueAsNumber: true })}
          />
          <ComplementInput
            type="text"
            placeholder="Complemento"
            {...register('complemento', { valueAsNumber: true })}
          />
        </StackedInputs>
        <StackedInputs>
          <DefaultInput
            type="text"
            placeholder="Bairro"
            {...register('bairro')}
          />
          <CityInput type="text" placeholder="Cidade" {...register('cidade')} />
          <UFInput type="text" placeholder="UF" {...register('uf')} />
        </StackedInputs>
      </AddressInfoContainer>
      <PaymentInfo />
    </CompleteYourOrderContainer>
  )
}
