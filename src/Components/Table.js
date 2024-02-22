import React, { useContext, useState } from "react";
import { UpdateContext } from "./Context";

function Table(props) {
  const [currentPage, SetCurrentPage] = useState(1);


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

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage; //5
  const firstIndex = lastIndex - recordsPerPage;//0
  const records = Columns.slice(firstIndex, lastIndex); //till 0 to 4 index
  const nPage = Math.ceil(Columns.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);


  const handlePage = (n) => {
    SetCurrentPage(n);

  }

  console.log(Column);
  console.log(Columns)
  return (
    <>
    
      <div
        className={`w-[95vw]  md:h-[17vh] p-2  border border-gray rounded-xl shadow-lg shadow-gray-500/40 mt-5 m-auto
         ${value.bool ? "" : 'hidden'
          }  `}
      >
        <form action="" className="flex w-[100%] flex-wrap  gap-4">

          <input onChange={HandleInputChange} className="w-full rounded-lg p-1 shadow-lg shadow-gray-700/40   sm:w-[15%] sm:rounded-lg sm:p-1 sm:shadow-lg sm:shadow-gray-700/40" type="text" name="ID" value={Column.ID} id="" placeholder="Enter The ID" />
          <input onChange={HandleInputChange} className="w-[100%] rounded-lg p-1 shadow-lg shadow-gray-700/40 sm:w-[15%] sm:rounded-lg sm:p-1 sm:shadow-lg sm:shadow-gray-700/40" type="text" name="Shpify" value={Column.Shpify} id="" placeholder="Enter The Shpify" />
          <input onChange={HandleInputChange} className="w-[100%] rounded-lg p-1 shadow-lg shadow-gray-700/40 sm:w-[15%] sm:rounded-lg sm:p-1 sm:shadow-lg sm:shadow-gray-700/40" type="date" name="Date" value={Column.Date} id="" placeholder="Enter The Date" />
          <input onChange={HandleInputChange} className="w-[100%] rounded-lg p-1 shadow-lg shadow-gray-700/40 sm:w-[15%] sm:rounded-lg sm:p-1 sm:shadow-lg sm:shadow-gray-700/40" type="text" name="Status" value={Column.Status} id="" placeholder="Status Like OnGoing YetToStart Done" />
          <input onChange={HandleInputChange} className="w-[100%] rounded-lg p-1 shadow-lg shadow-gray-700/40 sm:w-[15%] sm:rounded-lg sm:p-1 sm:shadow-lg sm:shadow-gray-700/40" type="text" name="Customer" value={Column.Customer} id="" placeholder="Enter The Customer Nmae" />
          <input onChange={HandleInputChange} className="w-[100%] rounded-lg p-1 shadow-lg shadow-gray-700/40 sm:w-[15%] sm:rounded-lg sm:p-1 sm:shadow-lg sm:shadow-gray-700/40" type="email" name="Mail" value={Column.Mail} id="" placeholder="Enter The E-Mail" />
          <input onChange={HandleInputChange} className="w-[100%] rounded-lg p-1 shadow-lg shadow-gray-700/40 sm:w-[15%] sm:rounded-lg sm:p-1 sm:shadow-lg sm:shadow-gray-700/40" type="text" name="Country" value={Column.Country} id="" placeholder="Enter The Country" />
          <input onChange={HandleInputChange} className="w-[100%] rounded-lg p-1 shadow-lg shadow-gray-700/40 sm:w-[15%] sm:rounded-lg sm:p-1 sm:shadow-lg sm:shadow-gray-700/40" type="text" name="Shipping" value={Column.Shipping} id="" placeholder="Enter The Shipping" />
          <input onChange={HandleInputChange} className="w-[100%] rounded-lg p-1 shadow-lg shadow-gray-700/40 sm:w-[15%] sm:rounded-lg sm:p-1 sm:shadow-lg sm:shadow-gray-700/40" type="text" name="Source" value={Column.Source} id="" placeholder="Enter The Source" />
          <input onChange={HandleInputChange} className="w-[100%] rounded-lg p-1 shadow-lg shadow-gray-700/40 sm:w-[15%] sm:rounded-lg sm:p-1 sm:shadow-lg sm:shadow-gray-700/40" type="text" name="OrderType" value={Column.OrderType} id="" placeholder="Enter The Order Type" />

          <button onClick={SaveColumn}><span className="material-symbols-outlined">
            done
          </span></button><button onClick={value.handleclick}><span className="material-symbols-outlined">
            block
          </span></button>



        </form>




      </div>

      <div className="w-[95vw] h-[50vh] border border-gray rounded-xl shadow-lg shadow-gray-500/40 mt-5 m-auto overflow-y-scroll">

        <div className="  flex flex-wrap justify-evenly p-2">
          <h1 className="self-center font-bold">Product Summary</h1>
          <button>Show</button>
          <select className=" w-[19vw] font-bold border border-gray-200 rounded-lg shadow-lg shadow-gray-500/40 " id="cars" name="cars">
            <option value="volvo">ALL COLUMN</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <button className="bg-blue-800 text-sm text-white rounded-lg p-2" onClick={() => { handleDelete() }}>DISPATCHED SELECTED</button>
          <h1 className="flex items-center cursor-pointer">
            <span className="material-symbols-outlined inline-block">
              chevron_left
            </span>
            {
              numbers.map((n, i) => {
                return <span onClick={() => { handlePage(n) }} className="inline-block">{n}</span>
              })
            }

            <span className="material-symbols-outlined inline-block">
              chevron_right
            </span>
          </h1>


        </div>

        <div className="table w-[100%] h-[100%]  ">
          <table className="w-[100%]   border-collapse border border-gray-300">
            <thead className="">
              <tr className="bg-gray-300">
                <th className="border-t border-b border-gray-300 px-4 py-2"><input type="checkbox" name="" id="" /></th>
                <th className="border-t border-b border-gray-300 px-4 py-2">ID</th>
                <th className="border-t border-b border-gray-300 px-4 py-2">SHPIFY</th>
                <th className="border-t border-b border-gray-300 px-4 py-2">DATE</th>
                <th className="border-t border-b border-gray-300 px-4 py-2">STATUS</th>
                <th className="border-t border-b border-gray-300 px-4 py-2">CUSTOMER</th>
                <th className="border-t border-b border-gray-300 px-4 py-2">EMAIL</th>
                <th className="border-t border-b border-gray-300 px-4 py-2">COUNTRY</th>
                <th className="border-t border-b border-gray-300 px-4 py-2">SHIPPING</th>
                <th className="border-t border-b border-gray-300 px-4 py-2">SOURCE</th>
                <th className="border-t border-b border-gray-300 px-4 py-2">ORDER TYPE</th>
                <th className="border-t border-b border-gray-300 px-4 py-2"></th>

              </tr>
            </thead>
            <tbody>
              {records.filter((item) => {

                const isStatusMatch = props.value.Status.toLowerCase() === 'all' || item.Status.toLowerCase().includes(props.value.Status.toLowerCase());
                const isIDMatch = props.value.Search.toLowerCase() === '' || item.ID.toLowerCase().includes(props.value.Search.toLowerCase());

                return isStatusMatch && isIDMatch;

              }).map((items) => {
                return <tr key={items.ID}>
                  <td className="border-t border-b border-gray-300 px-4 py-2"><input checked={items.CheckBox} onClick={() => handleCheckInput(items)} type="checkbox" name="" id="" /></td>
                  <td className="border-t border-b border-gray-300 px-4 py-2">{items.ID}</td>

                  <td className="border-t border-b border-gray-300 px-4 py-2">{items.Shpify}</td>
                  <td className="border-t border-b border-gray-300 px-4 py-2">{items.Date}</td>
                  <td className="border-t border-b border-gray-300 px-4 py-2">{items.Status}</td>
                  <td className="border-t border-b border-gray-300 px-4 py-2">{items.Customer}</td>
                  <td className="border-t border-b border-gray-300 px-4 py-2">{items.Mail}</td>
                  <td className="border-t border-b border-gray-300 px-4 py-2">{items.Country}</td>
                  <td className="border-t border-b border-gray-300 px-4 py-2">{items.Shipping}</td>
                  <td className="border-t border-b border-gray-300 px-4 py-2">{items.Source}</td>
                  <td className="border-t border-b border-gray-300 px-4 py-2">{items.OrderType}</td>
                  <td onClick={(event) => Edit(event, items)} className="  border-t border-b border-gray-300 px-4 py-2"><span className="material-symbols-outlined cursor-pointer">
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
