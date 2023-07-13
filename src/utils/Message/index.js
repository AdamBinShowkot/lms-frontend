import {message} from 'antd';

export const Success=(msg,className,style)=>{
    message.success({
      content:msg,
      className:className?className:'',
      style:style?style:''
    })
}

export const Warning=(msg,className,style)=>{
    message.warning({
      content:msg,
      className:className?className:'',
      style:style?style:''
    })
}

export const Error=(msg,className,style)=>{
    message.error({
      content:msg,
      className:className?className:'',
      style:style?style:''
    })
}