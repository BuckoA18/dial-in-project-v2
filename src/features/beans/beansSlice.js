import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beanData: {
    name: "",
    roastery: "",
    roastedAt: "",
    roastLevel: "medium",
    flavours: [],
  },
};

const beansSlice = createSlice({
  name: "beans",
  initialState,
  reducers: {
    updateBeanData: (state, action) => {
      const { key, value } = action.payload;

      state.beanData[key] = value;
    },
    resetBeanData: (state) => {
      state.beanData = {
        name: "",
        roastery: "",
        roastedAt: "",
        roastLevel: "medium",
        flavours: [],
      };
    },
    addFlavour: (state, action) => {
      console.log("payload: ", action.payload);
      state.beanData.flavours.push(action.payload);
    },
    deleteFlavour: (state, action) => {
      state.beanData.flavours = state.beanData.flavours.filter(
        (f) => f.id !== action.payload.id,
      );
    },
    selectRoastLevel: (state, action) => {
      state.beanData.roastLevel = action.payload;
    },
  },
});

// export reducers
export const {
  selectRoastLevel,
  addFlavour,
  deleteFlavour,
  resetBeanData,
  updateBeanData,
} = beansSlice.actions;
export default beansSlice.reducer;
