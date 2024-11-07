import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import "./styles.css"
export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await api.post("auth/login", {
        usuario: email,
        senha: password,
      })

      const token = JSON.stringify(response.data)
      localStorage.setItem("@Fintech:token", token)
      navigate("dashboard")
    } catch (error) {
      console.log(error)
    }
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
      <button id="register" onClick={() => navigate("register")}>
        Cadastre-se
      </button>
    </div>
  )
}
