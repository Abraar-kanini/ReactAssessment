import React, { useState } from 'react'



function Table() {
    const [column, setColumn] = useState({
        ID: "", SHPIFY: "", DATE: "", STATUS: "", CUSTOMERS: "", EMAIL: "", COUNTRY: "", SHIPPING: "", SOURCE: "", ORDERTYPE: "", editiable: false
    });

    const [columns, setColumns] = useState([]);





    const HandleInputChange = (event) => {

        const { name, value } = event.target;
        setColumn({
            ...column,
            [name]: value
        })
    }

    const SaveColumns = (event) => {
        event.preventDefault();

        // Check if the column with the same ID exists in the state
        const index = columns.findIndex(item => item.ID === column.ID);

        if (index !== -1) {
            // If the column with the same ID exists, update it
            const updatedColumns = [...columns];
            updatedColumns[index] = column;
            setColumns(updatedColumns);
        } else {
            // If the column with the same ID doesn't exist, add it to the state
            setColumns([...columns, column]);
        }
    }


    const handleEdit = (event) => {
        let id = event.target.getAttribute("data-id");
        console.log(id);

        // Find the column item with the matching ID
        const selectedColumn = columns.find(column => column.ID === id);

        // If a column with the matching ID is found, populate the input fields
        if (selectedColumn) {
            setColumn(selectedColumn);
        }
    }



    console.log(column)
    console.log(columns)
    return (
        <>
            <div class="inputs border border-black mt-10 flex flex-wrap w-[90vw] m-auto h-[20vh] gap-8 justify-center items-center">
                <input
                    onChange={HandleInputChange}
                    value={column.ID}
                    className="input-field border border-gray-600"
                    type="text"
                    name="ID"
                    placeholder="Enter text"
                />

                <input
                    onChange={HandleInputChange}
                    value={column.SHPIFY}
                    className="input-field border border-gray-600"
                    name="SHPIFY"
                    type="text"
                    placeholder="Enter text"
                />
                <input
                    onChange={HandleInputChange}
                    value={column.DATE}
                    className="input-field border border-gray-600"
                    name="DATE"
                    type="date"
                    placeholder="Select date"
                />
                <input
                    onChange={HandleInputChange}
                    value={column.STATUS}
                    className="input-field border border-gray-600"
                    name="STATUS"
                    type="text"
                    placeholder="Enter text"
                />

                <input
                    onChange={HandleInputChange}
                    value={column.CUSTOMERS}
                    className="input-field border border-gray-600"
                    name='CUSTOMERS'
                    type="text"
                    placeholder="Enter text"
                />
                <input
                    onChange={HandleInputChange}
                    value={column.EMAIL}
                    className="input-field border border-gray-600"
                    name="EMAIL"
                    type="email"
                    placeholder="Enter email"
                />
                <input
                    onChange={HandleInputChange}
                    value={column.COUNTRY}
                    className="input-field border border-gray-600"
                    name="COUNTRY"
                    type="text"
                    placeholder="Enter text"
                />

                <input
                    onChange={HandleInputChange}
                    value={column.SHIPPING}
                    className="input-field border border-gray-600"
                    name="SHIPPING"
                    type="text"
                    placeholder="Enter text"
                />
                <input
                    onChange={HandleInputChange}
                    value={column.SOURCE}
                    className="input-field border border-gray-600"
                    name="SOURCE"
                    type="text"
                    placeholder="Enter text"
                />
                <input
                    onChange={HandleInputChange}
                    value={column.ORDERTYPE}
                    className="input-field border border-gray-600"
                    name="ORDERTYPE"
                    type="text"
                    placeholder="Enter text"
                />
                <button onClick={SaveColumns}>
                    <span className="material-symbols-outlined">done</span>
                </button>
                <button>
                    <span className="material-symbols-outlined">dangerous</span>
                </button>
            </div>


            <div className="w-[98vw] h-[70vh] m-auto border border-black mt-2 ">
                <div className="border border-black h-[10%] ">
                    <ul className="flex justify-between space-y-2 ">
                        {/* <li></li> */}
                        <li className="mt-2">Product Summary</li>
                        <li><button>Show</button></li>
                        <li><select id="cars" name="cars" className="w-[100%]">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select></li>


                    </ul>

                </div>

                <div class="overflow-x-auto">
                    <table className=" border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                <th className="border border-gray-200 px-4 py-2"><input type="checkbox" name="" id="" /></th>
                                <th className="border border-gray-200 px-4 py-2">ID</th>
                                <th className="border border-gray-200 px-4 py-2">SHPIFY</th>
                                <th className="border border-gray-200 px-4 py-2">DATE</th>
                                <th className="border border-gray-200 px-4 py-2">STATUS</th>
                                <th className="border border-gray-200 px-4 py-2">CUSTOMERS</th>
                                <th className="border border-gray-200 px-4 py-2">EMAIL</th>
                                <th className="border border-gray-200 px-4 py-2">COUNTRY</th>
                                <th className="border border-gray-200 px-4 py-2">SHIPPING</th>
                                <th className="border border-gray-200 px-4 py-2">SOURCE</th>
                                <th className="border border-gray-200 px-4 py-2">ORDER TYPE</th>
                                <th className="border border-gray-200 px-4 py-2">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {columns.map((items) => {
                                return <tr key={items.ID}>
                                    <td className="border border-gray-200 px-4 py-2"><input type="checkbox" name="" id="" /></td>
                                    <td className="border border-gray-200 px-4 py-2">{items.ID}</td>
                                    <td className="border border-gray-200 px-4 py-2">{items.SHPIFY}</td>
                                    <td className="border border-gray-200 px-4 py-2">{items.DATE}</td>
                                    <td className="border border-gray-200 px-4 py-2">{items.STATUS}</td>
                                    <td className="border border-gray-200 px-4 py-2">{items.CUSTOMERS}</td>
                                    <td className="border border-gray-200 px-4 py-2">{items.EMAIL}</td>
                                    <td className="border border-gray-200 px-4 py-2">{items.COUNTRY}</td>
                                    <td className="border border-gray-200 px-4 py-2">{items.SHIPPING}</td>
                                    <td className="border border-gray-200 px-4 py-2">{items.SOURCE}</td>
                                    <td className="border border-gray-200 px-4 py-2">{items.ORDERTYPE}</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        <span onClick={handleEdit} data-id={items.ID} className="material-symbols-outlined">
                                            edit_square
                                        </span>

                                    </td>

                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>

            </div>



        </>
    )
}

export default Table
