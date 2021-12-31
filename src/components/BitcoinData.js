import React from 'react';

export default class BitcoinData extends React.Component {

    constructor(props) {
        super(props);
        console.log(props.hash);
        this.state = {
            error: null,
            isLoaded: false,
            hash: props.hash,
            height: null,
            transactions: null
        };
    }

    getBitcoinData(hash) {
        fetch("https://blockchain.info/rawblock/" + hash)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        fee: result.fee,
                        hash: result.hash,
                        height: result.height,
                        transactions: result.n_tx
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

    componentDidMount() {

        if (this.props.hash == null) {
            fetch("https://blockchain.info/q/latesthash")
                .then(res => res.text())
                .then(
                    (result) => {
                        this.getBitcoinData(result);
                    },
                    (error) => {
                        this.getBitcoinData("");
                    }
                )
        }
        else {
            this.getBitcoinData(this.props.hash);
        }

    }

    render() {
        const { error, fee, hash, height, isLoaded, transactions } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <table><tbody>
                <tr><td class="table-label">Hash:</td><td class="table-data">Loading...</td></tr>
                <tr><td class="table-label">Height:</td><td class="table-data">Loading...</td></tr>
                <tr><td class="table-label">Transactions:</td><td class="table-data">Loading...</td></tr>
                <tr><td class="table-label">Fee:</td><td class="table-data">Loading...</td></tr>
            </tbody></table>;
        } else {
            return <table><tbody>
                <tr><td class="table-label">Hash:</td><td class="table-data">{hash}</td></tr>
                <tr><td class="table-label">Height:</td><td class="table-data">{height}</td></tr>
                <tr><td class="table-label">Transactions:</td><td class="table-data">{transactions}</td></tr>
                <tr><td class="table-label">Fee:</td><td class="table-data">{fee}</td></tr>
            </tbody></table>;
        }
    }

}