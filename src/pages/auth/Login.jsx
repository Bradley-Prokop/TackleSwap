import  AuthForm  from "../../components/auth/AuthForm";
import './login.css';

function Login(){
    return(
        <div className="login-page">
            <AuthForm type="login"/>
        </div>
    );
}

export default Login;