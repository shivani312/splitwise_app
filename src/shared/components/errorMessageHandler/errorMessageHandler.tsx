import React from 'react';
import { ErrorMessage } from 'formik';

interface IProps {
	name: string;
}

const ErrorMessageHandler: React.FC<IProps> = (props) => {
	const { name } = props;
	return (
		<ErrorMessage name={name} component='p' className='text--red-400 font-size--xxs pl--10 error-message mt--10' />
	);
};

export default ErrorMessageHandler;
