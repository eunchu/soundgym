import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { errorBoundary } from "hocs";

import PopularPresenter from "./popular.presenter";

const Popular = () => {
  /**
   * >>> State
   * @posts : 게시글 목록
   */
  const [posts, setPosts] = useState<object[]>([]);
  // <<< State

  // 게시글 더미데이타 셋팅
  useEffect(() => {
    const list = Array.from(Array(5)).map((val, i) => ({
      id: i,
      writer: "지연",
      tag: "#30일다이어트챌린지",
      // NOTE 연결할 이미지가 없어, 하드코딩 해두었습니다.
      thumbnail: "",
      profile_img: "",
      desc: "트레이너쌤이 알려주시는대로 플랭크 하니 엄청 땡기네요 혼자하면 불가능하지만 같이 하면 재밌게 할 수 있어요!",
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
      posts: Array.from(Array(10)).map((val, i) => ({
        id: i,
        // NOTE 연결할 이미지가 없어, 하드코딩 해두었습니다.
        thumbnail: "",
        imgs: [1, 2, 3],
        profile_img: "",
        name: "트레이너님",
        desc: "트레이너님이 설명해주신대로 열심히 했더니 트레이너님이 설명해주신대로 열심히 했더니 트레이너님이 설명해주신대로 열심히 했더니",
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
      })),
      isFollow: false,
      following_num: 1,
    }));
    setPosts(list);
  }, []);

  // 상세페이지로 이동
  // 클릭 시 해당 post내용 전달
  const navigate = useNavigate();
  const onMoveDetail = useCallback(
    ({ post }) => navigate("popular/detail", { state: post }),
    [navigate]
  );

  return <PopularPresenter posts={posts} onMoveDetail={onMoveDetail} />;
};

errorBoundary(Popular);

export default Popular;
