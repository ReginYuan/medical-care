import { Base64 } from "js-base64";
// 公用的请求
const baseurl = "http://192.168.31.51";
// 获取token
function getToken(): string {
  const token = uni.getStorageSync("wxuser").user_token || "";
  const base64_token = Base64.encode(token + ":");
  return "Basic" + base64_token;
}

// 请求
function request(
  url: string,
  method: "GET" | "POST" | "PUT",
  data: string | object | ArrayBuffer
) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseurl + url,
      method,
      data,
      header: {
        Authorization: getToken()
      },
      success: (res: any) => {
        const status = res.data.code || res.status
        if (status == 200) {
          resolve(res)
        } else if (status === 401) {
          // 没有权限访问接口
          reject(res)
        } else if (status === 500) {
          // 服务器错误
          reject(res)
        }
      },
      fail: (err: any) => { }
    });
  });
}

export default request