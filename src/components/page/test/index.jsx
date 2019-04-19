import React from 'react';
import './index.scss';

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.handleTestAsync = this.handleTestAsync.bind(this);
    }

    handleTestAsync() {
        async function test(params) {
            let time = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(+new Date());
                }, 2000);
            });
            console.log("time is: " + time);
        }

        test();
    }

    componentDidMount() {
        this.handleTestAsync();
    }

    render() {
        return (
            <div className="test">
                <div className="test-es6">
                    测试： es6
                </div>
            </div>
        )
    }
}

export default Test;