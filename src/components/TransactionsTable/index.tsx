import { useTransactions } from "../../hooks/useTransactions"
import "./styles.css"

export function TransactionsTable() {
  const { transactions, activeFilters } = useTransactions()
  const refinedTransactions = transactions?.filter(
    (transaction) => transaction.tipo && activeFilters === "all"
  )
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          {refinedTransactions?.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.descricao}</td>
              <td className={transaction.tipo === 1 ? "deposit" : "withraw"}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.valor)}
              </td>
              <td>{transaction.tipo === 1 ? "Entrada" : "Saída"}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.data)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
