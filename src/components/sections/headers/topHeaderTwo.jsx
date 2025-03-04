import { FaFacebookF, FaLinkedinIn, FaLocationDot, FaPaperPlane, FaTwitter, FaYoutube } from "react-icons/fa6"
import { Link } from "react-router-dom"

const TopHeaderTwo = () => {
    return (
        <div className="header-top d-none d-md-block">
            <div className="container">
                <div className="header-top-wrp">
                    <ul className="info">
                        <li><i><FaPaperPlane /></i> <a href="#0">info.company@gmail.com</a></li>
                        <li className="bor-left ms-4 ps-4"><i><FaLocationDot /></i> <a href="#0">example@example.com</a></li>
                    </ul>
                    <ul className="link-info">
                        <li className="bor-right"><Link to="#0"><i><FaFacebookF /></i></Link></li>
                        <li className="bor-right"><Link to="#0"><i><FaTwitter /></i></Link></li>
                        <li className="bor-right"><Link to="#0"><i><FaLinkedinIn /></i></Link></li>
                        <li><Link to="#0"><i><FaYoutube/></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TopHeaderTwo