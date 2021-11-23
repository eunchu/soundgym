import { Fragment, useMemo, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Menu, Dropdown } from "antd";

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
import ImgPost from "assets/images/img-post.png";
import IconFavorite from "assets/images/ic-favorite.png";
import IconComment from "assets/images/ic-comment.png";
import IconBookmark from "assets/images/ic-bookmark.png";
import IconShare from "assets/images/ic-share.png";
import ImgThumbnail from "assets/images/img-post-thumbnail.png";
import IconStarOn from "assets/images/ic-star-on.png";
import IconStarOff from "assets/images/ic-star-off.png";
import ImgFollowProfile from "assets/images/img-follow-profile.png";
import IconArrowPrev from "assets/images/ic-arrow-prev.svg";
import IconArrowPrevGray from "assets/images/ic-arrow-prev-gray.svg";
import IconArrowNext from "assets/images/ic-arrow-right.svg";

import { FollowButton } from "components/atoms/buttons";
import { openPopup } from "components/molecules/popup/popup";

import { Default } from "utils";

// Swiper modules
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

/**
 * Style >>>
 */
const Container = styled.div``;
const TagArea = styled.section`
  position: relative;

  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;

  div.inner {
    padding-right: 10px;
    ${mediaQueries("mobile")`
      width: 100%;
      padding-left: 16px;
      padding-right: 78px;
    `};
  }
  .swiper-button-prev-custom2 {
    margin-right: 10px;
    cursor: pointer;
    ${mediaQueries("mobile")`
      position: absolute;
      top: 28px;
      right: 34px;
    `};
  }
  .swiper-button-next-custom2 {
    margin-right: 10px;
    cursor: pointer;
    ${mediaQueries("mobile")`
      position: absolute;
      top: 28px;
      right: 0;
    `};
  }
`;
const Tag = styled.div`
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  line-height: 18px;
  color: #606872;

  border: 1px solid #c5c8ce;
  border-radius: 32px;

  padding: 0 12px;
  margin-right: 10px;
`;
const Card = styled.section`
  width: 100%;

  background-color: #ffffff;
  border-radius: 8px;

  padding: 24px 24px 0 24px;
  margin-bottom: 60px;

  ${mediaQueries("mobile")`
    padding: 24px 16px 0 16px;
  `};
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
  .header {
    display: flex;
    align-items: center;
    img {
      width: 36px;
      height: 36px;
      margin-right: 10px;
    }
    .user {
      display: flex;
      flex-direction: column;
      .user-name {
        font-family: "neo-bold";
        font-size: 12px;
        color: #38323c;
      }
      .user-date {
        font-family: "neo-regular";
        font-size: 10px;
        line-height: 12px;
        color: #a5aab4;
      }
    }
  }
`;
const CardContents = styled.div`
  display: flex;
  flex-direction: column;
`;
const PostTagArea = styled.div`
  display: flex;
  align-items: center;
`;
const PostTag = styled.span`
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #d8e6fe;
  border-radius: 32px;

  color: #3d84fb;
  font-size: 12px;
  line-height: 18px;

  padding: 0 16px;
  margin-bottom: 16px;
`;
const TextArea = styled.textarea`
  width: 100%;

  border: none;
  resize: none;

  font-family: "neo-regular";
  font-size: 14px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #38323c;

  cursor: pointer;
`;
const MoreBtn = styled.div`
  color: #3d84fb;
  cursor: pointer;
`;
interface ImgAreaProps {
  num: number;
  responsiveWidth: string;
}
const ImgArea = styled.div<ImgAreaProps>`
  position: relative;

  width: 100%;
  padding-right: ${(props) =>
    props.num >= 3
      ? "20px"
      : props.num === 2
      ? "10px"
      : props.num === 1
      ? "none"
      : "none"};

  display: flex;
  align-items: center;

  margin-top: 20px;
  .cover {
    position: absolute;
    top: 0;
    right: 0;

    width: calc(33.3% - 6px);
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "neo-bold";
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;

    background-color: rgba(56, 50, 60, 0.9);
    border-radius: 8px;
    cursor: pointer;
  }
  .img {
    width: ${(props) =>
      props.num >= 3
        ? "33.3%"
        : props.num === 2
        ? "50%"
        : props.responsiveWidth};
    border-radius: 8px;
    margin-right: 10px;

    cursor: pointer;

    &:nth-child(3) {
      margin-right: 0;
    }
  }
`;
const ConnectLink = styled.div`
  width: 328px;
  height: 88px;

  display: flex;

  background-color: #f1f4f6;
  border-radius: 8px;

  margin-top: 16px;
  ${mediaQueries("mobile")`
    width: 100%;
  `};

  .thumbnail {
    height: 88px;

    img {
      height: 100%;

      border-radius: 8px 0px 0px 8px;
    }
  }
  .text {
    padding: 16px 14px;
    .title {
      font-family: "neo-bold";
      font-size: 12px;
      line-height: 18px;
      color: #38323c;
    }
    ul.desc {
      display: flex;
      align-items: center;

      font-size: 12px;
      line-height: 18px;
      color: #a5aab4;

      margin-top: 2px;
      li {
        display: flex;
        align-items: center;
        .dot {
          width: 2px;
          height: 2px;

          background-color: #a5aab4;
          border-radius: 50%;
          margin: 0 4px;
        }
      }
      li.type {
        font-family: "neo-bold";
        font-size: 10px;
        line-height: 12px;
        color: #606872;

        background-color: #eeeeee;
        border-radius: 4px;

        padding: 2px 5.7px;
        margin-left: 4px;
      }
    }
    ul.rating {
      display: flex;
      align-items: center;
      li {
        width: 10px;
        height: 12px;

        margin-right: 2px;
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 100%;
        }
      }
    }
  }
`;
const CardFooter = styled.div`
  height: 58px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 23px;
  ${mediaQueries("mobile")`
    margin-top: 0;
  `};

  .reaction-left {
    display: flex;
    align-items: center;
    li {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 16px;
        height: 16px;

        margin-right: 8px;
        cursor: pointer;
      }
    }
  }
  .share-right {
    display: flex;
    align-items: center;
    li {
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
      img {
        width: 24px;
        height: 24px;

        cursor: pointer;
      }
    }
  }
`;
// follow
const FollowArea = styled.section`
  position: relative;

  width: calc(100% + 88px);

  margin: 44px 0;
  margin-left: -44px;
  ${mediaQueries("mobile")`
    width: 100%;
    margin: 36px 0;
    padding: 0 16px;
  `};
  .swiper-button-prev-custom {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    width: 24px;
    height: 24px;

    cursor: pointer;
  }
  .swiper-button-next-custom {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);

    width: 24px;
    height: 24px;

    cursor: pointer;
  }
  div.inner {
    padding: 0 44px;
    ${mediaQueries("mobile")`
      padding: 0;
    `};
  }

  img.profile {
    width: 68px;
    height: 68px;

    margin-bottom: 10px;
  }
  .name {
    font-family: "neo-bold";
    line-height: 22px;
    color: #38323c;

    margin-bottom: 5px;
  }
  .desc {
    color: #a5aab4;
    font-size: 12px;
    line-height: 18px;

    margin-bottom: 16px;
  }
`;
// <<< Style

interface RecommendProps {
  tags: string[];
  posts: object[];
  followList: object[];
  onMoveDetail: ({ post }: { post: object }) => void;
}
const Recommend = ({
  tags,
  posts,
  followList,
  onMoveDetail,
}: RecommendProps) => {
  // swiper left arrow 색 변경을 위한 slide index 상태
  const [tagSlideNumber, setTagSlideNumber] = useState<number>(0);
  const [followSlideNumber, setFollowSlideNumber] = useState<number>(0);

  // 모바일 사이즈
  const Mobile = useMediaQuery({ query: "(max-width: 767px)" });

  // 북마크 클릭 시 메뉴
  const bookMarkMenu = useMemo(() => {
    const menuStyle = {
      color: "#606872",
      fontSize: "10px",
      lineHeight: "12px",
      padding: "12px 0 12px 16px",
    };
    return (
      <Menu>
        <Menu.Item key="0" style={menuStyle}>
          인스타그램 공유
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1" style={menuStyle}>
          페이스북 공유
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" style={menuStyle}>
          저장하기
        </Menu.Item>
      </Menu>
    );
  }, []);

  return (
    <Container>
      {/* Tag Slider */}
      <TagArea className="tag-swiper">
        <div className="inner">
          <Swiper
            slidesPerView="auto"
            // 화살표 클릭 시 넘길 slide수 입니다
            slidesPerGroup={1}
            spaceBetween={4}
            navigation={{
              nextEl: ".swiper-button-next-custom2",
              prevEl: ".swiper-button-prev-custom2",
            }}
            onActiveIndexChange={(swiper) =>
              setTagSlideNumber(swiper.activeIndex)
            }
          >
            {tags?.map((tag, i) => (
              <SwiperSlide key={i}>
                <Tag>{tag}</Tag>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="swiper-button-prev-custom2">
          {tagSlideNumber === 0 ? (
            <img src={IconArrowPrevGray} alt="" />
          ) : (
            <img src={IconArrowPrev} alt="" />
          )}
        </div>
        <div className="swiper-button-next-custom2">
          <img src={IconArrowNext} alt="" />
        </div>
      </TagArea>
      {/* Posting list */}
      {posts?.map((post: any, i) => (
        <div key={post.id}>
          <Card>
            <CardHeader>
              <div className="header">
                <img src={ImgProfile} alt="" />
                <div className="user">
                  <p className="user-name">{post.writer}</p>
                  <span className="user-date">{post.creDate}</span>
                </div>
              </div>
              {post.isFollow ? (
                <FollowButton isFollow={true} onClick={() => openPopup()} />
              ) : (
                <FollowButton isFollow={false} onClick={() => openPopup()} />
              )}
            </CardHeader>
            <CardContents>
              <PostTagArea>
                {post.tags?.map((tag: string, i: number) => (
                  <PostTag key={i}>{tag}</PostTag>
                ))}
              </PostTagArea>
              <div onClick={() => onMoveDetail({ post })}>
                <TextArea rows={3} readOnly value={post.desc} />
                {post.desc.length > 175 && <MoreBtn>더보기</MoreBtn>}
                <ImgArea
                  num={post.imgs.length}
                  responsiveWidth={Mobile ? "100%" : "328px"}
                >
                  {post.imgs.map((url: string, i: number) => {
                    return i === 2 && post.imgs.length > 3 ? (
                      <Fragment key={i}>
                        <div className="cover" key={i}>
                          + {post.imgs.length - 3}
                        </div>
                        <img className="img" src={ImgPost} alt="" />
                      </Fragment>
                    ) : i < 3 ? (
                      <img className="img" key={i} src={ImgPost} alt="" />
                    ) : null;
                  })}
                </ImgArea>
              </div>
            </CardContents>
            {post.link && (
              <ConnectLink>
                <div className="thumbnail">
                  <img src={ImgThumbnail} alt="" />
                </div>
                <div className="text">
                  <p className="title">{post.link?.title}</p>
                  <ul className="desc">
                    <li>
                      {post.link?.name}
                      <span className="dot" />
                    </li>
                    <li>
                      {post.link?.runTime}
                      <span className="dot" />
                    </li>
                    <li>{post.link?.level}</li>
                    <li className="type">{post.link?.type}</li>
                  </ul>
                  <ul className="rating">
                    <li>
                      <img src={IconStarOn} alt="" />
                    </li>
                    <li>
                      <img src={IconStarOn} alt="" />
                    </li>
                    <li>
                      <img src={IconStarOn} alt="" />
                    </li>
                    <li>
                      <img src={IconStarOn} alt="" />
                    </li>
                    <li>
                      <img src={IconStarOff} alt="" />
                    </li>
                  </ul>
                </div>
              </ConnectLink>
            )}
            <CardFooter>
              <ul className="reaction-left">
                <li>
                  <img src={IconFavorite} alt="" />
                  {post.favorite}
                </li>
                <li>
                  <img src={IconComment} alt="" />
                  {post.comment.length}
                </li>
              </ul>
              <ul className="share-right">
                <Dropdown
                  overlay={bookMarkMenu}
                  trigger={["click"]}
                  placement="bottomCenter"
                  overlayStyle={{
                    width: "119px",
                  }}
                >
                  <li>
                    <img src={IconBookmark} alt="" />
                  </li>
                </Dropdown>
                <li>
                  <img src={IconShare} alt="" />
                </li>
              </ul>
            </CardFooter>
          </Card>
          {/* 팔로우 추천 */}
          {i === 1 && (
            <FollowArea className="follow-swiper">
              <div className="inner">
                <Swiper
                  spaceBetween={16}
                  slidesPerView={2}
                  // 화살표 클릭 시 넘길 slide수 입니다
                  slidesPerGroup={1}
                  navigation={
                    Mobile
                      ? true
                      : {
                          nextEl: ".swiper-button-next-custom",
                          prevEl: ".swiper-button-prev-custom",
                        }
                  }
                  breakpoints={{
                    767: {
                      slidesPerView: 4,
                      slidesPerGroup: 3,
                      spaceBetween: 16,
                    },
                  }}
                  onActiveIndexChange={(swiper) =>
                    setFollowSlideNumber(swiper.activeIndex)
                  }
                >
                  {followList?.map((follow: any, i) => (
                    <SwiperSlide key={i}>
                      <img className="profile" src={ImgFollowProfile} alt="" />
                      <div className="name">{follow.name}</div>
                      <span className="desc">{follow.desc}</span>
                      {follow.isFollow ? (
                        <FollowButton
                          isFollow={true}
                          onClick={() => openPopup()}
                        />
                      ) : (
                        <FollowButton
                          isFollow={false}
                          onClick={() => openPopup()}
                        />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <Default>
                <div className="swiper-button-prev-custom">
                  {followSlideNumber === 0 ? (
                    <img src={IconArrowPrevGray} alt="" />
                  ) : (
                    <img src={IconArrowPrev} alt="" />
                  )}
                </div>
                <div className="swiper-button-next-custom">
                  <img src={IconArrowNext} alt="" />
                </div>
              </Default>
            </FollowArea>
          )}
        </div>
      ))}
    </Container>
  );
};

export default Recommend;
