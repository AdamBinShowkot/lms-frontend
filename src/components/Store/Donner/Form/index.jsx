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
import { 
    useDispatch,
    useSelector
} from 'react-redux';
import { 
    getAllBloodGroup,
    getAllGender 
} from '../../../../Redux/features/common/Async';

const AddNewForm=()=>{
    const dispatch=useDispatch();

    // get state from redux state
    const bloodGroup=useSelector((state)=>state.common.bloodGroup);
    const gender=useSelector((state)=>state.common.gender);

    // state assign
    const [gernderData,setGenderData]=useState([]);
    const [bloodGroupData,setBloodGroupData]=useState([]);

    useEffect(()=>{
        dispatch(getAllBloodGroup());
        dispatch(getAllGender());
    },[]);

    // For Update Gender
    useEffect(()=>{
        let lists=[];
        if(gender.length){
            lists=configListForSelectData(gender);

            setGenderData(lists);
        }
    },[gender]);

    // For Update Blood Group
    useEffect(()=>{
        let lists=[];
        if(bloodGroup.length){
            lists=configListForSelectData(bloodGroup);

            setBloodGroupData(lists);
        }
    },[bloodGroup])

    // Common Function For Config Lists
    const configListForSelectData=(lists)=>{
        let myLists=[...lists];

        let data=[];

        if(myLists.length){
            myLists.map((mData)=>{
                let myObj={
                    key:mData.id,
                    label:mData.name,
                    value:mData.id
                };

                data=[...data,myObj];
            })
        }
        return data;
    }
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
                                    label="WhatsApp No"
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
                                    label="WhatsApp No"
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
                                        title:"Occupation"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Occupation Is Required."
                                        }
                                    ]}
                                    name="occupation"
                                    label="Occupation"
                                    wrapperCol={{
                                      span:16  
                                    }}
                                    labelCol={{
                                        span:8
                                    }}
                                    >
                                        <Select
                                        labelInValue={true}
                                        optionFilterProp='label'
                                        showSearch
                                        />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Blood Group"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Blood Group Is Required."
                                        }
                                    ]}
                                    name="bloodGroup"
                                    label="Blood Group"
                                    wrapperCol={{
                                      span:16  
                                    }}
                                    labelCol={{
                                        span:8
                                    }}
                                    >
                                        <Select
                                        options={bloodGroupData}
                                        labelInValue={true}
                                        optionFilterProp='label'
                                        showSearch
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row>
                                <Col span={12}>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Qualification"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Qualification Is Required."
                                        }
                                    ]}
                                    name="qualification"
                                    label="qualification"
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
                                        title:"Institute"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Institute Is Required."
                                        }
                                    ]}
                                    name="institute"
                                    label="Institute"
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
                                        title:"Gender"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Gender Is Required."
                                        }
                                    ]}
                                    name="gender"
                                    label="Gender"
                                    wrapperCol={{
                                      span:16  
                                    }}
                                    labelCol={{
                                        span:8
                                    }}
                                    >
                                        <Select
                                        options={gernderData}
                                        labelInValue={true}
                                        optionFilterProp='label'
                                        showSearch
                                        />
                                    </Form.Item>
                                </Col>

                                {/* <Col span={12}>
                                    <Form.Item
                                    colon={false}
                                    tooltip={{
                                        placement:"bottom",
                                        title:"Blood Group"
                                    }}
                                    rules={[
                                        {
                                            required:true,
                                            message:"Blood Group Is Required."
                                        }
                                    ]}
                                    name="bloodGroup"
                                    label="Blood Group"
                                    wrapperCol={{
                                      span:16  
                                    }}
                                    labelCol={{
                                        span:8
                                    }}
                                    >
                                        <Select
                                        options={bloodGroupData}
                                        labelInValue={true}
                                        optionFilterProp='label'
                                        showSearch
                                        />
                                    </Form.Item>
                                </Col> */}
                            </Row>
                            <Row >
                                <Col 
                                span={24}
                                style={{
                                    textAlign:'right'
                                }}
                                >
                                    <Button
                                    style={{
                                        marginRight:"10px"
                                    }}
                                    >
                                        Reset
                                    </Button>
                                    <Button
                                    htmlType='submit'
                                    type='primary'
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