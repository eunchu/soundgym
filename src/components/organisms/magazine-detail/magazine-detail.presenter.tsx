import { RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { mediaQueries } from "assets/styles/media";

import IconBookmark from "assets/images/ic-bookmark.png";
import ImgProfile from "assets/images/img-profile2.png";
import ImgDetail from "assets/images/img-magazine-detail.png";

import { Default } from "utils";

import { FollowButton } from "components/atoms/buttons";
import { openPopup } from "components/molecules/popup/popup";

/**
 * >>> Style
 */
const Container = styled.div`
  margin: 40px 0 60px 0;
`;
const Card = styled.section`
  position: relative;

  width: 672px;

  background-color: #ffffff;

  padding: 60px 0;
  margin: auto;

  ${mediaQueries("mobile")`
    width: 100%;
    padding-bottom: 40px;
  `};
`;
const TopArea = styled.div`
  padding: 0 40px;

  ${mediaQueries("mobile")`
    padding: 0 16px;
  `};
  div.title-area {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
    ${mediaQueries("mobile")`
      margin-bottom: 20px;
    `};
    h2 {
      font-family: "neo-bold";
      font-size: 24px;
      line-height: 32px;
      color: #38323c;

      ${mediaQueries("mobile")`
        width: 75%;
      `};
    }
    span.bookmark-box {
      width: 48px;
      height: 48px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid #c5c8ce;
      border-radius: 50%;

      cursor: pointer;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  div.info {
    display: flex;
    align-items: center;

    color: #a5aab4;
    font-size: 12px;
    line-height: 18px;

    margin-bottom: 40px;
    ${mediaQueries("mobile")`
      margin-bottom: 24px;
    `};
    span.circle {
      width: 3px;
      height: 3px;

      background-color: #c4c4c4;
      border-radius: 50%;
      margin: 0 8px;
    }
  }
  div.user {
    display: flex;
    align-items: center;

    margin-bottom: 40px;
    ${mediaQueries("mobile")`
      margin-bottom: 30px;
    `};
    img {
      width: 36px;
      height: 36px;

      border-radius: 50%;
    }
    p.name {
      font-size: 12px;
      line-height: 18px;
      color: #a5aab4;

      margin: 0 20px 0 10px;
    }
  }
`;
const ImgArea = styled.div`
  margin-bottom: 40px;
  img {
    width: 100%;
  }
`;
const TextBox = styled.div`
  padding: 0 40px;
  ${mediaQueries("mobile")`
    padding: 0 16px;
  `};
  h3 {
    font-family: "neo-bold";
    font-size: 16px;
    line-height: 24px;
    color: #38323c;

    margin-bottom: 20px;
  }
`;
interface RightAreaProps {
  postHeight: number;
}
const TextArea = styled.textarea<RightAreaProps>`
  width: 100%;
  height: ${(props) => `${props.postHeight}px`};

  border: none;
  resize: none;

  font-size: 14px;
  line-height: 22px;
  color: #38323c;

  padding: 0;
`;
const MiniCard = styled.div`
  position: absolute;
  top: 376px;
  right: -240px;

  width: 200px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: #ffffff;
  border-radius: 8px;

  padding: 20px;
  div.user {
    display: flex;
    align-items: center;

    margin-bottom: 16px;
    img {
      width: 36px;
      height: 36px;

      border-radius: 50%;
      margin-right: 10px;
    }
    p.name {
      font-family: "neo-bold";
      line-height: 22px;
      color: #38323c;
    }
  }
`;
// <<< Style

const MagazineDetail = () => {
  const postTextEl = useRef<RefObject<HTMLTextAreaElement> | any>();
  const [postHeight, setPostHeight] = useState<number>(0);

  // post 내용 높이 계산
  useEffect(() => {
    if (!postTextEl.current) return;
    setPostHeight(postTextEl.current.scrollHeight);
  }, []);

  return (
    <Container>
      <Card>
        <TopArea>
          <div className="title-area">
            <h2>
              군침도는 경진님의
              <br /> 다이어트 레시피 맛있게 먹자
            </h2>
            <span className="bookmark-box">
              <img src={IconBookmark} alt="" />
            </span>
          </div>
          <div className="info">
            다이어트 식단
            <span className="circle"></span>
            2021.07.01.
          </div>
          <div className="user">
            <img src={ImgProfile} alt="" />
            <p className="name">권민주님</p>
            <FollowButton isFollow={false} onClick={() => openPopup()} />
          </div>
        </TopArea>
        <ImgArea>
          <img src={ImgDetail} alt="" />
        </ImgArea>
        <TextBox>
          <h3>
            똑똑, 혹시 건강하고 맛있는 다이어트 레시피를 기다리고 있던 분
            계신가요?
          </h3>
          <TextArea
            postHeight={postHeight}
            ref={postTextEl}
            readOnly
            value="똑똑, 혹시 건강하고 맛있는 다이어트 레시피를 기다리고 있던 분
            계신가요? 경진님의 다이어트 레시피 연재가 끝나고 저도 개인적으로
            많이 아쉬워하던 중, 경진님으로부터 반가운 소식이 도착했어요 💌
            사운드짐 회원분들과 함께 건강한 식단을 공유하고자 다시 한 번
            레시피를 보내주셨습니다 👏 평소에도 두부면을 애용하는 편이라,
            경진님의 레시피 중 특히 두부면 토마토 파스타에 눈이 가는데요.
            여러분은 어떠신가요? 경진님이 진짜 좋아하는 맛있는 레시피만 골라서
            준비해주셨다고 하니 꼭 한 번 만들어 보세요 😉 똑똑, 혹시 건강하고
            맛있는 다이어트 레시피를 기다리고 있던 분 계신가요? 경진님의
            다이어트 레시피 연재가 끝나고 저도 개인적으로 많이 아쉬워하던 중,
            경진님으로부터 반가운 소식이 도착했어요 💌 사운드짐 회원분들과 함께
            건강한 식단을 공유하고자 다시 한 번 레시피를 보내주셨습니다 👏
            평소에도 두부면을 애용하는 편이라, 경진님의 레시피 중 특히 두부면
            토마토 파스타에 눈이 가는데"
          />
        </TextBox>
        {/* 데스크탑 영역에만 출력되는 UI */}
        <Default>
          <MiniCard>
            <div className="user">
              <img src={ImgProfile} alt="" />
              <p className="name">권민주님</p>
            </div>
            <FollowButton isFollow={false} onClick={() => openPopup()} />
          </MiniCard>
        </Default>
      </Card>
    </Container>
  );
};

export default MagazineDetail;
