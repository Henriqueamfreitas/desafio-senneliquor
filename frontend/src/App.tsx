import { ChamadoProvider } from "./contexts/ChamadoContext"
import { HospitalProvider } from "./contexts/HospitalContext"
import { MedicoProvider } from "./contexts/MedicoContext"
import { UserProvider } from "./contexts/UserContext"
import { RoutesMain } from "./routes/RoutesMain"

function App() {
  return (
    <>
      <UserProvider>
        <ChamadoProvider>
          <HospitalProvider>
            <MedicoProvider>
              <RoutesMain />
            </MedicoProvider>
          </HospitalProvider>
        </ChamadoProvider>
      </UserProvider>
    </>
  )
}

export default App