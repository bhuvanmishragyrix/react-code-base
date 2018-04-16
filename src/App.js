import React, {Component} from 'react';
import './App.css';
import ChartDiv from './ChartDiv';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="row">
                    <ChartDiv chartId="chart1"/>
                    <ChartDiv chartId="chart2"/>
                    <ChartDiv chartId="chart3"/>
                </div>
                <div className="row">
                    <ChartDiv chartId="chart4"/>
                    <ChartDiv chartId="chart5"/>
                    <ChartDiv chartId="chart6"/>
                </div>
            </div>
        );
    }
}

export default App;
