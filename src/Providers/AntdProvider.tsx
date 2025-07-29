import {ConfigProvider} from "antd";
import type {ReactNode} from "react";

interface IAntProviderProps {
    children: ReactNode;
}

const AntdProvider = ({children}: IAntProviderProps) => {
    return (
       <ConfigProvider
        theme={{
            components: {
                Input: {
                    activeBg: 'rgba(197, 228, 249, 0.3)',
                }
            }
        }}
       >
           {children}
       </ConfigProvider>
    );
};

export default AntdProvider;

