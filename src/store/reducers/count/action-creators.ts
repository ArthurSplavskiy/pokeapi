import { CountActionsEnum, DicrementCountAction, IncrementCountAction } from './types';

export const CountActionCreators = {
	incrementCount: (count: number): IncrementCountAction => ({ type: CountActionsEnum.INCREMENT_COUNT, payload: count + 1 }),
	dicrementCount: (count: number): DicrementCountAction => ({ type: CountActionsEnum.DICREMENT_COUNT, payload: count - 1 })
};