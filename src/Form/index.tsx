import React, {ForwardRefRenderFunction, useImperativeHandle, forwardRef, useMemo, useCallback, useEffect} from "react"
import { Form as AntdForm } from "antd"
import useForm from "antd/es/form/hooks/useForm"
import type { FormInstance, FormProps, FormItemProps } from 'antd/es/form'
import Input from '../Input'
import { InputProps } from 'antd/es/input'
import 'antd/lib/form/style/index.css'

type FormItemType = 'input' | 'select' | 'textarea' | 'radio' | 'checkbox' | 'inputNumber' | 'password' | 'date' | 'range'

interface IFormItem {
  key: string
  label: string
  type: FormItemType
  descript?: FormItemProps
  configs?: InputProps
}

interface IFormProps extends FormProps {
  formItems: IFormItem[]
  formKey?: string
}

interface IFormRef {
  getInstance: () => FormInstance
}

const { Item } = AntdForm
const formInstanceMap: { [key: string]: FormInstance } = {}

const Form: ForwardRefRenderFunction<IFormRef, IFormProps> = (props, ref) => {
  const { formItems, formKey } = props
  const [form] = useForm()

  const getInstance = useCallback(() => form, [form])
  useImperativeHandle(ref, () => ({ getInstance }), [getInstance])

  const FormItemComps = useMemo(() => {
    const items = formItems.map(formItem => {
      const { key, label, type, configs = {}, descript = {} } = formItem
      switch(type) {
        case 'input':
          return <Item key={key} label={label} {...descript}><Input {...configs}/></Item>
        case 'inputNumber':
          return
        case 'password':
          return
        case 'radio':
          return
        case 'range':
          return
        case 'select':
          return
        case 'textarea':
          return
        case 'date':
          return
        case 'checkbox':
          return
        default:
          return
      }
    })
    return items
  }, [formItems])

  useEffect(() => {
    if (formKey) formInstanceMap[formKey] = form
  }, [formKey])

  return <AntdForm form={form} {...props}>{FormItemComps}</AntdForm>
}

export default forwardRef(Form)
