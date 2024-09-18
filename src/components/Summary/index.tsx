import incomesImg from "../../assets/income.svg"
import outcomesImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions"
import { Container } from "./styles"

export function Summary() {
  const { transactions, setActiveFilters } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  )

  return (
    <Container>
      <div>
        <header onClick={() => setActiveFilters("deposit")}>
          <p className="income">Receitas</p>
          <img src={incomesImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header onClick={() => setActiveFilters("withdraw")}>
          <p className="outcome">Despesas</p>
          <img src={outcomesImg} alt="Saidas" />
        </header>
        <strong>
          {" "}
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlite-background">
        <header onClick={() => setActiveFilters("all")}>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}
