// export default function({ store, redirect, app: { $axios } }) {
//   // request拦截器
//   $axios.onRequest((config) => {})
//   $axios.onError((error) => {
//     console.log('axios请求错误')
//     console.log(error)
//   })
//   // response拦截器，数据返回后，你可以先在这里进行一个简单的判断
//   $axios.interceptors.response.use(
//     (response) => {
//       const { success, errcode } = response.data
//       if (typeof errcode !== 'undefined' && !success) {
//         if (response.config.url != '/auth/user')
//           console.log(response.data.errmsg)
//         if (errcode === 401) redirect('/auth/login')
//         return false
//       }
//       return response.data
//     },
//     (error) => {
//       console.log('网络连接失败，请检查网络状态和系统代理设置')
//     }
//   )
// }

// axios 允许跨域携带 cookie
// https://www.cnblogs.com/gerry2019/p/11158066.html
// https://www.jianshu.com/p/045c737466f9
// axios.defaults.withCredentials = true;
