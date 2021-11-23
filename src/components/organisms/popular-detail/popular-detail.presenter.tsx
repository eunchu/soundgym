import styled from "styled-components";

import { mediaQueries } from "assets/styles/media";

import IconArrowBlue from "assets/images/ic-arrow-blue.svg";
import ImgProfile from "assets/images/img-profile.png";
import IconFavorite from "assets/images/ic-favorite-gray.svg";
import IconComment from "assets/images/ic-comment-gray.svg";

import { FollowButton } from "components/atoms/buttons";
import { openPopup } from "components/molecules/popup/popup";

/**
 * Style >>>
 */
const Container = styled.div``;
const TitleSection = styled.section`
  width: 100%;

  background-color: #ffffff;
  div.inner {
    width: 672px;

    margin: auto;
    padding-bottom: 24px;

    ${mediaQueries("mobile")`
      width: 100%;
      padding: 0 16px 24px 16px;
    `};
    div.titleArea {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 40px 0 20px 0;
      ${mediaQueries("mobile")`
        padding-top: 35px;
        padding-bottom: 12px;
      `};
      h2 {
        font-family: "neo-bold";
        font-size: 24px;
        line-height: 32px;
        color: #38323c;
        ${mediaQueries("mobile")`
          font-size: 18px;
          line-height: 26px;
        `};
      }
    }
    div.info {
      display: flex;
      align-items: center;

      padding-bottom: 20px;
      p {
        line-height: 22px;
        color: #606872;
        &:first-child {
          margin-right: 20px;
        }
      }
    }
    div.event {
      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 1px solid #eeeeee;
      padding: 16px 20px 16px 16px;
      p {
        font-size: 12px;
        line-height: 18px;
        color: #606872;
      }
      div.more {
        display: flex;
        align-items: center;

        font-family: "neo-medium";
        line-height: 22px;
        color: #3d84fb;
        cursor: pointer;
        img {
          margin-left: 10px;
        }
      }
    }
  }
`;
const Contents = styled.section`
  width: 672px;

  margin: auto;
  padding: 24px 0 60px 0;
  ${mediaQueries("mobile")`
    width: 100%;
    padding: 24px 16px 60px 16px;
  `};
`;
const TabArea = styled.div`
  display: flex;
  align-items: center;
`;
interface TabProps {
  active: boolean;
}
const Tab = styled.div<TabProps>`
  font-family: ${(props) => (props.active ? "neo-bold" : "neo-regular")};
  font-size: 12px;
  line-height: 18px;
  color: ${(props) => (props.active ? "#ffffff" : "#a5aab4")};

  background-color: ${(props) => (props.active ? "#3D84FB" : "translate")};
  border: ${(props) => !props.active && "1px solid #c5c8ce"};
  border-radius: 4px;

  padding: 8px 22px;
  margin-right: 10px;

  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;
const CardArea = styled.div`
  width: calc(100% + 16px);
  height: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, 50px);

  margin-top: 24px;

  ${mediaQueries("mobile")`
    grid-template-columns: repeat(2, 1fr);
  `};
`;
const Card = styled.section`
  position: relative;

  width: calc(100% - 16px);

  border-radius: 8px;
  background-color: #ffffff;

  grid-row-end: span 6;

  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  ${mediaQueries("mobile")`
    width: calc(100% - 16px);
  `};
  &:nth-child(2n) {
    grid-row-end: span 7;
    .img {
      height: 208px;
    }
  }
  &:nth-child(4n) {
  }
  .img {
    width: 100%;
    height: 156px;
    border-radius: 8px 8px 0 0;
    /* 이미지 연결 시 배경색 삭제해주세요 */
    background-color: #d8e6fe;
  }
  span.img-num {
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
  .contents {
    padding: 16px;
    .user {
      display: flex;
      align-items: center;

      margin-bottom: 10px;
      img {
        width: 16px;
        height: 16px;

        margin-right: 8px;
      }
      p {
        font-size: 12px;
        line-height: 18px;
        color: #606872;
      }
    }
    .bottom {
      display: flex;
      align-items: center;
      li {
        display: flex;
        align-items: center;

        font-size: 12px;
        line-height: 18px;
        color: #a5aab4;

        margin-right: 16px;
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
  }
`;
const TextArea = styled.textarea`
  width: 100%;

  border: none;
  resize: none;

  font-family: "neo-regular";
  font-size: 12px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #38323c;

  margin-bottom: 14px;
`;
// <<< Style

interface PopularDetailProps {
  post: object | any;
  activeTab: string;
  onClickTab: ({ tab }: { tab: string }) => void;
}
const PopularDetail = ({ post, activeTab, onClickTab }: PopularDetailProps) => {
  return (
    <Container>
      <TitleSection>
        <div className="inner">
          <div className="titleArea">
            <h2>{post.tag}</h2>
            <FollowButton
              isFollow={post.isFollow}
              onClick={() => openPopup()}
            />
          </div>
          <div className="info">
            <p>게시물 {post.posts.length}</p>
            <p>팔로잉 {post.following_num}</p>
          </div>
          <div className="event">
            <p>
              이벤트에 참여하세요!
              <br />
              이벤트 기간: 7/21(목)~830(금)
              <br />
              다채로운 참가자 경품이 준비되어 있어요!
            </p>
            <div className="more">
              더보기 <img src={IconArrowBlue} alt="" />
            </div>
          </div>
        </div>
      </TitleSection>
      <Contents>
        <TabArea>
          <Tab
            active={activeTab === "인기"}
            onClick={() => onClickTab({ tab: "인기" })}
          >
            인기
          </Tab>
          <Tab
            active={activeTab === "최근"}
            onClick={() => onClickTab({ tab: "최근" })}
          >
            최근
          </Tab>
        </TabArea>
        <CardArea>
          {post.posts?.map((post: any) => (
            <Card key={post.id}>
              <div className="img"></div>
              {/* 이미지 연결 시 클래스명 유지해주세요 */}
              {/* <img className="img" src={post.thumbnail} alt="" /> */}
              <span className="img-num">+{post.imgs?.length - 1}</span>
              <div className="contents">
                <div className="user">
                  <img src={ImgProfile} alt="" />
                  {/* <img src={post.profile_img} alt="" /> */}
                  <p>{post.name}</p>
                </div>
                <TextArea rows={2} readOnly value={post.desc} />
                <ul className="bottom">
                  <li>
                    <img src={IconFavorite} alt="" />
                    {post.favorite}
                  </li>
                  <li>
                    <img src={IconComment} alt="" />
                    {post.comment.length}
                  </li>
                </ul>
              </div>
            </Card>
          ))}
        </CardArea>
      </Contents>
    </Container>
  );
};

export default PopularDetail;
