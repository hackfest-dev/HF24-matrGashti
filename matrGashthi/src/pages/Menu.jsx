
import { useState } from 'react'
import React from 'react'
import Table from '../components/Table'
import { Modal } from '../components/Modal'
import './Menu.css'
import Navbar from '../components/Navigation';

const Menu = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const [rows, setRows]= useState([
        {menuitem:'Gobi Manchurian',quantity:'10'},
        {menuitem:'Aloo Manchurian',quantity:'10'}
    ]);
    const [rowToEdit, setRowToEdit] = useState(null);

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_,idx) => idx !== targetIndex));
    };

    const handleEditRow = (idx) => {
        setRowToEdit(idx);
        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
        rowToEdit === null 
        ?setRows([...rows, newRow]) 
        :setRows(
            rows.map((currRow, idx) => {
                if (idx !== rowToEdit) return currRow;

                return newRow;
        })
        );
    };

  return (
    <>
    <Navbar/>   
    <div className='Menu'>
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md" onClick={() => setModalOpen(true)}>
            Add
        </button>
        {modalOpen && (
        <Modal closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
        }}
        onSubmit={handleSubmit} 
        defaultValue={rowToEdit !== null && rows[rowToEdit]}
         />
        )}
    </div>
    </>
  )
}

export default Menu