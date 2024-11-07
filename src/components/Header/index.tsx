import "./styles.css"

interface HeaderProps {
  onIsNewTransactionModal: () => void
}

export function Header({ onIsNewTransactionModal }: HeaderProps) {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <strong>FIAP Fintech</strong>
        <button type="button" onClick={onIsNewTransactionModal}>
          Nova transação
        </button>
      </div>
    </div>
  )
}
