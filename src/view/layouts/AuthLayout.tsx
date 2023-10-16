import ilustration from '../../assets/Login.png';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">

      <div className="w-1/2 h-full"></div>

      <div className="w-1/2 h-full p-8 flex justify-center items-center">
        <img
          src={ilustration}
          alt="ilustration"
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"
        />
        <div className="max-w-[656px] bg-white p-10 absolute bottom-8 rounded-b-[32px]">
          <p>Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!</p>
        </div>
      </div>

    </div>
  )
}