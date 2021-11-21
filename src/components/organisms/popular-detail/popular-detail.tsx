import { errorBoundary } from "hocs";
import { useCallback, useState } from "react";
import { useLocation } from "react-router";

import PopularDetailPresenter from "./popular-detail.presenter";

const PopularDetail = () => {
  // #인기에서 선택한 post 정보
  const { state } = useLocation();

  /**
   * >>> State
   * @tab : 선택된 탭명 (Default : 인기)
   */
  const [activeTab, setActiveTab] = useState<string>("인기");
  // <<< State

  // 탭 클릭 시 상태 저장
  const onClickTab = useCallback(({ tab }) => setActiveTab(tab), []);

  return (
    <PopularDetailPresenter
      post={state}
      activeTab={activeTab}
      onClickTab={onClickTab}
    />
  );
};

errorBoundary(PopularDetail);

export default PopularDetail;
