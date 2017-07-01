import { Component } from "react";
import LinearProgress from "material-ui/LinearProgress";
import React from "react";

export default class Progress extends Component {

    constructor(props) {
        super(props);

        this.state = {
            completed: 0,
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(20), 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <LinearProgress color="#E20030" mode="determinate" value={this.state.completed} />
        );
    }

    progress(completed) {
        if (completed > 100) {
            this.setState({completed: 100});
        } else {
            this.setState({completed});
            const diff = Math.random() * 20;
            this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
    }
}
