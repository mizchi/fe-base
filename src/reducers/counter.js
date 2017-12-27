/* @flow */

// Constants
export const INCREMENT = 'counter/increment'

// Action Creators
export function increment() {
  return {
    type: INCREMENT
  }
}

// Reducer
export type Action = $Call<typeof increment>

export type State = {
  value: number
}

const initialState: State = {
  value: 0
}

// Reducer
export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, value: state.value + 1 }
    }
    default: {
      return state
    }
  }
}
