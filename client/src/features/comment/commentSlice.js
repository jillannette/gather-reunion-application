import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comments: []
  
}

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    getComments: (state) => {

    },
    getComment: (state) => {

    },
    getMemberbyCommentId: (state) => {
    
    },
    deleteComment: (state) => {

    },
    updateComment: (state) => {
      
    }
    

    
  },
})

// Action creators are generated for each case reducer function
export const { getComments, getComment, getMemberByCommentId, deleteComment, updateComment } = commentSlice.actions

export default commentSlice.reducer