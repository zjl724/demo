import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import MyTabs from "mapp_common/components/myTab";
import { TRADE_TABS } from "tradePublic/consts";
import { getSystemInfo } from "mapp_common/utils/systemInfo";
import OrderList from "pcComponents/myOrder/orderList";

import { changeTab, noPaymentList, noDeliverList } from "./action";

import './index.scss';

@connect((store) => {
    return {
        searchVal: store.myOrderListReducer.searchVal,
        activeTabKey: store.myOrderListReducer.activeTabKey,
        pageNo: store.myOrderListReducer.pageNo,
        pageSize: store.myOrderListReducer.pageSize,
        tradeCounts: store.myOrderListReducer.tradeCounts,
        list: store.myOrderListReducer.list,
    };
})

class MyOrder extends Component {
    constructor (props) {
        super(props);
        this.state = { scrollHeight: 0 };
    }
    componentDidMount () {
        const { pageNo, pageSize } = this.props;
        this.setState({ scrollHeight: 500 });
        changeTab('WAIT_BUYER_PAY', pageNo, pageSize);
    }

    onTabChange = (v) => {
        const { pageSize } = this.props;
        changeTab(v, 1, pageSize, '');
    };
    
    render () {
        const { activeTabKey, list, tradeCounts } = this.props;
        const tabList = Object.keys(TRADE_TABS).map((key) => {
            return { title: TRADE_TABS[key].name, key };
        });
        console.log(list, 'jjjjjjjjjjjjjjjjj');
        const { scrollHeight } = this.state;
        return (
            <View className='refundmanagement'>
                <ScrollView
                    className='trade-scroll'
                    style={{ height: getSystemInfo().windowHeight - 60 - 50 }}
                    scrollY enableBackToTop
                    scroll-top={scrollHeight}
                >
                    <View className='grid-item24 tab-con' >
                        <MyTabs className='trade-tab custom-tab grid-item24' current={activeTabKey} tabList={tabList} scroll dotNum={tradeCounts} onClick={this.onTabChange} />
                        <View className='tab-blank'></View>
                    </View>
                    <OrderList />
                </ScrollView>
            </View>
        );
    }
}

export default MyOrder;
