import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define your API endpoints for fetching emails and email body here

const fetchEmails = createAsyncThunk('emails/fetchEmails', async () => {
  const response = await fetch('https://flipkart-email-mock.vercel.app/');
  return response.json();
});

const fetchEmailBody = createAsyncThunk('emails/fetchEmailBody', async (emailId) => {
  const response = await fetch(`https://flipkart-email-mock.vercel.app/?id=${emailId}`);
  return response.json();
});

const emailSlice = createSlice({
  name: 'emails',
  initialState: {
    emails: [],
    selectedEmail: null,
    filter: 'all',
  },
  reducers: {
    markAsFavorite: (state, action) => {
      const email = state.emails.list.find((e) => e.id === action.payload);
      if (email) {
        email.isFavorite = !email.isFavorite;
      }
    },
    filterEmails: (state, action) => {
      // Update the filter state based on the action payload
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmails.fulfilled, (state, action) => {
        state.emails = action.payload;
      })
      .addCase(fetchEmailBody.fulfilled, (state, action) => {
        state.selectedEmail = action.payload;
      });
  },
});

export const { markAsFavorite, filterEmails } = emailSlice.actions;
export const selectEmails = (state) => {
  // Apply filters if needed
  return state.emails.emails.list;
};
export const selectSelectedEmail = (state) => state.emails.selectedEmail;

export {fetchEmails, fetchEmailBody}
export default emailSlice.reducer;
