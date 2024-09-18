import { createServer, Model } from "miragejs"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App.tsx"

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "X-Bacon",
          type: "deposit",
          category: "Pedidos",
          amount: 35.0,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "X-Salada Bacon",
          type: "deposit",
          category: "Pedidos",
          amount: 50,
          createdAt: new Date("2021-02-12 15:00:00"),
        },
        {
          id: 3,
          title: "Materias primas",
          type: "withdraw",
          category: "Estoque",
          amount: 500,
          createdAt: new Date("2021-02-12 15:00:00"),
        },
      ],
    })
  },

  routes() {
    this.namespace = "api"

    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data)
    })
  },
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
