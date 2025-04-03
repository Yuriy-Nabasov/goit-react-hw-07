import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        // console.log("PENDING ACTION REDUCER");
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        // console.log("FULFIELD ACTION REDUCER", state, action);
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
