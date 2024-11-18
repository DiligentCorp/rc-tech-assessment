import { Outlet, Navigate } from "react-router-dom";
import { Box } from '@mui/material';
import { AppBar } from "@/components/AppBar";
import { useSessionState } from "@/stores/SessionContext";

export function Layout(): JSX.Element {
  const { isAuthorized } = useSessionState();

  if (!isAuthorized) {

    return <Navigate to="/signup" replace />;
  }

  return (
    <Box>
      <AppBar />
      <main>
        <Box style={{ padding: '24px 48px 48px'}}>
          <Outlet />
        </Box>
      </main>
    </Box>
  )
}
