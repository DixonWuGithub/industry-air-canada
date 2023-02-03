import "./MockDash.scss"
import Header from "../../components/Header/Header"
import DashboardModal from "../../components/DashboardModal/DashboardModal"
import content from "../../assets/images/Desktop - 1.png"

function MockDash() {
    return (
        <>
            <DashboardModal />
            <section className="content__holder">
                <img src={content} alt="" className="content__image" />
            </section>
        </>
    )
}

export default MockDash