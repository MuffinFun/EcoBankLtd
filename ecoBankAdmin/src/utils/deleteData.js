export const deleteData = async (id, checkData) => {
	try {
		const response = await fetch(
			checkData
				? `http://localhost:5000/api/v1/user-personal/delete-current-user/${id}`
				: `http://localhost:5000/api/v1/companies/delete/${id}`,
			{
				method: 'delete',
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
		console.log(error.message);
	}
};
