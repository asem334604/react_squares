import React, {Component} from 'react';

class Square extends Component {

    render() {
        return (
            <>
                    <div style={{
                        width: this.props.width,
                        height: this.props.height,
                        backgroundColor: this.props.color,
                        display: this.props.display,
                        margin: '-2px'
                    }}
                    onClick={this.props.onClick}>
                    </div>
            </>
        );
    }
}

export default Square;