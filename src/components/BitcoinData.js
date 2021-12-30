import React from 'react';

export default class BitcoinData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            hash: null,
            transactions: null
        };
    }

    componentDidMount() {
        fetch("https://blockchain.info/rawblock/00000000000000000007982d9735957a5cb44f0785fa02b87d3160da50e78a45")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        height: result.height,
                        transactions: result.n_tx
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, height, transactions } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <tbody>
                <tr><td class="table-label">Height:</td><td class="table-data">Loading...</td></tr>
                <tr><td class="table-label">Transactions:</td><td class="table-data">Loading...</td></tr>
            </tbody>;
        } else {
            return <tbody>
                <tr><td class="table-label">Height:</td><td class="table-data">{height}</td></tr>
                <tr><td class="table-label">Transactions:</td><td class="table-data">{transactions}</td></tr>
            </tbody>;
        }
    }

}