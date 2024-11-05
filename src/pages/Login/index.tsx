import { useState } from "react"
import { api } from "../../services/api"
import "./styles.css"
export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const response = api
      .post("auth/login", {
        usuario: "teste@teste.com",
        senha: "Teste@123",
      })
      .then((response) => {
        console.log("🚀 ~ handleSubmit ~ response.data:", response.data)
        localStorage.setItem("token", response.data.token)
        window.location.href = "/"
      })
      .catch((error) => {
        console.log("🚀 ~ handleSubmit ~ error.response.data:", error)
      })

    console.log("🚀 ~ handleSubmit ~ response:")
  }

  return (
    <div className="container">
      <div className="login-box">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" id="loginBtn">
            Acessar
          </button>
        </form>
      </div>
      <a href="pages/register.html" id="register">
        Cadastre-se
      </a>
    </div>
  )
}
