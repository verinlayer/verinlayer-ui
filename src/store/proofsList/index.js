import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataSource: [],
}

const proofsListSlice = createSlice({
  name: 'proofsList',
  initialState,
  reducers: {
    setProofsListState(state, action) {
      const newState = { ...state, ...action.payload }

      return newState
    },
    resetProofsListState: () => initialState,
  },
})

export const { setProofsListState, resetProofsListState } =
  proofsListSlice.actions

export default proofsListSlice.reducer
