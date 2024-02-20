import React, { useContext, useState } from "react";
import { UpdateContext } from "./Context";

function Table() {

  const value = useContext(UpdateContext);

  const [Column, SetColumn] = useState({
    ID: "",
    Shpify: "",
    Date: "",
    Status: "",
    Customer: "",
    Mail: "",
    Country: "",
    Shipping: "",
    Source: "",
    OrderType: ""
  })

  const [Columns, SetColumns] = useState([]);

  const HandleInputChange = (event) => {
    const { name, value } = event.target;
    SetColumn({
      ...Column,
      [name]: value
    })
  }
  const SaveColumn = (event) => {
    event.preventDefault();
    try{
    
      for (const iterator of Columns) {
        if(iterator.ID===Column.ID){
          throw new Error("There is same id exist");
        }
        
      }
      SetColumns([...Columns, Column]);
    }
    catch(error){
      console.log(error);

    }
      
    
   
  }
  console.log(Column);
  console.log(Columns)
  return (
    <>
      <div
        className={`w-[95vw] h-[17vh] border border-gray rounded-xl shadow-lg shadow-gray-500/40 mt-5 m-auto
         ${value.bool ? "" : 'hidden'
          }  `}
      >
        <form action="" className="flex flex-wrap  gap-4">

          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="ID" id="" placeholder="Enter The ID" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Shpify" id="" placeholder="Enter The Shpify" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="date" name="Date" id="" placeholder="Enter The Date" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Status" id="" placeholder="Enter The Status" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Customer" id="" placeholder="Enter The Customer Nmae" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="email" name="Mail" id="" placeholder="Enter The E-Mail" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Country" id="" placeholder="Enter The Country" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Shipping" id="" placeholder="Enter The Shipping" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Source" id="" placeholder="Enter The Source" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="OrderType" id="" placeholder="Enter The Order Type" />

          <button onClick={SaveColumn}><span class="material-symbols-outlined">
            done
          </span></button><button onClick={value.handleclick}><span class="material-symbols-outlined">
            block
          </span></button>



        </form>




      </div>

      <div className="w-[95vw] h-[40vh] border border-gray rounded-xl shadow-lg shadow-gray-500/40 mt-5 m-auto">

        <div className="border border-black flex flex-wrap justify-evenly">
          <h1>Product Summary</h1>
          <button>Show</button>
          <select className="border border-gray-200 rounded-lg shadow-lg shadow-gray-500/40 " id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <button>DiPatched Selected</button>
          <h1 class="flex items-center">
            <span class="material-symbols-outlined inline-block">
              chevron_left
            </span>
            <span class="inline-block">1234</span>
            <span class="material-symbols-outlined inline-block">
              chevron_right
            </span>
          </h1>


        </div>

        <div className="table">
        <table class="w-full border-collapse border border-gray-300">
        <thead>
            <tr>
                <th class="border border-gray-300 px-4 py-2">Column 1</th>
                <th class="border border-gray-300 px-4 py-2">Column 2</th>
                <th class="border border-gray-300 px-4 py-2">Column 3</th>
                <th class="border border-gray-300 px-4 py-2">Column 4</th>
                <th class="border border-gray-300 px-4 py-2">Column 5</th>
                <th class="border border-gray-300 px-4 py-2">Column 6</th>
                <th class="border border-gray-300 px-4 py-2">Column 7</th>
                <th class="border border-gray-300 px-4 py-2">Column 8</th>
                <th class="border border-gray-300 px-4 py-2">Column 9</th>
                <th class="border border-gray-300 px-4 py-2">Column 10</th>
                <th class="border border-gray-300 px-4 py-2">Column 11</th>
                <th class="border border-gray-300 px-4 py-2">Column 12</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="border border-gray-300 px-4 py-2">Data 1</td>
                <td class="border border-gray-300 px-4 py-2">Data 2</td>
                <td class="border border-gray-300 px-4 py-2">Data 3</td>
                <td class="border border-gray-300 px-4 py-2">Data 4</td>
                <td class="border border-gray-300 px-4 py-2">Data 5</td>
                <td class="border border-gray-300 px-4 py-2">Data 6</td>
                <td class="border border-gray-300 px-4 py-2">Data 7</td>
                <td class="border border-gray-300 px-4 py-2">Data 8</td>
                <td class="border border-gray-300 px-4 py-2">Data 9</td>
                <td class="border border-gray-300 px-4 py-2">Data 10</td>
                <td class="border border-gray-300 px-4 py-2">Data 11</td>
                <td class="border border-gray-300 px-4 py-2">Data 12</td>
            </tr>
           
        </tbody>
    </table>



        </div>

      </div>


    </>
  );
}

export default Table;
