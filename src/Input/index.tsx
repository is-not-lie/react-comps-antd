import React, { ForwardRefRenderFunction, forwardRef } from 'react'
import { Input as AntdInput } from 'antd'
import type { InputProps } from 'antd/es/input'
import 'antd/lib/input/style/index.css'

const Input: ForwardRefRenderFunction<AntdInput, InputProps> = (props, ref) => {
  return <AntdInput {...props} ref={ref} />
}

export default forwardRef(Input)
