import { useState } from "react"
import { Dashboard as Dash } from "../../components/Dashboard"
import { Header } from "../../components/Header"
import { NewTransactionModal } from "../../components/NewTransactionModal"

export const Dashboard = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <div>
      <Header onIsNewTransactionModal={handleOpenNewTransactionModal} />
      <Dash />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </div>
  )
}
