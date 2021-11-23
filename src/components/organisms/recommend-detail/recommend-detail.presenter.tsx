import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
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
import ImgThumbnail from "assets/images/img-post-thumbnail.png";
import IconStarOn from "assets/images/ic-star-on.png";
import IconStarOff from "assets/images/ic-star-off.png";
import IconFavorite from "assets/images/ic-favorite-gray.svg";
import IconComment from "assets/images/ic-comment-gray.svg";
import IconBookmark from "assets/images/ic-bookmark.png";
import IconShare from "assets/images/ic-share.png";
import IconNext from "assets/images/ic-arrow-next-circle.png";

import { Default, Mobile } from "utils";

import { FollowButton } from "components/atoms/buttons";
import { openPopup } from "components/molecules/popup/popup";

// Swiper modules
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

/**
 * Style
 */
const Container = styled.div`
  height: auto;
  width: 100%;
  max-width: 672px;

  margin: 40px auto 60px;
  ${mediaQueries("mobile")`
    max-width: 100%;
  `};
`;
const Card = styled.section`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background-color: #ffffff;

  padding: 28px 24px 0 24px;

  ${mediaQueries("mobile")`
    padding: 24px 16px;
  `};
`;
const CardHeader = styled.div`
  width: 100%;

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

  ${mediaQueries("mobile")`
    flex-direction: column;
  `};
`;
const LeftArea = styled.div`
  width: 50%;
  margin-right: 20px;

  ${mediaQueries("mobile")`
    width: 100%;
  `};
  img.thumnail {
    width: 100%;
    border-radius: 8px;
  }
`;
const SwiperArea = styled.div`
  position: relative;
  .swiper-button-next-custom {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);

    width: 36px;
    height: 36px;

    cursor: pointer;
    z-index: 1;
    img {
      width: 100%;
    }
  }
`;
const ConnectLink = styled.div`
  width: 100%;
  height: 88px;

  display: flex;

  background-color: #f1f4f6;
  border-radius: 8px;

  margin-top: 16px;
  ${mediaQueries("mobile")`
    width: 100%;
    margin-bottom: 40px;
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

      width: 94%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      ${mediaQueries("mobile")`
        width: 100%;
      `};
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
interface RightAreaProps {
  postHeight: number;
}
const RightArea = styled.div<RightAreaProps>`
  width: 50%;

  ${mediaQueries("mobile")`
    width: 100%;
  `};
  textarea.desc {
    width: 100%;
    height: ${(props) => `${props.postHeight}px`};

    border: none;
    border-bottom: 1px solid #eeeeee;
    resize: none;

    font-family: "neo-regular";
    font-size: 14px;
    line-height: 22px;
    color: #38323c;

    padding: 16px 0 40px;
    margin-bottom: 14px;
    overflow-y: hidden;

    ${mediaQueries("mobile")`
      padding: 0;
      padding-bottom: 40px;
    `};
  }
`;
const CommentArea = styled.div`
  border-bottom: 1px solid #eeeeee;
  p.num {
    font-size: 12px;
    line-height: 18px;
    color: #a5aab4;

    margin-bottom: 20px;
  }
  ul.comment {
    li {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 20px;
      }
      div.user-info {
        display: flex;
        align-items: center;
        img {
          width: 32px;
          height: 32px;
        }
        p.name {
          font-family: "neo-bold";
          font-size: 12px;
          line-height: 18px;
          color: #38323c;

          margin: 0 10px;
        }
        p.date {
          font-size: 10px;
          line-height: 12px;
          color: #a5aab4;
        }
      }
      p.text {
        font-size: 12px;
        line-height: 18px;
        color: #38323c;

        padding-left: 42px;
      }
    }
  }
`;
const MoreComment = styled.p`
  font-family: "neo-bold";
  font-size: 12px;
  line-height: 18px;
  color: #606872;

  margin-top: 4px;
  margin-bottom: 38px;
  cursor: pointer;
`;
const CardFooter = styled.div`
  height: 64px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .reaction-left {
    display: flex;
    align-items: center;
    li {
      color: #a5aab4;
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
const TagArea = styled.div`
  display: flex;
  margin-top: 16px;
  ${mediaQueries("mobile")`
    margin-top: 0;
  `};
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
  ${mediaQueries("mobile")`
    margin-bottom: 16px;
  `};
`;
// <<< Style

interface RecommendDetailProps {
  post: object | any;
  isMoreComment: boolean;
  onClickMoreComment: () => void;
}
const RecommendDetail = ({
  post,
  isMoreComment,
  onClickMoreComment,
}: RecommendDetailProps) => {
  const postTextEl = useRef<RefObject<HTMLTextAreaElement> | any>();
  const [postHeight, setPostHeight] = useState<number>(0);

  // post 내용 높이 계산
  useEffect(() => {
    if (!postTextEl.current) return;
    setPostHeight(postTextEl.current.scrollHeight);
  }, []);

  // Default 댓글 2개만 출력. 더보기 클릭 시 전체 댓글 출력됩니다
  const commentOutput = isMoreComment
    ? post.comment
    : post.comment?.slice(0, 2);

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
    post && (
      <Container>
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
            <LeftArea>
              {post.imgs.length === 1 ? (
                <img className="thumnail" src={ImgPost} alt="" />
              ) : (
                <SwiperArea className="thumnail-swiper">
                  <Swiper
                    navigation={{
                      nextEl: ".swiper-button-next-custom",
                    }}
                  >
                    <SwiperSlide>
                      <img className="thumnail" src={ImgPost} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="thumnail" src={ImgPost} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className="thumnail" src={ImgPost} alt="" />
                    </SwiperSlide>
                  </Swiper>
                  <div className="swiper-button-next-custom">
                    <img src={IconNext} alt="" />
                  </div>
                </SwiperArea>
              )}
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
              <Mobile>
                <TagArea>
                  <PostTag>#하루한번샐러드</PostTag>
                </TagArea>
              </Mobile>
            </LeftArea>
            <RightArea postHeight={postHeight}>
              <Default>
                <TagArea>
                  <PostTag>#하루한번샐러드</PostTag>
                </TagArea>
              </Default>
              <textarea
                ref={postTextEl}
                className="desc"
                readOnly
                value={post.desc}
              />
              <CommentArea>
                <p className="num">총 댓글 수 {post.comment.length}</p>
                <ul className="comment">
                  {/* 속성명이 바뀔 수 있어 interface 정의해두지 않았습니다 */}
                  {commentOutput.map((comment: object | any, i: number) => {
                    return (
                      <li key={i}>
                        <div className="user-info">
                          {/* api 연결 시 사용해주세요 */}
                          {/* <img src={comment.profile_img} alt="" /> */}
                          {/* 이미지 하드코딩 */}
                          <img src={ImgProfile} alt="" />
                          <p className="name">{comment.user}</p>
                          <p className="date">{comment.creDate}</p>
                        </div>
                        <p className="text">{comment.comment}</p>
                      </li>
                    );
                  })}
                </ul>
                {/* 댓글 2개 이상일 경우 출력됩니다 */}
                {post.comment.length > 3 && !isMoreComment && (
                  <MoreComment
                    onClick={() => {
                      onClickMoreComment();
                      openPopup();
                    }}
                  >
                    댓글 더보기
                  </MoreComment>
                )}
              </CommentArea>
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
            </RightArea>
          </CardContents>
        </Card>
      </Container>
    )
  );
};

export default RecommendDetail;
