import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { errorBoundary } from "hocs";

import MagazinePresenter from "./magazine.presenter";

const Magazine = () => {
  /**
   * >>> State
   * @tab : 선택된 탭명 (Default : 모두)
   * @posts : 매거진 리스트
   */
  const [activeTab, setActiveTab] = useState<string>("전체");
  const [posts, setPosts] = useState<{}[] | null>(null);
  // <<< State

  // 탭 클릭 시 상태 저장
  const onClickTab = useCallback(({ tab }) => setActiveTab(tab), []);

  // 더미데이타 셋팅
  useEffect(() => {
    const list = Array.from(Array(5)).map((val, i) => ({
      id: i,
      // NOTE 연결할 이미지가 없어, 하드코딩 해두었습니다.
      profile_img: "",
      thumbnail: "",
      writer: "빅씨스",
      title: "하체토닝 4화",
      sub_title: "혈액순환&부종개선 식습관, 음식",
      desc: "혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요. 특히 코어 부분에 집중",
    }));
    setPosts(list);
  }, []);

  // 상세페이지로 이동
  // 클릭 시 해당 post내용 전달 or 상세페이지 내부에서 별도의 api 호출
  const navigate = useNavigate();
  const onMoveDetail = useCallback(
    ({ post }) => navigate("magazine/detail", { state: post }),
    [navigate]
  );

  return (
    <MagazinePresenter
      posts={posts}
      activeTab={activeTab}
      onClickTab={onClickTab}
      onMoveDetail={onMoveDetail}
    />
  );
};

errorBoundary(Magazine);

export default Magazine;
