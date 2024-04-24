import {FC} from 'react';
import { NoDataProps } from '../../components/types';

export const NoData: FC<NoDataProps> = ({message}) => {

    return (
        <div style={{padding: '0 0 20px', textAlign: 'start', fontSize: '16px'}}>
            <p>{message}</p>
        </div>
    )
}