const addItem = []
const addItems = (state = addItem, { type, payload }) => {
  switch (type) {
    case "ADDITEM":
      return [...state, payload]

    case "DELITEM":
      return (state = state.filter(a => {
        return a.id !== payload.id
      }))

    default:
      return state
  }
}
export default addItems
