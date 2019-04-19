import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const takes = [10, 20, 50, 100];

export default class Pager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            take: 10
        }

        this.handleTakeChange = this.handleTakeChange.bind(this);
        this.handleTestObjectPrototype = this.handleTestObjectPrototype.bind(this);
    }

    handleTakeChange(vm) {
        this.setState({
            take: Number(vm.target.value)
        }, () =>[
            console.log('take is: ' + this.state.take)
        ])
    }

    static getDerivedStateFromprops(nextProps, nextState) {
        debugger;
    }

    getSnapshotBeforeUpdate(prevPros, prevState) {
        
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        
    }

    componentDidMount() {
        this.handleTestObjectPrototype();
    }

    handleTestObjectPrototype() {
        let a = {};
        Object.defineProperty(a, 'name', {
            value: 'me',
            writable: true,
            configurable: true,
            enumerable: true
        });
    }

    render() {
        return (
            <div className="pager">
                <div className="pager-take">
                    <select onChange={this.handleTakeChange}>
                        <option value="10">10行</option>
                        <option value="20">20行</option>
                        <option value="50">50行</option>
                        <option value="100">100行</option>
                    </select>
                </div>
                <div className="pager-num">

                </div>
            </div>
        )
    }
}

Pager.propTypes = {
    total: PropTypes.number
}