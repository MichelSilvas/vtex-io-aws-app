export interface ClientData {
  tipo: string
  telefone: string
  timestamp: string
  nome: string
  id: string
  email: string
  update_timestamp: string
}

export interface AwsLeads {
  items: ClientData[]
}

const GetLeads = (): Promise<AwsLeads> => {
  const token = ''
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  return fetch(
    'https://z0c0di4bg2.execute-api.us-east-2.amazonaws.com/dev',
    options
  ).then(handleResponse)
}

async function handleResponse(response: Response): Promise<AwsLeads> {
  return response.text().then((text) => {
    const data = text && JSON.parse(text)

    if (!response.ok) {
      const error = data?.message || response.statusText

      return Promise.reject(error)
    }

    return data
  })
}

export default GetLeads
