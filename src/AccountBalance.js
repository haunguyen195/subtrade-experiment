import React, { useState } from 'react'
import { searchAccountPolkadot } from './api'

const AccountBalance = () => {
  const [addressInput, setAddressInput] = useState('')
  const [account, setAccount] = useState(null)

  const handleGetBanlance = () => {
    try {
      const res = searchAccountPolkadot(addressInput)
      res.then(r => setAccount(r.data))
     
    } catch (error) {
      console.log(error)
    }
  }
  const onChange = e => {
    setAddressInput(e.target.value)
  }
  return (
    <div>
      <label for="network">Choose a network:</label>
      <select name="network" id="network">
        <option value="westend">westend testnet</option>
      </select>

      <h4>Search Acount</h4>
      <input value={addressInput} placeholder="block|account" onChange={onChange} />
      <button onClick={handleGetBanlance}>Click here</button>
      <div>Example: 5HW9x6vDgHKsyPRJDUTCEqSdor9XBdwj9ovY1nHQ2toCuP4d</div>
      {account?.data && (
        <div>
          <br/>
          <strong>Basic Info</strong>
          <br/>
          Account Index: {account.data.account.account_display.account_index}
          <br/>
          Nonce: {account.data.account.nonce}
          <br/>
          Role: {account.data.account.role}
          <br/><br/>
          <strong>Basic Info</strong>
          <br/>
          Balance: {account.data.account.balance}
          <br/>
          Reserved: {account.data.account.reserved}
          <br/>
          Locked: {account.data.account.balance_lock}
          <br/>
        </div>
      )}
    </div>
  )
}

export default AccountBalance