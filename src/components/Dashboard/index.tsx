import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTable"
import "./styles.css"

export function Dashboard() {
  return (
    <div className="dashboardContainer">
      <Summary />
      <TransactionsTable />
    </div>
  )
}
