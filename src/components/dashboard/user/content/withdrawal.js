import styles from '@/components/dashboard/Content.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBtc } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react';
import { auth, FireApp } from "@/firebase/firebase";
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { formatCurrency } from '@/components/utils'

export default function Withdrawal() {
    const [user, setUser] = useState(null);
    const [amount, setAmount] = useState("");
    const [done, setDone] = useState(false);
    const [balanceErr, setBalanceErr] = useState("");

    useEffect(() => {
        const user = auth.currentUser;
        const db = getFirestore(FireApp);

        if (user) {
            const profileRef = doc(db, 'users', user.email);
            getDoc(profileRef)
                .then((docSnapshot) => {
                    if (docSnapshot.exists()) {
                        setUser(docSnapshot.data());
                    } else {
                        console.log('Profile not found');
                    }
                })
                .catch((error) => {
                    console.log('Error getting profile:', error);
                });
        }
    }, []);

    if (!user) {
        return <div className={styles.process} />
    }

    const makeWithdraw = async event => {
        event.preventDefault();

        const db = getFirestore(FireApp);
        const docRef = doc(db, 'users', user.email);
        const balance = parseInt(user.dashboard.balance);
        const withdrawBalance = parseInt(user.dashboard.withdraw);
        const intAmount = parseInt(amount);

        if (intAmount > balance || balance == 0) {
            setBalanceErr("Insufficient balance");
        } else {
            await updateDoc(docRef, {
                "dashboard.balance": `${balance - intAmount}`,
                "dashboard.withdraw": `${withdrawBalance + intAmount}`,
            }).then(() => { setDone(true) });
        }
    }

    const otherPayment = async event => {
        event.preventDefault();

        let otherSuccess = document.getElementById("otherSuccess");
        otherSuccess.style.display = "block";
    }

    return (
        <div className={styles.content}>
            <div className={styles.greeting}>
                Greetings,  {user.firstName}
            </div>

            <div className="container mt-5 p-5 rounded bg_primary">
                <div className="row justify-content-center">
                    <div className="col text-center white">
                        <div className="d-flex flex-column m-2">
                            <b className="h1">
                                {formatCurrency(user.dashboard.balance)}
                            </b>
                            Available funds
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-sm-6 mb-2">
                    <div className={`mr-2 ${styles.card} ${styles.faq}`}>
                        <b>Make Withdrawal</b>

                        <hr />

                        <div className="alert alert-info">
                            <b>NOTE</b> Depending on your Location, Bank Withdrawal can take up to 5 Business Days to confirm
                        </div>

                        <div className="text-center mt-4">
                            <b>Select Withdrawal Method </b>
                            <div className="d-flex justify-content-around mt-3">
                                <button type="button" className={styles.withdrawBtn} data-bs-toggle="modal" data-bs-target="#withdrawBTCModal">
                                    <FontAwesomeIcon icon={faBtc} size="2x" />
                                </button>

                                <div className="modal fade" id="withdrawBTCModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="withdrawBTCModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="withdrawBTCModalLabel">BTC Withdraw</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <form onSubmit={makeWithdraw}>
                                                <div className="modal-body">
                                                    {done && <div className="alert alert-success">All Done! Will contact you for confirmation</div>}
                                                    {balanceErr != "" && <div className="alert alert-danger">{balanceErr}</div>}
                                                    <div id="btcSuccess" className="alert alert-success" style={{ display: "none" }}>
                                                        Your Address will be credited with in 1-5 business days. For any information
                                                        contact us via email or WhatsApp.
                                                    </div>

                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="btcAmount"
                                                            required
                                                            placeholder="Withdrawal Amount"
                                                            onChange={(event) => setAmount(event.target.value)}
                                                        />
                                                        <label htmlFor="btcAmount">Withdrawal Amount</label>
                                                    </div>
                                                </div>
                                                <div className="modal-footer" style={{ border: "none" }}>
                                                    <button type="submit" className="btn btn-md btn-success" onClick={() => {
                                                        let btcSuccess = document.getElementById("btcSuccess");
                                                        btcSuccess.style.display = "block";
                                                    }}>
                                                        Withdraw
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm-6 mb-2">
                    <div className={`mr-2 ${styles.card} ${styles.faq}`}>
                        <b>Other payment methods</b>

                        <hr />

                        <form onSubmit={otherPayment}>
                            <div className="text-muted">
                                If you are making a bank transfer, please note that depending on your location,
                                transaction might take up to 5 business days to confirm. If you encounter any
                                issue while funding your account, please contact payment@tradeby.org for assistance.
                            </div>

                            <div id="otherSuccess" className="alert alert-success text-center" style={{ display: "none" }}>
                                We will contact you soon!
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="otherAmount" required placeholder="Amount (usd)" />
                                <label htmlFor="otherAmount">Amount (USD)</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select" required id="otherPaymentMethod">
                                    <option selected>Bank Transfer</option>
                                    <option value="1">Western Union</option>
                                    <option value="2">Perfect Money</option>
                                </select>
                                <label htmlFor="otherPaymentMethod">Payment Method</label>
                            </div>

                            <button type="submit" className="btn btn-lg btn_dark white m-2">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: "150px" }}></div>
        </div>
    )
}
