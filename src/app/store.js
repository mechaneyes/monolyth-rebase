import { configureStore } from '@reduxjs/toolkit'
import idleResetReducer from '../features/idleReset/idleResetSlice'

export default configureStore({
  reducer: {
    idleReset: idleResetReducer
  }
})