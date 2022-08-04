import { CountActionCreators } from './count/action-creators';
import { DataActionCreators } from './data/action-creators';

export const allActionCreators = {
	...CountActionCreators,
	...DataActionCreators
};