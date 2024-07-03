module.exports = {
  content: [
      // Your own content paths
      './src/**/*.{js,jsx,ts,tsx}', // Example path for your own content
      'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  plugins: [
      require('flowbite/plugin')
  ]
}
