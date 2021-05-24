import { useState } from 'react';

const useFormFields = () => {
  const [formData, setFormData] = useState({});
  const onChange = (e: React.ChangeEvent) => {
    let element = e.target as HTMLInputElement;
    setFormData({ ...formData, [element.name]: element.value });
  };
  return { onChange, formData };
};

export default useFormFields;
