import React, { PureComponent } from 'react';
import './DraggableBar.scss';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';

export class DraggbleBar extends PureComponent {
    static propTypes = {
        scale: PropTypes.number,
        getValue: PropTypes.func,
        text: PropTypes.string,
        type: PropTypes.string
    };

    static defaultProps = {
        scale: 0,
        getValue: {},
        text: '',
        type: ''
    };

    state = {
        inputRange: 0,
        value: 0
    };

    onChangeListener = (event) => {
        this.setState({ inputRange: event.target.value });
    };

    componentDidUpdate = () => {
        const {
            scale,
            getValue,
            type
        } = this.props;
        const {
            inputRange
        } = this.state;
        const value = (inputRange * scale).toFixed(1);
        this.setState({ value });

        if (getValue) {
            getValue(value, type);
        }
    };

    render () {
        const {
            inputRange,
            value
        } = this.state;
        const {
            text
        } = this.props;

        return (
            <div className="input-range">
                <h3>{`${text}: ${(+value).toLocaleString()}`}</h3>
                <Slider
                    value={inputRange}
                    defaultValue={0}
                    onChange={this.onChangeListener}
                    step={1}
                    min={0}
                    max={100}
                    sx ={{ height: '14px' }}
                />
            </div>
        );
    }
}

export default DraggbleBar;
