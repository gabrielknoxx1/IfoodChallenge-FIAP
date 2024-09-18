import Modal from "react-modal"
import closeImg from "../../assets/close.svg"

import { useState } from "react"
import { Container } from "./styles"

interface ReportModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function ReportModal({ isOpen, onRequestClose }: ReportModalProps) {
  const [selectedValue, setSelectedValue] = useState("")
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

      <Container>
        <h2>Selecione o relatório</h2>

        <select
          value={selectedValue}
          onChange={(event) => setSelectedValue(event.target.value)}
        >
          <option value="option1">Faturamento por distrito</option>
          <option value="option2">Lucro por pedido</option>
          <option value="option3">Estoque</option>
        </select>

        <button type="button">gerar</button>
      </Container>
    </Modal>
  )
}
