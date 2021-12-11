import { errorBoundary } from "hocs";
import { useMemo } from "react";

import MainPagePresenter from "./main-page.presenter";

const MainPage = () => {
  const { storyList } = useMemo(() => {
    const storyList = Array.from(Array(10)).map((item, i) => ({
      id: i,
      title: "활용도 200%의 운동 어플리케이션",
      comment:
        "아침에 일어나서부터 틈틈이 회사에서, 그리고 잠자기전까지 명상부터 스트레칭, 요가, 달리기까지 다양한 카테고리의 운동을 무제한 이용가능하니까 활용도 200%예요. 돈이 아깝지 않아요!",
      name: "진이름",
      age: "20대",
      gender: "여",
      type: "1년+ 사운드짐러",
      profile_img: "",
    }));
    return { storyList };
  }, []);

  return <MainPagePresenter storyList={storyList} />;
};

errorBoundary(MainPage);

export default MainPage;
