import { useState } from "react"
import Printer from "../../assets/printer.svg"
import { useTransactions } from "../../hooks/useTransactions"
import { ReportModal } from "../ReportModal"
import { Container } from "./styles"

export function TransactionsTable() {
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false)
  const { transactions, activeFilters } = useTransactions()
  const refinedTransactions = transactions.filter(
    (transaction) =>
      transaction.type === activeFilters || activeFilters === "all"
  )
  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>
            Data
            <button type="button" onClick={() => setReportModalIsOpen(true)}>
              <img src={Printer} alt="icon" />
            </button>
          </th>
        </thead>

        <tbody>
          {refinedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReportModal
        isOpen={reportModalIsOpen}
        onRequestClose={() => setReportModalIsOpen(false)}
      />
    </Container>
  )
}
