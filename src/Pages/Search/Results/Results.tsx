import Search from "antd/es/input/Search";
import {useState} from "react";
import {AppstoreOutlined, HeartOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Button} from "antd";
import Card from "./Card/Card.tsx";
import List from "./List/List.tsx";
import Modal from "../../../Components/Modal/Modal.tsx";

const Results = () => {

    const [resultsView, setResultsView] = useState<'card'|'list'>('card');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);
    const onSearch = (value: string) => {
        console.log(value)
    }

    return (
        <div>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <div className={"mx-auto container flex flex-col justify-center items-start pt-10"}>
                <h2 className={"text-3xl mb-5"}>Поиск видео</h2>
                <div className={"mb-13.5 w-full"}>
                    <Search
                        suffix={<Button onClick={() => setShowModal(!showModal)} type={"link"}><HeartOutlined/></Button>}
                        variant={"outlined"}
                        placeholder="Как кормить кота"
                        allowClear
                        enterButton="Найти"
                        size="large"
                        onSearch={onSearch}
                        loading={loading}
                    />
                </div>
                <div className={"w-full flex justify-between mb-5"}>
                    <div>
                        <span className={"mr-4"}>Видео по запросу <b>«чем кормить кота» </b></span>
                        <span className={"text-gray"}>9999</span>
                    </div>
                    <div>
                        <UnorderedListOutlined
                            className={`${resultsView === "list" ? '!text-black mr-4 ' : 'mr-4 !text-gray '}`}
                            onClick={() => setResultsView('list')}
                        />
                        <AppstoreOutlined
                            className={`${resultsView === "card" ? '!text-black' : ' !text-gray '}`}
                            onClick={() => setResultsView('card')}
                        />

                    </div>
                </div>
                {resultsView === 'card' && (<Card/>)}
                {resultsView === 'list' && (<List/>)}
            </div>
        </div>
    );
};

export default Results;