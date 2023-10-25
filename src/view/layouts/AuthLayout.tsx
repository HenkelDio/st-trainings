import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { InputPassword } from "../components/InputPassword";

export function AuthLayout() {
  return (
    <div className="flex justify-center items-center flex-col h-full md:w-[400px] sm:w-full mx-auto px-3">

      <div>
        <h1 className="text-2xl font-semibold">Entre com seu login</h1>
      </div>

      <form className="flex gap-4 flex-col mt-5 w-full">
        <Input
          placeholder="E-mail"
          name="email"
        />

        <InputPassword
          placeholder="Senha"
          name="password"
          type="password"
        />

        <Button>
          <Link to="/dashboard">
            Entrar
          </Link>
        </Button>
      </form>


    </div>
  )
}