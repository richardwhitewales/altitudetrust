import styles from '@/components/home/Home.module.css'
import Link from 'next/link'

export default function Hero() {
    return (
        <div class={`d-flex align-items-center ${styles.hero}`}>
            <div class="container white text-center">
                <h4>Welcome To</h4>
                <h1 className="display-3 fw-bold mt-5">ALTITUDETRUST</h1>
                <Link href="/auth/login" className="btn btn-lg mt-5 mb-5 btn_secondary">
                    Get Started
                </Link>
            </div>
        </div>
    )
}
