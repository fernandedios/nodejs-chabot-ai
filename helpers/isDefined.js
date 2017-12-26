module.exports = isDefined(obj) => {
	if (typeof obj === 'undefined') {
		return false;
	}

	if (!obj) {
		return false;
	}

	return obj != null;
};
