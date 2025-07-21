export default function History(){
return(
    <div className="grid grid-cols-2 gap-10 mb-20">
        <div className="leftHistory">
            <p className="text-base/7 text-gray-700 mb-5"> We kick-started operations on the 15th of August, 
                2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology.
                We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
            </p>
            <p className="text-base/7  text-gray-700 mb-5">
                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
            </p>
            <p className="text-base/7  text-gray-700 mb-5">
                Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, 
                contributing over 15% of all Indian retail trading volumes.
            </p>
        </div>

        <div className="rightHistory">
            <p className="text-base/7 text-gray-700 mb-5">
                In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
            </p>
            <p className="text-base/7 text-gray-700 mb-5">
                <a className="text-[rgb(37,150,190)] cursor-pointer" href="#">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
            </p>
            <p className="text-base/7 text-gray-700 mb-5">
                And yet, we are always up to something new every day. Catch up on the latest updates on our <a className="text-[rgb(37,150,190)] cursor-pointer" href="#">blog </a>
                or see what the media is <a className="text-[rgb(37,150,190)] cursor-pointer" href="#"> saying about us</a> or learn more about our business 
                and product <a className="text-[rgb(37,150,190)] cursor-pointer" href="#">philosophies</a>.
            </p>
        </div>
    </div>
)
  
}