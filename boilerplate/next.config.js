// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

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
        destination: `${process.env.NEXT_PUBLIC_REACT_BASE_URI}/:path*`
      },
      {
        source: '/',
        destination: process.env.NEXT_PUBLIC_REACT_BASE_URI
      }
    ]
  }
}
