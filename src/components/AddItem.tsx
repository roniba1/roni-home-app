import React, { useState } from "react";
import { ListsPageSettings } from "../interfaces/ListsPageSettings";
import { Button, Modal, Select, Form, Input } from 'antd';

type AddItemProps = {
    onItemAdded: (itemText: string, type: string) => Promise<void>,
    listsSettings: ListsPageSettings
};

const AddItem: React.FC<AddItemProps> = props => {
    const [newContent, setNewContent] = useState('');
    const [contentType, setContentType] = useState('');
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const showModal = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        form.resetFields();
        setNewContent('');
        setContentType('');
        setOpen(false);
    };

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setNewContent(event.currentTarget.value);
    }

    const handleSelectChange = (value: string) => {
        setContentType(value);
    }

    const addItemSubmitHandler = async () => {
        setConfirmLoading(true);

        props.onItemAdded(newContent,
            contentType ? contentType : props.listsSettings.newItemType()).then(() => {
            form.resetFields();
            setNewContent('');
            setContentType('');
            setOpen(false);
            setConfirmLoading(false);
        });
    };

    const options = props.listsSettings.typesNames.map((listType) => {
        return {
            value: listType.type,
            label: listType.displayName
        };
    });

    const inputComponent = (
        <Form.Item name="item" label="Item" rules={[{ required: true }]}>
            <Input value={newContent} onChange={handleInputChange}/>
        </Form.Item>
    );

    const selectComponent = options.length > 2 ? (
        <Form.Item name="type" label="Category" rules={[{ required: true }]}>
            <Select
                placeholder="Choose category"
                value={contentType}
                onChange={handleSelectChange}
                options={options}
            />
        </Form.Item>
    ) : null;

    const modalForm = (
        <Form {...layout} form={form} name="control-hooks" onFinish={addItemSubmitHandler}>
            {inputComponent}
            {selectComponent}
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={handleCancel}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );


    return (
        <>
            <Button type="primary" onClick={showModal}>
                {props.listsSettings.addItemText}
            </Button>
            <Modal
                title={props.listsSettings.addItemText}
                open={open}
                //onOk={addItemSubmitHandler}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={[]}
            >
                {modalForm}
            </Modal>
    </>

    );
}

export default AddItem;