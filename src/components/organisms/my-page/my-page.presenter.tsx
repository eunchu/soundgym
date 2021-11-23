import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Menu, Dropdown } from "antd";

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

import { FollowButton } from "components/atoms/buttons";
import { openPopup } from "components/molecules/popup/popup";

/**
 * Style >>>
 */
const Container = styled.div``;
const TopArea = styled.div`
  width: 100%;

  background-color: #ffffff;

  padding-top: 60px;
  margin-bottom: 30px;

  ${mediaQueries("mobile")`
    padding-top: 40px;
    margin-bottom: 20px;
  `};
  div.inner {
    width: 672px;
    margin: auto;

    ${mediaQueries("mobile")`
      width: 100%;
    `};
    div.user {
      display: flex;
      align-items: center;

      margin-bottom: 30px;
      ${mediaQueries("mobile")`
        padding: 0 16px;
      `};
      img {
        width: 80px;
        height: 80px;

        border-radius: 50%;
      }
      div {
        margin-left: 16px;
        p.name {
          font-family: "neo-bold";
          font-size: 24px;
          line-height: 32px;
          color: #000000;
        }
        p.area {
          line-height: 18px;
          color: #a5aab4;
        }
      }
    }
    p.desc {
      font-size: 12px;
      line-height: 18px;
      color: #606872;

      margin-bottom: 30px;
      ${mediaQueries("mobile")`
        padding: 0 16px;
      `};
    }
    ul.info {
      display: flex;
      align-items: center;

      margin-bottom: 30px;
      ${mediaQueries("mobile")`
        padding: 0 16px;
      `};
      li {
        width: 60px;
        margin-right: 10px;
        p.title {
          font-size: 12px;
          line-height: 18px;
          color: #a5aab4;

          margin-bottom: 8px;
        }
        p.text {
          font-size: 16px;
          line-height: 24px;
          color: #606872;
        }
      }
    }
  }
`;
const TabArea = styled.ul`
  display: flex;
  align-items: center;
`;
interface TabProps {
  active: boolean;
}
const Tab = styled.li<TabProps>`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${(props) => (props.active ? "neo-bold" : "neo-medium")};
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.active ? "#38323C" : "#a5aab4")};

  border-bottom: ${(props) => props.active && "2px solid #38323C"};

  padding: 14px 0;
  cursor: pointer;
`;
const Contents = styled.div`
  width: 672px;
  margin: auto;

  ${mediaQueries("mobile")`
    width: 100%;
  `};
`;
const Card = styled.section`
  width: 100%;

  background-color: #ffffff;
  border-radius: 8px;

  padding: 24px 24px 0 24px;
  margin-bottom: 20px;

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
const CertifyArea = styled.div`
  width: calc(100% + 6px);

  display: flex;
  flex-wrap: wrap;

  margin: 30px 0;

  ${mediaQueries("mobile")`
    padding: 0 16px;
  `};
`;
interface BoxProps {
  boxWidth: number;
}
const Box = styled.div<BoxProps>`
  position: relative;

  width: calc(33.3% - 6px);
  height: ${(props) => (props.boxWidth ? `${props.boxWidth}px` : "220px")};

  background-color: #baeef5;

  margin-bottom: 6px;
  margin-right: 6px;

  ${mediaQueries("mobile")`
    width: calc(50% - 4px);
    
    margin-bottom: 4px;
    margin-right: 4px;
  `};
  &:nth-child(3n) {
    margin-right: 0;
    ${mediaQueries("mobile")`
      margin-right: 4px;
    `};
  }
  &:nth-child(2n) {
    ${mediaQueries("mobile")`
      margin-right: 0;
    `};
  }
  span.num {
    position: absolute;
    top: 10px;
    right: 10px;

    font-family: "neo-bold";
    font-size: 10px;
    line-height: 12px;
    color: #ffffff;

    background-color: rgba(56, 50, 60, 0.7);
    border-radius: 11.3px;

    padding: 5px 12px;
  }
`;
// <<< Style

interface MypageProps {
  posts: object[];
  activeTab: string;
  onClickTab: ({ tab }: { tab: string }) => void;
}
const Mypage = ({ posts, activeTab, onClickTab }: MypageProps) => {
  const boxEl = useRef<any>();
  const [boxWidth, setBoxWidth] = useState<number>(0);

  // post 내용 높이 계산
  const findWidth = () => {
    if (!boxEl.current) return;
    setBoxWidth(boxEl.current.clientWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", findWidth);
    return () => window.removeEventListener("resize", findWidth);
  }, []);

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
      <TopArea>
        <div className="inner">
          <div className="user">
            <img src={ImgProfile} alt="" />
            <div>
              <p className="name">유현</p>
              <p className="area">체력 및 몸매관리 다이어트</p>
            </div>
          </div>
          <p className="desc">자기소개를 간단하게 적어보세요.</p>
          <ul className="info">
            <li>
              <p className="title">피드 수</p>
              <p className="text">223</p>
            </li>
            <li>
              <p className="title">팔로잉</p>
              <p className="text">223</p>
            </li>
            <li>
              <p className="title">팔로워</p>
              <p className="text">223</p>
            </li>
          </ul>
          <TabArea>
            <Tab
              active={activeTab === "피드"}
              onClick={() => onClickTab({ tab: "피드" })}
            >
              피드
            </Tab>
            <Tab
              active={activeTab === "인증"}
              onClick={() => onClickTab({ tab: "인증" })}
            >
              인증
            </Tab>
          </TabArea>
        </div>
      </TopArea>
      <Contents>
        {activeTab === "피드" ? (
          <>
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
                  </CardHeader>
                  <CardContents>
                    <PostTagArea>
                      {post.tags?.map((tag: string, i: number) => (
                        <PostTag key={i}>{tag}</PostTag>
                      ))}
                    </PostTagArea>
                    <TextArea rows={3} readOnly value={post.desc} />
                    {post.desc.length > 175 && (
                      // 상세페이지로 연결
                      <MoreBtn>더보기</MoreBtn>
                    )}
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
              </div>
            ))}
          </>
        ) : (
          <CertifyArea>
            {Array.from(Array(30)).map((val, i) => (
              <Box ref={boxEl} key={i} boxWidth={boxWidth}>
                {/* 내용을 삽입해주세요 */}
                <span className="num">+3</span>
              </Box>
            ))}
          </CertifyArea>
        )}
      </Contents>
    </Container>
  );
};

export default Mypage;
