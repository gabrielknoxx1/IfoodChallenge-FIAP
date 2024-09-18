import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { api } from "../services/api"

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">
type Filter = "all" | "deposit" | "withdraw"
interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
  activeFilters: Filter
  setActiveFilters: (filter: Filter) => void
}

interface TransactionsProps {
  children: ReactNode
}
const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [activeFilters, setActiveFilters] = useState<Filter>("all")

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        activeFilters,
        setActiveFilters,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
