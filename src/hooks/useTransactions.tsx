import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { api } from "../services/api"

interface Transaction {
  id: string
  descricao: string
  data: number
  idUsuario: string
  tipo: number
  valor: number
}

type Filter = "all" | "deposit" | "withdraw"
interface TransactionsContextData {
  transactions: Transaction[]
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
  const {
    user: {
      value: { id },
    },
  } = JSON.parse(localStorage.getItem("@Fintech:token") as string)

  useEffect(() => {
    api
      .get(`transactions/${id}`)
      .then((response) => setTransactions(response.data))
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
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
