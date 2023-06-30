import { fetchMembers } from './memberAPI';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


// Define the initial state of the store
const initialState = {
  members: [],
  loggedIn: false,
  nameAtGraduation: '',
  currentName: '',
  email: '',
  password: '',
  memories: [],
  comments: [],
  bios: [],
  //login,
  //auth,
};

export const fetchMembersAsync = createAsyncThunk('membersSlice/fetchMembers', async (queryData) => {
  const {loggedIn, nameAtGraduation, memories, comments, bios} = queryData;
  console.log('fetchMembersAsync', nameAtGraduation)

const { data } = await fetchMembers(loggedIn, nameAtGraduation, memories, comments, bios)
return data
})

// Define a slice for the members state
const membersSlice = createSlice({
  name: 'members',
  initialState: [],
  reducers: {
    createMember: (state, action) => {
      state.push(action.payload);
    },
    deleteMember: (state, action) => {
      const index = state.findIndex(member => member.id === action.payload);
      state.splice(index, 1);
    },
    updateMember: (state, action) => {
      const index = state.findIndex(member => member.id === action.payload);
      //???
    }
  },
  //getMembers? getMember?
});

// Define a slice for the blogs state
const memoriesSlice = createSlice({
  name: 'memories',
  initialState: [],
  reducers: {
    createMemory: (state, action) => {
      state.push(action.payload);
    },
    deleteBlog: (state, action) => {
      const index = state.findIndex(memory => memory.id === action.payload);
      state.splice(index, 1);
    },
    updateMember: (state, action) => {
      const index = state.findIndex(member => member.id === action.payload);
      //???
    }
  },
  //getMemories?? getMemory??
});

// Define a slice for the comments state
const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    createComment: (state, action) => {
      state.push(action.payload);
    },
    deleteComment: (state, action) => {
      const index = state.findIndex(comment => comment.id === action.payload);
      state.splice(index, 1);
    },
    updateComment: (state, action) => {
      const index = state.findIndex(comment => comment.id === action.payload);
      //???
    }
  },
  //getComments, getComment???
});

// Combine the slices into a single reducer
const reducer = {
  members: membersSlice.reducer,
  memories: memoriesSlice.reducer,
  comments: commentsSlice.reducer,
};

// Create the store
const store = configureStore({ reducer });

// Export the actions for each slice
export const { addMember, removeMember } = membersSlice.actions;
export const { addBlog, removeBlog } = blogsSlice.actions;
export const { addComment, removeComment } = commentsSlice.actions;

export default store;


