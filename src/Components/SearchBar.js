import React from 'react'

function SearchBar() {
    return (
        <>


            <div className="border border-black w-[98vw] h-[15vh] m-auto mt-6 flex flex-wrap ">











                <div className="border border-black w-[25%] flex flex-col justify-center" >
                    <h1>What Are You Looking For</h1>
                    <div class="border border-black relative">
                        <label for="search" class="sr-only">What Are You Looking For</label>
                        <div class="relative">
                            <input
                                type="text"
                                id="search"
                                name="search"
                                placeholder="What Are You Looking For"
                                class="w-[100%] bg-gray-100  text-gray-800 font-bold  px-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <span class="material-symbols-outlined absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400">search</span>
                        </div>
                    </div>



                </div>
                <div className="border border-black w-[25%] flex flex-col justify-center">

                    <h1>Category</h1>
                    <select id="cars" name="cars" className="w-[100%]">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="border border-black w-[25%] flex flex-col justify-center">
                    <h1>Status</h1>
                    <select id="cars" name="cars" className="w-[100%]">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="border border-black w-[25%] flex items-center ">


                    <span class="material-symbols-outlined">
                        keyboard_double_arrow_down
                    </span> <button>Submit</button>
                </div>

            </div>
            



        </>
    )
}

export default SearchBar
