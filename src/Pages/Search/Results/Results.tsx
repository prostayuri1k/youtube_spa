import {Outlet} from "react-router";
import Search from "antd/es/input/Search";
import {useState} from "react";
import {HeartFilled, HeartOutlined} from "@ant-design/icons";
import {Button} from "antd";

const Results = () => {

    const [loading, setLoading] = useState(false);
    const onSearch = (value: string) => {
        console.log(value)
    }



    return (
        <div>
            <div className={"mx-auto container flex flex-col justify-center items-start pt-10"}>
                <h2 className={"text-3xl mb-5"}>Поиск видео</h2>
                <div className={"mb-13.5 w-full"}>
                    <Search
                        suffix={<Button type={"link"}><HeartOutlined/></Button>}
                        variant={"outlined"}
                        placeholder="Как кормить кота"
                        allowClear
                        enterButton="Найти"
                        size="large"
                        onSearch={onSearch}
                        loading={loading}
                    />
                </div>
                <div className={"flex justify-between"}>
                    <div>
                        <span className={"mr-4"}>Видео по запросу <b>«чем кормить кота» </b></span>
                        <span className={"text-gray"}>9999</span>
                    </div>
                    <div>

                    </div>
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Results;