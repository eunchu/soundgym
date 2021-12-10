import { errorBoundary } from "hocs";

import MainPagePresenter from "./main-page.presenter";

const MainPage = () => {
  return <MainPagePresenter />;
};

errorBoundary(MainPage);

export default MainPage;
