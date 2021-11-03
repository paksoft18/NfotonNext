// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

const withTM = require('next-transpile-modules')([
  '@project-serum/anchor',
  '@solana/wallet-adapter-base',
  '@solana/wallet-adapter-material-ui',
  '@solana/wallet-adapter-react',
  '@solana/wallet-adapter-bitpie',
  '@solana/wallet-adapter-blocto',
  '@solana/wallet-adapter-wallets',
  '@blocto/sdk'
])

const isProd = process.env.NODE_ENV === 'production'

module.exports = withTM({
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  }
})

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

module.exports = {
  rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/:path*',
        //destination: `${process.env.NEXT_PUBLIC_REACT_BASE_URI}/:path*`
        destination: `http://localhost:3001/:path*`
      },
      {
        source: '/',
        //destination: process.env.NEXT_PUBLIC_REACT_BASE_URI
        destination: `http://localhost:3001/`
      }
    ]
  }
}
