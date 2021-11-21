import { errorBoundary } from "hocs";
import { useCallback, useState } from "react";

import CommunutyPagePresenter from "./community-page.presenter";

const CommunityPage = () => {
  /**
   * >>> State
   * @activeTab : 현재 활성화 된 탭
   */
  const [activeTab, setActiveTab] = useState<string>("추천");
  // <<< State

  // 탭 클릭 시 Active 탭 변경
  const onClickTab = useCallback(({ active }) => setActiveTab(active), []);

  return (
    <CommunutyPagePresenter activeTab={activeTab} onClickTab={onClickTab} />
  );
};

errorBoundary(CommunityPage);

export default CommunityPage;
