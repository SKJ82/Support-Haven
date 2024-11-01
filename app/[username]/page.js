"use client";

import React from "react";
import { handlePayment, fetchPayment } from "@/actions/useractions";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";
import { useRouter} from "next/navigation";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Username = ({ params }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [payments, setPayments] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        amount: '',
    });

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login');
        }
    }, [status, router]);

    const handleChange = (event) => {
        const { name, value } = event.target; 
        setFormData({ ...formData, [name]: value }); 
    };
    
    const submitForm = async (event) => {
        try {
            const formDataToSubmit = new FormData();
            formDataToSubmit.append("name", formData.name);
            formDataToSubmit.append("message", formData.message);
            formDataToSubmit.append("amount", formData.amount);
            formDataToSubmit.append("to_user", params.username);

            await handlePayment(formDataToSubmit);
            handlePaymentsFetch();

            toast('Thanks a lot for your support', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            setFormData({ name: '', message: '', amount: '' });

        } catch (e) {
            return { error: "Payment not successful" };
        }
    }

    const submitPayment = async (amount) => {
        try {
            const formDataToSubmit = new FormData();
            formDataToSubmit.append("name", formData.name);
            formDataToSubmit.append("message", formData.message);
            formDataToSubmit.append("amount", amount);
            formDataToSubmit.append("to_user", params.username);

            await handlePayment(formDataToSubmit);
            handlePaymentsFetch();

            toast('Thanks a lot for your support', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            setFormData({ name: '', message: '', amount: '' });

        } catch (e) {
            return { error: "Payment not successful" };
        }
    };

    const handlePaymentsFetch = async () => {
        let curr_payments = await fetchPayment(params.username);
        setPayments(Array.isArray(curr_payments) ? curr_payments : []);
    };

    const getTotalAmount = () => {
        let sum = 0;
        payments.forEach((value) => {
            sum += value.amount;
        });
        return sum;
    };

    useEffect(() => {
        handlePaymentsFetch();
    }, []);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="cover relative">
                <img className="object-fill w-full h-96" src="./Goku.gif" alt="" />
                <div className="absolute -bottom-12 right-[34%] md:right-[46%] border-white border-2 rounded-full">
                    <img className="rounded-full" width={130} height={130} src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/10577939/ed6ce96334ef4fa391e8e97df8f4f00c/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/1.jpeg?token-time=1730764800&token-hash=S9GsuXfNvNtVefMcaTWWxxhfUVqr9SuepovA9_sf6TE%3D" alt="" />
                </div>
            </div>

            <div className="username flex flex-col gap-1 justify-center items-center my-14">
                <div className="font-bold text-lg">@{params.username}</div>
                <div className="text-slate-400">
                    <span className="font-bold text-lg"> Creating animated arts and videos </span>
                </div>
                <div className="text-slate-400">
                    <span className="font-semibold">{payments.length} Payments . &#8377;{getTotalAmount()} raised</span>
                </div>

                <div className="payment flex gap-3 w-[85%] mt-10 flex-col md:flex-row">
                    <div className="supporters w-full md:w-1/2 bg-gray-900 rounded-lg text-white p-7">
                        <h2 className="text-2xl font-bold my-5">Top Supporters</h2>
                        <ul className="items-center mb-4">
                            {payments.length === 0 && <li className="text-lg px-3">No Payments yet</li>}
                            {payments
                                .sort((a, b) => b.amount - a.amount)
                                .map((value, index) => (
                                    <li key={index} className="text-lg flex items-center my-2">
                                        <img className="w-8 rounded-full p-0" width={40} src="./user.gif" alt="" />
                                        <span className="px-2">{value.name} donated <span className="font-bold"> &#8377;{value.amount} </span> with a message "{value.message}"</span>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2 bg-gray-900 rounded-lg text-white p-7">
                        <form action = {submitForm} className="flex flex-col gap-5">
                            <label className="text-2xl px-2 font-bold my-4">Make a payment</label>
                            <div className="flex flex-col gap-2">
                                <input 
                                    onChange={handleChange} 
                                    value={formData.name} 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="h-10 px-2 rounded-md bg-slate-800" 
                                    placeholder="Enter Name" 
                                />
                                <input 
                                    onChange={handleChange} 
                                    value={formData.message} 
                                    type="text" 
                                    name="message" 
                                    id="message" 
                                    className="h-10 px-2 rounded-md bg-slate-800" 
                                    placeholder="Enter Message" 
                                />

                                <input 
                                onChange={handleChange} 
                                value={formData.amount} 
                                type="text" 
                                name="amount" 
                                id="amount" 
                                className="h-10 px-2 rounded-md bg-slate-800" 
                                placeholder="Enter Amount" />

                                <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 
                                font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100"
                                disabled = {!formData.name || !formData.message || !formData.amount}>Pay</button>
                            </div>

                            <div className="flex gap-2">
                                <button 
                                    type="button" 
                                    onClick={() => submitPayment(100)} 
                                    className="text-white bg-gradient-to-br from-green-600 to-blue-500 
                                    hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
                                    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100"
                                    disabled={!formData.name || !formData.message}
                                >
                                    Pay <span className="font-bold">&#8377;100</span>
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => submitPayment(200)} 
                                    className="text-white bg-gradient-to-br from-green-600 to-blue-500 
                                    hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
                                    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100" 
                                    disabled={!formData.name || !formData.message}
                                >
                                    Pay <span className="font-bold">&#8377;200</span>
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => submitPayment(500)} 
                                    className="text-white bg-gradient-to-br from-green-600 to-blue-500 
                                    hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
                                    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100"
                                    disabled={!formData.name || !formData.message}
                                >
                                    Pay <span className="font-bold">&#8377;500</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Username;
