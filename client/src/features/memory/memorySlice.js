import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  memories: []
  
}

export const memorySlice = createSlice({
  name: 'memories',
  initialState,
  reducers: {
    getMemories: (state) => {

    },
    getMemory: (state) => {

    },
    getMemberByMemoryId: (state) => {
      
    },
    createMemory: (state, action) => {
      state.push(action.payload)  //check this
    },
    createComment: (state, action) => {
      
    },
    deleteMemory: (state) => {

    },
    updateMemory: (state) => {
      
    }
    

    
  },
})

// Action creators are generated for each case reducer function
export const { getMemories, getMemory, getMemberByMemoryId, createMemory, createComment, deleteMemory, updateMemory } = memorySlice.actions

export default memorySlice.reducer