import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { errorBoundary } from "hocs";

import RecommendPresenter from "./recommend.presenter";

const Recommend = () => {
  /**
   * >>> State
   * @tagList : tag 목록
   * @posts : 게시글 목록
   * @followList : 팔로우 목록
   */
  const [tags, setTags] = useState<string[]>([]);
  const [posts, setPosts] = useState<object[]>([]);
  const [followList, setFollowList] = useState<object[]>([]);
  // <<< State

  // tag 목록 더미데이타 셋팅
  useEffect(() => {
    const tags = [
      "#하루하루샐러드",
      "#원푸드",
      "#하루하루샐러드",
      "#원푸드",
      "#하루하루샐러드",
      "#원푸드",
      "#하루하루샐러드",
      "#원푸드",
      "#하루하루샐러드",
      "#원푸드",
    ];
    setTags(tags);
  }, []);
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
        imgs: [1, 2, 3],
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
  // Follow 목록 더미데이타 셋팅
  useEffect(() => {
    const list = Array.from(Array(12)).map((val, i) => ({
      img: "",
      name: `고도희${i}`,
      desc: "체력 및 몸매관리 근황",
      isFollow: i === 4 ? true : false,
    }));
    setFollowList(list);
  }, []);

  // 상세페이지로 이동
  // 클릭 시 해당 post내용 전달
  const navigate = useNavigate();
  const onMoveDetail = useCallback(
    ({ post }) => navigate("recommend/detail", { state: post }),
    [navigate]
  );

  return (
    <RecommendPresenter
      tags={tags}
      posts={posts}
      followList={followList}
      onMoveDetail={onMoveDetail}
    />
  );
};

errorBoundary(Recommend);

export default Recommend;
