node scripts/2-deploy-drop.js

Successfully deployed bundleDrop module, address: 0xC25Cb9BBcC957F317dEEBC3E4Daa259fDC8A9374

✅ bundleDrop metadata: {
metadata: {
name: 'ChurchDAO Membership',
description: 'A DAO for members of the Metaverse Church.',
image: 'https://cloudflare-ipfs.com/ipfs/bafkreidxjmfom7gjlj6xpvgdo7uypcuayh2usobz6a6z735k5vkanallgi',
primary_sale_recipient_address: '0x0000000000000000000000000000000000000000',
uri: 'ipfs://bafkreicci4shmasgjkqawe6qopaxv6li23ydj2g6atxszc6kjfnnufkrwm'
},
address: '0xC25Cb9BBcC957F317dEEBC3E4Daa259fDC8A9374',
type: 11
}

node scripts/3-config-nft.js

Your app address is: 0x0BD4469EED37ae79434Ba5d2b31E5B6d8e17243f
✅ Successfully created a new NFT in the drop!

node scripts/4-set-claim-condition

Your app address is: 0x0BD4469EED37ae79434Ba5d2b31E5B6d8e17243f
✅ Sucessfully set claim condition!

https://testnets.opensea.io/assets/0xc25cb9bbcc957f317deebc3e4daa259fdc8a9374/0

node scripts/5-deploy-token.js

Your app address is: 0x0BD4469EED37ae79434Ba5d2b31E5B6d8e17243f
✅ Successfully deployed token module, address: 0x99785A0195deFe3405c6b03035d2f3b9d961d951

node scripts/6-print-money.js

Your app address is: 0x0BD4469EED37ae79434Ba5d2b31E5B6d8e17243f
✅ There now is 1000000.0 $CHURCH in circulation

ChurchDAO Governance Token Address: 0x99785a0195defe3405c6b03035d2f3b9d961d951

https://rinkeby.etherscan.io/token/0x99785a0195defe3405c6b03035d2f3b9d961d951

node scripts/7-airdrop-token.js

✅ Going to airdrop 6015 tokens to 0x454a8a75a02668df71293746e0AEFb137Adf235B
✅ Going to airdrop 8835 tokens to 0x46b2Cf252C96190f33F56bf77054B8b433D77603
🌈 Starting airdrop...
Your app address is: 0x0BD4469EED37ae79434Ba5d2b31E5B6d8e17243f
✅ Successfully airdropped tokens to all the holders of the NFT!

node scripts/8-deploy-vote.js

✅ Successfully deployed vote module, address: 0xe9Ed11dd0658018A1A750bE9BE5eFf232009b532

node scripts/9-setup-vote.js

Your app address is: 0x0BD4469EED37ae79434Ba5d2b31E5B6d8e17243f
Successfully gave vote module permissions to act on token module
✅ Successfully transferred tokens to vote module

voting contract with treasury funds
https://rinkeby.etherscan.io/address/0xe9ed11dd0658018a1a750be9be5eff232009b532

node scripts/10-create-vote-proposals.js
✅ Successfully created proposal to mint tokens
✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!

node scripts/11-revoke-roles.js

Your app address is: 0x0BD4469EED37ae79434Ba5d2b31E5B6d8e17243f
👀 Roles that exist right now: {
admin: [ '0x46b2Cf252C96190f33F56bf77054B8b433D77603' ],
minter: [
'0x46b2Cf252C96190f33F56bf77054B8b433D77603',
'0xe9Ed11dd0658018A1A750bE9BE5eFf232009b532'
],
pauser: [ '0x46b2Cf252C96190f33F56bf77054B8b433D77603' ],
transfer: [ '0x46b2Cf252C96190f33F56bf77054B8b433D77603' ]
}
🎉 Roles after revoking ourselves {
admin: [],
minter: [ '0xe9Ed11dd0658018A1A750bE9BE5eFf232009b532' ],
pauser: [],
transfer: []
}
✅ Successfully revoked our superpowers from the ERC-20 contract

tokenModule: 0x99785a0195defe3405c6b03035d2f3b9d961d951
voteModule: 0xe9Ed11dd0658018A1A750bE9BE5eFf232009b532
bundleDropModule: 0xC25Cb9BBcC957F317dEEBC3E4Daa259fDC8A9374
