import {
  WalletDialogProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-material-ui'

const Connect = () => {
  return (
    <WalletDialogProvider>
      <WalletMultiButton
        style={{
          backgroundImage: 'linear-gradient(to-r, #54F2F2, #8FF7A7)',
          borderRadius: '25px',
          paddingLeft: '2rem',
          paddingRight: '2rem'
        }}
      />
    </WalletDialogProvider>
  )
}

export default Connect
