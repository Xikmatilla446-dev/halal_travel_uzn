import React from 'react';
import './scroll.styles.scss';
import toTop from  './images (1).png';


class ScrollButton extends React.Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({intervalId: intervalId});
    }

    render() {
        return (
            <img
                style={{ background: `url('${toTop}') no-repeat center center` }}
                className='scroll'
                onClick={() => {
                    this.scrollToTop();
                }}
                src={toTop} alt="aa"/>
         )
    }
}

export default ScrollButton;