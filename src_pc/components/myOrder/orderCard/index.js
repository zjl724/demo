import Taro, { Component } from '@tarojs/taro';
import { Checkbox, Text, View, Image, Button } from '@tarojs/components';
import './index.scss';

class OrderCard extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount () {
    }


    render () {
        const { trade, activeTabKey } = this.props;
        console.log(trade, 'trade999999999999999');
        let status = null;
        if (trade.status === 'WAIT_BUYER_PAY') {
            status = <Text className='state state-wait' >待付款</Text>;
        } else{
            status = <Text className='state state-daifahuo'>待发货</Text>;
        }
        return (
            <View className='order-detail-card'>
                <View className='order-title'>
                    <Checkbox></Checkbox>
                    {status}
                    <Text>
                        <Text className='order-detail-header'>编号:{trade.tid}</Text>
                        <Text className='iconfont iconfont-fuzhi' />
                        <Text>下单时间: {trade.pay_time}</Text>
                        <Text className='iconfont iconfont-shuaxin' />
                    </Text>
                </View>
                <View className='order-body-row'>
                    <View className='order-column order-column1'>
                        {
                            trade.orders.map(item => (
                                <View className='order-msg' key={item.cid}>
                                    <Image src={item.pic_path} className='order-img' />
                                    <View className='order-content'>
                                        <View className='content-row'>
                                            <Text className='user-name'>{item.title}</Text>
                                            <Text>设置简称</Text>
                                        </View>
                                        <View className='content-row'>
                                            宝贝属性 : 
                                            {
                                                item.sku_properties_values.map(item => (
                                                    <Text>{item}</Text>
                                                ))
                                            }
                                        </View> 
                                        <View className='content-row'>￥:{item.payment}</View>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                    <View className='order-column order-column2'>
                        <View>
                            <Text className='iconfont iconfont-wangwang' />
                            <Text>{trade.buyer_nick}</Text>
                            <Text className='iconfont iconfont-fuzhi' />
                        </View>
                        <View>
                            <Text className='iconfont iconfont-zuzhiTApaidan' />
                            <Text className='order-list'>阻止此卖家拍单</Text>
                        </View>
                        <View>
                            <Text className='iconfont iconfont-heduidingdan' />
                            <Text className='order-list'>核对订单</Text>
                        </View>
                        <View>
                            <Text className='iconfont iconfont-zhuanzhanggeimaijia' />
                            <Text className='order-list'>返现给买家</Text>
                        </View>
                    </View>
                    <View className='order-column order-column3'>
                        <View>
                            实付 : <Text className='importentFont'>￥{trade.payment}</Text>(含运费 ￥ {trade.post_fee})
                        </View>
                        <View>数量: {trade.num}</View>
                        <View>
                            <Text>手机订单</Text>
                        </View>
                    </View>
                    <View className='order-column order-column4'>
                        <Text className='send-btn'>发货</Text>
                        <View>
                            <Text className='iconfont iconfont-dingdanxiangqing' />
                            <Text className='order-content'>订单详情</Text>
                        </View>
                    </View>
                    <View className='order-column order-column5'>
                        <Text className='btn-medium'>打快递单</Text>
                        <Text className='btn-medium'>打印面单</Text>
                        <Text className='btn-medium'>打发货单</Text>
                    </View>
                </View>
                <View className='address'>
                    <Text>收货地址: {trade.receiver_name},{trade.receiver_mobile},{trade.receiver_state},{trade.receiver_city},{trade.receiver_district},{trade.receiver_district},{trade.receiver_address},{trade.receiver_zip}</Text>
                    <Text>
                        <Text className='iconfont iconfont-fuzhi' />
                        <Text className='iconfont iconfont-bianji' />
                        <Text className='edit-address'>核对地址</Text>
                    </Text>
                </View>
            </View>
        );
    }
}
export default OrderCard;
