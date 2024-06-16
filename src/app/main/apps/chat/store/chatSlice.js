import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getChats } from './chatsSlice';

export const getChat = createAsyncThunk(
  'chatApp/chat/getChat',
  async (contactId, { dispatch, getState }) => {
    const response = await axios.get(`/api/chat/chats/${contactId}`);
    return response.data;
  }
);

export const sendMessage = createAsyncThunk(
  'chatApp/chat/sendMessage',
  async ({ messageText }, { dispatch, getState }) => {
    // Dispatch addUserMessage before making the API request
    dispatch(addUserMessage({ messageText }));

    const response = await axios.post(`http://localhost:8181/api/v1/training/chat?message=${encodeURIComponent(messageText)}`);

    dispatch(getChats());

    return response.data;
  }
);

const chatSlice = createSlice({
  name: 'chatApp/chat',
  initialState: [],
  reducers: {
    removeChat: (state, action) => action.payload,
    addUserMessage: (state, action) => {
      state.push({
        text: action.payload.messageText,
        createdAt: new Date().toISOString(),
        sender: 'user'
      });
    },
    addBotMessage: (state, action) => {
      state.push({
        text: action.payload.message,
        createdAt: action.payload.createdAt || new Date().toISOString(),
        sender: 'bot'
      });
    },
  },
  extraReducers: {
    [getChat.fulfilled]: (state, action) => action.payload,
    [sendMessage.fulfilled]: (state, action) => {
      // Use addBotMessage to handle the bot's response
      state.push({
        text: action.payload.message,
        createdAt: action.payload.createdAt || new Date().toISOString(),
        sender: 'bot'
      });
    },
  },
});

export const { removeChat, addUserMessage, addBotMessage } = chatSlice.actions;

export const selectChat = ({ chatApp }) => chatApp.chat;

export default chatSlice.reducer;
