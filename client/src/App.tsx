import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUsers from "./pages/ListUsers";
import AddEditUser from "./pages/AddEditUser";
import ViewUser from "./pages/ViewUser";
import { SnackbarProvider } from "notistack";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ListUsers />} />
            <Route path="/add" element={<AddEditUser />} />
            <Route path="/edit/:id" element={<AddEditUser />} />
            <Route path="/view/:id" element={<ViewUser />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;

