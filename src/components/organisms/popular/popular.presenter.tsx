import styled from "styled-components";

import { mediaQueries } from "assets/styles/media";
import { Default, Mobile } from "utils";

import IconArrowBlue from "assets/images/ic-arrow-blue.svg";
import ImgPost from "assets/images/img-post.png";
import ImgProfile from "assets/images/img-profile.png";
import IconFavorite from "assets/images/ic-favorite.png";
import IconComment from "assets/images/ic-comment.png";
import IconCrown from "assets/images/ic-crown.svg";

/**
 * Style >>>
 */
const Container = styled.div`
  margin: 20px 0 60px 0;
`;
const Card = styled.section`
  width: 100%;
  height: auto;

  border-radius: 8px;
  background-color: #ffffff;

  padding: 20px 24px;
  margin-bottom: 20px;
  ${mediaQueries("mobile")`
    padding: 20px 16px 0 16px;
  `};
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: "neo-bold";
    font-size: 18px;
    line-height: 26px;
    color: #38323c;
  }
  div {
    display: flex;
    align-items: center;

    font-family: "neo-medium";
    font-size: 14px;
    line-height: 22px;
    color: #3d84fb;
    cursor: pointer;
    img {
      margin-left: 8px;
    }
  }
`;
const Contents = styled.div`
  position: relative;
  display: flex;

  margin-top: 16px;
  img {
    width: 156px;

    border-radius: 8px;
    margin-right: 20px;

    ${mediaQueries("mobile")`
      margin-right: 16px;
    `};
  }
  .right-area {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-top: 12px;
  }
`;
const BestMark = styled.div`
  img {
    position: absolute;
    top: 0;
    left: 0;

    width: 24px;
    height: 24px;
  }
  span {
    position: absolute;
    top: 5px;
    left: 16px;

    font-family: "neo-bold";
    font-size: 10px;
    line-height: 12px;
    color: #3d84fb;

    background-color: #f1f4f6;
    border-radius: 13px;

    padding: 2px 7px;
  }
`;
const ActionArea = styled.div`
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mediaQueries("mobile")`
    margin-top: 10px;
  `};
  .writer {
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;

      border-radius: 50%;
      margin-right: 8px;
    }
    .name {
      font-size: 12px;
      line-height: 18px;
      color: #606872;
      margin-top: 4px;
    }
  }
  ul.action {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;

      color: #606872;
      font-size: 12px;
      line-height: 18px;

      &:first-child {
        margin-right: 22px;
      }
      img {
        width: 16px;
        height: 16px;

        margin-right: 8px;
        cursor: pointer;
      }
    }
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 46px;

  border: none;
  resize: none;

  font-family: "neo-regular";
  font-size: 14px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #38323c;
  padding: 0;

  ${mediaQueries("mobile")`
    height: 68px;
    -webkit-line-clamp: 3;
  `};
`;
const MoreBtn = styled.div`
  color: #3d84fb;
  cursor: pointer;
`;
// <<< Style

interface PopularProps {
  posts: {}[];
  onMoveDetail: ({ post }: { post: object }) => void;
}
const Popular = ({ posts, onMoveDetail }: PopularProps) => {
  return (
    <Container>
      {posts?.map((post: any) => (
        <Card key={post.id}>
          <Top>
            <h2>{post.tag}</h2>
            <div onClick={() => onMoveDetail({ post })}>
              게시물 {post.posts.length}개 <img src={IconArrowBlue} alt="" />
            </div>
          </Top>
          <Contents>
            {/* api 연결 시 사용해주세요 */}
            {/* <img src={post.thumbnail} alt="" /> */}
            <img src={ImgPost} alt="" />
            <BestMark>
              <span>Best</span>
              <img src={IconCrown} alt="" />
            </BestMark>
            <div className="right-area">
              <div className="text">
                <TextArea rows={3} readOnly value={post.desc} />
                <MoreBtn>더보기</MoreBtn>
              </div>
              {/* 데스크탑 UI */}
              <Default>
                <ActionArea>
                  <div className="writer">
                    {/* api 연결 시 사용해주세요 */}
                    {/* <img src={post.profile_img} alt="" /> */}
                    <img src={ImgProfile} alt="" />
                    <div className="name">{post.writer}</div>
                  </div>
                  <ul className="action">
                    <li>
                      <img src={IconFavorite} alt="" />
                      {post.favorite}
                    </li>
                    <li>
                      <img src={IconComment} alt="" />
                      {post.comment.length}
                    </li>
                  </ul>
                </ActionArea>
              </Default>
            </div>
          </Contents>
          {/* 모바일 UI */}
          <Mobile>
            <ActionArea>
              <div className="writer">
                {/* api 연결 시 사용해주세요 */}
                {/* <img src={post.profile_img} alt="" /> */}
                <img src={ImgProfile} alt="" />
                <div className="name">{post.writer}</div>
              </div>
              <ul className="action">
                <li>
                  <img src={IconFavorite} alt="" />
                  {post.favorite}
                </li>
                <li>
                  <img src={IconComment} alt="" />
                  {post.comment.length}
                </li>
              </ul>
            </ActionArea>
          </Mobile>
        </Card>
      ))}
    </Container>
  );
};

export default Popular;
