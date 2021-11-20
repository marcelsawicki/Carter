import React, { Component } from 'react';
import bar from '../pictures/pic1.jpg';
import train from '../pictures/pic2.jpg';
import meetup from '../pictures/pic3.jpg';
import touchface from '../pictures/pic4.jpg';
import restaurant from '../pictures/pic1.jpg';
import walking from '../pictures/pic2.jpg'

export class Gallery extends Component {

    state = {
        index: 0,
        picList: [bar, train, meetup, touchface, restaurant, walking]
    }

    onClickNext = () => {
        if (this.state.index + 1 === this.state.picList.length) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }

    }
    onClickPrevious = () => {
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.picList.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    render() {
        return (
            <div>
                <img src={this.state.picList[this.state.index]} style={{ "maxHeight": "40%", "maxWidth": "40%" }} />
                <br />
                <br />
                <button className="btn btn-primary" onClick={this.onClickPrevious}> Previous </button>
                &nbsp;
                <button className="btn btn-primary" onClick={this.onClickNext}> Next </button>
            </div>
        );
    }
}