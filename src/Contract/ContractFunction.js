import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap'
import Web3 from 'web3'
import Config from '../config'

const ContractFunction = (props) => {
  const { name, inputs, outputs, stateMutability } = props

  const getFormName = (value) => (value ? value : '_value')

  const initialValues = inputs.reduce((prevValue, input) => {
    const name = getFormName(input.name)
    prevValue[name] = ''
    return prevValue
  }, {})

  const handleCallFunction = async (values) => {
    let ret = null
    try {
      setLoading(true)
      switch (stateMutability) {
        case 'view':
          console.log('name')
          ret = await callView(values)
          break
        default:
          ret = await callSend(values)
          break
      }
      setOutputValues(ret)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setOutputValues(e)
    }
  }

  const [outputValues, setOutputValues] = useState(null)
  const [loading, setLoading] = useState(false)
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues,
    onSubmit: handleCallFunction,
  })

  const getContract = () => {
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(
      Config.contract.abi,
      Config.contract.address,
    )
    return contract
  }

  const parseArguments = (values, valueTypes) => {
    const args = valueTypes.map(
      (valueType) => values[getFormName(valueType.name)],
    )
    return args
  }

  const callView = async (values) => {
    const contract = getContract()
    const args = parseArguments(values, inputs)
    const outputValues = await contract.methods[name](...args).call()
    return outputValues
  }

  const callSend = async (values) => {
    const contract = getContract()
    const args = parseArguments(values, inputs)
    const outputValues = await contract.methods[name](...args).send({
      from: window.ethereum.selectedAddress,
    })
    return outputValues
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>{name}</CardHeader>
        <CardBody>
          {inputs.map((input, index) => {
            const name = getFormName(input.name)
            return (
              <FormGroup key={index}>
                <Label>
                  {name} ({input.type})
                </Label>
                <Input
                  name={name}
                  placeholder={`${name} (${input.type})`}
                  value={values[name]}
                  onChange={handleChange}
                />
              </FormGroup>
            )
          })}
          <FormGroup>
            <Button type="submit" disabled={loading}>
              {loading && <FontAwesomeIcon icon={faSpinner} spin />}{' '}
              {stateMutability === 'view' ? 'Query' : 'Send'}
            </Button>
          </FormGroup>
          <FormGroup>
            <FormText className="text-muted">
              {outputs.map((output, index) => (
                <span className="mr-3" key={index}>
                  {output.name} <i>{output.type}</i>
                </span>
              ))}
            </FormText>
          </FormGroup>
          <FormGroup>{outputValues && JSON.stringify(outputValues)}</FormGroup>
        </CardBody>
      </Card>
    </Form>
  )
}

export default ContractFunction
