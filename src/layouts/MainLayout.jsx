import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <>
            <Header handleSidebar={handleSidebar} />
            <div className="app__container">
                <Sidebar sidebar={sidebar} />
                <Container fluid className="app__main">
                    {children}
                </Container>
            </div>
        </>
    );
};

export default MainLayout;
