import React,{
    useState,
    useEffect
} from 'react';
import {
    Row,
    Col,
    Card,
    Form,
    Input,
    Select,
    Button
} from 'antd';

const AddNewForm=()=>{
    return(
        <>
            <Row>
                <Col span={24}>
                    <Card>
                        <Form>
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
                                        title:"Total Row"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Total Row Is Required."
                                        }
                                    ]}
                                    name="totalRow"
                                    label="Total Row"
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
                                        title:"Total Column"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Total Column Is Required."
                                        }
                                    ]}
                                    name="totalColumn"
                                    label="Total Column"
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