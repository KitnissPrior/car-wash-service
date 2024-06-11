
import React, { useState} from 'react';
import { OrderFormProps } from '../types';
import {Selector} from "antd-mobile";

function createTimeOptions() {
    const timeOptions = [];
    const startHour = 9;
    const endHour= 21;
  
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        timeOptions.push({
          label: formattedTime,
          value: formattedTime,
        });
      }
    }

    return timeOptions;
  }


export const TimeSelectionStep: React.FC<OrderFormProps> = ({data, onDataChange}) => {
    const [value, setValue] = useState(data.timeSelection?.time? data.timeSelection.time : '1')
    const timeOptions = createTimeOptions();

    return (
        <div>
            <h2>Выберите время</h2>
            <Selector
                options={timeOptions}
                value={[value]}
                onChange={v => {
                    if (v.length) {
                    setValue(v[0])
                    onDataChange({ time: v[0] })
                    }
                }}/>
        </div>
    );
}