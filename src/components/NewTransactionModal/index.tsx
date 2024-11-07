import { FormEvent, useState } from "react"
import Modal from "react-modal"
import closeImg from "../../assets/close.svg"

import { api } from "../../services/api"
import "./styles.css"

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState("")

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    const {
      user: {
        value: { id },
      },
    } = JSON.parse(localStorage.getItem("@Fintech:token") as string)

    try {
      await api.post("transaction", {
        descricao: description,
        valor: amount,
        tipo: Number(type),
        data:
          new Date().toISOString().replace("T", " ").substring(0, 19) + ".0",
        idUsuario: id,
      })

      onRequestClose()
    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <form className="modalContainer" onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="1">Entrada</option>
          <option value="2">Saída</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </Modal>
  )
}
