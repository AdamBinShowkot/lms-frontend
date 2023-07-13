import react from 'react'
import { 
    Table,
    Row,
    Col,
    Card,
    Tag,
    Space,
    Popconfirm
} from 'antd';
import { Link,useNavigate} from 'react-router-dom';
import DataTable from '../ReusableComponent/DataTable';
import {
  DeleteOutlined,
  EditOutlined,
  FundViewOutlined
}from '@ant-design/icons'


const ApproveLists=()=>{
  const history=useNavigate();
  const roles=localStorage.getItem("role")
  const data = [
    {
      key: '1',
      name: 'News Title One...',
      title: 'News Title One...',
      age: 32,
      address: 'New York No. 1 Lake Park',
      status:"Approve",
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      title:"News Title Two...",
      age: 42,
      address: 'London No. 1 Lake Park',
      status:"Approve",
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      title:"News Title Three...",
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      status:"Approve",
      tags: ['cool', 'teacher'],
    },
  ];
  let columns = [
      {
        title: 'Serial',
        key: 'sl',
        render: (text, record) => ( data.indexOf(record) + 1 )
      },
      {
        title:"Title",
        dataIndex:'title',
        key:"title",
        width:'55%'
      },
      {
        title:"Status",
        width:"15%",
        key:"statusd",
        align:'center',
        render:(_,record)=>{
          return <Row style={{textAlign:'center'}}>
            <Col span={24}>
              {
                record.status==='Approve'?(
                  <Tag color="#87d068">Approve</Tag>
                ):record.status==="Rejected"?(
                  <Tag color="#f50">Rejected</Tag>
                ):record.status==="Pending"?(
                  <Tag color="#2db7f5">Pending</Tag>
                ):""
              }
            </Col>
          </Row>
        }
      },
  ];

  if(roles==="reporter"){
    let approverColumns={
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        // <Space size="middle">
        //   <a>Invite {record.name}</a>
        //   <a>Delete</a>
        // </Space>
        record.status==="Pending"?(
          <Row style={{textAlign:'center'}}>
            <Col span={8}>
              <Tag 
              color="#29c458"
              onClick={()=>{
                history('/addNewNews',{state:{isUpdate:true}})
              }}
              >
                <EditOutlined/>
              </Tag>
            </Col>
            <Col span={8}>
              <Popconfirm title={`Sure Delete "${record.title}" ?`}>
                <Tag color="#e94e10"
                >
                  <DeleteOutlined/>
                </Tag>
              </Popconfirm>
            </Col>
            <Col span={8}>
              <Link to={`/newsLists/${record.age}`}>
                <Tag color="#0084ff">
                  <FundViewOutlined>
                    
                  </FundViewOutlined>
                </Tag>
              </Link>
            </Col>
          </Row>
        ):(
          <Row style={{textAlign:'center'}}>
          <Col span={24}>
            <Link to={`/approveLists/${record.age}`}>
              <Tag color="#0084ff">
                <FundViewOutlined>
                  
                </FundViewOutlined>
              </Tag>
            </Link>
          </Col>
        </Row>
        )
      ),
      width:'18%'
    }
    columns=[...columns,approverColumns]
  }else if(roles==="approver"){
    let reporterColumns={
      title: 'Action',
      key: 'action',
      align:'center',
      render: (_, record) => (
        // <Space size="middle">
        //   <a>Invite {record.name}</a>
        //   <a>Delete</a>
        // </Space>
        <Row style={{textAlign:'center'}}>
          <Col span={24}>
          <Link to={`/approveLists/${record.age}`}>
            <Tag color="#0084ff">
              <FundViewOutlined>
                
              </FundViewOutlined>
            </Tag>
          </Link>
            
          </Col>
        </Row>
      ),
      width:'18%'
    }
    columns=[...columns,reporterColumns]
  }
  return(
    <>
      <Card>
        <Row>
          <Col span={24}>
            <DataTable
            tableProps={{
              data:data,
              columns:columns
            }}
            />
          </Col>
        </Row>
      </Card>
    </>
  )
}
export default ApproveLists;