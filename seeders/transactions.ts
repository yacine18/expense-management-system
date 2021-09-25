import {v4 as uuid} from 'uuid'

export const transactions = [
    {
        id: uuid(),
        label: 'AWS Subscription',
        amount: '30'
    },
    {
        id: uuid(),
        label: 'Paying Bills',
        amount: '25'
    },
]