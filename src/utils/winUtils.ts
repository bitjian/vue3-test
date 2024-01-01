import axios from "axios";
window.utils = {
  refreshToken: () => {
    setTimeout(async () => {
      if (window.refreshFlag) {
        window.refreshFlag = false
        await Promise.all(window.taskList.map(async ({ config, resolve }) => {
          const newData =
            config.data instanceof Object ? JSON.parse(JSON.stringify(config.data)) : JSON.parse(config.data);
          // 重新设置请求token
          newData.token = '123456';
          config.data = newData;
          resolve(await axios(config));
        }))

      }
    }, 5000);
  }
}