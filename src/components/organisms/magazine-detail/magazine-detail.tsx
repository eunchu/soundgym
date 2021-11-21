import { errorBoundary } from "hocs";

import MagazineDetailPresenter from "./magazine-detail.presenter";

const MagazinePresenter = () => {
  return <MagazineDetailPresenter />;
};

errorBoundary(MagazinePresenter);

export default MagazinePresenter;
