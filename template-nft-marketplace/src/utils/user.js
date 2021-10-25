import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import * as web3 from "@solana/web3.js";

const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

export async function getUserNFTs(publicKey) {
  if (!publicKey) throw new WalletNotConnectedError();
  const connection = new web3.Connection("https://api.mainnet-beta.solana.com");
  const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
    publicKey,
    {
      programId: TOKEN_PROGRAM_ID,
    }
  );

  const allTokens = [];

  await Promise.all(
    tokenAccounts.value.map(async (tokenAccount) => {
      const tokenAmount = tokenAccount.account.data.parsed.info.tokenAmount;

      if (tokenAmount.amount == "1" && tokenAmount.decimals == "0") {
        console.log("here");
        const [pda] = await web3.PublicKey.findProgramAddress(
          [
            Buffer.from("metadata"),
            TOKEN_METADATA_PROGRAM_ID.toBuffer(),
            new web3.PublicKey(
              tokenAccount.account.data.parsed.info.mint
            ).toBuffer(),
          ],
          TOKEN_METADATA_PROGRAM_ID
        );

        const accountInfo = await connection.getParsedAccountInfo(pda);
        allTokens.push(accountInfo);
      }
    })
  );

  return allTokens;
}
