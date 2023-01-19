import router from "@/router";

const ACCESS_TOKEN = "ACCESS_TOKEN";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const EXPIRED_ACCESS_TOKEN_EXCEPTION = "TOKEN002";

export function setInterceptors(instance) {
    instance.interceptors.request.use( (config) => {
            config.headers["Content-Type"] = "application/json; charset=utf-8";
            config.headers["Authorization"] = "Bearer " + localStorage.getItem(ACCESS_TOKEN);
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
        async function (error) {
            const errCode = error.response.data.code;
            let errorAPI = error.config;

            if (EXPIRED_ACCESS_TOKEN_EXCEPTION == errCode) {
                localStorage.removeItem(ACCESS_TOKEN);
                await reissueToken(instance);
                return await instance(errorAPI);
            }
            router.push('/')
            return Promise.reject(error);
        }
    );

    return instance;
}

async function reissueToken(instance) {
    let res = await instance.post("/token/refresh-token", {
        refreshToken: localStorage.getItem(REFRESH_TOKEN)
    })
    let target = res.data.data
    localStorage.setItem(ACCESS_TOKEN, target.accessToken);
    localStorage.setItem(REFRESH_TOKEN, target.refreshToken);
}


