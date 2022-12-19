import React, { useState } from 'react';
import Form from '../Form';
import './index.css';
const Table = ({data=[], open, onCloseModal, onOpenModal, onSubmit}) => {
  return (
    <>
      <table>
        <tr>
          <th>Avataar</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {data.map((item, key) => {
          const { id, email, first_name, avatar } = item;
          return (
            <tr>
              <td>
                <img width='50px' src={avatar} />
              </td>
              <td>{id}</td>
              <td>{first_name}</td>
              <td>{email}</td>
            </tr>
          );
        })}
      </table>
      <button className="btn" onClick={onOpenModal}>ADD</button>
      <Form open={open} onCloseModal={onCloseModal} onSubmit={onSubmit}  />
    </>
  );
};
export default Table;
