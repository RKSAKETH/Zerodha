export default function Footer () {
    return (
        <footer className="grid grid-cols-5 mt-20">
            <div className="mr-3 footerDiv">
                <img src="images/logo.svg" alt="logo" className="w-30 h-auto mb-5 "></img>
                <p style={{ marginBottom: 0 }}>&copy; 2010-2015, Zerodha Broking Ltd.</p>
                <p>All right reserved</p>
                <div className="iconDiv">   
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="iconDiv">
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-telegram"></i>
                </div>
                
            </div>

            <div className="footerDiv">
                    <h1>Account</h1>
                    <p>Open demat account</p>
                    <p>Minor demat account</p>
                    <p>NRI demat account</p>
                    <p>Commodity</p>
                    <p>Dematerialisation</p>
                    <p>Fund transfer</p>
                    <p>MTF</p>
                    <p>Referral program</p>
            </div>

            <div className="footerDiv">
                    <h1>Support</h1>
                    <p>Contact us</p>
                    <p>Support portal</p>
                    <p>How to file a complaint?</p>
                    <p>Status of your complaints</p>
                    <p>Bulletin</p>
                    <p>Circular</p>
                    <p>Z-Connect blog</p>
                    <p>Downloads</p>
            </div>

            <div className="footerDiv">
                    <h1>Company</h1>
                    <p>About</p>
                    <p>Philosophy</p>
                    <p>Press & media</p>
                    <p>Careers</p>
                    <p>Zerodha Cares (CSR)</p>
                    <p>Zerodha.tech</p>
                    <p>Open source</p>
            </div>

            <div className="footerDiv">
                    <h1>Quick Links</h1>
                    <p>Upcoming IPOs</p>
                    <p>Brokerage charges</p>
                    <p>Market holidays</p>
                    <p>Economic calendar</p>
                    <p>Calculators</p>
                    <p>Markets</p>
                    <p>Sectors</p>                    
            </div>

        </footer>
    )
}