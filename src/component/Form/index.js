import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './index.css';

const Form = ({ open = false, onCloseModal, onSubmit }) => {
  const [value, setValue] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  const [avatar, setAvatar] = useState({ name: '', file: '' });

  const onUpdate = (value) => {
    onSubmit({ ...value, avatar: avatar.file });
  };

  const onChange = (e, id) => {
    console.log({ ...value, avatar: avatar.file });
    const inpVal = e.target.value;
    switch (id) {
      case 'fname':
        setValue({ ...value, first_name: inpVal });
        return;
      case 'lname':
        setValue({ ...value, last_name: inpVal });
        return;

      case 'email':
        setValue({ ...value, email: inpVal });
        return;

      case 'avatar':
        setAvatar({
          name: inpVal[0].name,
          file: URL.createObjectURL(e.target.files[0]),
        });
        return;
      default:
        return 0;
    }
  };
  const { fname, lname, email } = value;
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div>Enter details</div>
        <div style={{ padding: '40px' }}>
          <label for="fname">First name:</label>
          <br />
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={(e) => onChange(e, 'fname')}
          />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={(e) => onChange(e, 'lname')}
          />
          <br />
          <label for="lname">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e, 'email')}
          />
          <br />
          <label for="lname">Avataar:</label>
          <br />
          <input
            type="file"
            name="avatar"
            accept="image/*"
            value={avatar.name}
            onChange={(e) => onChange(e, 'avatar')}
          />
          <br />
          <button
            onClick={() => onUpdate(value)}
          >Submit</button>
        </div>
      </Modal>
    </div>
  );
};

export default Form;
