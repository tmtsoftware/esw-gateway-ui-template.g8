import { message } from 'antd'
import type { GreetResponse } from '../models/Models'

const getPath = (basePath: string) => basePath + 'sayHello'

const handleRes = <T>(res: Response, reader: (res: Response) => T) => {
  if (!res.ok) throw Error(res.statusText)
  return reader(res)
}

export const greetUser = (
  baseUri: string,
  body: { firstname: string; lastname: string }
): Promise<GreetResponse> => {
  const url = getPath(baseUri)
  const headers = { 'Content-Type': 'application/json' }

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ _type: 'UserInfo', ...body }),
    headers
  }).then((res) => handleRes(res, (res) => res.json()))
}

export const showError = (prefixMsg: string, error: Error): void => {
  const err = `${prefixMsg}, reason: ${error.message}`
  console.error(err)
  message.error(err)
}
