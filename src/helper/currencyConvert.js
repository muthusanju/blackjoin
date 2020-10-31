import moment from 'moment';

export function currencyConvert(from, to , amount) {
	
	var total = (amount * 0.026).toFixed(2);
	return total;
}