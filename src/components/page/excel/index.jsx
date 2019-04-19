import React from 'react';
import './index.scss';

class Excel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                ['item1','item2','item3','item4','item5','item6','item7','item8','item9'],
                ['item1','item2','item3','item4','item5','item6','item7','item8','item9']
            ]
        }

        this.handleTestPromise = this.handleTestPromise.bind(this);
    }

    handleTestPromise() {
        Promise.resolve(43).then(() => {
            console.log(23);
        }).then((rtn) =>{
            console.log(24);
            return 34;
        }).then((rtn) => {
            
        })
            
    }

    componentDidMount() {
        this.handleTestPromise();
    }

    render() {
        let items = this.state.items;
        let left = items.map((item, index) => {
            return item.filter((subItem, subIndex) => {
                return subIndex === 0;
            });
        });
        let right = items.map((item, index) => {
            return item.filter((subItem, subIndex) => {
                return subIndex !== 0;
            });
        });
        return (
            <div className="excel-view">
                <div className="excel-view-wrap">
                    <div className="excel-view-stable">
                        {
                            left.map((item, index) => {
                                return item.map((subItem, subIndex) => {
                                    return <div className="row-item" key={subIndex}>{subItem}</div>
                                })
                            })
                        }
                    </div>
                    <div className="excel-view-row">
                        <div className="row-view row-right">
                            {
                                right.map((item, index) => {
                                    return (
                                        <div className="row-item-wrap" key={index}>
                                            {   
                                                item.map((subItem, subIndex) => {
                                                    return <div className="row-item" key={subIndex}>{subItem}</div>
                                                })
                                            }
                                        </div>
                                    )
                                    
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="css-test">x
                    <span className="tall item"></span>
                    <span className="short item"></span>
                </div>
            </div>
        )
    }
}

export default Excel;