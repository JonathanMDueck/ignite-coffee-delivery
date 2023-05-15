import { SelectedCoffee } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_LIST = 'ADD_COFFEE_TO_LIST',
  REMOVE_COFFEE_FROM_LIST = 'REMOVE_COFFE_FROM_LIST',
  INCREASE_COFFEE_COUNTER = 'INCREASE_COFFEE_COUNTER',
  DECREASE_COFFEE_COUNTER = 'DECREASE_COFFEE_COUNTER',
}

export function addCoffeeToListAction(newCoffee: SelectedCoffee) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_LIST,
    payload: {
      newCoffee,
    },
  }
}

export function removeCoffeeFromListAction(title: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_LIST,
    payload: {
      title,
    },
  }
}

export function increaseCoffeeCounterAction(title: string) {
  return {
    type: ActionTypes.INCREASE_COFFEE_COUNTER,
    payload: {
      title,
    },
  }
}

export function decreaseCoffeeCounterAction(title: string) {
  return {
    type: ActionTypes.DECREASE_COFFEE_COUNTER,
    payload: {
      title,
    },
  }
}
