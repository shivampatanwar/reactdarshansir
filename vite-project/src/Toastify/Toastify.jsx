import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {

    let handleToast=()=>{
        toast.success('This is a success message!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div>
            <button onClick={handleToast}>Toast</button>

            <ToastContainer />

        </div>
    )
}

export default Toastify
