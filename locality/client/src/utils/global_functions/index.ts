// convert data to form data
export const convertDataToFormData = (data: any) => {
	const formData = new FormData();
	Object.keys(data).forEach(key => {
		formData.append(key, data[key]);
	});
	return formData;
};

export const capitalize = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
  }