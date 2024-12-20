import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiRequest = async (url, method = "GET", data = null) => {
  try {
    const response = await axios({ url, method, data });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const fetchContacts = createAsyncThunk("contacts/fetchAll", () =>
  apiRequest("/contacts")
);

export const addContact = createAsyncThunk("contacts/add", (contactObj) =>
  apiRequest("/contacts", "POST", contactObj)
);

export const deleteContact = createAsyncThunk("contacts/delete", (id) =>
  apiRequest(`/contacts/${id}`, "DELETE")
);

export const editContact = createAsyncThunk(
  "contacts/edit",
  ({ id, name, number }) =>
    apiRequest(`/contacts/${id}`, "PATCH", { name, number })
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await apiRequest("/logout", "POST");
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
