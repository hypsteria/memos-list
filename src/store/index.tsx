import { configureStore, createSlice } from "@reduxjs/toolkit";
import Memo from "../models/memo";

const initialListState: { memosList: Memo[] } = {
	memosList: [],
};

const memosSlice = createSlice({
	name: "memos",
	initialState: initialListState,
	reducers: {
		setMemosList: (state, action) => {
			state.memosList = action.payload;
		},
		addMemo: (state, action) => {
			state.memosList.push(action.payload);
		},
		updateMemo: (state, action) => {
			const memoToUpdate = state.memosList.find(
				(memo) => memo.id === action.payload.id
			);
			if (memoToUpdate) {
				memoToUpdate.description = action.payload.description;
			}
		},
		deleteMemo: (state, action) => {
			state.memosList = state.memosList.filter(
				(memo) => memo.id !== action.payload
			);
		},
	},
});

export const memosActions = memosSlice.actions;

const modalInitialState: {
	isModalVisible: boolean;
	editingMemo: Memo | null;
	isEditing: boolean;
} = {
	isModalVisible: false,
	editingMemo: null,
	isEditing: false,
};

const modalSlice = createSlice({
	name: "modal",
	initialState: modalInitialState,
	reducers: {
		openModal: (state, action) => {
			state.isModalVisible = true;
			if (action.payload) {
				state.editingMemo = action.payload;
				state.isEditing = true;
			}
		},
		closeModal: (state) => {
			state.isModalVisible = false;
			state.editingMemo = null;
			state.isEditing = false;
		},
	},
});

export const modalActions = modalSlice.actions;

const store = configureStore({
	reducer: { memos: memosSlice.reducer, modal: modalSlice.reducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
