import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountResponse } from '../../types/users';

export type State = {
	businessForm: {
		id: string;
		business_name: string;
		legal_name: string;
		business_number: string;
		business_type: string;
		description: string;
		location: string;
		photo: any;
	};
	step: number;
};

const initialState: State = {
	businessForm: {
		id: '',
		business_name: '',
		legal_name: '',
		business_number: '',
		business_type: '',
		description: '',
		location: '',
		photo: ''
	},
	step: 0
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setFormData(
			state: State,
			action: PayloadAction<{
				businessForm: {
					id: string;
					business_name: string;
					legal_name: string;
					business_number: string;
					business_type: string;
					description: string;
					location: string;
					photo: any;
				};
			}>
		) {
			state.businessForm.id = action.payload.businessForm.id;
			state.businessForm.business_name = action.payload.businessForm.business_name;
			state.businessForm.legal_name = action.payload.businessForm.legal_name;
			state.businessForm.business_number = action.payload.businessForm.business_number;
			state.businessForm.business_type = action.payload.businessForm.business_type;
			state.businessForm.description = action.payload.businessForm.description;
			state.businessForm.location = action.payload.businessForm.location;
			state.businessForm.photo = action.payload.businessForm.photo;
		},
		setStep(state: State, action: PayloadAction<{ step: number }>) {
			state.step = action.payload.step;
		}
	}
});

export default formSlice;
