import React, { Component } from 'react';
import Textdetails from './testimony-details/testimony_text/Textdetails';
import TestimonyDetails from './testimony-details/TestimonyDetails.js'
import Pics from './testimony_img/Pics';
import './Testimonial.css'

class Testimonial extends Component {
    state = {
        Textdetails: Textdetails,
        curtestimony: Textdetails[0],
        currentIndex: 0
    }

    prev = () => {
        console.log('click');
        let currentIndex = this.state.Textdetails.indexOf(this.state.curtestimony);
        this.setState(prevState => {
            return {
                curtestimony: this.state.Textdetails[currentIndex - 1]
            };
        });
    };
    next = () => {
        console.log('click');
        let currentIndex = this.state.Textdetails.indexOf(this.state.curtestimony);
        this.setState(prevState => {
            return {
                curtestimony: this.state.Textdetails[currentIndex + 1]
            };
        });
    };

    render() {
        return (
            <div className='wrap'>
                <div className='main'>
                    <div className='box'>
                        <TestimonyDetails
                            det={this.state.curtestimony}
                            next={this.next}
                            prev={this.prev}
                            Textdetails={this.state.Textdetails}
                            currentIndex={this.state.currentIndex} />
                    </div>
                    <div>
                        <Pics info={this.state.curtestimony} />
                    </div>
                </div>
            </div>


        )
    }
}

export default Testimonial;