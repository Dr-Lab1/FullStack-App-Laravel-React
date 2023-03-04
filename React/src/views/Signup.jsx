import { Link } from "react-router-dom"

export default function Signup () {

    const onSubmit = (ev) => {
        ev.preventDefault()
    } 

    return (

        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit} action="">

                    <h1 className="title">
                        Créer un compte
                    </h1>

                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Nom complet"/>

                    <input type="password" placeholder="Mot de passe"/>
                    <input type="password" placeholder="Confirmer le mot de passe"/>
                    <button className="btn btn-block">Enregister le compte</button>

                    <p className="message">
                        Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
                    </p>
                </form>
            </div>
        </div>

    )

}