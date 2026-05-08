import AuthForm from "../../components/auth/AuthForm";
import './signup.css';

function SignUp(){
    return(
        <div className="signup-page">
            <AuthForm type="signup"/>
        </div>
    );
}

export default SignUp;