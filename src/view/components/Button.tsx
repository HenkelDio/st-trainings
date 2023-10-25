import { ComponentProps } from "react";

interface IProps  extends ComponentProps<'button'>{

}

export function Button(props: IProps) {
  return(
    <button
      {...props}
      className="bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed px-6 h-12 rounded-lg font-medium text-white transition-all active:bg-teal-900"
    >
  </button>
  )
}