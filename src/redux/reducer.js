import { combineReducers } from 'redux'
import { ADD, SUB, MUTI, GET_DATA, REQUEST_DATA, RECIEVE_DATA } from './action.js'

const initState = {
	number: 1,
	base: 5,
	data: {
		name: 'me',
		age: '19'
	}
}

function addAndSub(state = initState.number, action) {
	switch (action.type) {
		case 'ADD': {
			return Object.assign({}, {number: state.number + initState.base});
		}
		case 'SUB': {
			return Object.assign({}, {number: state.number - initState.base});
		}
		default: {
			return state;
		}
	}
}

function muti(state = initState, action) {
	switch(action.type){
		case "MUTI": {
			return Object.assign({}, {number: state.number * initState.base, base: initState.base});
		}
		default: {
			return state;
		}
	}
}

function getData(state = {isFeting: false}, action) {
	switch(action.type) {
		case 'REQUEST_DATA': {
			return Object.assign({}, state, {
				isFeting: true
			})
		}
		case 'RECIEVE_DATA': {
			return Object.assign({}, action.data, {isFeting: false})
		}
		default: {
			return state;
		}
	}
}

const todo = combineReducers({
	addAndSub,
	muti,
	getData
})

export default todo;