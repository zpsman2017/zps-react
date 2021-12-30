import BitcoinData from '../components/BitcoinData'

const About = () => {
    return <div class="col-12 contentDiv">
        <div class="row top">
            <div class="col-3 filler-top"></div>
            <div class="col-6 headerDiv">
                <h1>Here is the most recent Bitcoin block</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-2 filler-top"></div>
            <div class="col-8 headerDiv">
                <h2>Block Hash: </h2>
                <div class="col-1 filler-top"></div>
                <div class="col-10 paraDiv">
                    <table>
                            <BitcoinData />
                    </table>
                </div>
            </div>
        </div>

    </div>
};

export default About;