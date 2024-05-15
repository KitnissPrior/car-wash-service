import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';
import HeaderClient from "../../headers/HeaderClient";


const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
    },
];

export default function OrderHistory() {
    return (
        <>
            <HeaderClient/>
            <div>
                <h2>История записей</h2>
                <Collapse defaultActiveKey={['1']} ghost items={items} expandIconPosition="right"/>
            </div>
        </>
    );
};