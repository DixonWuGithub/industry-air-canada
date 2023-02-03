import "./MockDash.scss"
import Header from "../../components/Header/Header"
import DashboardModal from "../../components/DashboardModal/DashboardModal"
import content from "../../assets/images/Desktop - 1.png"

function MockDash(){
    return (
        <>

        <DashboardModal /> 
        <section className="content__holder">
            <img src={content} alt="" className="content__image" />
        </section>

        {/* <section className="section">
            <div className="body-wrap">
                <div className="mock-dash">
                This is the mock dashboard page
                </div>
            </div>
        </section> */}
        </>
    )
}

export default MockDash