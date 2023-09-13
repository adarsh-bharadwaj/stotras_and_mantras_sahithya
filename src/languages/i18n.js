import i18next from "i18next";
import english from './English.json';
import kannada from './Kannada.json';
import { initReactI18next } from "react-i18next";

//i18next - config default options and resources
i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    resources: {
        en: english,
        kn:kannada
    },
    react: {
        useSuspense: false,
    },
});

export default i18next;