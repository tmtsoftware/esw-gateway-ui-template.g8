import plugin from '@snowpack/web-test-runner-plugin'

process.env.NODE_ENV = 'test'
export default {
  plugins: [
    plugin()
  ]
}
