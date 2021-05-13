// import Backend from 'i18next-http-backend';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lng/message_en.json';

const resources = {
    en: {
        translation: en
    }
};

i18n
    // 將 i18next 傳入 react-i18next 裡面
    .use(initReactI18next)
    // 實例化 initReactI18next
    .init({
        resources,
        // 當目前的語言檔找不到對應的字詞時，會用 fallbackLng (en) 作為預設語言
        fallbackLng: 'en',
        // 預設語言
        lng: 'en',
        interpolation: {
            // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
            escapeValue: false
        },
        react: {
            useSuspense: false,
            wait: false
        }
    });

export default i18n;
