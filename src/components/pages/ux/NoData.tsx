import {FC} from 'react';
import { NoDataProps } from '../../types';

export const NoData: FC<NoDataProps> = ({message}) => {

    return (
        <div style={{padding: '20px', textAlign: 'center'}}>
            <h2>{message}</h2>
        </div>
    )
}