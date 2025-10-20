import { useAuthContext } from '../context/AuthContext'

export const Login = () => {

    const {saludo, token} = useAuthContext();
  return (
    <>
        <h3>Login</h3>
        <span>{saludo}</span>
        <p>Token: {token}</p>
    </>
  )
}
