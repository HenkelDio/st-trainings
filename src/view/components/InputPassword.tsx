import { Button } from "@chakra-ui/react";
import { ComponentProps } from "react";
import { useState } from "react";

interface IProps extends ComponentProps<'input'> {
  name: string
}

export function InputPassword({ placeholder, name, id, ...props }: IProps) {
  const inputId = id ?? name;

  const { type } = props;

  const [show, setShow] = useState<boolean>();

  const handleClick = () => setShow(!show)

  return(
    <div className="relative">
      <input
      {...props}
      className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-grey-800 pt-4 placeholder-shown:bg-red-50 placeholder-shown:pt-0 peer focus:border-gray-800 transition-all outline-none"
      id={inputId}
      placeholder=" "
      type={show ? 'text' : 'password'}
      />

      <label htmlFor={inputId} className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base transition-all">
        {placeholder}
      </label>

      {type === 'password' &&
        <label htmlFor={inputId} className="absolute right-[13px] top-3">
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Esconder' : 'Mostrar'}
          </Button>
        </label>
      }

    </div>
  )
}