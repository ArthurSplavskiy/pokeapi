export interface CountState {
	count: number;
}

export enum CountActionsEnum {
	INCREMENT_COUNT = 'INCREMENT_COUNT',
	DICREMENT_COUNT = 'DICREMENT_COUNT'
}

export interface IncrementCountAction {
	type: CountActionsEnum.INCREMENT_COUNT;
	payload: number;
}

export interface DicrementCountAction {
	type: CountActionsEnum.DICREMENT_COUNT;
	payload: number;
}

export type CountActions = IncrementCountAction | DicrementCountAction;