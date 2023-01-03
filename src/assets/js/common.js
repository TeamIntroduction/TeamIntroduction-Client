
const methods = {

    generateRandomString: (num) => {
        //ABCDEFGHIJKLMNOPQRSTUVWXYZ
        const characters ='abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        let result = '';
        for (let i = 0; i < num; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        return result;
    },
    encryptAES: (data) => {

        let key = localStorage.getItem("SK");
        const cipher = CryptoJs.AES.encrypt(data, CryptoJs.enc.Utf8.parse(key), {
            iv: CryptoJs.enc.Utf8.parse(key.slice(0,16)),
            padding: CryptoJs.pad.Pkcs7,
            mode: CryptoJs.mode.CBC
        });

        return cipher.toString()
    }

}
import CryptoJs from 'crypto-js';
export default {
    
    install (Vue) {
        Vue.prototype.$generateRandomString = methods.generateRandomString;
        Vue.prototype.$encryptAES = methods.encryptAES;
    }
}