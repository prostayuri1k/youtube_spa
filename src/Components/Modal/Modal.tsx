import {Form, type FormProps, Input, Modal as ModalAntd} from 'antd';
import type {FC} from "react";

type ModalPropsType = {
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
}

type FieldType = {
    favorite?: boolean;
}

const Modal: FC<ModalPropsType> = ({showModal, setShowModal}) => {

    const onFinish: FormProps<FieldType>['onFinish'] = () => {
        console.log('finish')
    }

    return (
        <ModalAntd
            title={'Сохранить запрос'}
            closable={false}
            open={showModal}
            onOk={() => {
                setShowModal(!showModal)
            }}
            onCancel={() => {
                setShowModal(!showModal)
            }}
            mask={true}
        >
            <Form
                name={'favorite'}
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    label={'Запрос'}
                    name={'request'}
                >
                    <Input />
                </Form.Item>
            </Form>
        </ModalAntd>
    );
};

export default Modal;