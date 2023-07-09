import React from 'react';

import { Modal } from 'antd';
import { IState } from '../../interface/state';
import { useSelector } from 'react-redux';

interface IProps {
    isModalOpen:boolean;
    closeModel:()=> void;
}

const SettleUpExpense: React.FC<IProps> = (props) => {
    const {isModalOpen,closeModel} = props 
	const Expense = useSelector((state: IState) => state.expenses);
	console.log(Expense,'expense');

  const modalFooter = null;

  return (
    <>
      <Modal title="Add Expense" open={isModalOpen} footer={modalFooter} onCancel={closeModel}>

      </Modal>
    </>
  );
};

export default SettleUpExpense;
