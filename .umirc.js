
// ref: https://umijs.org/config/
export default {
  history: 'hash',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      // dynamicImport: {
      //   webpackChunkName:true,
      //   level:2,
      // },
      title: '路印协议-首届交易交易排名赛',
      dll: true,
      pwa: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
}
