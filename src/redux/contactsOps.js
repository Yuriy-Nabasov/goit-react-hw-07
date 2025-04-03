import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67ead8da34bcedd95f64c168.mockapi.io";

// Перед запитом: contacts/fetchContacts/pending
// Після успішного запиту: contacts/fetchContacts/fulfield
// Після запиту з помилкою: contacts/fetchContacts/rejected

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    // console.log("fetchContacts operation!");
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {}
  }
);

// console.dir(fetchContacts.fulfilled(5));

// export const addContact =

// export const deleteContact =
