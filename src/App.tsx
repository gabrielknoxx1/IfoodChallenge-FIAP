import axios from "axios"
import { useEffect, useState } from "react"
import Modal from "react-modal"
import { TransactionsProvider } from "./hooks/useTransactions"
import { Login } from "./pages/Login"
import { GlobalStyle } from "./styles/global"

Modal.setAppElement("#root")
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  async function handleLogin() {
    try {
      const response = await axios.post(
        "http://localhost:8080/Fintech/auth/login",
        {
          usuario: "teste@teste.com",
          senha: "Teste@123",
        }
      )
      console.log("🚀 ~ handleLogin ~ response:", response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleLogin()
  }, [])

  return (
    <TransactionsProvider>
      {/* <Header onIsNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      /> */}

      <Login />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
