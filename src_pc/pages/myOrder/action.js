import Taro from '@tarojs/taro';
import { MY_ORDER } from './config';
import { refundget_default_fields } from "tradePublic/tradeDataCenter/config";
import taobaoRefundGet from "tradePublic/taobaoRefundGet";
import { soldGet } from "tradePublic/tradeDataCenter/api/soldGet";
import { resolveTopResponse } from "tradePublic/tradeDataCenter/common/resolveTopResponse";

let app = Taro.getApp();
/**
 *
 * @param json
 */
export const dispatch = (json) => {
    app.store.dispatch(json);
};


export const changeTab = (tabkey, pageNo, pageSize) => {
    dispatch({
        type: MY_ORDER,
        data:{
            activeTabKey: tabkey,
            pageNo:pageNo,
            pageSize: pageSize,
            list:[],
            isLoading:true,
        },
    });
    soldGet({
        status:tabkey,
        pageNo:pageNo,
        pageSize:pageSize,
        callback: (rsp) => {
            let list = rsp.trades;
            dispatch({
                type: MY_ORDER,
                data:{
                    activeTabKey: tabkey,
                    list:[...list],
                    tradeCounts: rsp.totalResults,
                },
            });
        },
    }); 
};

