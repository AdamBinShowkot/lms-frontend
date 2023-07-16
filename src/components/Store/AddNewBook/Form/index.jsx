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
                                        title:"Member Ship No"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Member Ship No Required."
                                        }
                                    ]}
                                    name="memberShipNo"
                                    label="Member Ship No"
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
                                        title:"Date"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Date Required."
                                        }
                                    ]}
                                    name="date"
                                    label="Date"
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
                                <Col span={12}>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Name"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Name Required."
                                        }
                                    ]}
                                    name="name"
                                    label="Name"
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
                                        title:"Date Of Birth"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Date Of Birth Required."
                                        }
                                    ]}
                                    name="dateOfBirth"
                                    label="Date Of Birth"
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
                                <Col span={12}>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Father's Name"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Father's Name Is Required."
                                        }
                                    ]}
                                    name="fathersName"
                                    label="Father's Name"
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
                                        title:"Mother's Name"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Mother's Name Is Required."
                                        }
                                    ]}
                                    name="mothersName"
                                    label="Mother's Name"
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
                                <Col span={12}>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Present Address"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Present Address Is Required."
                                        }
                                    ]}
                                    name="presentAddress"
                                    label="Present Address"
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

                                <Col span={12}>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Permanent Address"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Permanent Address Is Required."
                                        }
                                    ]}
                                    name="permanentAddress"
                                    label="Permananent Address"
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
                                        title:"Mobile No"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Mobile No Is Required."
                                        }
                                    ]}
                                    name="mobileNo"
                                    label="Mobile No"
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
                                        title:"WhatsApp No"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"WhatsApp No Is Required."
                                        }
                                    ]}
                                    name="whatsAppNo"
                                    label="whatsApp No"
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
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default AddNewForm;