const Current = () => {
    return <div class="col-12 contentDiv">
        <div class="row top">
            <div class="col-3 filler-top"></div>
            <div class="col-6 headerDiv">
                <h1>Recently graduated, currently an IT Auditor</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-2 filler-top"></div>
            <div class="col-8 headerDiv">
                <h2>Miami and Crowe</h2>
                <div class="col-1 filler-top"></div>
                <div class="col-10 paraDiv">
                    <p>I recently graduated Miami University in May 2021 with a Bachelor's of Software Engineering.
                        My favorite courses included "Web Services", "Cloud Computing & DevOps", and "Data Abstraction & Structures".
                    </p>
                    <p>Since August 2021, I have been an IT Assurance Staff Member at Crowe.</p>
                </div>
                <div class="col-6">
                    <img src="/images/miami.png" class="responsiveImg" />
                </div>
                <div class="col-6">
                    <img src="/images/crowe.png" class="responsiveImg" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-2 filler-top"></div>
            <div class="col-8 headerDiv">
                <a href="/bitcoin-block"><h2>Bitcoin Block Explorer</h2></a>
                <div class="col-1 filler-top"></div>
                <div class="col-10 paraDiv">
                    <p>I made use of a free API to look at Bitcoin blockchain data. I have a strong interest in cryptocurrency and
                        thought it would be interesting to have a page that views the most recent Bitcoin block.
                    </p>
                </div>
            </div>
        </div>

    </div>
};

export default Current;