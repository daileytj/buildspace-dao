import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

// This is our governance contract.
const voteModule = sdk.getVoteModule(
  "0xe9Ed11dd0658018A1A750bE9BE5eFf232009b532", //voting module address
);

// This is our ERC-20 contract.
const tokenModule = sdk.getTokenModule(
  "0x99785a0195defe3405c6b03035d2f3b9d961d951", //token module address
);

(async () => {
  try {
    // Give our treasury the power to mint additional token if needed.
    await tokenModule.grantRole("minter", voteModule.address);

    console.log(
      "Successfully gave vote module permissions to act on token module"
    );
  } catch (error) {
    console.error(
      "failed to grant vote module permissions on token module",
      error
    );
    process.exit(1);
  }

  try {
    // Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
    const ownedTokenBalance = await tokenModule.balanceOf(
      process.env.WALLET_ADDRESS
    );

    // Grab 90% of the supply that we hold.
    const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
    const percent90 = ownedAmount.div(100).mul(90);

    // Transfer 90% of the supply to our voting contract.
    await tokenModule.transfer(
      voteModule.address,
      percent90
    );

    console.log("✅ Successfully transferred tokens to vote module");
  } catch (err) {
    console.error("failed to transfer tokens to vote module", err);
  }
})();
