import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface SelectedCoffee {
  title: string
  quantity: number
  price: number
}

export function SelectedCoffeeReducer(state: SelectedCoffee[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_LIST: {
      const coffeeIndex = state.findIndex((item) => {
        return item.title === action.payload.title
      })

      return coffeeIndex < 0
        ? produce(state, (draft) => {
            draft.push(action.payload.newCoffee)
          })
        : produce(state, (draft) => {
            draft[coffeeIndex].quantity += 1
          })
    }

    case ActionTypes.REMOVE_COFFEE_FROM_LIST:
      return state.filter((item) => {
        return item.title !== action.payload.title
      })
    case ActionTypes.INCREASE_COFFEE_COUNTER: {
      const coffeeIndex = state.findIndex((item) => {
        return action.payload.title === item.title
      })
      return produce(state, (draft) => {
        draft[coffeeIndex].quantity++
      })
    }
    case ActionTypes.DECREASE_COFFEE_COUNTER: {
      const coffeeIndex = state.findIndex((item) => {
        return action.payload.title === item.title
      })

      if (state[coffeeIndex].quantity === 1) {
        return state.filter((item) => {
          return item.title !== action.payload.title
        })
      } else {
        return produce(state, (draft) => {
          draft[coffeeIndex].quantity -= 1
        })
      }
    }
    default:
      return state
  }
}
