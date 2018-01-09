import * as React from 'react'
import { Component } from 'react'

import axios from 'axios'
import 'antd/dist/antd.less'; 
import './testPage.less';

import { Button, Table, Layout, Menu, Breadcrumb, Pagination, Input, Row, Col, Select, DatePicker, Icon, Modal} from 'antd';
const { Header, Content, Footer } = Layout;
const Option = Select.Option;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const confirm = Modal.confirm;


function updateCurrency(record:object) {
    confirm({
        title: '确认要下架吗？',
        content: '下架后，前台产品不可见',
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
            return new Promise((resolve, reject) => {
                console.log(resolve, reject)
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}
const columns = [
    { title: '店铺名称', dataIndex: 'shopName', key: '1',fiexd: true}, 
    { title: '商品详情图', dataIndex: 'itemDetailImg', key: '2', fiexd: true},
    { title: '商品ID', dataIndex: 'itemId', key: '3', fiexd: true},
    {title: '优惠券ID',dataIndex: 'couponId',key: '4'},
    {title: '优惠券数量',dataIndex: 'totalCount',key: '5'},
    {title: '已兑换数量',dataIndex: 'sendId',key: '6'},
    {title: '优惠券价值', dataIndex: 'currencyCost',key: '7'},
    {title: '卡币价值',dataIndex: 'discountAmount',key: '8'},
    {title: '优惠券状态',dataIndex: 'couponStatus',key: '9'},
    {title: '商品状态',dataIndex: 'itemStatus',key: '10' },
    {title: 'Column 1', dataIndex: 'address', key: '11' },
    {title: 'Column 2', dataIndex: 'address', key: '12' },
    {title: 'Column 3', dataIndex: 'address', key: '13' },
    {title: 'Column 4', dataIndex: 'address', key: '14' },
    {
        title: '操作',
        key: 'operation',
        fixed: 'left',
        width: 250,
        render: (text, record) => (
            <div>
                <div>
                    <Button className="mg-5" icon="edit" onClick={() => updateCurrency(record)}>修改卡币</Button>
                    <Button className="mg-5" icon="delete">下架</Button>
                </div>
                <div>
                    <Button className="mg-5" icon="sync">检测更新</Button>
                    <Button className="mg-5" icon="filter">推荐</Button>
                </div>
            </div>
        ),
    }];

const data = [{
        key: '1',
        shopName:'shopName',
        itemDetailImg: 'itemDetailImg',
        itemId: 'itemId',
        couponId:'couponId',
        totalCount:'totalCount',
        sendId:'sendId',
        currencyCost:'currencyCost',
        discountAmount:'discountAmount',
        couponStatus:'couponStatus',
        itemStatus: 'itemStatus',
        address:'address'
    }, {
        key: '2',
        shopName: 'shopName',
        itemDetailImg: 'itemDetailImg',
        itemId: 'itemId',
        couponId: 'couponId',
        totalCount: 'totalCount',
        sendId: 'sendId',
        currencyCost: 'currencyCost',
        discountAmount: 'discountAmount',
        couponStatus: 'couponStatus',
        itemStatus: 'itemStatus',
        address: 'address'
    },
    {
        key: '3',
        shopName: 'shopName',
        itemDetailImg: 'itemDetailImg',
        itemId: 'itemId',
        couponId: 'couponId',
        totalCount: 'totalCount',
        sendId: 'sendId',
        currencyCost: 'currencyCost',
        discountAmount: 'discountAmount',
        couponStatus: 'couponStatus',
        itemStatus: 'itemStatus',
        address: 'address'
    }];

class TestPage extends Component {
    constructor(props) {
        super(props);
    }
    state={
        selectedRowKeys:[]
    }
    onChange(date,dateString){
        console.log(date,dateString)
    }
    rowSelection(){
        return {
            fixed:true,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys: selectedRowKeys  
                })
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => {
                return ({
                    disabled: record.name === 'Disabled User',
                })
            }
        }
    }
    render() {
        const { selectedRowKeys } = this.state;
        const hasSelected = selectedRowKeys.length>0;
        return(
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <div className='mg-bt-40'>
                            <Row type="flex" align="middle">
                                <Col span={4}><Button type="primary" icon="edit">添加营销活动</Button></Col>
                                <Col span={3}><Button type="primary" icon="file-add">手动导入商品</Button></Col>
                                <Col span={3}><Button type="primary" icon="shop">自营店铺导入</Button></Col>
                            </Row>
                        </div>
                        <div className='mg-bt-20'>
                            <Row type="flex" align="middle">
                                <Col span={2}>店铺名称／ID</Col>
                                <Col span={4}><Input placeholder="店铺名称ID" maxLength={10}/></Col>

                                <Col span={2} offset={1}>商品名称／ID</Col>
                                <Col span={4}><Input placeholder="商品名称ID" /></Col>

                                <Col span={2} offset={1}>商品状态</Col>
                                <Col span={2}>
                                    <Select defaultValue="lucy" style={{ width: 120 }}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>Disabled</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </Col>

                                <Col span={2} offset={1}>导入方式</Col>
                                <Col span={2}>
                                    <Select defaultValue="lucy" style={{ width: 120 }}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>Disabled</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </div>
                        <div className='mg-bt-20'>
                            <Row type="flex" align="middle">
                                <Col span={2}>优惠券 / ID</Col>
                                <Col span={4}><Input placeholder="请输入优惠劵ID" /></Col>

                                <Col span={2} offset={1}>活动 / ID</Col>
                                <Col span={4}><Input placeholder="请输入活动ID" /></Col>

                                <Col span={2} offset={1}>导入时间</Col>
                                <Col span={5}><RangePicker onChange={this.onChange} /></Col>
                                <Col span={2} offset={1}><Button type="primary">筛选</Button></Col>
                            </Row>
                        </div>
                        <div className='mg-bt-20'>
                            <Row type="flex" align="middle">
                                
                            </Row>
                        </div>

                        <Table rowSelection={this.rowSelection()} dataSource={data} columns={columns} scroll={{ x: 2000 }} pagination={false}/>
                        <div className="pagination">
                            <Row type="flex" align="middle" justify="space-between">
                                <Col span={12}>
                                    <Row>
                                        <Col span={4}><Button type="primary" icon="delete" disabled={!hasSelected}>删除</Button></Col>
                                        <Col span={5}><Button type="primary" icon="sync" disabled={!hasSelected}>检查更新</Button></Col>
                                        <Col span={6}><Button type="primary" icon="upload" disabled={!hasSelected}>推荐到轻应用</Button></Col>
                                    </Row>                                
                                </Col>
                                <Col span={12}>
                                    <div className="txt-rg">
                                        <Pagination defaultCurrent={1} total={50} />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>alisports inc</Footer>
            </Layout>
        )
    }
}

export{
    TestPage
}

