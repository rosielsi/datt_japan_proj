import React, { useState, useEffect, Component, useRef } from 'react';
import { ProjectOutlined, PullRequestOutlined, StarOutlined, TranslationOutlined, UserOutlined, CopyOutlined } from "@ant-design/icons";
import { Anchor, Drawer, FloatButton, Message, Layout, Menu, Form, Col, Row, Input, Button, Tooltip, Select, DatePicker, Space, Radio, Checkbox, Alert, Switch, Modal, Table, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import datas from '../Data-Repair.json'
import Axios from 'axios';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import AfterRegister from './AfterRegister';
import ProvisionalReg from './ProvisionalReg';
import '../index.css'
const { Column } = Table;
const { Link } = Anchor;


//=========================================MODALS========================================================================


const Item1 = ({ SlipParameter }) => {

    //========================
    // ******************
    // Item1
    //*******************
    //========================

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(true);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
        SlipParameter(false)
    };
    const handleCancel = () => {
        setOpen(false);
        SlipParameter(false)
    };

    return (
        <div style={{ backgroundColor: 'gray' }}>
            <Modal
                title="Item Selection" open={open} onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,

                    <Button key="reflect" disabled>
                        Reflect
                    </Button>
                ]}
                width={400}

            >
                <div className='App' style={{ padding: '0', margin: '0' }}>
                    <Row>
                        <Col span={2} style={{ border: 'solid', borderColor: 'gray', padding: '2px', hover: { color: 'blue' } }}>
                            <p>1.</p>
                        </Col>
                        <Col span={20}>
                            <p style={{ cursor: 'pointer', border: 'solid', borderColor: 'gray', width: 'auto' }}>1. list of items inside the modals from database. Not finished yet</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2} style={{ border: 'solid', borderColor: 'gray', padding: '2px' }}>
                            <p>2. </p>
                        </Col>
                        <Col span={20}>
                            <p style={{ cursor: 'pointer', border: 'solid', borderColor: 'gray', width: 'auto' }}>1. list of items inside the modals from database. Not finished yet</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2} style={{ border: 'solid', borderColor: 'gray', padding: '2px' }}>
                            <p>3. </p>
                        </Col>
                        <Col span={20}>
                            <p style={{ cursor: 'pointer', border: 'solid', borderColor: 'gray', width: 'auto' }}>1. list of items inside the modals from database. Not finished yet</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2} style={{ border: 'solid', borderColor: 'gray', padding: '2px' }}>
                            <p>3. </p>
                        </Col>
                        <Col span={20}>
                            <p style={{ cursor: 'pointer', border: 'solid', borderColor: 'gray', width: 'auto' }}>1. list of items inside the modals from database. Not finished yet</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2} style={{ border: 'solid', borderColor: 'gray', padding: '2px' }}>
                            <p>3. </p>
                        </Col>
                        <Col span={20}>
                            <p style={{ cursor: 'pointer', border: 'solid', borderColor: 'gray', width: 'auto' }}>1. list of items inside the modals from database. Not finished yet</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2} style={{ border: 'solid', borderColor: 'gray', padding: '2px' }}>
                            <p>3. </p>
                        </Col>
                        <Col span={20}>
                            <p style={{ cursor: 'pointer', border: 'solid', borderColor: 'gray', width: 'auto' }}>1. list of items inside the modals from database. Not finished yet</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2} style={{ border: 'solid', borderColor: 'gray', padding: '2px' }}>
                            <p>3. </p>
                        </Col>
                        <Col span={20}>
                            <p style={{ cursor: 'pointer', border: 'solid', borderColor: 'gray', width: 'auto' }}>1. list of items inside the modals from database. Not finished yet</p>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </div>
    )
}


const dataShapeName = [
    {
        key: '1',
        ShapeName: 'ShapeNameExmaple',
        ManufacturerName: 'Brown',
        ReleaseDate: '01/03/2022',
        Bring: 'example',
        NamesOfForms: 'example',
        TradeName: 'example',

    },

];
const VisitHopeDayData = [
    {
        key: '1',
        ShapeName: '12/13/2022',
        ManufacturerName: 'gold',
        ReleaseDate: '0 (/)',
        Bring: '0 (/)(/)',
        NamesOfForms: '0 (/)(/)',
        TradeName: '0 (/)(/)',

    },
    {
        key: '2',
        ShapeName: '12/13/2022',
        ManufacturerName: 'gold',
        ReleaseDate: '0 (/)',
        Bring: '0 (/)(/)',
        NamesOfForms: '0 (/)(/)',
        TradeName: '0 (/)(/)',

    },
    {
        key: '3',
        ShapeName: '12/13/2022',
        ManufacturerName: 'gold',
        ReleaseDate: '0 (/)',
        Bring: '0 (/)(/)',
        NamesOfForms: '0 (/)(/)',
        TradeName: '0 (/)(/)',

    },
    {
        key: '4',
        ShapeName: '12/13/2022',
        ManufacturerName: 'gold',
        ReleaseDate: '0 (/)',
        Bring: '0 (/)(/)',
        NamesOfForms: '0 (/)(/)',
        TradeName: '0 (/)(/)',

    },
    {
        key: '5',
        ShapeName: '12/13/2022',
        ManufacturerName: 'gold',
        ReleaseDate: '0 (/)',
        Bring: '0 (/)(/)',
        NamesOfForms: '0 (/)(/)',
        TradeName: '0 (/)(/)',

    },
    {
        key: '6',
        ShapeName: '12/13/2022',
        ManufacturerName: 'gold',
        ReleaseDate: '0 (/)',
        Bring: '0 (/)(/)',
        NamesOfForms: '0 (/)(/)',
        TradeName: '0 (/)(/)',

    },

];
const RepairShapeName = ({ SlipParameter }) => {

    //========================
    // ******************
    // Shape Name or Model Name
    //*******************
    //========================

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(true);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
        SlipParameter(false)
    };
    const handleCancel = () => {
        setOpen(false);
        SlipParameter(false)
    };

    return (
        <>
            <Modal
                title="Model Name" open={open} onOk={handleOk} onCancel={handleCancel}
                footer={[

                    <Button key="back" disabled>
                        Reflect
                    </Button>
                ]}
                width={900}
            >
                <div>
                    <Form {...FormLayout} style={{ marginTop: 'auto', backgroundColor: '#F0F3F4', padding: '5px' }}>
                        <div style={{ width: '400px', marginTop: '20px' }}>
                            <Form.Item label="List Of Personnel" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} />
                                    </Col>
                                    <Col span={3}>
                                        <Button
                                            key="link"
                                            href=""
                                            type="primary"
                                            loading={loading}
                                            onClick={handleOk}
                                            style={{ marginLeft: '10px' }}
                                        >
                                            Search
                                        </Button>
                                    </Col>
                                    <Col span={3}>
                                        <Button style={{ marginLeft: '40px' }} key="submit" loading={loading} onClick={handleOk}>
                                            Clear
                                        </Button>
                                    </Col>
                                    <Col span={3}>
                                        <Button style={{ marginLeft: '60px' }} key="back" onClick={handleCancel}>
                                            Close
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label="Model Name" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} />
                                    </Col>
                                    <Col span={5}>
                                        <Form.Item label="Trade Name" style={{ width: '400px', color: 'green', marginLeft: '20px' }}
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Input style={{ marginLeft: '5px' }} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label="Manufacturer" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} />
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Display Permits" style={{ width: '400px', color: 'green', marginLeft: '20px' }}
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Input style={{ marginLeft: '5px' }} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </div>
                    </Form>
                    <Table dataSource={dataShapeName}>
                        <Column title="Shape Name" dataIndex="ShapeName" key="ShapeName" />
                        <Column title="Manufacturer Name" dataIndex="ManufacturerName" key="ManufacturerName" />
                        <Column title="Release Date" dataIndex="ReleaseDate" key="ReleaseDate" />
                        <Column title="Bring" dataIndex="Bring" key="Bring" />
                        <Column title="Name Of Forms" dataIndex="NamesOfForms" key="NamesOfForms" />
                        <Column title="Trade Name" dataIndex="TradeName" key="TradeName" />
                    </Table>
                </div>
            </Modal>
        </>
    )
}


const dataKana = [
    {
        key: '1',
        number: 'true',
        DealerName: 'Brown',
        DealerAddress: 'New York No. 1 Lake Park',
        PhoneNumber: '0293213',

    },

];
const RepairNameKana = ({ SlipParameter }) => {

    //========================
    // ******************
    // Kana
    //*******************
    //========================

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(true);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
        SlipParameter(false)
    };
    const handleCancel = () => {
        setOpen(false);
        SlipParameter(false)
    };

    return (
        <>
            <Modal
                title="Dealer Name (Kana) Search" open={open} onOk={handleOk} onCancel={handleCancel}
                footer={[

                    <Button key="back" disabled>
                        Reflect
                    </Button>
                ]}
                width={700}
            >
                <div>
                    <Form {...FormLayout} style={{ marginTop: 'auto', backgroundColor: '#F0F3F4', padding: '5px' }}>
                        <div style={{ width: '400px', marginTop: '20px' }}>
                            <Form.Item label="Search Criteria" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} />
                                    </Col>
                                    <Col span={3}>
                                        <Button
                                            key="link"
                                            href=""
                                            type="primary"
                                            loading={loading}
                                            onClick={handleOk}
                                            style={{ marginLeft: '10px' }}
                                        >
                                            Search
                                        </Button>
                                    </Col>
                                    <Col span={3}>
                                        <Button style={{ marginLeft: '40px' }} key="submit" loading={loading} onClick={handleOk}>
                                            Clear
                                        </Button>
                                    </Col>
                                    <Col span={3}>
                                        <Button style={{ marginLeft: '60px' }} key="back" onClick={handleCancel}>
                                            Close
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label="Dealer Name Kana" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label="Number of permits" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} type="number" />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label="Choice" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} />
                                    </Col>
                                </Row>
                            </Form.Item>
                        </div>
                    </Form>
                    <Table dataSource={dataKana}>
                        <Column title="Number" dataIndex="number" key="number" />
                        <Column title="Dealer Name" dataIndex="DealerName" key="DealerName" />
                        <Column title="Dealer Address" dataIndex="DealerAddress" key="DealerAddress" />
                        <Column title="Reseller Phone Number" dataIndex="PhoneNumber" key="PhoneNumber" />
                    </Table>
                </div>
            </Modal>
        </>
    )
}


const data = [
    {
        key: '1',
        sms: 'true',
        classification: 'Brown',
        state: 32,
        DateOfReceipt: 'New York No. 1 Lake Park',
        SlipNo: '12323',
        Receptionist: '12323',
        ShapeName: '12323',
        Username: '12323',
    },
    {
        key: '2',
        sms: 'true',
        classification: 'Brown',
        state: 32,
        DateOfReceipt: 'New York No. 1 Lake Park',
        SlipNo: '12323',
        Receptionist: '12323',
        ShapeName: '12323',
        Username: '12323',
    },
    {
        key: '3',
        sms: 'true',
        classification: 'Brown',
        state: 32,
        DateOfReceipt: 'New York No. 1 Lake Park',
        SlipNo: '12323',
        Receptionist: '12323',
        ShapeName: '12323',
        Username: '12323',
    },
];

const RepairHistorySearch = ({ SlipParameter }) => {

    //========================
    // ******************
    // Repair History search Modal
    //*******************
    //========================

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(true);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
        SlipParameter(false)
    };
    const handleCancel = () => {
        setOpen(false);
        SlipParameter(false)
    };

    return (
        <>

            <Modal
                title="History Search" open={open} onOk={handleOk} onCancel={handleCancel}
                footer={[

                    <Button
                        key="link"
                        type="primary"
                        loading={loading}
                        onClick={handleOk}
                        disabled
                    >
                        Inquiry
                    </Button>,
                ]}
                width={1000}

            >
                <div>
                    <Table dataSource={data}>

                        <Column title="SMS" dataIndex="sms" key="sms" />
                        <Column title="Classification" dataIndex="classification" key="classification" />
                        <Column title="State" dataIndex="state" key="state" />
                        <Column title="Date Of Receipt" dataIndex="DateOfReceipt" key="DateOfReceipt" />
                        <Column title="Slip Number" dataIndex="SlipNo" key="SlipNo" />
                        <Column title="Receptionist" dataIndex="Receptionist" key="Receptionist" />
                        <Column title="Shape Name" dataIndex="ShapeName" key="ShapeName" />
                        <Column title="Username" dataIndex="Username" key="Username" />

                    </Table>
                </div>
            </Modal>
        </>
    )
}

const RepairSlipModal = ({ SlipParameter }) => {

    //========================
    // ******************
    // Repair Slip Modal
    //*******************
    //========================

    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(true);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
        SlipParameter(false)
    };
    const handleCancel = () => {
        setOpen(false);
        SlipParameter(false)
    };

    return (
        <>
            <Modal
                title="Reservation Search by SS" open={open} onOk={handleOk} onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>,
                    <Button key="submit" loading={loading} onClick={handleOk}>
                        Clear
                    </Button>,
                    <Button
                        key="link"
                        href=""
                        type="primary"
                        loading={loading}
                        onClick={handleOk}
                    >
                        Search
                    </Button>,
                ]}
            >
                <Form {...FormLayout} style={{ marginTop: 'auto', backgroundColor: '#F0F3F4', padding: '5px' }}>
                    <div style={{ width: '400px', marginTop: '20px' }}>
                        <Form.Item label="SS CODE" style={{ width: '400px', color: 'green' }}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                <Col span={5}>
                                    <Input />
                                </Col>
                                <Col span={5}>
                                    <Input disabled style={{ marginLeft: '5px' }} />
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item label="Product Group" style={{ width: '400px' }}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                <Col span={4}>
                                    <Input type='number' />
                                </Col>
                                <Col span={15}>
                                    <Radio.Group onChange={onChange} value={value} style={{ marginLeft: '20px' }}>
                                        <Radio value={1}>1. Off</Radio>
                                        <Radio value={2}>2. NA</Radio>
                                    </Radio.Group>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item label="Date" style={{ width: '400px' }}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                <Col span={12}>
                                    <DatePicker />
                                </Col>

                            </Row>
                        </Form.Item>
                    </div>
                </Form>

            </Modal>
        </>
    )
}

const RepairBillingInfo = ({ SlipParameter }) => {

    //========================
    // ******************
    // BiliingInfo
    //*******************
    //========================

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(true);

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
        SlipParameter(false)
    };
    const handleCancel = () => {
        setOpen(false);
        SlipParameter(false)
    };

    return (
        <>
            <Modal
                title="Former Billing Information" open={open} onCancel={handleCancel}
                footer={[<p style={{ color: 'black', fontWeight: 'semi-bold' }}>This is billing Information that was originally set up</p>]}
                width={700}
            >
                <div>
                    <Button style={{ marginBottom: '5px', left: '580px' }} key="back" onClick={handleCancel}>
                        Close
                    </Button>
                    <Form {...FormLayout} style={{ marginTop: 'auto', backgroundColor: '#F0F3F4', padding: '5px', backgroundColor: 'skyblue' }}>
                        <div style={{ width: '400px', marginTop: '20px' }}>
                            <Form.Item label="Request First" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} disabled />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label="Request Tell First" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={10}>
                                        <Input style={{ marginLeft: '5px' }} disabled />
                                    </Col>
                                    <Col span={5}>
                                        <Input style={{ marginLeft: '10px' }} disabled />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label="Bill-To Name(Kana)" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} disabled type="number" />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label="Bill-To Name(Kanji)" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} disabled />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label="Billing postal code" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} disabled />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label="Billing Address" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} disabled />
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item label="Billing Code" style={{ width: '400px', color: 'green' }}
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Row style={{ width: '400px', marginLeft: '50px' }}>
                                    <Col span={12}>
                                        <Input style={{ marginLeft: '5px' }} disabled />
                                    </Col>
                                </Row>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    )
}


const Drawers = ({ SlipParameter }) => {

    const [open, setOpen] = useState(true);
    const [placement, setPlacement] = useState('right');

    const onClose = () => {
        setOpen(false);
        SlipParameter(false);
    };


    return (
        <>

            <Drawer
                footer={
                    <center>
                        <p
                            style={{
                                color: 'gray',
                                fontFamily: '-moz-initial'
                            }}
                        >Datt-Japan</p>
                    </center>
                }
                title="Visit Hope Day"
                placement={placement}
                width={900}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <p >Selected visit date/time zone Thu No designation 'A2100'</p>
                <p >Total Booked: 0</p>
                <Table dataSource={VisitHopeDayData}>
                    <Column title="Date" dataIndex="ShapeName" key="ShapeName" style={{ cursor: 'pointer' }} />
                    <Column title="Day" dataIndex="ManufacturerName" key="ManufacturerName" />
                    <ColumnGroup title="Reservation Available (reserved/visitable)">
                        <Column title="No Specification" dataIndex="ReleaseDate" key="ReleaseDate" />
                        <Column title="On the" dataIndex="Bring" key="Bring" />
                        <Column title="PM 1" dataIndex="NamesOfForms" key="NamesOfForms" />
                        <Column title="PM 2" dataIndex="TradeName" key="TradeName" />
                    </ColumnGroup>
                </Table>

                <div>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose}>
                        OK
                    </Button>
                </div>

            </Drawer>

        </>
    );
};
//=======================================END MODALS======================================================================




//=======================MAIN APP===================================================================================================

function RepairRequest() {


    //======================For Printing===============
    const componentRef = useRef();
    const handle = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint: () => alert('Printed Succesfully')
    });
    //--------------------------------------------------------



    //=================MODALS CONST------------------------
    const [openModal, setopenModal] = useState(false); // Repair Slip
    const [openModalSearch, setopenModalSearch] = useState(false); // History Search
    const [openModalKana, setopenModalKana] = useState(false); // kana
    const [openModalShapeName, setopenModalShapeName] = useState(false); // ShapeName
    const [openModalBillingInfo, setopenModalBillingInfo] = useState(false); // Billing info
    const [OpenDrawer, setDrawer] = useState(false); // Visit Hope day
    const [OpenItem1, setItem1] = useState(false); // item 1 
    //------------------------------------------------------



    //=================================================FUNCTIONs AND DECLARATIONS OF VARIABLES+++++++++++++++++++++++++++++++++++++

    const [valueEstimate, setValue1] = useState("");
    const [valueRepair, setValue2] = useState("");
    const [valueRequesterNum, setValueRequesterNum] = useState(0);
    const [valueRepairNum, setvalueRepairNum] = useState(0);
    const [valueEstimateNum, setvalueEstimateNum] = useState(0);
    const [valueFaxReplied, setvalueFaxReplied] = useState("");
    const [valueConsumer, setvalueConsumers] = useState("Users");
    const [valuesEstimate, setvaluesEstimate] = useState("Yes");
    const [valuesRepair, setvaluesRepair] = useState("Yes");
    const onChangeRepair = (e) => {
        setValue2(e.target.value);
    };
    const onChangeEstimate = (e) => {
        setValue1(e.target.value);
    };

    const onChangeFaxeRepliedNumber = (e) => {
        console.log('radio checked', e.target.value);
        setvalueFaxReplied(e.target.value);
    };

    const onChangeRequesterNum = (e) => {

        setValueRequesterNum(e.target.value)

        if (valueRequesterNum > 0) {
            setvalueConsumers("Users");
        } else {
            setvalueConsumers("Sales");
        }
    }

    const onChangeEstimates = (e) => {

        setvalueEstimateNum(e.target.value)

        if (valueEstimateNum > 0) {
            setvaluesEstimate("Yes");

        } else {
            setvaluesEstimate("No");
        }
    }

    const onChangeRepairs = (e) => {

        setvalueRepairNum(e.target.value)

        if (valueRepairNum > 0) {
            setvaluesRepair("Yes");

        } else {
            setvaluesRepair("No");
        }
    }


    const onChangeRequester = (e) => {
        setconsumer(e.target.value);
    };

    const navigate = useNavigate();
    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };
    const [theme, setTheme] = useState('light');
    const [collapsed, setCollapsed] = useState(false);

    function copyFunction() {

        var copyData = document.getElementById("inputText");
        copyData.select();
        navigator.clipboard.writeText(copyData.value);
        
    }

    function clearText() {
       
    }



    //========================messages========================

    //Future Enchancement


    //========================================================

    //=====================================================================AXIOS BACKEND======================================================================================

    const [repair_receipt_ID, setrepair_receipt_ID] = useState("");
    const [ticket_ID, setticket_ID] = useState("");
    const [service_symbol, setservice_symbol] = useState("");
    const [reception_type, setreception_type] = useState("");
    const [work_type, setwork_type] = useState("");
    const [sales_type, setsales_type] = useState("");
    const [delaer, setdelaer] = useState("");
    const [consumer, setconsumer] = useState(valueConsumer);
    const [who_reg_this, setwho_reg_this] = useState("");
    const [reception_date_and_time, setreception_date_and_time] = useState("");
    const [dealer_tel, setdealer_tel] = useState("");
    const [dealer_ID, setdealer_ID] = useState("");
    const [dealer_tell_1, setdealer_tell_1] = useState("");
    const [dealer_tell_2, setdealer_tell_2] = useState("");
    const [dealer_name, setdealer_name] = useState("");
    const [person_in_charge, setperson_in_charge] = useState("");
    const [fax_answered_number, setfax_answered_number] = useState("");
    const [dealer_fax, setdealer_fax] = useState("");
    const [dealer_address, setdealer_address] = useState("");
    const [order_code, setorder_code] = useState("");
    const [tb_ReparRequestRegcol, settb_ReparRequestRegcol] = useState("");
    const [customer_name_kanji, setcustomer_name_kanji] = useState("");
    const [customer_name_kana, setcustomer_name_kana] = useState("");
    const [customer_address, setcustomer_address] = useState("");
    const [department_of_work, setdepartment_of_work] = useState("");
    const [customer_email, setcustomer_email] = useState("");
    const [sms_destination, setsms_destination] = useState("");
    const [contact_tell_2, setcontact_tell_2] = useState("");
    const [product_group, setproduct_group] = useState("");
    const [manufacturer_name, setmanufacturer_name] = useState("");
    const [product_code, setproduct_code] = useState("");
    const [number_of_units_repaired, setnumber_of_units_repaired] = useState("");
    const [serial_code, setserial_code] = useState("");
    const [warranty_code, setwarranty_code] = useState("");
    const [release_date, setrelease_date, set] = useState("");
    const [installation_date, setinstallation_date] = useState("");
    const [phenomenon, setphenomenon] = useState("");
    const [condition, setcondition] = useState("");
    const [estimate, setestimate] = useState("");
    const [requested_first, setrequested_first] = useState("");
    const [repair_again, setrepair_again] = useState("");
    const [visit_notes, setvisit_notes,] = useState("");
    const [SS_code, setSS_code] = useState("");
    const [visit_hope_day, setvisit_hope_day] = useState("");
    const [date_of_visit_contract, setdate_of_visit_contract] = useState("");
    const [reason_for_setting, setreason_for_setting] = useState("");
    const [PL_event, setPL_event] = useState("");
    const [estimated_limit, setestimated_limit] = useState("");
    const [acceptance_or_rejection_of_hollidays, setacceptance_or_rejection_of_hollidays] = useState("");
    const [remarks, setremarks] = useState("");


    const insert = () => {
        message.success('ID issuance successfully submitted!')
        Axios.post("http://localhost:6969/insert-user", {

            repair_receipt_ID: repair_receipt_ID,
            ticket_ID: ticket_ID,
            service_symbol: service_symbol,
            reception_type: reception_type,
            work_type: work_type,
            sales_type: sales_type,
            delaer: delaer,
            consumer: consumer,
            who_reg_this: who_reg_this,
            reception_date_and_time: reception_date_and_time,
            dealer_tel: dealer_tel,
            dealer_ID: dealer_ID,
            dealer_tell_1: dealer_tell_1,
            dealer_tell_2: dealer_tell_2,
            dealer_name: dealer_name,
            person_in_charge: person_in_charge,
            fax_answered_number: fax_answered_number,
            dealer_fax: dealer_fax,
            dealer_address: dealer_address,
            order_code: order_code,
            tb_ReparRequestRegcol: tb_ReparRequestRegcol,
            customer_name_kanji: customer_name_kanji,
            customer_name_kana: customer_name_kana,
            customer_address: customer_address,
            department_of_work: department_of_work,
            customer_email: customer_email,
            sms_destination: sms_destination,
            contact_tell_2: contact_tell_2,
            product_group: product_group,
            manufacturer_name: manufacturer_name,
            product_code: product_code,
            number_of_units_repaired: number_of_units_repaired,
            serial_code: serial_code,
            warranty_code: warranty_code,
            release_date: release_date,
            installation_date: installation_date,
            phenomenon: phenomenon,
            condition: condition,
            estimate: estimate,
            requested_first: requested_first,
            repair_again: repair_again,
            visit_notes: visit_notes,
            SS_code: SS_code,
            visit_hope_day: visit_hope_day,
            date_of_visit_contract: date_of_visit_contract,
            reason_for_setting: reason_for_setting,
            PL_event: PL_event,
            estimated_limit: estimated_limit,
            acceptance_or_rejection_of_hollidays: acceptance_or_rejection_of_hollidays,
            remarks: remarks,
        }).then((response) => {
            console.log(response)
        });
    }

    //=====================================================================AXIOS BACKEND======================================================================================

    return (
        <Layout theme={theme}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme={theme} style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                zIndex: '2000',
            }}>
                <div />
                <center><Switch onChange={changeTheme} style={{ marginTop: '5vh', backgroundColor: 'teal' }} />  <h6 style={{ color: 'Teal', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '1.2em', marginTop: '2px' }}>Change Theme</h6></center>
                <Menu
                    onClick={
                        ({ key }) => {
                            navigate(key);
                        }}
                    mode="inline" href={items[0]} items={items} theme={theme} style={{ marginTop: '15vh' }}>

                </Menu>
            </Sider>
            <Layout className="site-layout" theme={theme}>
                <Header
                    style={{
                        padding: 0,
                        height: 'auto',
                        position: 'fixed',
                        left: '0',
                        top: '0',
                        right: '0',
                        zIndex: '1000',
                    }}
                    theme={theme}
                >
                    <Row style={{ marginLeft: '250px' }}>
                        <Col span={18}>
                            <center><h1 class="max-w-[1000px] py-2 mb-4 text-3xl font-extrabold text-blue-400 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-50 from-teal-500">Repair Request</span> Registraion</h1></center>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} onClick={insert}>ID Issuance</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} disabled onClick={() => navigate('/register-success')}>Registration</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} disabled onClick={() => navigate('/prov-reg')}>Provisional Reg</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} onClick={() => navigate('/main-menu')}>Close</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} onClick={handle}>Printing</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} disabled>Cancel</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} disabled >Reflect of reg</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} onClick={() => navigate('/repair-request-search')} >Repair slip</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} onClick={() => setopenModal(true)}>Reservation SE</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} disabled>Contact notes<a style={{ fontWeight: 'semi-bold' }}>(0)</a></Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Print cancellation</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Printing Re-pair</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Printing Reception</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Printed PL</Button>
                            <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} onClick={() => setopenModalSearch(true)}>History Display</Button> <a style={{ color: 'teal', fontWeight: 'bold', marginLeft: '20px' }}>No history data</a>
                            <Button style={{ marginLeft: '35px', backgroundColor: 'white', fontFamily: 'sans-serif' }} disabled>Visit Resevation</Button>
                        </Col>
                        <div style={{ marginLeft: '100px', marginTop: '40px' }}><Timer /></div>
                    </Row>
                </Header>
                <Content
                    style={{
                        margin: '0 16px',
                        height: 'auto',
                        alignContent: 'center',
                        backgroundColor: '#D6EAF8',
                        marginTop: '25vh'
                    }}
                >
                    {/* MODALS */}
                    {openModal && <RepairSlipModal SlipParameter={setopenModal} />}
                    {openModalSearch && <RepairHistorySearch SlipParameter={setopenModalSearch} />}
                    {openModalKana && <RepairNameKana SlipParameter={setopenModalKana} />}
                    {openModalShapeName && <RepairShapeName SlipParameter={setopenModalShapeName} />}
                    {openModalBillingInfo && <RepairBillingInfo SlipParameter={setopenModalBillingInfo} />}
                    {OpenDrawer && <Drawers SlipParameter={setDrawer} />}
                    {OpenItem1 && <Item1 SlipParameter={setItem1} />}
                    {/* MODALS END */}

                    <div ref={componentRef} className='App'>
                        <center>
                            <Form  {...FormLayout} style={{ marginTop: 'auto', backgroundColor: '#F0F3F4', padding: '5px' }} >
                                <center> <h1 id='basic' style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '2em' }}> Basic Repair Information</h1> </center>
                                <div style={{ width: '400px', marginTop: '20px' }} >
                                    <Form.Item label="SS ID" style={{ width: '400px', color: 'green' }}
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Row style={{ width: '400px', marginLeft: '50px' }}>
                                            <Col span={25}>
                                                <Input className='txtBox-underline' placeholder="Your SS ID..."
                                                    onChange={(e) => {
                                                        setrepair_receipt_ID(e.target.value)
                                                    }}
                                                //id issuance
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Item>

                                    <Form.Item label="Reception Type" style={{ width: '400px' }}
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Row style={{ width: '400px', marginLeft: '50px' }}>

                                            <Col span={4}>
                                                <Input type='number' />
                                            </Col>
                                            <Col span={15}>
                                                <Select placeholder="Select Reception Type" style={{ marginLeft: '5px' }}
                                                    onChange={(e) => {
                                                        setreception_type(e.target.value)
                                                        //reception type
                                                    }}
                                                >
                                                    <Select.Option value="demo">Demo1</Select.Option>
                                                    <Select.Option value="demo">Demo2</Select.Option>
                                                    <Select.Option value="demo">Demo3</Select.Option>
                                                    <Select.Option value="demo">Demo4</Select.Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item label="Requester" style={{ width: '400px' }}
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Row style={{ width: '400px', marginLeft: '50px' }}>
                                            <Col span={4}>
                                                <Input type='number'
                                                    value={valueRequesterNum}
                                                    min={0} max={1}
                                                    id="requester"
                                                    onChange={onChangeRequesterNum}
                                                />
                                            </Col>
                                            <Col span={15}>
                                                {/* service sysmbol */}
                                                <Radio.Group onChange={onChangeRequester} value={valueConsumer} style={{ marginLeft: '20px' }}>
                                                    <Radio value={"Users"}>Users</Radio>
                                                    <Radio value={"Sales"}>Sales</Radio>
                                                </Radio.Group>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item label="Document Number" style={{ width: '400px', marginTop: '60px' }}
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Row style={{ width: '400px', marginLeft: '50px' }}>
                                            <Col span={25}>
                                                <Input className='txtBox-underline' placeholder="Document Number..." disabled
                                                    onChange={(e) => {
                                                        setticket_ID(setrepair_receipt_ID(e.target.value))
                                                        //Ticket ID or Document ID
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item label="Business Segment" style={{ width: '400px' }}
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Row style={{ width: '400px', marginLeft: '50px' }}>
                                            <Col span={4}>
                                                <Input type='number' />
                                            </Col>
                                            <Col span={15}>
                                                <Select placeholder="Select Business Segment" style={{ marginLeft: '5px' }}
                                                    onChange={(e) => {
                                                        setwork_type(e.target.value)
                                                        //Work type
                                                    }}
                                                >
                                                    <Select.Option value="demo">Demo</Select.Option>
                                                    <Select.Option value="demo">Demo</Select.Option>
                                                    <Select.Option value="demo">Demo</Select.Option>
                                                    <Select.Option value="demo">Demo</Select.Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item label="Receptionist" style={{ width: '400px', marginTop: '60px', marginTop: '20px' }}
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Row style={{ width: '400px', marginLeft: '50px' }}>
                                            <Col>
                                                <Input className='txtBox-underline' placeholder="Receptionist..." disabled
                                                    onChange={(e) => {
                                                        setdelaer(e.target.value)
                                                        //set dealer or Receptionist
                                                    }} />
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item label="Service sysmbol" style={{ width: '400px', marginTop: '60px' }} >
                                        <Row style={{ width: '400px', marginLeft: '50px' }}>
                                            <Col span={10}>
                                                <Input placeholder="Service sysmbol..." disabled />
                                            </Col>
                                            <Col span={3}>
                                                <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Search</Button>
                                            </Col>
                                            <Col span={3}>
                                                <Button style={{ marginLeft: '35px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Clear</Button>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item label="Sales Classification" style={{ width: '400px' }}>
                                        <Row style={{ width: '400px', marginLeft: '50px' }}>
                                            <Col span={15}>
                                                <Select placeholder="Select Sales Classification" style={{ marginLeft: '5px' }}
                                                    onChange={(e) => {
                                                        setsales_type(e.target.value);
                                                    }}
                                                >
                                                    <Select.Option value="demo">Demo</Select.Option>
                                                    <Select.Option value="demo">Demo</Select.Option>
                                                    <Select.Option value="demo">Demo</Select.Option>
                                                    <Select.Option value="demo">Demo</Select.Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <Form.Item label="Date And Time" style={{ width: '400px' }} >
                                        <Row style={{ width: '400px', marginLeft: '50px' }}>
                                            <Col span={11}>
                                                <Input placeholder='Date' disabled />
                                            </Col>
                                            <Col span={6}>
                                                <Input placeholder='Time' disabled style={{ marginLeft: '5px' }} />
                                            </Col>
                                        </Row>
                                    </Form.Item>
                                    <center> <h1 id='store' style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '2em' }}>Store</h1> </center>
                                    <div style={{ width: '400px', marginTop: '20px' }}>
                                        <Form.Item label="Dealer Tell" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={11}>
                                                    <Input placeholder="Dealer Tell"
                                                        onChange={(e) => {
                                                            setdealer_tel(e.target.value)
                                                        }}
                                                    />
                                                </Col>
                                                <Col span={4} style={{ marginLeft: '5px' }}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} onClick={() => setItem1(true)}>Search</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Contact Tell1" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col>
                                                    <Input type='number' placeholder='Contact Tell1...'
                                                        onChange={(e) => {
                                                            setdealer_tell_1(e.target.value)
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Dealer Name" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={20} style={{ marginLeft: '5px' }}>
                                                    <Input placeholder='Dealer Name...'
                                                        onChange={(e) => {
                                                            setdealer_name(e.target.value)
                                                        }}
                                                    />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} onClick={() => setopenModalKana(true)}>Search</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="FAX Replied Number" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={15}>
                                                    <Radio.Group onChange={onChangeFaxeRepliedNumber} value={valueFaxReplied} style={{ marginLeft: '20px' }}>
                                                        <Radio value={1}>Yes</Radio>
                                                        <Radio value={2}>No</Radio>
                                                    </Radio.Group>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Dealer Address" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={15} style={{ marginLeft: '5px' }}>
                                                    <Input id="inputText" placeholder='Dealer Address..' />
                                                </Col>
                                                <Col span={2}>
                                                    <Tooltip title="copy dealer address">
                                                        <Button icon={<CopyOutlined />}
                                                        onClick={copyFunction}
                                                        />
                                                    </Tooltip>
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '2px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Search</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Retailer Code" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={15} style={{ marginLeft: '5px' }}>
                                                    <Input placeholder='Retailer Code...' />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Search</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Contact Tell2" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={15}>
                                                    <Input type='number' placeholder='Contact Tell2...' />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Responsible" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={15}>
                                                    <Input type='number' placeholder='Responsible...' />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Dealer FAX" style={{ width: '400px', marginTop: '60px', marginTop: '20px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={15} style={{ marginLeft: '5px' }}>
                                                    <Input placeholder='Dealer FAX...' />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Search</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Order Number" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={15}>
                                                    <Input type='number' placeholder='Order Number...' />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                    </div>
                                    <center> <h1 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '2em' }}>USER</h1> </center>
                                    <div style={{ width: '400px', marginTop: '20px' }}>
                                        <Form.Item label="Customer Name Kanji" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={20}>
                                                    <Input placeholder="Customer Name Kanji" />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Address" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={15} style={{ marginLeft: '5px' }}>
                                                    <Input type='number' placeholder='Address...' />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Search</Button>
                                                </Col><br />
                                                <Input placeholder='Address...' style={{ marginLeft: '5px', marginTop: '5px' }} />
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Tel" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={11}>
                                                    <Input placeholder="Tell..." />
                                                </Col>
                                                <Col span={4} style={{ marginLeft: '5px' }}>
                                                    <Input />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} onClick={() => setopenModalSearch(true)}>History Search</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Contact Tel1" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={11}>
                                                    <Input placeholder="Contact Tell1" />
                                                </Col>
                                                <Col span={4} style={{ marginLeft: '5px' }}>
                                                    <Input />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Send SMS to" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={3}>
                                                    <Checkbox style={{ marginTop: '5px' }}>
                                                    </Checkbox>
                                                </Col>
                                                <Col span={12}>
                                                    <Input type='number' placeholder='Contact Number...' />
                                                </Col>
                                                <Col span={2}>
                                                    <Button style={{ marginLeft: '3px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Tel</Button>
                                                </Col>
                                                <Col span={2}>
                                                    <Button style={{ marginLeft: '20px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>ContactTEl1</Button>
                                                </Col>
                                                <Col span={2}>
                                                    <Button style={{ marginLeft: '100px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>ContactTEl2</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Customer Name Kana" style={{ width: '400px', color: 'green', marginTop: '50px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={20}>
                                                    <Input placeholder='Customer Name Kana...' />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Working Department" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={20}>
                                                    <Input placeholder='Working Department' />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Email" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={20}>
                                                    <Input type='email' placeholder='Email...' />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Contact Tell2" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={10}>
                                                    <Input placeholder='Contact Tell2...' />
                                                </Col>
                                                <Col span={5}>
                                                    <Input />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                    </div>
                                    <center> <h1 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '2em' }}>Product Status</h1> </center>
                                    <div style={{ width: '400px', marginTop: '20px' }}>
                                        <Form.Item label="Product line-up" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={4}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={12} style={{ marginLeft: '5px' }}>
                                                    <Input placeholder='Product line-up...' />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}  onClick={() => setItem1(true)}>Search</Button>
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '35px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Clear</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Form Name" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={12} style={{ marginLeft: '5px' }}>
                                                    <Input placeholder='Form Name...' />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }} onClick={() => setopenModalShapeName(true)}>Model name search</Button>
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '112px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Clear</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Manufacturer No." style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={14}>
                                                    <Input placeholder="Manufacturer Number...." />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Release Date" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={14}>
                                                    <DatePicker placeholder='Release Date...' disabled />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Phenomenon" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={3}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={14} style={{ marginLeft: '5px' }}>
                                                    <Input placeholder='Phenomenon...' />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}  onClick={() => setItem1(true)}>Search</Button>
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '35px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Clear</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="State" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={3}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={14} style={{ marginLeft: '5px' }}>
                                                    <Input placeholder='State...' />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}  onClick={() => setItem1(true)}>Search</Button>
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '35px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Clear</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Manufacturer Name" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={20}>
                                                    <Input placeholder='Manufacturer Name...' disabled />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Number" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={20}>
                                                    <Input placeholder='Number...' />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Extended Warranty" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={20}>
                                                    <Input type='number' placeholder='Extended Warranty...' />
                                                </Col>
                                            </Row>
                                        </Form.Item>

                                        <Form.Item label="Installation Date" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={20}>
                                                    <Input placeholder='Installation Date...' />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                    </div>
                                    <center> <h1 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '2em' }}>SS Request Information</h1> </center>
                                    <div style={{ width: '400px', marginTop: '20px' }}>

                                        <Form.Item label="Estimate" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={4}>
                                                    <Input type='number'
                                                        min={0} max={1}
                                                        onChange={onChangeEstimates}
                                                        value={valueEstimateNum}
                                                    />
                                                </Col>
                                                <Col span={15}>
                                                    <Radio.Group onChange={onChangeEstimate} value={valuesEstimate} style={{ marginLeft: '20px' }}>
                                                        <Radio value={"Yes"}>Yes</Radio>
                                                        <Radio value={"No"}>No</Radio>
                                                    </Radio.Group>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Repair" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={4}>
                                                    <Input type='number'
                                                        min={0} max={1}
                                                        onChange={onChangeRepairs}
                                                        value={valueRepairNum}
                                                    />
                                                </Col>
                                                <Col span={15}>
                                                    <Radio.Group onChange={onChangeRepair} value={valuesRepair} style={{ marginLeft: '20px' }}>
                                                        <Radio value={"Yes"}>Yes</Radio>
                                                        <Radio value={"No"}>No</Radio>
                                                    </Radio.Group>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="SS Code" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={4}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={12} style={{ marginLeft: '5px' }}>
                                                    <Input disabled placeholder='SS Code...' />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Search</Button>
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '35px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Clear</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Visit Hope day" style={{ width: '400px', color: 'green' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={4}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={6} style={{ marginLeft: '5px' }}>
                                                    <DatePicker disabled />
                                                </Col>
                                                <Col span={6} style={{ marginLeft: '5px' }}>
                                                    <DatePicker disabled />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}
                                                        onClick={() => setDrawer(true)}
                                                    >Search</Button> <p>Reservation are full</p>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Visit Contract" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={4}>
                                                    <Input type='number' placeholder='Visit Contract...' />
                                                </Col>
                                                <Col span={15}>
                                                    <Select placeholder="Select Item" style={{ marginLeft: '5px' }}>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                    </Select>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="PL event" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>

                                                <Col span={4}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={15}>
                                                    <Select placeholder="Select Item" style={{ marginLeft: '5px' }}>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                    </Select>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Reason for setting" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>

                                                <Col span={4}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={15}>
                                                    <Select placeholder="Select Item" style={{ marginLeft: '5px' }}>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                    </Select>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Reception Type" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>

                                                <Col span={4}>
                                                    <Input type='number'
                                                        min={0} max={1000}
                                                    />
                                                </Col>
                                                <Col span={4}>
                                                    <p>1,000 yen</p>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Request first" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={4}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={6}>
                                                    <Select placeholder="Select Item" style={{ marginLeft: '5px' }}>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                    </Select>
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '10px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Request</Button>
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '50px', backgroundColor: 'white', fontFamily: 'sans-serif' }} onClick={() => setopenModalBillingInfo(true)}>Meta Request 1st</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Visit note" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>

                                                <Col span={4}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={12}>
                                                    <Input style={{ marginLeft: '5px' }} />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '10px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Search</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Travel Expenses" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={7}>
                                                    <Input type='number' style={{ marginLeft: '5px' }} />
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="Holidays/OT Charges" style={{ width: '400px' }}>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>

                                                <Col span={4}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={6}>
                                                    <Select placeholder="Select Item" style={{ marginLeft: '5px' }}>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                        <Select.Option value="demo">Demo</Select.Option>
                                                    </Select>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                        <Form.Item label="REMARK" style={{ width: '400px' }} >
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={3}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={14} style={{ marginLeft: '5px' }}>
                                                    <Input />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}  onClick={() => setItem1(true)}>Search</Button>
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '35px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Clear</Button>
                                                </Col>
                                            </Row>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={3}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={14} style={{ marginLeft: '5px' }}>
                                                    <Input />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}  onClick={() => setItem1(true)}>Search</Button>
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '35px', backgroundColor: 'white', fontFamily: 'sans-serif' }}>Clear</Button>
                                                </Col>
                                            </Row>
                                            <Row style={{ width: '400px', marginLeft: '50px' }}>
                                                <Col span={3}>
                                                    <Input type='number' />
                                                </Col>
                                                <Col span={14} style={{ marginLeft: '5px' }}>
                                                    <Input
                                                    id="Input-clear"
                                                    />
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '5px', backgroundColor: 'white', fontFamily: 'sans-serif' }}  onClick={() => setItem1(true)}>Search</Button>
                                                </Col>
                                                <Col span={3}>
                                                    <Button style={{ marginLeft: '35px', backgroundColor: 'white', fontFamily: 'sans-serif' }}
                                                        onClick={clearText}>Clear</Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                    </div>
                                </div>
                            </Form>
                        </center>
                        <FloatButton.BackTop />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                        backgroundColor: '#001529',
                        color: 'white',
                        height: 'auto',
                        fontWeight: 'bold',
                    }}
                >
                    ©2022 Created by Datt-Japan

                </Footer>

            </Layout>

        </Layout>
    )
}
export default RepairRequest;
//====================================================================================




















//--------------------------------------------------------------------------
// Functions
// Area
//------------------

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Basic Repair Information', '#basic', <TranslationOutlined />),
    getItem('Store', '#store', <StarOutlined />),
    getItem('User', '#user', <UserOutlined />),
    getItem('Product Status', '#product', <ProjectOutlined />),
    getItem('SS Request Information', '#SS', <PullRequestOutlined />),
];

const FormLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    }
};

//-----------------Timer----------------
const Timer = () => {

    const [seconds, SetSeconds] = useState(0);
    const [minutes, SetMinutes] = useState(0);

    var timer;
    useEffect(() => {

        timer = setInterval(() => {

            SetSeconds(seconds + 1);

            if (seconds === 59) {
                SetMinutes(minutes + 1);
                SetSeconds(0);
            }



        }, 1000)

        return () => clearInterval(timer);
    });

    return (
        <div className='text-center'>
            <h2 className='mb-2 font-mono text-5xl font-normal leading-normal text-center text-blue-400 mt-0- text bold'>Reception</h2>
            <h3 class="self-center text-4xl font-semibold whitespace-nowrap text-teal-200 font-mono ... text-center">TIME : {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h3>
        </div>
    )
}
//-------------------------------------------


//===========================================================================








