import logo from "../../assets/svg/Authorization/sibdev-logo.svg"
import {NavLink, Outlet} from "react-router";

const Search = () => {

    const navLinksStyle = "text-siberian-blue hover:border-b-2 hover:border-siberian-blue hover:duration-100 ";
    const activeNavLinksStyle = "border-b-2 border-siberian-blue"


    const onClick = () => {
        localStorage.removeItem("token");
    }

    return (
        <>
            <header className={"bg-white pt-4 pb-4"}>
                <div className={"container mx-auto flex justify-between items-center"}>
                    <div className={'flex items-center justify-between'}>
                        <div className={"mr-2.5"}>
                            <img width={48} height={48} src={logo} alt="logo"/>
                        </div>
                        <div className={"mr-10"}>
                            <NavLink
                                to={'/search'}
                                className={({isActive}) =>
                                    isActive ? navLinksStyle + activeNavLinksStyle : navLinksStyle}
                            >
                                Поиск
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                to={'/favourite'}
                                className={({isActive}) =>
                                    isActive ? navLinksStyle + activeNavLinksStyle : navLinksStyle}
                            >
                                Избранное
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <NavLink className={`${navLinksStyle} mr-0`} to={"/authorization"}
                                 onClick={onClick}>
                            Выйти
                        </NavLink>
                    </div>
                </div>
            </header>
            <Outlet/>
        </>
    );
};

export default Search;