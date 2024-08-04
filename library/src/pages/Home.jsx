import { useTranslation } from "react-i18next";

const Home = () => {

    const {t} = useTranslation();

    return <>{t("hello")} library</>
}
export default Home;