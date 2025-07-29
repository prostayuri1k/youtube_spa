import '@ant-design/v5-patch-for-react-19';
import {Outlet, useNavigate} from "react-router";
import {useEffect} from "react";


function App() {

    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            navigate('search');
        } else {
            navigate('authorization')
        }
    }, [token]);

    return (
        <>
            <Outlet/>
        </>
    )
}

export default App
