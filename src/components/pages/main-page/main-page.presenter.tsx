import { useMemo } from "react";
import styled from "styled-components";

import { mediaQueries } from "assets/styles/media";
import { Default, Mobile } from "utils";

// Visual imgs
import IconAppleLogo from "assets/images/ic-apple-logo.svg";
import IconGoogleLogo from "assets/images/ic-google-logo.svg";
import ImgVisualMain from "assets/images/img-visual.png";
import ImgVisualMainM from "assets/images/img-visual-m.png";
// Info imgs
import IconFire from "assets/images/ic-info-fire.svg";
// Exercise imgs
import ImgExercise from "assets/images/img-exercise.png";
import ImgExercise_indoorBike from "assets/images/img-indoor-bike.png";
import ImgExercise_running from "assets/images/img-running.png";
import ImgExercise_homeTrainning from "assets/images/img-home-trainning.png";
import ImgExercise_meditation from "assets/images/img-meditation.png";
import ImgExercise_stretching from "assets/images/img-stretching.png";
import ImgExercise_gym from "assets/images/img-gym.png";
import ImgExercise_yoga from "assets/images/img-yoga.png";
import ImgExercise_core from "assets/images/img-core.png";
import ImgExercise_pilates from "assets/images/img-pilates.png";
import ImgExercise_treadmill from "assets/images/img-treadmill.png";
import ImgExercise_soundpod from "assets/images/img-soundpod.png";
import ImgExercise_illiptical from "assets/images/img-illiptical.png";
import ImgExercise_balletfit from "assets/images/img-balletfit.png";
// Challenge imgs
import ImgChallenge from "assets/images/img-challenge.png";
import ImgChallengeTip1 from "assets/images/img-challenge-tip1.png";
// Together imgs
import ImgTogatherReview from "assets/images/img-together-review.png";
import ImgTogatherChat from "assets/images/img-together-chat.png";

/**
 * Style >>>
 */
const Container = styled.div``;
// Visual
const VisualArea = styled.section`
  height: auto;
  width: 100%;

  background-color: #f3f9fd;
  padding: 190px 16px 110px 16px;

  ${mediaQueries("mobile")`
    padding: 112px 0 60px 0;
  `}
  .inner {
    max-width: 978px;
    margin: auto;

    ${mediaQueries("mobile")`
      width: 100%;
    `}
    h2 {
      font-family: "neo-bold";
      font-size: 56px;
      line-height: 75px;
      color: #111111;

      margin-bottom: 20px;

      ${mediaQueries("mobile")`
        font-size: 32px;
        line-height: 44px;
        text-align: center;

        margin-bottom: 16px;
      `}
      span.primary {
        color: #3d84fb;
      }
    }
    .link-area {
      display: flex;
      align-items: center;

      margin-bottom: 48px;
      ${mediaQueries("mobile")`
        justify-content: center;
      `}
    }
    .visual-img {
      width: 100%;
      ${mediaQueries("mobile")`
        padding: 0 42px;
      `}
      img {
        width: 100%;
      }
    }
  }
`;
const LinkButton = styled.div`
  display: flex;
  align-items: center;

  border: 1.5px solid #f1f4f6;
  border-radius: 8px;
  background-color: #ffffff;

  padding: 18px 20px;
  margin-right: 10px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
  img {
    margin-right: 8px;
  }
  p {
    font-family: "neo-bold";
    font-size: 18px;
    line-height: 22px;
    color: #555555;
  }
`;
const DownloadButton = styled.div`
  background: #ffffff;
  border: 1.5px solid #f1f4f6;
  border-radius: 100px;

  font-family: "neo-bold";
  font-size: 18px;
  line-height: 22px;
  color: #555555;

  padding: 17px 24px;
  cursor: pointer;
`;
// Info
const InfoArea = styled.section`
  text-align: center;
  background-color: #f1f4f6;

  padding: 155px 16px;
  ${mediaQueries("mobile")`
    padding: 86px 16px;
  `}

  p {
    font-family: "neo-bold";
    font-size: 32px;
    line-height: 140%;
    color: #38323c;

    ${mediaQueries("mobile")`
      font-size: 20px;
    `}
    img {
      margin: -6px 0 0 8px;
    }
  }
`;
// 운동하기
const ExerciseArea = styled.section`
  background-color: #ffffff;
  padding: 200px 16px;

  ${mediaQueries("mobile")`
    padding: 102px 16px;
  `}
  .inner {
    max-width: 980px;
    margin: auto;

    display: flex;

    .left {
      width: calc(50% - 27px);

      padding-top: 36px;
      margin-right: 54px;

      .sub-title {
        margin-bottom: 120px;
      }
    }
    .right {
      width: calc(50% - 27px);
      p.desc {
        font-weight: 500;
        font-size: 28px;
        line-height: 44px;
        color: #606872;

        margin-top: 90px;
      }
    }
  }
`;
const MobileExerciseArea = styled.div`
  .sub-title {
    margin-bottom: 40px;
  }
  .desc {
    margin-top: 40px;
    margin-bottom: 37px;
  }
`;
const MyExerciseBox = styled.div`
  width: 100%;

  background: #f1f4f6;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.03);
  border-radius: 24px;

  padding: 80px 56px 60px 56px;
  ${mediaQueries("mobile")`
    padding: 40px 42px 30px 0;
  `}
  img {
    width: 100%;
    ${mediaQueries("mobile")`
      padding-left: 42px;
    `}
  }
  p {
    font-family: "neo-bold";
    font-size: 36px;
    line-height: 46px;
    color: #38323c;

    margin-top: 68px;
    ${mediaQueries("mobile")`
      font-size: 20px;
      line-height: 140%;

      margin-top: 36px;
      padding-left: 30px;
    `}
  }
`;
const CategoryBox = styled.div`
  width: 100%;

  background: #444bcf;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.03);
  border-radius: 24px;

  padding: 147px 0 60px 50px;
  overflow: hidden;

  ${mediaQueries("mobile")`
    padding: 60px 0 30px 30px;
  `}
  ul {
    /* TODO 이미지 2개씩만 보이도록? 수정해야 함 */
    width: 2236px;

    display: flex;
    align-items: center;

    margin-left: 50px;
    li {
      /* min-width: 172px; */
      margin-right: 20px;

      ${mediaQueries("mobile")`
        // min-width: 127px;
        margin-right: 12px;
      `}
      img {
        width: 100%;
      }
    }
  }
  p {
    font-family: "neo-bold";
    font-size: 36px;
    line-height: 46px;
    color: #ffffff;

    margin-top: 125px;
    ${mediaQueries("mobile")`
      font-size: 20px;
      line-height: 140%;

      margin-top: 91px;
    `}
  }
`;
// 도전하기
const ChallengeArea = styled.section`
  background-color: #f1f4f6;
  padding: 156px 16px;

  ${mediaQueries("mobile")`
    padding: 80px 16px 102px 16px;
  `}
  .inner {
    display: flex;
    align-items: center;
    justify-content: center;

    ${mediaQueries("mobile")`
      display: block;
    `}
    img {
      /* max-width: 500px; */
      max-width: 50%;
      margin-right: 56px;

      ${mediaQueries("mobile")`
        max-width: 100%;
        margin-top: 50px;
      `}
    }
    p.desc {
      font-size: 28px;
      line-height: 44px;
      color: #a5aab4;

      margin-top: 40px;
      ${mediaQueries("mobile")`
          font-size: 16px;
          line-height: 24px;

          margin-top: 30px;
        `}
    }
  }
`;
// 함께하기
const TogetherArea = styled.section`
  padding: 200px 0 230px 0;
  text-align: center;

  background-color: #ffffff;
  ${mediaQueries("mobile")`
    padding: 102px 0 102px 0;
  `}
  .inner {
    width: 100%;
    max-width: 1000px;

    padding: 0 16px;
    margin: auto;

    ${mediaQueries("mobile")`
      text-align: start;
    `}
    .tip1 {
      display: flex;
      justify-content: space-between;

      border-radius: 30px;
      background-color: #f7eff7;

      margin-top: 60px;
      margin-bottom: 20px;
      padding: 0 0 50px 40px;

      ${mediaQueries("mobile")`
        margin-top: 42px;
      `}
      p {
        font-family: "neo-bold";
        font-size: 30px;
        line-height: 140%;
        text-align: left;
        color: #38323c;

        padding-top: 60px;
        .pink {
          color: #e7c2ea;
        }
      }
      .img-box {
        width: calc(50% + 20px);
        padding-right: 90px;
        img {
          width: 100%;
          max-width: 420px;
        }
      }
    }
    .tip2 {
      display: flex;
    }
  }
`;
const ReviewBox = styled.div`
  width: 50%;

  flex-grow: 1;
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  background-color: #1d293d;

  padding: 50px 44px 35px 40px;
  margin-right: 20px;
  p {
    display: flex;
    align-items: flex-start;
    text-align: left;

    font-family: "neo-bold";
    font-size: 30px;
    line-height: 140%;
    color: #ffffff;

    margin-bottom: 57px;
  }
  .img-inner {
    display: flex;
    align-items: flex-end;
    justify-content: end;
    .img-box {
      max-width: 315px;
      img {
        width: 100%;
      }
    }
  }
`;
const ChatBox = styled.div`
  width: 50%;

  flex-grow: 1;

  border-radius: 20px;
  background-color: #f1f4f6;

  padding: 50px 0 103px 0;
  overflow: hidden;
  p {
    display: flex;
    align-items: flex-start;
    text-align: left;

    font-family: "neo-bold";
    font-size: 30px;
    line-height: 140%;
    color: #38323c;

    padding-left: 40px;
    margin-bottom: 97px;
  }
  img {
    width: calc(100% + 33px);
    margin-left: -13px;
  }
`;
// 공통 스타일
const Title = styled.h2`
  font-family: "neo-bold";
  font-size: 2rem;
  line-height: 40px;
  color: #3d84fb;

  margin-bottom: 24px;

  ${mediaQueries("mobile")`
    font-size: 17px;
    line-height: 20px;

    margin-bottom: 12px;
  `}
`;
const SubTitle = styled.h3`
  font-family: "neo-bold";
  /* font-size: 50px; */
  font-size: 3.5rem;
  line-height: 140%;
  color: #38323c;

  ${mediaQueries("mobile")`
    font-size: 28px;
  `}
`;
// <<< Style

const MainPage = () => {
  // [Mobile/PC 공통UI]
  // 운동하기 > 카테고리 slider 영역 UI
  const categorySliderEl = useMemo(() => {
    const imgs = [
      ImgExercise_indoorBike,
      ImgExercise_running,
      ImgExercise_homeTrainning,
      ImgExercise_meditation,
      ImgExercise_stretching,
      ImgExercise_gym,
      ImgExercise_yoga,
      ImgExercise_core,
      ImgExercise_pilates,
      ImgExercise_treadmill,
      ImgExercise_soundpod,
      ImgExercise_illiptical,
      ImgExercise_balletfit,
    ];
    return (
      <CategoryBox>
        <ul>
          {imgs.map((img, i) => (
            <li key={i}>
              <img src={img} alt="" />
            </li>
          ))}
        </ul>
        <p>
          13가지 다양한
          <br />
          운동 카테고리
        </p>
      </CategoryBox>
    );
  }, []);

  return (
    <Container>
      {/* Visual */}
      <VisualArea>
        <div className="inner">
          <Default>
            <h2>
              함께 운동하고 경험을 나눠요
              <br />
              우리 같이 <span className="primary">사운드짐</span>
            </h2>
          </Default>
          <Mobile>
            <h2>
              함께 운동하고
              <br /> 경험을 나눠요
              <br />
              우리 같이 <span className="primary">사운드짐</span>
            </h2>
          </Mobile>
          <div className="link-area">
            <Default>
              <LinkButton>
                <img src={IconAppleLogo} alt="" />
                <p>App Store</p>
              </LinkButton>
              <LinkButton>
                <img src={IconGoogleLogo} alt="" />
                <p>Google Play</p>
              </LinkButton>
            </Default>
            <Mobile>
              <DownloadButton>앱 다운로드</DownloadButton>
            </Mobile>
          </div>
          <div className="visual-img">
            <Default>
              <img src={ImgVisualMain} alt="" />
            </Default>
            <Mobile>
              <img src={ImgVisualMainM} alt="" />
            </Mobile>
          </div>
        </div>
      </VisualArea>
      {/* Info text */}
      <InfoArea>
        <Default>
          <p>
            사운드짐은 체계적으로 운동️하고
            <img src={IconFire} alt="" />
            <br /> 유용한 꿀팁을 공유하고, 운동 생활을 나누는 서비스입니다
          </p>
        </Default>
        <Mobile>
          <p>
            사운드짐은 체계적으로 운동️하고
            <br /> 유용한 꿀팁을 공유하고,
            <br /> 운동 생활을 나누는 서비스입니다
          </p>
        </Mobile>
      </InfoArea>
      {/* 운동하기 */}
      <ExerciseArea>
        <Default>
          <div className="inner">
            <div className="left">
              <Title>운동하기</Title>
              <SubTitle className="sub-title">
                사운드짐만의
                <br /> 다채로운 콘텐츠로
                <br /> 나만의 맞춤 운동을
                <br /> 시작해보세요
              </SubTitle>
              <MyExerciseBox>
                <img src={ImgExercise} alt="" />
                <p>
                  나만의
                  <br /> 맞춤 운동
                </p>
              </MyExerciseBox>
            </div>
            <div className="right">
              {categorySliderEl}
              <p className="desc">
                홈트, 런닝, 필라테스, 스트레칭,
                <br />
                실내자전거, 코어운동 등<br />
                13개 카테고리 600개 이상의
                <br />
                운동을 경험해보세요
                <br />
                운동 성향에 따라 맞춤 운동도
                <br />
                추천해드릴게요
              </p>
            </div>
          </div>
        </Default>
        <Mobile>
          <MobileExerciseArea>
            <Title>운동하기</Title>
            <SubTitle className="sub-title">
              사운드짐만의
              <br /> 다채로운 콘텐츠로
              <br /> 나만의 맞춤 운동을
              <br /> 시작해보세요
            </SubTitle>
            {categorySliderEl}
            <p className="desc">
              홈트, 런닝, 필라테스, 스트레칭, 실내자전거,
              <br /> 코어운동 등 13개 카테고리 600개 이상의 운동을
              <br /> 경험해보세요 운동 성향에 따라 맞춤 운동도
              <br />
              추천해드릴게요
            </p>
            <MyExerciseBox>
              <img src={ImgExercise} alt="" />
              <p>
                나만의
                <br /> 맞춤 운동
              </p>
            </MyExerciseBox>
          </MobileExerciseArea>
        </Mobile>
      </ExerciseArea>
      {/* 도전하기 */}
      <ChallengeArea>
        <Default>
          <div className="inner">
            <img src={ImgChallenge} alt="" />
            <div className="right">
              <Title>도전하기</Title>
              <SubTitle>
                운동목표,
                <br />
                저희만 믿고
                <br />
                따라오세요
                <br />
              </SubTitle>
              <p className="desc">
                각 분야별 프로그램에 맞춰
                <br />
                체계적으로 운동해보세요.
                <br />
                항상 새롭게 업데이트되는
                <br />
                챌린지에 도전하고,
                <br />
                목표를 달성하세요
              </p>
            </div>
          </div>
        </Default>
        <Mobile>
          <div className="inner">
            <Title>도전하기</Title>
            <SubTitle>
              운동목표,
              <br />
              저희만 믿고 따라오세요
              <br />
            </SubTitle>
            <img src={ImgChallenge} alt="" />
            <p className="desc">
              각 분야별 프로그램에 맞춰 체계적으로
              <br /> 운동해보세요. 항상 새롭게 업데이트되는
              <br />
              챌린지에 도전하고, 목표를 달성하세요
            </p>
          </div>
        </Mobile>
      </ChallengeArea>
      {/* 함께하기 */}
      <TogetherArea>
        <div className="inner">
          <Title>함께하기</Title>
          <SubTitle>
            운동 피플들과
            <Mobile>
              <br />
            </Mobile>
            소통하고,{" "}
            <Default>
              <br />
            </Default>
            서로의
            <Mobile>
              <br />
            </Mobile>
            운동생활을 나누세요
          </SubTitle>
          <div className="tip1">
            <p>
              <span className="pink">운동 피플들은 이미</span>
              <br />
              운동생활과 유용한
              <br />
              꿀팁들을 빠르게
              <br />
              나누고 있어요
            </p>
            <div className="img-box">
              <img src={ImgChallengeTip1} alt="" />
            </div>
          </div>
          <div className="tip2">
            <ReviewBox>
              <p>
                사운드짐 꿀팁과
                <br />
                여러 챌린지 후기는
                <br />
                나누라고 있는 법
              </p>
              <div className="img-inner">
                <div className="img-box">
                  <img src={ImgTogatherReview} alt="" />
                </div>
              </div>
            </ReviewBox>
            <ChatBox>
              <p>
                내가 몰랐던
                <br />
                다양한 카테고리의
                <br />
                이야기를 나누고 있어요
              </p>
              <img src={ImgTogatherChat} alt="" />
            </ChatBox>
          </div>
        </div>
      </TogetherArea>
    </Container>
  );
};

export default MainPage;
