import "./DashboardModal.scss"
import closeIcon from "../../assets/images/close.svg"
import modalBanner from "../../assets/images/Modal Logo.png"
import { Link } from "react-router-dom"

function DashboardModal() {
    return (
        <div className="dash-modal">
            <div className="dash-modal__card">
                <div className="modal__close">
                        <img src={closeIcon} alt="" className="close-icon" />
                    </div>
                <div className="modal__text">
                    
                    <h1 className="modal__title">
                        Earn points while shopping
                    </h1>
                    <p className="modal__body">
                        add the Aeroplan eStore extension to your browser with just a couple of clicks
                    </p>
                    <h2 className="modal__subtitle">
                        and let the earning begin!
                    </h2>
                    <Link to="/landing">
                    <button className="button">
                        Add to Chrome
                    </button></Link>
                    <Link className="link--learn-more" to="/landing">
                    <button className="button button--learn-more">
                        Learn more
                    </button></Link>
                    <p className="modal__body modal__body--bottom">
                    By adding the eStore extension to your browser, we'll automatically let you know when you can earn with a simple one-click activation. 
                    </p>
                </div>
                <div className="modal__banner">
                    <img src={modalBanner} alt="" className="modal-banner" />
                </div>

            </div>
        </div>
    )
}

export default DashboardModal