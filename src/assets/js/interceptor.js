import router from "@/router";

const ACCESS_TOKEN = "ACCESS_TOKEN";

export function setInterceptors(instance) {
    instance.interceptors.request.use( (config) => {
            config.headers["Content-Type"] = "application/json; charset=utf-8";
            config.headers["Authorization"] = "Bearer " + localStorage.getItem("ACCESS_TOKEN");
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            let state = error.response.status;
            if (state) {
                switch (state) {
                  case 401:
                    localStorage.removeItem(ACCESS_TOKEN);
                    router.push('/')
                    break;
                  default:
                    return Promise.reject(error);
                }
              }
            return Promise.reject(error);
        }
    );

    return instance;
}


