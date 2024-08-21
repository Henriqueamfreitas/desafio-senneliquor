import { ChamadoProvider } from "./contexts/ChamadoContext"
import { UserProvider } from "./contexts/UserContext"
import { RoutesMain } from "./routes/RoutesMain"

function App() {
  return (
    <>
      <UserProvider>
        <ChamadoProvider>
          <RoutesMain />
        </ChamadoProvider>
      </UserProvider>
    </>
  )
}

export default App