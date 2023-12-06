export const updateData = async (checkData, id, toBody) => {
	try {
		const body = toBody;
		const response = await fetch(
			checkData
				? `http://localhost:5000/api/v1/user-personal/update-current-user/${id}`
				: `http://localhost:5000/api/v1/companies/update/${id}`,
			{
				method: 'PUT',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ body }),
			}
		);
		if (response.ok) {
			const message = await response.json();
			console.log(message);
			return response.status;
		} else {
			throw new Error(`User with id=${id} not found`, 404);
		}
	} catch (error) {
		console.error(error.message());
	}
};
