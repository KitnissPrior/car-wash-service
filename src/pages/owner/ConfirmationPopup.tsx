import {FC} from 'react';
import { Modal } from 'antd';
import { ConfirmationProps } from '../../components/types';

export const ConfirmationPopup: FC<ConfirmationProps> = (
   {title, visible, handleOk, handleCancel, okText, cancelText}) => {

    return (
        <>
        <Modal
        title={title}
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={okText}
        cancelText={cancelText}
        >
        <p>Отменить данное действие будет невозможно!</p>
      </Modal>
        </>
    )
}