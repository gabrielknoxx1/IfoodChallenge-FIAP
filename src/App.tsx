import Modal from "react-modal"
import { RouterProvider } from "react-router-dom"
import { TransactionsProvider } from "./hooks/useTransactions"
import { router } from "./services/routes"
import "./styles/global.css"

Modal.setAppElement("#root")
export function App() {
  return (
    <TransactionsProvider>
      <RouterProvider router={router} />
    </TransactionsProvider>
  )
}
