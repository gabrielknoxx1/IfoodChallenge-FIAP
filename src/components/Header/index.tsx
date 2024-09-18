import logoImg from "../../assets/ifood.svg"
import { Container, Content } from "./styles"

interface HeaderProps {
  onIsNewTransactionModal: () => void
}

export function Header({ onIsNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onIsNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
