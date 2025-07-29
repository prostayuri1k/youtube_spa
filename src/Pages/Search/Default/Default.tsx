import Search from "antd/es/input/Search";
import {useState} from "react";

const Default = () => {
    const [loading, setLoading] = useState(false);
    const onSearch = (value: string) => {
        console.log(value);
    }

    return (
        <div className={'container mx-auto h-screen flex flex-col items-center justify-center'}>
            <h1 className={'mb-10 text-4xl leading-13'}>Поиск видео</h1>
            <Search
                placeholder="Как кормить кота"
                allowClear
                enterButton="Найти"
                size="large"
                onSearch={onSearch}
                loading={loading}
            />
        </div>
    );
};

export default Default;