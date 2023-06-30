import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  members: [],
  status: 'idle',
  nameAtGraduation: '',
  currentName: '',
  email: '',
  
  
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {

    }
    
  },
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions

export default loginSlice.reducer