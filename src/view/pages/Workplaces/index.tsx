import { WorkplaceTable } from "../../components/workplaces/WorkplaceTable";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function Workplaces() {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-semibold">Estabelecimentos</h1>
        <div className="flex gap-5">
          <Input name="cnpj" placeholder="Pesquise por CNPJ" />
          <Link to="/workplaces/create">
            <Button>
              Criar novo estabelecimento
            </Button>
          </Link>
        </div>
      </div>

      <WorkplaceTable />

    </>




  )
}