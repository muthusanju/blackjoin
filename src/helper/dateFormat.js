import moment from 'moment';

export function dateFormat(date, format) {
	
	if(date && date !='' && format && format!=''){
		var cDate = moment(date).format(format);
    	return cDate;
	}else{
		return '-';
	}
}