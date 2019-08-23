export const INCREMENT = 'count_increment'
export const DECREMENT = 'count_decrement'
export const RESET = 'count_reset'

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
