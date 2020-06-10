import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    state = {
        isLoading: true,
        topics: []
    };

    componentDidMount = async () => {
        const response = await fetch('/api/topics');
        const body = await response.json();
        this.setState({topics: body, isLoading: false})
    };

    renderTableTopics() {
        return this.state.topics.map(topic => {
            const {id, name, description} = topic;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                </tr>
            )
        })
    }

    render() {
        const {isLoading} = this.state;

        if (isLoading) {
            return <p>Loading data ...</p>
        }
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Topics list:</h1>
                    <table id='topics'>
                        <tbody>
                            {this.renderTableTopics()}
                        </tbody>
                    </table>
                </header>
            </div>
        );
    }
}

export default App;
