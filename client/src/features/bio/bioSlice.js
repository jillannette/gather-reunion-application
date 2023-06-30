import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bios: []
  
}

export const bioSlice = createSlice({
  name: 'bios',
  initialState,
  reducers: {
    getBios: (state) => {

    },
    getBio: (state) => {

    },
    getMemberByBio: (state) => {
    
    },
    createBio: (state,action) => {
      state.push(action.payload)

    },
    deleteBio: (state) => {
      
    },
    updateBio: (state) => {

    }
    

    
  },
})

// Action creators are generated for each case reducer function
export const { getBios, getBio, getMemberByBio, createBio, deleteBio, updateBio, } = bioSlice.actions

export default bioSlice.reducer