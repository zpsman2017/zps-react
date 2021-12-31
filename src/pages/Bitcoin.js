import BitcoinData from '../components/BitcoinData'

const About = () => {
    return <div class="col-12 contentDiv">
        <div class="row top">
            <div class="col-3 filler-top"></div>
            <div class="col-6 headerDiv">
                <h1>Bitcoin Block Explorer</h1>
            </div>
        </div>

        <div class="row top">
            <div class="col-2 filler-top"></div>
            <div class="col-8 headerDiv">
                <h2>Most Recent Bitcoin Block</h2>
                <div class="col-1 filler-top"></div>
                <div class="col-10 paraDiv">
                    <BitcoinData />
                </div>
            </div>
        </div>

        <div class="row top">
            <div class="col-2 filler-top"></div>
            <div class="col-8 headerDiv">
                <h2>Bitcoin Genesis Block</h2>
                <div class="col-1 filler-top"></div>
                <div class="col-10 paraDiv">
                    <BitcoinData hash='000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f' />
                </div>
            </div>
        </div>

    </div>
};

export default About;