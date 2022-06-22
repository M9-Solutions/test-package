### Installation
npm i  
  
### Setup
Create a `.env` file in the root of the project.  
Create a env variable `ROPSTEN_URL` and assign your Ropsten RPC to it.
```e.i.: ROPSTEN_URL="https://link-to-your-ropsten-endpoint"```
If you are unsure of which Ropsten endpoint to use, try a Moralis speedynode endpoint: https://moralis.io/  
  
Create a `PRIVATE_KEY` variable and assign your wallet private key to it.
```e.i.: PRIVATE_KEY="12345678901abcdefg"```
  
Create a `TOKEN_ADDRESS` variable and assign the Token contract address to it.
```e.i.: TOKEN_ADDRESS="0x0123456789abcdefg"```

### Usage
npm run build  
npm run generate  
npm test  
  
### Updating ABI
Add the updated ABI to the `/abi` directory and run `npm run generate`  
  
### Publish
npm publish --access public