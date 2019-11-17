import React from "react";
import Button from "react-bootstrap/Button";

export default class Clock extends React.Component {
    constructor(){
        super();
        this.state = {
            time: new Date().toLocaleTimeString(),
            format: "time",
            cycleCursor: 1,
            formatCycle: ["time", "date", "all"]
        };
    }

    componentDidMount(){
        this.intervalId = setInterval(() => this.tick(), 10);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    changeFormat(){
        this.setState({
            format: this.state.formatCycle[this.state.cycleCursor%this.state.formatCycle.length],
            cycleCursor: this.state.cycleCursor + 1
        });
    }

    tick(){
        const { format } = this.state;
        if (format === "time"){
            this.setState({time: new Date().toLocaleTimeString()});
        } else if (format === "date") {
            this.setState({time: new Date().toDateString()});
        } else if (format === "all") {
            this.setState({time: new Date().toUTCString()});
        }
    }

    render(){
        return (
            <React.Fragment>
                <span>
                    {this.state.time}
                </span>
                <Button className='btn-primary m-4' size="lg" onClick={() => this.changeFormat()}>
                    Format
                </Button>
            </React.Fragment>
        )
    }
}