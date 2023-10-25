import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Grid } from "@chakra-ui/react"
import { Input } from "../Input"
import { IWorkplace } from "../../../types"

interface IProps {
  isOpen: boolean,
  onClose: () => void,
  workplaceData: IWorkplace | undefined
}

export function DrawerWorkplace({ isOpen, onClose, workplaceData }: IProps) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Editar estabelecimento</DrawerHeader>

          <DrawerBody>
            <Grid gap={4}>
              <Input defaultValue={workplaceData?.name} name="name" placeholder="Nome do estabelecimento"/>
              <Input defaultValue={workplaceData?.cnpj} name="cnpj" placeholder="CNPJ do estabelecimento"/>
              <Input defaultValue={workplaceData?.contact} name="contact" placeholder="Nome do contato"/>
              <Input defaultValue={workplaceData?.email} name="email" placeholder="E-mail do estabelecimento"/>
              <Input defaultValue={workplaceData?.numberContact} name="phone" placeholder="Telefone do estabelecimento"/>
              <div className="px-3 h-[52px] flex items-center justify-center font-semibold">
                <p>{workplaceData?.employeesTotal} funcionários cadastrados</p>
              </div>
              <Button variant='outline' colorScheme='green'>Detalhes</Button>
            </Grid>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme='blue'>Salvar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}