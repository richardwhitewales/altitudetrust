import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <>
            <div className="container pt-5 bg_white">
                <div className="row justify-content-center">
                    <div className="col-sm-6 primary">
                        <div className="m-2">
                            <h2><b>Contact Us</b></h2>
                            <p>
                                For any complaint, enquiry or advice, please fill the
                                form or you can contact us by sending an e-mail to
                                info@altitudetrust.com and be rest assured
                                that we will get back to you within 24 hours
                            </p>

                            <div className="d-flex mt-5 my-3">
                                <span><FontAwesomeIcon icon={faLocation} className="mx-2 align-vertical-middle" /></span>
                                <Link href="https://goo.gl/maps/KGS9QbEhQuaMzpov9" target="_blank" className="text-decoration-none primary" >
                                    76 Wellington St, Leeds LS1 4DL, UK
                                </Link>
                            </div>
                            <div className="d-flex my-3">
                                <span><FontAwesomeIcon icon={faEnvelope} className="mx-2 align-vertical-middle" /></span>
                                <Link href="mailto:info@altitudetrust.com" target="_blank" className="text-decoration-none primary" >
                                    info@altitudetrust.com
                                </Link>
                            </div>
                            <div className="d-flex my-3">
                                <span><FontAwesomeIcon icon={faPhone} className="mx-2 align-vertical-middle" /></span>
                                <Link href="tel:+447418371280" target="_blank" className="text-decoration-none primary" >
                                    +44-741-837-1280
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 mt-4">
                        <div className="m-2">
                            <div class="mb-3">
                                <input type="text" class="form-control bg_primary white border_none p-3" id="fullName" placeholder="John Doe" />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control bg_primary white border_none p-3" id="emailAddr" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <textarea class="form-control bg_primary white border_none p-3" id="message" rows="4"></textarea>
                            </div>

                            <Link href="#" className="btn border_none btn-lg btn_secondary">
                                SEND NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18852.760215227012!2d-1.553294!3d53.79669500000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795ea0c622933d%3A0x9707bb53e6b78c0b!2s76%20Wellington%20St%2C%20Leeds%20LS1%204DL%2C%20UK!5e0!3m2!1sen!2sus!4v1678111300378!5m2!1sen!2sus" width="100%" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}
