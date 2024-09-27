/* eslint-disable no-unreachable */
import React from 'react';
import { WindowsOutlined, FundOutlined, TeamOutlined, ContainerOutlined, UserOutlined, FireOutlined } from '@ant-design/icons';
import { Layout, Menu, Table, Space, Tag, Theme, Breadcrumb } from 'antd';
import type { ColumnsType } from 'antd/es/table';
// import styles from './styles.module.scss';
import 'antd/dist/antd.css';
import type { MenuProps } from 'antd';
// import { useState } from 'react';
// import type { FilterValue, SorterResult } from 'antd/es/table/interface';
// TablePaginationConfig
// import qs from 'qs';

// import React from 'react';
// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider, } = Layout;
// const { SubMenu } = Menu;

// interface DataType {
//     name: {
//         first: string;
//         last: string;
//     };
//     gender: string;
//     email: string;
//     login: {
//         uuid: string;
//     };
// }

// interface TableParams {
//     pagination?: TablePaginationConfig;
//     sortField?: string;
//     sortOrder?: string;
//     filters?: Record<string, FilterValue>;
// }

// const columns: ColumnsType<DataType> = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       sorter: true,
//       render: (name) => `${name.first} ${name.last}`,
//       width: '20%',
//     },
//     {
//       title: 'Gender',
//       dataIndex: 'gender',
//       filters: [
//         { text: 'Male', value: 'male' },
//         { text: 'Female', value: 'female' },
//       ],
//       width: '20%',
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//     },
//   ];

//   const getRandomuserParams = (params: TableParams) => ({
//     results: params.pagination?.pageSize,
//     page: params.pagination?.current,
//     ...params,
//   });

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="large">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

// const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
//     key,
//     label: `nav ${key}`,
// }));

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
        getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '5'),
      getItem('Bill', '6'),
      getItem('Alex', '7'),
    ])
   
  ];

const Reports: React.FC = () => (
   
    <>
        <Layout>
            {/* <Header className="header">
                 <div className="logo" />
                 <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
                 </Header> */}
            <Sider trigger={null} collapsible >
                <h1 style={{ fontSize: '20px', color: 'white', textAlign: 'center', paddingTop: '20px', marginBottom: '50px', }}><FireOutlined style={{ color: 'purple', fontSize: '25px' }}/>analyze.</h1>
                <div className="logo" style={{ color: 'red' }} />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <WindowsOutlined />,
                            label: 'Home',
                        },
                        {
                            key: '2',
                            icon: <FundOutlined />,
                            label: 'Analytics',
                        },
                        {
                            key: '3',
                            icon: <TeamOutlined />,
                            label: 'Data Source',
                        },
                        {
                            key: '4',
                            icon: <ContainerOutlined />,
                            label: 'Reports',

                        },
                        // <Breadcrumb>
                        //     <Breadcrumb.Item>User</Breadcrumb.Item>
                        //     <Breadcrumb.Item>User</Breadcrumb.Item>
                        // </Breadcrumb>
                    ]}
                />
            </Sider>
            <Layout>
                <h1 style={{ fontSize: '40px', paddingTop: '20px', paddingLeft: '40px' }}>Reports</h1>
                <Header  style={{ background: 'white',  }} />
                <Content
                    style={{
                        margin: '24px 16px 0',
                        color: 'red',
                        display: 'flex',
                        justifyContent: 'space-between',
                        border: '1px solid red',
                        gap: '20px',
                        alignItems: 'center',
                    }}
                >
                    <Table columns={columns} dataSource={data} />
                    <div style={{ padding: '24', minHeight: '360px', background: 'white' }}>
                        content
                    </div>
                    {/* <Table
                        columns={columns}
                        // rowKey={(record) => record.login.uuid}
                        dataSource={data}
                        // pagination={tableParams.pagination}
                        // loading={loading}
                        // onChange={handleTableChange}
                    /> */}
                </Content>
            </Layout>
        </Layout>
    </>
                
);
                
export default Reports;
