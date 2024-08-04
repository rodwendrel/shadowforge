"use client";
import { IconPlus } from "@tabler/icons-react";
import { IconLink } from "@tabler/icons-react";
import Button from "../shared/Button";

const Dashboard = () => {
  return (
    <main>
      <div className="flex gap-5">
        <Button
          icon={<IconPlus size="20" />}
          variant="button-primary"
          action={() => window.alert("Alô")}
        >
          Criar
        </Button>
        <Button
          icon={<IconLink size="20" />}
          variant="button-secondary"
          action={() => window.alert("Alô")}
        >
          Entrar
        </Button>
      </div>
      <div>
        
      </div>
    </main>
  );
}

export default Dashboard;