export function setInterceptors(instance) {
    instance.interceptors.request.use( (config) => {
            config.headers["Content-Type"] = "application/json; charset=utf-8";
            config.headers["Authorization"] = "Bearer " + localStorage.getItem("ACCESS_TOKEN");
            return config;
        },
        function (error) {
            console.log(error);
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            console.log(error);
            return Promise.reject(error);
        }
    );

    return instance;
}


