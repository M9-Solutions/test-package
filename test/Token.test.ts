import * as dotenv from "dotenv";
import chai, {expect} from "chai";
import chaiAsPromised from "chai-as-promised";
import { ethers, Wallet } from "ethers";

import { Token__factory } from "../src/index";

chai.use(chaiAsPromised);
chai.should();
dotenv.config();

describe("Token Tests", () => {
    const privateKey: string = process.env.PRIVATE_KEY as string;
    const contractAddress: string = process.env.TOKEN_ADDRESS as string;
    const RPC = process.env.ROPSTEN_URL;
    const provider = new ethers.providers.JsonRpcProvider(RPC);
    const signer = new Wallet(privateKey, provider);

    let token = Token__factory.connect(contractAddress, signer);
    const options = { gasPrice: provider.getGasPrice() };

    describe("Mint Function", () => {
        it("Should mint a token", async () => {
            let balance = (await token.balanceOf(signer.address)).toNumber();

            await token.whitelist(signer.address, balance+1, options);
            console.log("whitelisted");
            await token.mint(balance+1, options);

            let postBalance = (await token.balanceOf(signer.address)).toNumber();
            expect(postBalance).to.eq(balance+1);
        })
    })
})