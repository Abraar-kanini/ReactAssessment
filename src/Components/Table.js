import React, { useContext, useState } from "react";
import { UpdateContext } from "./Context";

function Table(props) {

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
    OrderType: "",
    CheckBox: false
  })


  const handleCheckInput = (clickedItem) => {
    const updatedColumns = Columns.map(item => {
      if (item.ID === clickedItem.ID) {
        return { ...item, CheckBox: !item.CheckBox }; // Toggle the CheckBox value
      }
      return item;
    });
    SetColumns(updatedColumns);
  }


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
    try {
      let isIDExist = false;

      // Check if the ID already exists in the Columns array
      for (let i = 0; i < Columns.length; i++) {
        if (Columns[i].ID === Column.ID) {
          // Update the existing column with the same ID
          Columns[i] = Column;
          isIDExist = true;
          break;
        }
      }

      // If the ID doesn't exist, add the new column to Columns
      if (!isIDExist) {
        SetColumns([...Columns, Column]);
      } else {
        // If the ID exists, update the state with the modified Columns array
        SetColumns([...Columns]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Edit = (event, items) => {
    event.preventDefault();
    value.handleclick(event);
    // Do something with the items data, for example, update the state
    SetColumn({
      ID: items.ID,
      Shpify: items.Shpify,
      Date: items.Date,
      Status: items.Status,
      Customer: items.Customer,
      Mail: items.Mail,
      Country: items.Country,
      Shipping: items.Shipping,
      Source: items.Source,
      OrderType: items.OrderType
    });
  };

  const handleDelete = () => {
    // Filter out the columns where CheckBox is false
    let updatedColumns = Columns.filter(column => column.CheckBox === false);
    
    // Update the state with the filtered columns
    SetColumns(updatedColumns);
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

          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="ID" value={Column.ID} id="" placeholder="Enter The ID" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Shpify" value={Column.Shpify} id="" placeholder="Enter The Shpify" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="date" name="Date" value={Column.Date} id="" placeholder="Enter The Date" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Status" value={Column.Status} id="" placeholder="Enter The Status" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Customer" value={Column.Customer} id="" placeholder="Enter The Customer Nmae" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="email" name="Mail" value={Column.Mail} id="" placeholder="Enter The E-Mail" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Country" value={Column.Country} id="" placeholder="Enter The Country" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Shipping" value={Column.Shipping} id="" placeholder="Enter The Shipping" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="Source" value={Column.Source} id="" placeholder="Enter The Source" />
          <input onChange={HandleInputChange} className="rounded-lg shadow-lg shadow-gray-700/40" type="text" name="OrderType" value={Column.OrderType} id="" placeholder="Enter The Order Type" />

          <button onClick={SaveColumn}><span className="material-symbols-outlined">
            done
          </span></button><button onClick={value.handleclick}><span className="material-symbols-outlined">
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
          <button onClick={()=>{handleDelete()}}>DiPatched Selected</button>
          <h1 className="flex items-center">
            <span className="material-symbols-outlined inline-block">
              chevron_left
            </span>
            <span className="inline-block">1234</span>
            <span className="material-symbols-outlined inline-block">
              chevron_right
            </span>
          </h1>


        </div>

        <div className="table">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2"><input type="checkbox" name="" id="" /></th>
                <th className="border border-gray-300 px-4 py-2">Column 1</th>
                <th className="border border-gray-300 px-4 py-2">Column 2</th>
                <th className="border border-gray-300 px-4 py-2">Column 3</th>
                <th className="border border-gray-300 px-4 py-2">Column 4</th>
                <th className="border border-gray-300 px-4 py-2">Column 5</th>
                <th className="border border-gray-300 px-4 py-2">Column 6</th>
                <th className="border border-gray-300 px-4 py-2">Column 7</th>
                <th className="border border-gray-300 px-4 py-2">Column 8</th>
                <th className="border border-gray-300 px-4 py-2">Column 9</th>
                <th className="border border-gray-300 px-4 py-2">Column 10</th>
                <th className="border border-gray-300 px-4 py-2">Column 11</th>

              </tr>
            </thead>
            <tbody>
              {Columns.filter((item) => {

                const isStatusMatch = props.value.Status.toLowerCase() === 'all' || item.Status.toLowerCase().includes(props.value.Status.toLowerCase());
                const isIDMatch = props.value.Search.toLowerCase() === '' || item.ID.toLowerCase().includes(props.value.Search.toLowerCase());

                return isStatusMatch && isIDMatch;

              }).map((items) => {
                return <tr key={items.ID}>
                  <td className="border border-gray-300 px-4 py-2"><input checked={items.CheckBox} onClick={() => handleCheckInput(items)} type="checkbox" name="" id="" /></td>
                  <td className="border border-gray-300 px-4 py-2">{items.ID}</td>
                  <td className="border border-gray-300 px-4 py-2">{items.Shpify}</td>
                  <td className="border border-gray-300 px-4 py-2">{items.Date}</td>
                  <td className="border border-gray-300 px-4 py-2">{items.Status}</td>
                  <td className="border border-gray-300 px-4 py-2">{items.Customer}</td>
                  <td className="border border-gray-300 px-4 py-2">{items.Mail}</td>
                  <td className="border border-gray-300 px-4 py-2">{items.Country}</td>
                  <td className="border border-gray-300 px-4 py-2">{items.Shipping}</td>
                  <td className="border border-gray-300 px-4 py-2">{items.Source}</td>
                  <td className="border border-gray-300 px-4 py-2">{items.OrderType}</td>
                  <td onClick={(event) => Edit(event, items)} className="border border-gray-300 px-4 py-2"><span class="material-symbols-outlined">
                    edit_square
                  </span></td>

                </tr>
              })}
            </tbody>
          </table>



        </div>

      </div>


    </>
  );
}

export default Table;
