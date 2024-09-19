import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  profileImage: "",
  role: "",
  phone: "",
  id: "",
};

interface UserType {
  name: string;
  email: string;
  profileImage: string;
  role: string;
  phone: string;
  id: string;
}

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAdmin: (state, action: PayloadAction<UserType>) => {
      if (action.payload) {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.id = action.payload.id;
        state.phone = action.payload.phone;
        state.profileImage = action.payload.profileImage;
        state.role = action.payload.role;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAdmin } = adminSlice.actions;

export default adminSlice.reducer;
