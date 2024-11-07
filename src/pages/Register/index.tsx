import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import "./styles.css"

export const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [nascimento, setNascimento] = useState("")
  const [naturalidade, setNaturalidade] = useState("")
  const [ufNascimento, setUfNascimento] = useState("")
  const [pai, setPai] = useState("")
  const [mae, setMae] = useState("")
  const [sexo, setSexo] = useState("")
  const [civil, setCivil] = useState("")
  const [raca, setRaca] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const formData = {
      email,
      senha,
      nome,
      cpf,
      nascimento,
      naturalidade,
      ufNascimento,
      pai,
      mae,
      sexo,
      civil,
      raca,
    }

    try {
      const response = await api.post("user/", {
        email: email,
        senha: senha,
        nome: nome,
        cpf: cpf,
        nascimento: nascimento,
        naturalidade: naturalidade,
        ufNascimento: ufNascimento,
        filiacao1: pai,
        filiacao2: mae,
        sexo: Number(sexo),
        estadoCivil: Number(civil),
        raca: Number(raca),
      })

      const { message } = response.data

      navigate("/")
      alert(message)
    } catch (error) {
      alert(`ERROR: ${error?.response?.data?.message as string}`)
    }
  }

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          name="cpf"
          id="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <label htmlFor="nascimento">Data de nascimento</label>
        <input
          type="date"
          name="nascimento"
          id="nascimento"
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
        />

        <label htmlFor="naturalidade">Naturalidade</label>
        <input
          type="text"
          name="naturalidade"
          id="naturalidade"
          value={naturalidade}
          onChange={(e) => setNaturalidade(e.target.value)}
        />

        <label htmlFor="ufNascimento">UF de nascimento</label>
        <input
          type="text"
          name="ufNascimento"
          id="ufNascimento"
          value={ufNascimento}
          onChange={(e) => setUfNascimento(e.target.value)}
        />

        <label htmlFor="filiacao1">Nome do pai</label>
        <input
          type="text"
          name="filiacao1"
          id="filiacao1"
          value={pai}
          onChange={(e) => setPai(e.target.value)}
        />

        <label htmlFor="filiacao2">Nome da mãe</label>
        <input
          type="text"
          name="filiacao2"
          defaultValue="Nome da mãe"
          value={mae}
          onChange={(e) => setMae(e.target.value)}
        />

        <label htmlFor="sexo">Sexo</label>
        <select
          name="sexo"
          id="sexo"
          defaultValue={1}
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        >
          <option value={1}>Masculino</option>
          <option value={2}>Feminino</option>
        </select>

        <label htmlFor="estadoCivil">Estado civil</label>
        <select
          name="estadoCivil"
          id="estadoCivil"
          defaultValue={1}
          value={civil}
          onChange={(e) => setCivil(e.target.value)}
        >
          <option value={1}>Solteiro(a)</option>
          <option value={2}>Casado(a)</option>
          <option value={3}>Divorciado(a)</option>
          <option value={4}>Viúvo(a)</option>
        </select>

        <label htmlFor="raca">Raça</label>
        <select
          name="raca"
          id="raca"
          defaultValue={1}
          value={raca}
          onChange={(e) => setRaca(e.target.value)}
        >
          <option value={1}>Branca</option>
          <option value={2}>Negra</option>
          <option value={3}>Amarela</option>
          <option value={4}>Indígena</option>
          <option value={5}>Parda</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}
