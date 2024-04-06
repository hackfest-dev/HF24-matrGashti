import React from 'react'
import './Table.css';
import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs"

export const Table = ({ rows ,deleteRow, editRow }) => {
  return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Menu Item</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row,idx) => {

                        return (
                        <tr key={idx}>
                            <td>{row.menuitem}</td>
                            <td>{row.quantity}</td>
                            <td>
                                <span className='actions'>
                                    <BsFillTrashFill  
                                    className='delete-btn' 
                                    onClick={() =>deleteRow(idx) }
                                    />
                                    <BsFillPencilFill onClick={()=>editRow(idx)}/>
                                </span>
                            </td>
                        </tr>
                        );
                })}              
            </tbody>
        </table>
    </div>
  )
}

export default Table