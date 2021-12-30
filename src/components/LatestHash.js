import React from 'react';

export default class LatestHash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            hash: null,
        };
    }

    componentDidMount() {
        fetch("https://blockchain.info/q/latesthash")
            .then(res => res.text())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        hash: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, hash } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>
                <tr><td class="table-label">Block Hash:</td><td class="table-data">Loading...</td></tr>
            </div>
        } else {
            return <div>
                <tr><td class="table-label">Block Hash:</td><td class="table-data">{hash}</td></tr>
            </div>
        }
    }

}