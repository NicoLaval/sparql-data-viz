export const deleteLabelFromArray = array =>
	array.reduce((_, a) => {
		const { label, ...newObj } = a;
		_.push(newObj);
		return _;
	}, []);
export const extractLabel = array => array.length !== 0 && array[0].label;
