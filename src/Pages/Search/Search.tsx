import {Button} from "antd";
import logo from "../../assets/svg/Authorization/sibdev-logo.svg"
import Default from "./Default/Default.tsx";

const Search = () => {
    return (
        <>
            <header className={"bg-white pt-4 pb-4"}>
                <div className={"container mx-auto flex justify-between items-center"}>
                    <nav className={'flex items-center justify-between'}>
                        <div className={"mr-2.5"}>
                            <img width={48} height={48} src={logo} alt="logo" />
                        </div>
                        <p className={"mr-10"}>Поиск</p>
                        <p>Избранное</p>
                    </nav>
                    <div>
                        <Button>
                            Выйти
                        </Button>
                    </div>
                </div>
            </header>
            <Default/>
        </>
    );
};

export default Search;