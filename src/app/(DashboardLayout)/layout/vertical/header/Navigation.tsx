import { useState } from "react";
import { Button} from "@mui/material";
import Link from "next/link";

const AppDD = () => {

  return (
    <>    
      <Button
        color="inherit"
        sx={{ color: (theme) => theme.palette.text.secondary }}
        variant="text"
        href="/apps/contacts"
        component={Link}
      >
        Clientes
      </Button>
      <Button
        color="inherit"
        sx={{ color: (theme) => theme.palette.text.secondary }}
        variant="text"
        href="/apps/calendar"
        component={Link}
      >
        Calendario
      </Button>
      <Button
        color="inherit"
        sx={{ color: (theme) => theme.palette.text.secondary }}
        variant="text"
        href="/apps/tickets"
        component={Link}
      >
        Disponibilidad
      </Button>
    </>
  );
};

export default AppDD;
