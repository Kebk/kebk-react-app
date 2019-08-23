export const INCREMENT = 'count-increment'
export const DECREMENT = 'count-decrement'
export const RESET = 'count-reset'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function reset() {
  return {
    type: RESET
  }
}
