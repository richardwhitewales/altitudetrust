import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { useAuth } from '@/firebase/context/AuthUserContext';

export default function Navbar() {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const { authUser, loading, logOut } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-md navbar-dark trans fixed-top ${isScrolled ? "bg_primary" : "trans"}`}>
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        className="rounded"
                        width={70}
                        height={70}
                        priority
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0 px-md-5">

                    </ul>

                    <div className="d-flex">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0 px-md-5">
                            <li className="nav-item">
                                <Link className={`nav-link ${router.asPath == "/" ? "secondary" : "white"}`} href="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${router.asPath == "/services" ? "secondary" : "white"}`} href="/services">Personal Banking</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${router.asPath == "/about" ? "secondary" : "white"}`} href="/about">About</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${router.asPath == "/contact" ? "secondary" : "white"}`} href="/contact">Contact</Link>
                            </li>

                            {!loading && authUser && authUser.uid ?
                                <li className="nav-item">
                                    <button onClick={logOut} className="btn btn-sm btn_secondary m-1">
                                        Logout
                                    </button>
                                </li>
                                : <li className="nav-item">
                                    <Link className="btn btn-sm btn_secondary m-1" href="/auth/login">
                                        Login
                                    </Link>
                                </li>
                            }

                            <li className="nav-item">
                                <Link className="btn btn-sm btn_secondary m-1" href="tel:+447418371280">
                                    <FontAwesomeIcon icon={faPhone} /> +44 (741) 837 1280
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}
