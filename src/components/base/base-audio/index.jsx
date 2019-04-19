import React from 'react';
import './index.scss';
import provinceThreeData from '../../../assets/json/provinceThreeData.json';

let audioUrl = require('../../../assets/audio/base.mp3');

function getElClient(el) {
    let left = el.offsetLeft;
    let parent = el.offsetParent;
    while(parent = parent.offsetParent) {
        left += parent.offsetLeft;
    }
    return left;
}

function getLeft(el) {
    let left = el.offsetLeft;
    let parent = el;
    while(parent = parent.offsetParent) {
        left += parent.offsetLeft;
    }
    return left;
}

export default class Audio extends React.Component {
    constructor(props){
        super(props);
        // this.audioRef = React.createRef();
        // this.progressRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            msg: 'test',
            num: 300,
            value: 0
        }

    }

	handleChange(e) {
		this.setState({
            value: e.target.value
        })
        console.log(this.state.value)
    }
    
    componentDidMount() {
        console.log(provinceThreeData)
    }

    render() {
        return (
            <div className="slider">
                <input type="range" value={this.state.value} min="0" max={this.state.num} step="0.01" onChange={this.handleChange} />
                <p className="progress" style={{width: this.state.value - this.state.value * .1 + 1 + 'px'}}></p>
            </div>
        )
    }
}