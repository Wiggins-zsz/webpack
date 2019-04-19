import React from 'react';
import './index.scss';

export default class Es6 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			res: []
		}

		this.handleTestGenerator = this.handleTestGenerator.bind(this);
	}

	componentDidMount() {
		// let it = this.handleTestGenerator();
		// it.next();
		// this.Find(4, [[1,2,3],[2,3,4],[3,4,5]]);
		// this.run(this.foo);
		// this.Find(1,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]);
		this.testConstructor();
	}

	*handleTestGenerator() {
		let x = 5 * (yield 2*2);
		let z = x + 10;
		return z;
	}

	*handleIterator() {
		
	}

	Find(target, array)
	{
		
	    let j = 0;
	    let has = false;
	    let xSize = array.length;
	    let ySize = array[0].length;
	    for(let i = xSize-1; i >= 0; i--)
	    {
	        if(array[i][j] == target)
	        {
	            has = true;
	            return has;
	        }else if(array[i][j] < target) {
	            for(let j = 0; j <= ySize-1; j++) {
	                if(array[i][j] == target) {
	                    has = true;
	                }
	            }
	        }else if(array[i][j] > target) {
	            
	        }
	    }
	    return has;
	}

	findQuickly(target, array) {
		let has = false;
		let maxKey = array.length;
		let minKey = 0;
		let key = ((maxKey + minKey) /2).toFixed(0);
		if(array[key][key] == target) {
			has = true;
		}else {

		}
	}

	request(value, delay) {
		return new Promise((resolve, reject) =>{
			setTimeout(function(){
				resolve(value);
			}, delay)
		})
	}

	*gen(v, t) {
		var p = yield request(v, t);
		this.setState({
			res: this.res.push(p)
		})
	}

	*foo() {
		var r1 = yield request('第一个', 1000);
		var r2 = yield request('第二个', 2000);

		var r3 = yield request(r1, 3000);
	}

	run(gen) {
		debugger
		var args = [].slice.call(arguments, 1), it;

		it = gen.apply(this, args);
		
		return Promise.resolve()
			.then(function handleNext(value){
				var next = it.next(value);

				return (function handleResult(next){
					if(next.done){
						return next.value;
					}else {
						return Promise.resolve(next.value)
							.then(handleNext, function handleErr(err){
								return Promise.resolve(it.throw(err))
									.then(handleResult);
							});
					}
				})(next);
			});
	}

	runAll() {
		let gens = [].slice.applay(arguments, 0);
		for(let i = 0; i<gens.length; i++) {
			gens[i]().next();
		}
	}

	testConstructor() {
		function C() {
			this.name = '123';
			this.age = '1';
			return 2;
		}
		let a = new C();
	}

	render() {
		return (
			<div className="es6-test">

			</div>
		)
	}
}