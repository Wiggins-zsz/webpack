// action types

export const ADD = "ADD";
export const SUB = "SUB";
export const MUTI = "MUTI";
export const GET_DATA = "GET_DATA";
export const REQUEST_DATA = "REQUEST_DATA";
export const RECIEVE_DATA = "RECIEVE_DATA";

// action 创建函数

export function add(text) {
	return {
		type: ADD,
		text
	}
}

export function sub(text) {
	return {
		type: SUB,
		text
	}
}

export function muti(text) {
	return {
		type: MUTI,
		text
	}
}

export function asyncPre() {
	return {
		type: GET_DATA,
		isFeting: false,
		data: {}
	}
}

export function asyncFeting() {
	return {
		type: REQUEST_DATA,
		isFeting: true
	}
}

export function asyncSuccess(json) {
	return {
		type: RECIEVE_DATA,
		data: json
	}
}

export function requestData() {
	return dispatch => {
		dispatch(asyncFeting());
		fetch('./data.json', {
			headers: new Headers({'Accept': 'application/josn'})
		}).then(res => {
			setTimeout(() => {
				dispatch(asyncSuccess({name: 123, age: 456}))
			}, 2000)
		})
	}
}