import { combineReducers } from 'redux';
import { marketingAdInfoReducer } from "mapp_common/marketing/reducer";
import { refundListReducer } from "pcPages/refundManagement/reducer";
import { myOrderListReducer } from "pcPages/myOrder/reducer";

export default combineReducers({
    marketingAdInfoReducer,
    refundListReducer,
    myOrderListReducer,
});

