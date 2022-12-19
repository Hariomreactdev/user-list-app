import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, postData } from '../../redux/actions';
import Table from '../Table';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  useEffect(() => {
    setData(state?.data?.users);
  }, [state]);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const onSubmit = (value) => {
    const id = data[data.length - 1].id + 1;
    value = { ...value, id };
    let newData = [...data, value]
    setData(newData);
    dispatch(postData(value))
    onCloseModal();
  };
  return (
    <Table
      data={data}
      open={open}
      onCloseModal={onCloseModal}
      onOpenModal={onOpenModal}
      onSubmit={onSubmit}
    />
  );
};

export default Home;
