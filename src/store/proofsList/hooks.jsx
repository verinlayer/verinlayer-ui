import { useSelector } from 'react-redux'

export const useProofsListState = () => {
  const state = useSelector((state) => state.proofsList)

  return state
}
