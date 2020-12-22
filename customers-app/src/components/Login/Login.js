import { Spin, Card, Button } from 'antd';
import {useAuth0} from "@auth0/auth0-react";
import Layout from '../Layout'
import styled from "styled-components"


const CardContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background: pink;
    justify-content: center;
    align-items: center
`

const Login = () => {
    const { loginWithRedirect,  isAuthenticated } = useAuth0();

    const handleLogin = ( ) => {
        loginWithRedirect()
    }

    return ( 
        <>
            { !isAuthenticated ? 
                <CardContainer>
                    <Card size="large" title="Olá, visitante 😊" extra={<Spin/>} style={{ width: 300 }}>
                        <Button onClick={handleLogin}>Login</Button>
                    </Card>
                </CardContainer>
            : <Layout /> };
        </>)
}
 
export default Login;