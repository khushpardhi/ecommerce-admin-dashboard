import React, {useState} from 'react'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import CustomInput from "../components/CustomInput";
import ReactQuill from 'react-quill';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Addproduct = () => {
  const [desc, setDesc ]= useState();
  const handleDesc = (e)=>{
    setDesc(e);
      }
  return (
    <div>
        <h3 className='mb-4 title'> Add Product</h3>
        <div>
            <form>
            <CustomInput type="text" label="Enter Product Title" />
            <div className='mb-3'>
            <ReactQuill 
                  theme="snow"
                   values={desc}
                   onChange={(evt) => { 
                    handleDesc(evt);
                    }}/>
            </div>
            <CustomInput type="text" label="Enter Product Title" />
            <select name="" className="form-control py-3 mb-3 " id=''>
            <select name="" className="form-control py-3 mb-3 " id=''>
                      <option>Select Brand</option>
                  </select>
                      <option>Select Category</option>
                  </select>
                  <select name="" className="form-control py-3 mb-3 " id=''>
                      <option>Select Color</option>
                  </select>
            <CustomInput type="text" label="Enter Product Title" />
            <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from uploading company data or other
              banned files.
            </p>
          </Dragger>

               <button 
               className ="btn btn-success border-0 roudned-3 my-5"
               type='submit'>
                Add Product
               </button> 
            </form>
        </div>
    </div>
  )
}

export default Addproduct