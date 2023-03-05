import { useRef } from "react"
import { Link } from "react-router-dom"
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/contextProvider"

export default function Signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const {setUser, setToken} = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = {
            name : nameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value, 
            password_confirmation : passwordConfirmationRef.current.value,
        }

        axiosClient.post('/signup', payload)
            .then(({data}) => {
                setUser(data.user)
                setToken(data.token)
            })

            .catch(err => {
                const response = err.response

                if (response && response.status === 422) {
                    console.log(response.data.errors )
                }
            })
    }

    return (

        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit} action="">

                    <h1 className="title">
                        Créer un compte
                    </h1>
                    <input ref={emailRef} type="text" placeholder="Nom complet" />
                    <input ref={nameRef} type="email" placeholder="Email" />

                    <input ref={passwordRef} type="password" placeholder="Mot de passe" />
                    <input ref={passwordConfirmationRef} type="password" placeholder="Confirmer le mot de passe" />
                    <button className="btn btn-block">Enregister le compte</button>

                    <p className="message">
                        Vous avez déjà un compte ? <Link to="/login">Se connecter</Link>
                    </p>
                </form>
            </div>
        </div>

    )

}