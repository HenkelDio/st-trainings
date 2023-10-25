import { Icon } from "@chakra-ui/react";
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";

interface IProps {
  path: string
}

export function BackButton({ path }: IProps) {
  return(
    <Link to={path}>
      <div className="flex items-center hover:underline cursor-pointer">
        <Icon as={IoIosArrowBack} />
        <p>Voltar</p>
      </div>
    </Link>
  )
}