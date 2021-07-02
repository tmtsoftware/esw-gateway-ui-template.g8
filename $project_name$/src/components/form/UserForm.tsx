import { Button, Form, Input, Typography } from 'antd'
import React from 'react'
import { useLocationService } from '../contexts/LocationServiceContext'
import { greetUser, showError } from '../helpers/HttpUtils'
import { resolveBackendUrl } from '../helpers/resolveBackend'
import type { GreetResponse, UserInfoRequest } from '../models/Models'
import styles from './UserForm.module.css'

const UserForm = ({
  onSubmitHandler
}: {
  onSubmitHandler: (message: string) => void
}) => {
  const locationService = useLocationService()

  const onFinish = (values: UserInfoRequest) => {
    console.log('In here form')
    resolveBackendUrl(locationService)
      .then((loc) => {
        loc &&
          greetUser(loc.uri, values).then((response: GreetResponse) =>
            onSubmitHandler(response.msg)
          )
      })
      .catch((e) => {
        console.log('Error occurred')
        showError(
          `Failed to greet user: ${values.firstname} ${values.lastname}`,
          e
        )
      })
  }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }
  return (
    <>
      <Form
        {...layout}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className={styles.formBody}>
        <Form.Item className={styles.formHeader}>
          <Typography.Title level={4}>{'User Info:'}</Typography.Title>
        </Form.Item>
        <Form.Item
          label='FirstName'
          name='firstname'
          rules={[{ required: true, message: 'Please enter your firstname!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label='LastName'
          name='lastname'
          rules={[{ required: true, message: 'Please enter your lastname!' }]}>
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UserForm
