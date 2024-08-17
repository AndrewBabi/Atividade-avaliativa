import Title from "../components/login"
import Subtitle from "../components/usuario"
import Input from "../components/input"
import Password from "../components/senha"
import Input2 from "../components/input2"
import '../components/componentes.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="countainer">
            <div className="countainer2">
            <Title/>
            <Subtitle/>
            <Input className="buttom"/>
            <Password/>
            <Input2 className="buttom2"/>
            <Link className="pageLogin" to={"/Page"}>Login</Link>
            </div>
        </div>
    )
}

export default Login
