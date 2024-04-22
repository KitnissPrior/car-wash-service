import React from 'react';
import type { FormInstance } from 'antd';
import { Button, Form } from 'antd';
import './styles/CarwashAdding.scss';

interface SubmitButtonProps {
  form: FormInstance;
  onClick: () => void;
}

//НЕ ИСПОЛЬЗУЕТСЯ
//с помощью этой кнопки должна была срабатывать правильная валидация, но этого почему-то не происходит

export const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({ form, onClick, children }) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);

  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button className="form-submit-button" 
      onClick={onClick} type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};