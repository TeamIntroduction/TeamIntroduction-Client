const methods = {

    generateRandomString: (num) => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        let result = '';
        for (let i = 0; i < num; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
      
        return result;
      }

}

export default {

    install (Vue) {
        Vue.prototype.$generateRandomString = methods.generateRandomString
    }
}