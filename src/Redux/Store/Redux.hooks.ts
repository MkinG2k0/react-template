import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { RootState } from 'Redux/Store/IRootSate'

export const useStore: TypedUseSelectorHook<RootState> = useSelector
