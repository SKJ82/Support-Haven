"use client"
import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchUser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const { data: session, update } = useSession()
  const router = useRouter();
  const [form, setForm] = useState({})

  useEffect(() => {
    if (!session) {
      router.push('/login');
    }

    else{
      getData()
    }
  }, [session, router]);

  const getData = async () => {
    let u = await fetchUser(session.user.name)
    setForm(u)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (data) => {
    let a = await updateProfile(data, session.user.name)

    toast('Profile updated', {
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
  }

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

      <div className='container mx-auto py-5 px-6'>
        <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>

        <form className='max-w-2xl mx-auto' action={handleSubmit}>
          <div className='my-2'>
            <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Name
            </label>
            <input
              value={form.name ? form.name : ""}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder='Enter your name'
              id="name"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs
                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* input for email */}
          <div className='my-2'>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Email
            </label>
            <input
              value={form.email ? form.email : ""}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder='Enter your email'
              id="email"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs
                focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* input for username */}
          <div className='my-2'>
            <label htmlFor="username" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Username
            </label>
            <input
              value={form.username ? form.username : ""}
              onChange={handleChange}
              type="text"
              name="username"
              placeholder='Enter username'
              id="username"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* input for profile picture of input type text */}
          <div className='my-2'>
            <label htmlFor="profilepic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Profile Picture
            </label>
            <input
              value={form.profilepic ? form.profilepic : ""}
              onChange={handleChange}
              type="text"
              name="profilepic"
              placeholder="Enter image URL"
              id="profilepic"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* input for cover pic */}
          <div className='my-2'>
            <label htmlFor="coverpic" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Cover Picture
            </label>
            <input
              value={form.coverpic ? form.coverpic : ""}
              onChange={handleChange}
              type="text"
              name="coverpic"
              placeholder="Enter image URL"
              id="coverpic"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* input razorpay id */}
          <div className='my-2'>
            <label htmlFor="razorpayid" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Razorpay ID
            </label>
            <input
              value={form.razorpayid ? form.razorpayid : ""}
              onChange={handleChange}
              type="text"
              name="razorpayid"
              placeholder='Enter Razorpay ID'
              id="razorpayid"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* input razorpay secret */}
          <div className='my-2'>
            <label htmlFor="razorpaysecret" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Razorpay Secret
            </label>
            <input
              value={form.razorpaysecret ? form.razorpaysecret : ""}
              onChange={handleChange}
              type="text"
              name="razorpaysecret"
              placeholder='Enter Razorpay Secret'
              id="razorpaysecret"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs
          focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className='my-6'>
            <button
              type="submit"
              className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600
          focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm"
            >
              Save
            </button>
          </div>

        </form>

      </div>
    </>
  )

}

export default Dashboard