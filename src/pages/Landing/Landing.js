import "./Landing.scss"
import Header from "../../components/Header/Header"
import FrequentFlyerView from "../../components/FrequentFlyerView/FrequentFlyerView"
import EverydayEarnerView from "../../components/EverydayEarnerView/EverydayEarnerView"

function Landing(){
    return (
        <>
        <Header />
        <section className="section">
            <div className="body-wrap">
                <div className="landing">
                This is the Landing Page
                </div>
            </div>
        </section>
        {/* conditionally render below: */}
        <FrequentFlyerView />
        <EverydayEarnerView />
        </>
    )
}

export default Landing