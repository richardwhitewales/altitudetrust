import styles from '@/components/home/Home.module.css'

export default function Reason() {
    return (
        <>
            <div className="container-fluid">
                <div className={`row px-md-5 py-5 bg_primary ${styles.reason}`}>
                    <div className="col-sm-6 text-start white">
                        <div className="m-2">
                            <div className="my-5">
                                <h4>Why Bank with US?</h4>
                                <h2>Besides saving fixed investments with investing, you have a chance to earn a better return</h2>
                            </div>

                            <hr className="my-3" />

                            <div className="my-5">
                                <h4>Self-build capability is increasingly important for your retirement and mortgage</h4>
                            </div>

                            <hr className="my-3" />

                            <div className="my-5">
                                <h4>We provide unforgetable support and topnotch security solutions for all our customers</h4>
                            </div>

                            <hr className="my-3" />

                            <div className="my-5">
                                <h4>We provide secured banking solutions for your safety and security</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 white p-5">
                        <h1>Our process is simple. We will move over your Direct Debits and cover all those tricky admin bits</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
