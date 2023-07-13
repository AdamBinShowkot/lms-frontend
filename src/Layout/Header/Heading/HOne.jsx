import React,{useState} from 'react';
import {
    Row,
    Col,
    theme,
    Form,
    Select,
    ColorPicker,
    Slider
} from 'antd';


const HOne=()=>{
    const { token } = theme.useToken();
    const [color, setColor] = useState(token.colorPrimary);
    return(
        <>
           <Row>
                <Col 
                span={24}
                style={{
                    padding:"0 30px"
                }}
                >
                    <Form>
                        <Form.Item
                        labelAlign="left"
                        wrapperCol={{
                            span:14
                        }}
                        labelCol={{
                            span:10
                        }}
                        colon={false}
                        tooltip={{
                            placement:"bottom",
                            title:"News Title"
                        }}
                        label="Weight"
                        >
                            <Select
                            size='small'
                            />
                        </Form.Item>
                    </Form>

                    <Form>
                        <Form.Item
                        labelAlign="left"
                        wrapperCol={{
                            span:14
                        }}
                        labelCol={{
                            span:10
                        }}
                        colon={false}
                        tooltip={{
                            placement:"bottom",
                            title:"Heading Color"
                        }}
                        label="Color"
                        >
                            <ColorPicker value={color} onChange={setColor} />
                        </Form.Item>
                    </Form>

                    <Form>
                        <Form.Item
                        labelAlign="left"
                        wrapperCol={{
                            span:14
                        }}
                        labelCol={{
                            span:10
                        }}
                        colon={false}
                        tooltip={{
                            placement:"bottom",
                            title:"Heading Color"
                        }}
                        label="Size"
                        >
                             <Slider defaultValue={30}/>
                        </Form.Item>
                    </Form>
                </Col>
            </Row> 
        </>
    )
}
export default HOne;