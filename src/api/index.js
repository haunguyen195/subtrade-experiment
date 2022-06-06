const axios = require('axios');

export const searchAccountPolkadot = async (account) => {
  const data = JSON.stringify({
    "key": account
    // "1REAJ1k691g5Eqqg9gL7vvZCBG7FCCZ8zgQkZWd4va5ESih"
  });
  
  const config = {
    method: 'post',
    // url: `https://${process.env.NETWORK_NAME}.api.subscan.io/api/v2/scan/search`,
    url: `https://westend.api.subscan.io/api/v2/scan/search`,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  return await axios(config)
}

export const getTokenCurrent = async () => {
  const config = {
    method: 'post',
    // url: `https://${process.env.NETWORK_NAME}.api.subscan.io/api/v2/scan/search`,
    url: `https://westend.api.subscan.io/api/scan/token`,
    headers: { 
      'Content-Type': 'application/json',
      'X-API-Key': '0xf096243dd9063dd80fc06af10a458865a2ec7e63e7534ff2d36213b44d905a63'
    }
  };
  
  return await axios(config)
}