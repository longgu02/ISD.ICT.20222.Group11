import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface BikeState {
	name: string;
	type: string;
	id: string;
}

// Define the initial state using that type
const initialState: BikeState = {
	name: "",
	type: "",
	id: "",
};

export const bikeSlice = createSlice({
	name: "bike",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		update: (state, action: PayloadAction<BikeState>) => {
			state.name = action.payload.name;
			state.type = action.payload.type;
			state.id = action.payload.id;
		},
	},
});

export const { update } = bikeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value;

export default bikeSlice.reducer;
