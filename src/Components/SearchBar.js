import React from 'react'

function SearchBar() {
    return (
        <>
            <div className="w-[95vw] h-[20vh] border border-gray rounded-xl shadow-lg shadow-gray-500/40 mt-5 m-auto flex flex-wrap gap-3">
                <div className="w-[30%] h-[100%] border border-black self-center">

                    <h2>What Are You Looking For</h2>
                    <div className="border border-black relative w-[100%]">
                        <span class="material-symbols-outlined absolute">
                            search
                        </span>
                        <input className="border w-[100%]  pl-6 border-black shadow-lg shadow-gray-500/40" type="text" name="" id="" />
                    </div>
                </div>

                <div className="w-[25%] h-[100%] border border-black self-center">

                    <h2>Category</h2>
                    <select className="border border-gray-200 rounded-lg  w-[100%]" id="cars" name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>



                </div>
                <div className="w-[25%] h-[100%] border border-black self-center">

                    <h2>Category</h2>
                    <select className="border border-black w-[100%]" id="cars" name="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>



                </div>

                <div className="w-[15%] h-[100%] border border-black self-center flex items-end justify-between">
                    <button className="border border-gray-300 h-[5vh] w-[30%] flex items-center justify-center">
                        <span class="material-symbols-outlined">
                            keyboard_double_arrow_down
                        </span>
                    </button>
                    <button className="border border-gray-300 h-[5vh] w-[60%] flex items-center justify-center">
                        Submit
                    </button>
                </div>



            </div>



        </>
    )
}

export default SearchBar
