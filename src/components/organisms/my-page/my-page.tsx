import { useCallback, useEffect, useState } from "react";

import { errorBoundary } from "hocs";

import MypagePresenter from "./my-page.presenter";

const Mypage = () => {
  /**
   * >>> State
   * @posts : 게시글 목록
   * @activeTab : 활성화 된 탭명
   */
  const [posts, setPosts] = useState<object[]>([]);
  const [activeTab, setActiveTab] = useState<string>("피드");
  // <<< State

  // 게시글 더미데이타 셋팅
  useEffect(() => {
    const list = [
      {
        id: 1,
        writer: "유현",
        creDate: "2021.10.10 오전 07:41",
        isFollow: false,
        tags: ["#하루한번샐러드"],
        desc: `트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을 트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요`,
        imgs: [1],
        favorite: 12,
        comment: [
          {
            user: "혜정",
            creDate: "2021.10.10 오전 07:41",
            profile_img: "",
            comment:
              "트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요 혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을. 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을.",
          },
          {
            user: "혜정",
            creDate: "2021.10.10 오전 07:41",
            profile_img: "",
            comment:
              "트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요 혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을. 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을.",
          },
          {
            user: "혜정",
            creDate: "2021.10.10 오전 07:41",
            profile_img: "",
            comment:
              "트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요 혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을. 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을.",
          },
          {
            user: "유현",
            creDate: "2021.10.10 오전 07:41",
            profile_img: "",
            comment:
              "트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요 혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을. 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을.",
          },
          {
            user: "혜정",
            creDate: "2021.10.10 오전 07:41",
            profile_img: "",
            comment:
              "트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요 혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을. 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을.",
          },
        ],
        link: {
          title: "상쾌한 아침을 맞이하는 스트레칭 - 화요일",
          name: "박지훈",
          runTime: "22분",
          level: "중강도",
          type: "VOD",
          rating: 4,
          // NOTE 연결할 이미지가 없어, 하드코딩 해두었습니다.
          thumbnail: "",
        },
      },
      {
        id: 2,
        writer: "유현",
        creDate: "2021.10.10 오전 07:41",
        isFollow: true,
        tags: [],
        desc: `트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요 혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을. 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을.`,
        imgs: [1, 2, 3, 4],
        favorite: 12,
        comment: 2,
        link: null,
      },
      {
        id: 3,
        writer: "유현",
        creDate: "2021.10.10 오전 07:41",
        isFollow: false,
        tags: ["#하루한번샐러드"],
        desc: `트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을 트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요`,
        imgs: [1],
        favorite: 12,
        comment: [
          {
            user: "혜정",
            creDate: "2021.10.10 오전 07:41",
            profile_img: "",
            comment:
              "트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요 혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을. 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을.",
          },
          {
            user: "혜정",
            creDate: "2021.10.10 오전 07:41",
            profile_img: "",
            comment:
              "트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요 혼자하면 불가능하지만 같이 하니까 꾸준히 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을. 할수있는 것 같아요. 특히 코어 부분에 집중을 하면서, 호흡을.",
          },
        ],
        link: {
          title: "상쾌한 아침을 맞이하는 스트레칭 - 화요일",
          name: "박지훈",
          runTime: "22분",
          level: "중강도",
          type: "VOD",
          rating: 4,
          // NOTE 연결할 이미지가 없어, 하드코딩 해두었습니다.
          thumbnail: "",
        },
      },
    ];
    setPosts(list);
  }, []);

  // 탭 클릭 시 활성화
  const onClickTab = useCallback(({ tab }) => setActiveTab(tab), []);

  return (
    <MypagePresenter
      posts={posts}
      activeTab={activeTab}
      onClickTab={onClickTab}
    />
  );
};

errorBoundary(Mypage);

export default Mypage;
