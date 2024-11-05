export interface LoginResponse {
  isLogged: boolean
  user: {
    value: {
      id: string
      email: string
      senha: string
      nome: string
      cpf: string
      naturalidade: string
      ufNascimento: string
      filiacao1: string
      filiacao2: string
      sexo: number
      estadoCivil: number
      raca: number
    }
  }
}
