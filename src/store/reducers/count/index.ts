import { CountActions, CountActionsEnum, CountState } from './types';

const initialState: CountState = {
	count: 0
};

export default function countReducer (state = initialState, action: CountActions): CountState {
	switch (action.type) {
		case CountActionsEnum.INCREMENT_COUNT: 
			return { ...state, count: action.payload };
		case CountActionsEnum.DICREMENT_COUNT:
			return { ...state, count: action.payload };
		default: 
			return state;
	}
}