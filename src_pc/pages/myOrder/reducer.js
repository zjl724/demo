import { MY_ORDER } from "./config";


let initState = {
    searchVal: '',
    activeTabKey: 'WAIT_BUYER_PAY',
    tradeCounts: {},
    pageSize: 20,
    pageNo: 1,
    list:[],
    isLoading: true,
};


export function myOrderListReducer (state = initState, action) {
    switch (action.type) {
        case MY_ORDER:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
