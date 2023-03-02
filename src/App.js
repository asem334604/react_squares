import './App.css';

import React, {Component, createRef} from 'react';
import Square from "./components/Square";

class App extends Component {
    constructor(props) {
        super(props);
        this.colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']
        this.state = {
            isColorSelected: false,
            selectedColor: null
        };
    }

    dispAllDivs = () => {
        return <div style={{width: '200px'}}>
            {this.colors.map((color, index) => {
                return < Square
                    key={this.colors[index]}
                    width={'100px'}
                    height={'100px'}
                    color={color}
                    display={'inline-block'}
                    onClick={() => this.switchRenderView(color)}                />
            })}
        </div>

    }
    dispSelectedDiv = () => {
        const handleSquareClick = () => {
            this.switchRenderView();
        };
        return (
            <Square
                width={'200px'}
                height={'200px'}
                color={this.state.selectedColor}
                display={'inline-block'}
                onClick={handleSquareClick}
            />
        );
    };

    switchRenderView = (color) => {
        if (color) {
            this.setState({ ...this.state, isColorSelected: true, selectedColor: color });
        } else {
            this.setState({ ...this.state, isColorSelected: false, selectedColor: null });
        }
    };

    render() {
        if (!this.state.isColorSelected)
            return this.dispAllDivs()
        else
            return this.dispSelectedDiv()
    };

}

export default App;
