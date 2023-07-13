import React from 'react';
import {
    Row,
    Col,
    Card
} from 'antd';
import parse from 'html-react-parser'


const myData=`<p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p><br></p><p>
<img src="data:image/jpeg;base64,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"></p><p><br></p><p><br></p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>`


const ApproveListsDetails=()=>{
    return(
        <>
            <Card>
                <Row>
                    <Col 
                    span={24}
                    style={{
                        padding:'10px 50px'
                    }}
                    >
                        <p>
                            <span><strong>Title: </strong> News Title One...</span><br/>
                            <span><strong>Author: </strong> Md Homayun Kabir</span><br/>
                            <span><strong>Date: </strong>12-12-2023</span><br/>
                            <span><strong>Approve Date: </strong>12-12-2023</span>
                        </p>
                    </Col>
                </Row>
                <Row
                style={{
                    padding:'10px 50px'
                }}
                >
                    <Card>
                        {
                            parse(myData)
                        }
                    </Card>
                </Row>
            </Card>
        </>
    )
}
export default ApproveListsDetails