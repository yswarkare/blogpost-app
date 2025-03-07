import { useEffect, useState } from 'react';

const useApiFunction = (apiFunction) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [response, setResponse] = useState(null);

	const getHeadlines = async () => {
		try {
			setLoading(true);
			const res = await apiFunction();
			console.log(res);
			setResponse(res);
		} catch (error) {
			console.log(error);
			if (error?.response?.data?.message) {
				setError(error.response.data.message);
			} else {
				setError(true);
			}
			setResponse(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getHeadlines();
		return () => {
			setLoading(false);
			setError(false);
		};
	}, []);

	return [response, loading, error];
};

export default useApiFunction;
