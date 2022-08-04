import { FC } from 'react';
import { Contacts } from '../../components';
import { withLayout } from '../../layout/Layout';

const Home: FC = (): JSX.Element => {
	return (
		<div>
			<Contacts />
		</div>
	);
};

export default withLayout(Home);