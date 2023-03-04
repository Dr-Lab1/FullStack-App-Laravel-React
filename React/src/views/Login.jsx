import { Link } from "react-router-dom"

export default function Login () {

    const onSubmit = (ev) => {
          ev.preventDefault()
    }

    return (

        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit} action="">

                    <h1 className="title">
                        Se connecter à votre compte
                    </h1>
                    
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button className="btn btn-block">Se connecter</button>

                    <p className="message">
                        Vous n'avez pas de compte ? <Link to="/signup" >Créer un compte</Link>
                    </p>
                </form>
            </div>
        </div>

    )

}