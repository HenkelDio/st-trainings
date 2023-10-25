import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Button, useDisclosure } from '@chakra-ui/react';
import 'rsuite-table/dist/css/rsuite-table.css';
import { workplaces } from '../../../mocks/workplaces';
import { DrawerWorkplace } from './DrawerWorkplace';
import { useState } from 'react';
import { IWorkplace } from '../../../types';


export function WorkplaceTable() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [workplaceData, setWorkplaceData] = useState<IWorkplace>();

  return (
    <>
      <Table
        height={400}
        width={1050}
        data={workplaces}
        onRowClick={(rowData: IWorkplace) => {
          setWorkplaceData(rowData);
        }}
      >
        <Column width={60} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={350}>
          <HeaderCell>Nome do estabelecimento</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={350}>
          <HeaderCell>CNPJ do estabelecimento</HeaderCell>
          <Cell dataKey="cnpj" />
        </Column>

        <Column width={350}>
          <HeaderCell>E-mail do contato</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={90} fixed="right">
          <HeaderCell>Ações</HeaderCell>

          <Cell style={{ padding: '6px' }}>
            <Button onClick={onOpen}>
              Editar
            </Button>
          </Cell>
        </Column>
      </Table>

      <DrawerWorkplace isOpen={isOpen} onClose={onClose} workplaceData={workplaceData}/>
    </>
  );
}