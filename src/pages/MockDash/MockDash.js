import "./MockDash.scss"
import Header from "../../components/Header/Header"
import DashboardModal from "../../components/DashboardModal/DashboardModal"

function MockDash(){
    return (
        <>
        {/* conditionally render the modal */}
        <DashboardModal /> 
        <Header />
        <section className="section">
            <div className="body-wrap">
                <div className="mock-dash">
                This is the mock dashboard page
                </div>
            </div>
        </section>
        </>
    )
}

export default MockDash