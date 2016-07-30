import React, { Component }from 'react'

class TextDisplay extends Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    render() {
        return <div>im displaying text from my parent:{this.props.text}</div>;
    }
}

export default TextDisplay;
