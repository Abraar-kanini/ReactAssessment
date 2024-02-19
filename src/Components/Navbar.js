import React from 'react'

function Navbar(props) {
    return (
        <>

            <nav className="border border-black w-[100vw] h-[10vh] flex justify-between items-center">
                <div className="ml-5">
                    <h1 className="font-bold text-2xl">Orders</h1>
                </div>
                <div className="mr-5">
                    <button  className="border border-black rounded-md bg-[#4b559e] w-[130px] text-white" onClick={props.handleClick}>CREATE NEW </button>
                </div>
            </nav>




        </>
    )
}

export default Navbar
