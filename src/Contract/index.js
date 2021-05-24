import React, { useEffect, useState } from 'react'
import {
  Button,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap'
import Web3Modal from 'web3modal'
import Config from '../config'
import ContractFunction from './ContractFunction'

const Contract = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [account, setAccount] = useState(null)
  const toggle = () => setIsOpen(!isOpen)

  const handleWalletConnect = async () => {
    const providerOptions = {}

    const web3Modal = new Web3Modal({
      providerOptions,
    })
    await web3Modal.connect()
  }

  useEffect(() => {
    ;(async () => {
      if (window.ethereum) {
        await handleWalletConnect()
        if (window.ethereum.selectedAddress) {
          setAccount(window.ethereum.selectedAddress)
        }
        window.ethereum.on('chainChanged', () => {
          window.location.reload()
        })
        window.ethereum.on('accountsChanged', () => {
          setAccount(window.ethereum.selectedAddress)
        })
        window.ethereum.on('connected', () => {
          setAccount(window.ethereum.selectedAddress)
        })
        window.ethereum.on('disconnected', () => {
          setAccount(window.ethereum.selectedAddress)
        })
      }
    })()
  }, [])

  const funcs = Config.contract.abi.filter((value) => value.type === 'function')

  return (
    <Container>
      <Navbar color="faded" light expand="md">
        <NavbarBrand className="mr-auto">Contract</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Button
              color="primary"
              disabled={!!account}
              onClick={handleWalletConnect}
            >
              {account ? `Connected - [${account}]` : 'Connect to wallet'}
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
      {funcs.map((funcType, index) => (
        <div className="mb-4" key={index}>
          <ContractFunction {...funcType} />
        </div>
      ))}
    </Container>
  )
}

export default Contract
