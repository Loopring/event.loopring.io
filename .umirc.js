
// ref: https://umijs.org/config/
export default {
  history: 'hash',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: 'bisai',
      dll: true,
      pwa: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
}
