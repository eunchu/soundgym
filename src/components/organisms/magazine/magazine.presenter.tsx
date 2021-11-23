import styled from "styled-components";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/effect-fade/effect-fade.scss";

import { mediaQueries } from "assets/styles/media";

import ImgProfile from "assets/images/img-profile.png";
import IconBookmark from "assets/images/ic-bookmark.png";
import ImgMagazine from "assets/images/img-magazine.png";
import IconArrowPrev from "assets/images/ic-arrow-prev.svg";
import IconArrowPrevGray from "assets/images/ic-arrow-prev-gray.svg";
import IconArrowNext from "assets/images/ic-arrow-right.svg";

import { Default, Mobile } from "utils";
import { useState } from "react";

// Swiper modules
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

/**
 * Style >>>
 */
const Container = styled.div`
  padding: 24px 0 60px 0;
`;
const TabArea = styled.section`
  position: relative;

  display: flex;
  align-items: center;

  margin-bottom: 24px;
  div.inner {
    ${mediaQueries("mobile")`
      width: 100%;
      padding-left: 16px;
      padding-right: 78px;
    `};
  }
  .swiper-button-prev-custom {
    margin-right: 10px;
    cursor: pointer;
    ${mediaQueries("mobile")`
      position: absolute;
      top: 4px;
      right: 34px;
    `};
  }
  .swiper-button-next-custom {
    margin-right: 10px;
    cursor: pointer;
    ${mediaQueries("mobile")`
      position: absolute;
      top: 4px;
      right: 0;
    `};
  }
`;
interface TabProps {
  active: boolean;
}
const Tab = styled.div<TabProps>`
  font-family: "neo-bold";
  font-size: 12px;
  line-height: 18px;
  color: ${(props) => (props.active ? "#606872" : "#C5C8CE")};

  background-color: ${(props) => (props.active ? "#EEEEEE" : "translate")};
  border-radius: 4px;

  padding: 8px 22px;
  margin-right: 10px;

  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
const Card = styled.section`
  border-radius: 8px;
  background-color: #ffffff;

  margin-bottom: 20px;
  padding: 24px;
  &:last-child {
    margin-bottom: 0;
  }
  ${mediaQueries("mobile")`
    padding: 20px 16px;
  `};
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 16px;
  div.user {
    font-family: "neo-bold";
    font-size: 12px;
    line-height: 18px;
    color: #38323c;
    img {
      width: 36px;
      height: 36px;

      margin-right: 10px;
    }
  }
  img.book-mark {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
const Thumnail = styled.div`
  width: 100%;

  border-radius: 8px;
  overflow: hidden;

  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;
const TextContainer = styled.div`
  div.title {
    font-family: "neo-bold";
    line-height: 22px;
    color: #3d84fb;
    span {
      color: #38323c;
      margin-left: 8px;
    }
  }
  p {
    line-height: 22px;
    color: #38323c;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;
// <<< Style

interface MagazineProps {
  posts: {}[] | null;
  activeTab: string;
  onClickTab: ({ tab }: { tab: string }) => void;
  onMoveDetail: ({ post }: { post: object }) => void;
}
const Magazine = ({
  posts,
  activeTab,
  onClickTab,
  onMoveDetail,
}: MagazineProps) => {
  // swiper left arrow 색 변경을 위한 slide index 상태
  const [tagSlideNumber, setTagSlideNumber] = useState<number>(0);

  // 탭 메뉴
  const tabMenu = ["전체", "동기부여", "식단", "운동", "정보"];

  return (
    <Container>
      {/* 상단 Tab UI */}
      {/* 데스크탑 UI */}
      <Default>
        <TabArea>
          {tabMenu.map((menu) => (
            <Tab
              key={menu}
              active={activeTab === menu}
              onClick={() => onClickTab({ tab: menu })}
            >
              {menu}
            </Tab>
          ))}
        </TabArea>
      </Default>
      {/* 모바일 UI */}
      <Mobile>
        <TabArea className="magazine-swiper">
          <div className="inner">
            <Swiper
              slidesPerView="auto"
              // 화살표 클릭 시 넘길 slide수 입니다
              slidesPerGroup={1}
              spaceBetween={10}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              onActiveIndexChange={(swiper) =>
                setTagSlideNumber(swiper.activeIndex)
              }
            >
              {tabMenu.map((menu) => (
                <SwiperSlide key={menu}>
                  <Tab
                    active={activeTab === menu}
                    onClick={() => onClickTab({ tab: menu })}
                  >
                    {menu}
                  </Tab>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="swiper-button-prev-custom">
            {tagSlideNumber === 0 ? (
              <img src={IconArrowPrevGray} alt="" />
            ) : (
              <img src={IconArrowPrev} alt="" />
            )}
          </div>
          <div className="swiper-button-next-custom">
            <img src={IconArrowNext} alt="" />
          </div>
        </TabArea>
      </Mobile>
      {/* 매거진 Card UI */}
      {posts?.map((post: any) => (
        // 매거진 게시글 api 내부에 게시글상세도 포함될 경우 post정보 넘겨서 사용해주세요
        <Card key={post.id} onClick={() => onMoveDetail({ post })}>
          <CardHeader>
            <div className="user">
              {/* api 연결 시 사용해주세요 */}
              {/* <img src={post.profile_img} alt="" /> */}
              <img src={ImgProfile} alt="" />
              {post.writer}
            </div>
            <img src={IconBookmark} alt="" className="book-mark" />
          </CardHeader>
          <Thumnail>
            {/* api 연결 시 사용해주세요 */}
            {/* <img src={post.thumbnail} alt="" /> */}
            <img src={ImgMagazine} alt="" />
          </Thumnail>
          <TextContainer>
            <div className="title">
              {post.title}
              <span>{post.sub_title}</span>
            </div>
            <p>{post.desc}</p>
          </TextContainer>
        </Card>
      ))}
    </Container>
  );
};

export default Magazine;
