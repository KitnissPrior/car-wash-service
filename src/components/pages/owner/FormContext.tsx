import React, { createContext, useContext, useState } from 'react';
import { Carwash, FormContextProviderProps } from '../../types';
import { Guid } from 'guid-typescript';

export const defaultFormData: Carwash = { id: Guid.create().toString(), name: '', carwashStreet: '', boxAmount: 0, contactInfo: '' };

const FormContext = createContext<{ formData: Carwash; setFormData: React.Dispatch<React.SetStateAction<Carwash>> }>({
 formData: defaultFormData,
 setFormData: () => {},
});

export const useFormData = () => useContext(FormContext);


export const FormProvider: React.FC<FormContextProviderProps> = ({ children}) => {
 const [formData, setFormData] = useState<Carwash>(defaultFormData);

 return <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>;
};

