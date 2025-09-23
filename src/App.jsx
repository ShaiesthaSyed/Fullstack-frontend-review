import { BrowserRouter } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import TenantNavBar from "./tenant/TenantNavBar";
import OwnerNavBar from "./owner/OwnerNavBar";
import { AuthProvider, useAuth } from "./contextapi/AuthContext";

function AppContent() 
{
  const { isAdminLoggedIn, isTenantLoggedIn, isOwnerLoggedIn } = useAuth();

  return (
    <div>
      <BrowserRouter>
        {
        isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isTenantLoggedIn ? (
          <TenantNavBar />
        ) : isOwnerLoggedIn ? (
          <OwnerNavBar />
        ) : 
        (
          <MainNavBar />
        )}
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;