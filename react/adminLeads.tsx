import type { FC } from 'react'
import React, { useState, useEffect } from 'react'
import { PageBlock, Table } from 'vtex.styleguide'

import type { ClientData, AwsLeads } from './src/services/awsIntegration'
import GetLeads from './src/services/awsIntegration'

const tableProps = {
  properties: {
    column1: {
      title: 'Nome',
    },
    column2: {
      title: 'E-mail',
      width: 350,
    },
    column3: {
      title: 'Telefone',
      width: 350,
    },
    column4: {
      title: 'Data criação',
    },
  },
}

const AdminLeads: FC = () => {
  const [leads, setLeads] = useState<AwsLeads>()

  useEffect(() => {
    GetLeads().then((retorno) => setLeads(retorno))
  }, [])

  const lineActions = [
    {
      label: ({ nome }: ClientData) => `Action for ${nome}`,
      onClick: ({ nome }: ClientData) => alert(`Executed action for ${nome}`),
    },
    {
      label: ({ nome }: ClientData) => `DANGEROUS action for ${nome}`,
      isDangerous: true,
      onClick: ({ nome }: ClientData) =>
        alert(`Executed a DANGEROUS action for ${nome}`),
    },
  ]

  return (
    <PageBlock>
      <h1>Leads</h1>
      <div>
        <Table schema={tableProps} items={leads} lineActions={lineActions} />
      </div>
    </PageBlock>
  )
}

export default AdminLeads
