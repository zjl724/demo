import Taro from '@tarojs/taro';
import { REFUND_CHANGE } from './config';
import { getRefundList } from "tradePublic/tradeDataCenter/api/refundListGet";
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
    console.log(json, app, 'app');
    app.store.dispatch(json);
};
/**
 *
 * @returns {any|*|Promise<NavigationPreloadState>}
 */
export const getState = () => {
    return app.store.getState();
};


export const changeTab = (tabkey, pageNo, pageSize, searchVal) => {

    dispatch({
        type: REFUND_CHANGE,
        data:{
            activeTabKey: tabkey,
            pageNo:pageNo,
            pageSize: pageSize,
            list:[],
            isLoading:true,
        },
    });
    getRefundList({
        fields:refundget_default_fields,
        status:tabkey,
        pageNo:pageNo,
        pageSize:pageSize,
        buyerNnick:searchVal,
        useHasNext:false,
        callback:(rsp) => {
            let list = rsp.trades;
            dispatch({
                type: REFUND_CHANGE,
                data:{
                    activeTabKey: tabkey,
                    list:[...list],
                    tradeCounts: rsp.totalResults,
                },
            });
            Promise.all(
                list.filter(trade => !['SELLER_REFUSE_BUYER', 'CLOSED', 'SUCCESS'].includes(trade.refund.status))
                    .map(trade => {
                        return new Promise((resolve, reject) => {
                            taobaoRefundGet({
                                query: { refund_id: trade.refund.refund_id },
                                callback: (res) => {
                                    res = resolveTopResponse(res);
                                    trade.refund = res.refund;
                                    resolve();
                                },
                                errCallback: (err) => {
                                    resolve();
                                },
                            });
                        });
                    })
            ).then(() => {
                dispatch({
                    type: REFUND_CHANGE,
                    data:{
                        activeTabKey: tabkey,
                        list:[...list],
                        tradeCounts: rsp.totalResults,
                        isLoading:false,
                    },
                });
            });
        },
    });
};
export const changeSearch = (v) => {
    dispatch({
        type: REFUND_CHANGE,
        data:{ searchVal: v.detail.value },
    });
};

export const onSearch = () => {
    let { activeTabKey, searchVal } = getState().refundListReducer;
    soldGet({
        status:'WAIT_BUYER_PAY',
        callback: (rep) => {
            console.log(rep, 'reprep----------');
        },
    });      
    getRefundList({
        status:activeTabKey,
        buyerNnick:searchVal,
        pageNo:1,
        pageSize:40,
        callback:(rsp) => {
            dispatch({
                type: REFUND_CHANGE,
                data:{ list:[...rsp.trades] },
            });
        },
    });
};
