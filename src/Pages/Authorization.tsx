import logo from "../assets/svg/Authorization/sibdev-logo.svg"
import AuthorizationForm from "../Components/Authorization/AuthorizationForm.tsx";



const Authorization = () => {
    return (
        <div className={"h-screen flex flex-col items-center justify-center"}>
            <div className={"container mx-auto flex items-center justify-center bg-white"}>
                <div className={"bg-white flex flex-col items-center justify-center pt-10 px-22 pb-15"}>
                    <div className={"mb-7"}>
                        <img src={logo} alt="logo" />
                    </div>
                    <p className={"mb-7"}>Вход</p>
                    <AuthorizationForm/>
                </div>
            </div>
        </div>
    );
};

export default Authorization;