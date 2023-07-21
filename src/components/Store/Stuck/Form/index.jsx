import React,{
    useState,
    useEffect,
    useRef
} from 'react';
import {
    Row,
    Col,
    Card,
    Form,
    Input,
    Select,
    Button,
    InputNumber
} from 'antd';
import { useDispatch } from 'react-redux';
import { createNewStuck } from '../../../../Redux/features/store/Async';

const AddNewForm=()=>{
    const formref=useRef(null);
    const dispatch=useDispatch();

    const handleOnSubmit=(values)=>{
        const data={
            name:values.stackName,
            description:values.stackDetails,
            rowNo:parseInt(values.rowNo),
            colNo:parseInt(values.colNo)
        };

        dispatch(createNewStuck(data));
        formref.current.resetFields();
    }
    return(
        <>
            <Row>
                <Col span={24}>
                    <Card>
                        <Form
                        onFinish={handleOnSubmit}
                        ref={formref}
                        >
                            <Row>
                                <Col span={12}>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Stack Name"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Stack Name Is Required."
                                        }
                                    ]}
                                    name="stackName"
                                    label="Stack Name"
                                    wrapperCol={{
                                      span:16  
                                    }}
                                    labelCol={{
                                        span:8
                                    }}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Stack Details"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Stack Details Is Required."
                                        }
                                    ]}
                                    name="stackDetails"
                                    label="Stack Details"
                                    wrapperCol={{
                                      span:16  
                                    }}
                                    labelCol={{
                                        span:8
                                    }}
                                    >
                                        <Input.TextArea/>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12}>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Row Number"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Row Number Is Required."
                                        }
                                    ]}
                                    name="rowNo"
                                    label="Row Number"
                                    wrapperCol={{
                                      span:16  
                                    }}
                                    labelCol={{
                                        span:8
                                    }}
                                    >
                                        <InputNumber/>
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Column Number"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Column Number Is Required."
                                        }
                                    ]}
                                    name="colNo"
                                    label="Column Number"
                                    wrapperCol={{
                                      span:16  
                                    }}
                                    labelCol={{
                                        span:8
                                    }}
                                    >
                                        <InputNumber/>
                                    </Form.Item>
                                </Col>
                            </Row>


                            <Row>
                                <Col 
                                span={24} 
                                style={{
                                    textAlign:'right'
                                }}
                                >
                                  <Button 
                                  style={{
                                    marginRight:'10px'
                                  }}
                                  type='primary'
                                  danger
                                  >
                                    Reset
                                  </Button>
                                  <Button
                                  htmlType='submit'
                                  type="primary"
                                  >
                                    Save
                                  </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default AddNewForm;