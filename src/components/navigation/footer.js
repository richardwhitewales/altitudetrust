import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid p-md-5 bg_white">
                <div className="row justify-content-center">
                    <div className="col-sm-7 primary">
                        <div className="my-3">
                            <p className="fw-bold">
                                For any complaint, enquiry or advice, please fill the form or you can contact us
                                by sending an e-mail to info@altitudetrust.com and be rest assured
                                that we will get back to you within 24 hours
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <div className="my-3">
                            <Link href="/contact" className="btn btn-lg btn_primary">
                                CONTACT US
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 px-3 bg_primary">
                <div className="row">
                    <div className="col-sm-4 white">
                        <Link href="/">
                            <Image
                                src="/favicon.png"
                                alt="logo"
                                width={80}
                                height={80}
                                priority
                            />
                        </Link>
                        <div>
                            Welcome To Altitudetrust Get Started PROFESSIONAL BANKING SERVICE Most of our
                            online content and services are available in English. We do have English
                            content to get you started and are continuously striving to improve
                            the online experience for our international customers. Need a Loan?
                            Sign Up Why Bank with US? Besides saving fixed investments

                            <ul className="mt-3 list-unstyled">
                                <li>
                                    <FontAwesomeIcon icon={faLocation} /> 76 Wellington St, Leeds LS1 4DL, UK
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} /> info@altitudetrust.com
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} /> +44 (741) 837 1280
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-8 white">
                        <h3 className="pink">Our Services</h3>

                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="list-unstyled">
                                    <li className="nav-item py-2 px-0">
                                        <Link className="nav-link" href="/">Home</Link>
                                    </li>
                                    <li className="nav-item py-2 px-0">
                                        <Link className="nav-link" href="/about">About</Link>
                                    </li>
                                    <li className="nav-item py-2 px-0">
                                        <Link className="nav-link" href="/services">Services</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="list-unstyled">
                                    <li className="nav-item py-2 px-0">
                                        <Link className="nav-link" href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg_secondary primary p-3 text-center">© Copyright {new Date().getFullYear()}, Altitudetrust Limited | All Rights Reserved.</div>
        </footer>
    )
}