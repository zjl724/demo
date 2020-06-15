import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View, Text, Input, Switch } from '@tarojs/components';
import OrderCard from "pcComponents/myOrder/orderCard";
import './index.scss';
import EmptyPage from "pcComponents/emptyPage";

@connect((store) => {
    return {
        activeTabKey: store.myOrderListReducer.activeTabKey,
        list: store.myOrderListReducer.list,
        isLoading: store.myOrderListReducer.isLoading,
    };
})
class OrderList extends Component {
    constructor (props) {
        super(props);
    }

    componentWillReceiveProps (nextProps) {
        if (this.props.activeTabKey != nextProps.activeTabKey) {
        }
    }

    componentDidMount () {
    }

    render () {
        const { list, activeTabKey, isLoading } = this.props;
        console.log(list, activeTabKey, isLoading, '999999cccccccccccccc999999999');
        return (
            <View className='refund-list'>
                {
                    list.length == 0 && !isLoading  && (
                        <View className='refund-empty'>
                            <EmptyPage text='当前没有任何订单' />
                        </View>
                    )
                }
                {
                    list.map((trade) => {
                        return <OrderCard trade={trade} activeTabKey={activeTabKey} />;
                    })
                }
            </View>
        );
    }
}
export default OrderList;
