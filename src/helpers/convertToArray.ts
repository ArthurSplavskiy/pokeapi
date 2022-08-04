export const convertToArray = (obj: Record<string, string>): string[] => {
	const array = Object.keys(obj)
		.map(function(key) {
			return obj[key];
		});
	
	return array;
};