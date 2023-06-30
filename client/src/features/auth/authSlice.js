import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
  
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    memberAccess: (state, action) => {

    },
    restrictedAccess: (state,action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { memberAccess, restrictedAccess } = authSlice.actions

export default authSlice.reducer