import * as React from "react"
import * as ReactDOM from "react-dom"
import { Form } from "../../"

const { useRef, useMemo } = React
const formKey = "TestFromKey"
const App = () => {
  const formRef = useRef<React.ElementRef<typeof Form>>()

  const formItems = useMemo(() => {
    return [
      {
        key: "test",
        label: "测试",
        type: "input",
      },
    ]
  }, [])

  return <Form formItems={formItems} formKey={formKey} />
}

ReactDOM.render(<App />, document.getElementById("root"))
