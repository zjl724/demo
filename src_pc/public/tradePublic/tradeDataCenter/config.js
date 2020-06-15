// 默认sold.get精简获取字段数据 也是降级后使用的数据
export const defaultSoldGetSimpleFileds = 'tid,modified,status';
// 默认sold.get获取的types
// 默认fullinfo全字段数据
export const fullinfoget_all_fields =
	'promise_service,collect_time,delivery_time,dispatch_time,sign_time,cutoff_minutes,es_date,es_range,os_date,os_range,timing_promise,num,buyer_alipay_no,step,modified,timeout_action_time,end_time,pay_time,consign_time,rate_status,seller_nick,shipping_type,cod_status,orders.oid,orders.oid_str,orders.outer_iid,orders.outer_sku_id,orders.consign_time,tid,tid_str,status,end_time,buyer_nick,trade_from,credit_card_fee,buyer_rate,seller_rate,created,num,payment,pic_path,has_buyer_message,receiver_country,receiver_state,receiver_city,receiver_district,receiver_town,receiver_address,receiver_zip,receiver_name,receiver_mobile,receiver_phone,orders.timeout_action_time,orders.end_time,orders.title,orders.status,orders.price,orders.payment,orders.sku_properties_name,orders.num_iid,orders.refund_id,orders.pic_path,orders.refund_status,orders.num,orders.logistics_company,orders.invoice_no,orders.adjust_fee,seller_flag,type,post_fee,has_yfx,yfx_fee,buyer_message,buyer_flag,buyer_memo,seller_memo,orders.seller_rate,adjust_fee,invoice_name,invoice_type,invoice_kind,promotion_details,alipay_no,buyerTaxNO,pbly,orders,total_fee,orders.cid,service_orders.tmser_spu_code,step_trade_status,step_paid_fee,send_time';
// 默认fullinfo精简字段，只取sold.get没有的
export const fullinfoget_simple_fields =
	'tid,buyer_message,seller_memo,invoice_name,invoice_type,invoice_kind,pbly,alipay_no,buyerTaxNO,promotion_details,trade_from';

// 只取fullinfo中的子订单信息（用于降级后sold.get没有orders）
export const fullinfoget_no_order_fields =
	'tid,tid_str,status,orders.oid,orders.oid_str,orders.outer_iid,orders.outer_sku_id,orders.consign_time,orders.timeout_action_time,orders.end_time,orders.title,orders.status,orders.price,orders.payment,orders.sku_properties_name,orders.num_iid,orders.refund_id,orders.pic_path,orders.refund_status,orders.num,orders.logistics_company,orders.invoice_no,orders.adjust_fee,orders.seller_rate,orders,total_fee,orders.cid,service_orders.tmser_spu_code';
export let soldget_all_fields =
	'num,modified,timeout_action_time,end_time,pay_time,adjust_fee,discount_fee,consign_time,rate_status,seller_nick,shipping_type,cod_status,orders.oid,orders.oid_str,orders.outer_iid,orders.outer_sku_id,orders.consign_time,tid,tid_str,status,end_time,buyer_nick,trade_from,credit_card_fee,buyer_rate,seller_rate,created,payment,has_buyer_message,receiver_country,receiver_state,receiver_city,receiver_district,receiver_town,receiver_address,receiver_zip,receiver_name,receiver_mobile,receiver_phone,orders.timeout_action_time,orders.adjust_fee,orders.discount_fee,orders.end_time,orders.title,orders.status,orders.price,orders.payment,orders.sku_properties_name,orders.num_iid,orders.refund_id,orders.pic_path,orders.refund_status,orders.num,orders.logistics_company,orders.invoice_no,seller_flag,type,post_fee,has_yfx,yfx_fee,buyer_message,buyer_flag,buyer_memo,seller_memo,orders.seller_rate,orders.cid,step_trade_status';
export let soldget_all_type =
	'fixed,auction,guarantee_trade,step,independent_simple_trade,independent_shop_trade,auto_delivery,ec,cod,game_equipment,shopex_trade,netcn_trade,external_trade,instant_trade,b2c_cod,hotel_trade,super_market_trade,super_market_cod_trade,taohua,waimai,nopaid,eticket,tmall_i18n,o2o_offlinetrade';
export const refundget_default_fields =
	'refund_id,alipay_no,tid,oid,buyer_nick,seller_nick,total_fee,status,created,refund_fee,good_status,has_good_return,payment,reason,desc,num_iid,title,price,num,good_return_time,company_name,sid,address,shipping_type,refund_remind_timeout,refund_phase,refund_version,operation_contraint,attribute,outer_id,sku,refund_remind_timeout';

export const refund_simple_fields =
	'refund_id,tid,oid,created,buyer_nick,modified,order_status,status,good_status,has_good_return,refund_fee,payment';
