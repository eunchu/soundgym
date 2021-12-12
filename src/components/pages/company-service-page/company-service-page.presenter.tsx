import { useMemo } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import { mediaQueries } from "assets/styles/media";
import { Default, Mobile } from "utils";
import { useScrollMove } from "hooks";

// Visual imgs
import ImgVisual from "assets/images/img-com-visual.png";
import ImgVisual_m from "assets/images/img-com-visual-m.png";
// Info imgs
import IconDumbbel from "assets/images/ic-dumbbel.png";
// 기업 맞춤 콘텐츠 imgs
import ImgChallenge from "assets/images/img-com-challenge.png";
import ImgProgram01 from "assets/images/img-program-01.png";
import ImgProgram02 from "assets/images/img-program-02.png";
import ImgProgram03 from "assets/images/img-program-03.png";
import ImgProgram04 from "assets/images/img-program-04.png";
// 비용 절감 효과 imgs
import ImgGraph from "assets/images/img-graph.svg";
import ImgGraph_m from "assets/images/img-graph-m.svg";
import ImgGraph02 from "assets/images/img-graph-02.png";
import ImgGraph03 from "assets/images/img-graph-03.png";
// 관리 시스템 제공 imgs
import ImgDashboard01 from "assets/images/img-dashboard-01.png";
import ImgDashboard02 from "assets/images/img-dashboard-02.png";
import ImgDashboard03 from "assets/images/img-dashboard-03.png";
import ImgDashboard01_m from "assets/images/img-dashboard-m-01.png";
import ImgDashboard02_m from "assets/images/img-dashboard-m-02.png";
import ImgDashboard03_m from "assets/images/img-dashboard-m-03.png";
// 기업 리스트 imgs
import ImgClientLogo from "assets/images/img-client-logo.png";
// Story imgs
import ImgStoryReview from "assets/images/img-story-review.svg";
import ImgProfile_1 from "assets/images/img-profile-01.png";
import ImgProfile_2 from "assets/images/img-profile-02.png";
import ImgProfile_3 from "assets/images/img-profile-03.png";
// import ImgProfile_4 from "assets/images/img-profile-04.png";
// import ImgProfile_5 from "assets/images/img-profile-05.png";
// 복지제도 imgs
import ImgWelfare from "assets/images/img-welfare-bg.png";
import ImgWelfare_m from "assets/images/img-welfare-bg-m.png";
import ImgAdmins from "assets/images/img-admins.png";
import ImgAdmins_m from "assets/images/img-admins-m.png";

/**
 * Style >>>
 */
const Container = styled.div`
  padding-top: 70px;
`;
// Visual
const VisualArea = styled.section`
  background: linear-gradient(0deg, #1d293d, #1d293d);
  padding: 119px 16px 111px 16px;

  ${mediaQueries("mobile")`
    padding: 42px 16px 76px 16px;
  `}
  .inner {
    max-width: 978px;
    margin: auto;

    h2 {
      font-family: "neo-bold";
      font-size: 56px;
      line-height: 75px;
      color: #ffffff;

      margin-bottom: 20px;
      ${mediaQueries("mobile")`
        text-align: center;
        font-size: 32px;
        line-height: 44px;
      `}
      span.primary {
        color: #3d84fb;
      }
    }
    .button-area {
      display: flex;
      margin-bottom: 51px;
      ${mediaQueries("mobile")`
        justify-content: center;
      `}
    }
    img {
      width: 100%;
      ${mediaQueries("mobile")`
        padding: 0 60px;
      `}
    }
  }
`;
const Button = styled.div`
  font-family: "neo-bold";
  font-size: 18px;
  line-height: 22px;
  color: #555555;

  background-color: #ffffff;
  border: 1.5px solid #f7f8f9;
  border-radius: 8px;

  margin-right: 12px;
  padding: 19px 24px;
  cursor: pointer;
  ${mediaQueries("mobile")`
    font-size: 16px;
    line-height: 19px;
    
    margin-right: 8px;
    padding: 19px 24px;
  `}
  &:last-child {
    margin-right: 0;
  }
`;
const ButtonLine = styled(Button)`
  color: #f7f8f9;
  background-color: transparent;
  border: 1.5px solid #c5c8ce;
`;
// Info
const InfoArea = styled.section`
  text-align: center;
  background-color: #f1f4f6;

  padding: 150px 16px;
  ${mediaQueries("mobile")`
    padding: 86px 16px;
  `}
  p {
    font-family: "neo-bold";
    font-size: 32px;
    line-height: 50px;
    color: #2e363a;
    img {
      width: 40px;
      height: 40px;
      margin: -8px 0 0 12px;
    }
    ${mediaQueries("mobile")`
      font-size: 20px;
      line-height: 140%;
    `}
  }
`;
// 기업 맞춤 콘텐츠
const ContentArea = styled.section`
  background: #000000;
  padding: 208px 16px;
  ${mediaQueries("mobile")`
    padding: 102px 16px 60px 16px;
  `}
  .inner {
    max-width: 979px;
    margin: auto;

    display: flex;
    justify-content: space-between;
    ${mediaQueries("mobile")`
      flex-direction: column;
    `}
    .left {
      width: calc(50% - 26px);
    }
    .right {
      width: calc(50% - 26px);
    }
    p.desc {
      font-size: 28px;
      line-height: 44px;
      color: #c5c8ce;

      margin-top: 90px;
      ${mediaQueries("mobile")`
        font-size: 16px;
        line-height: 24px;
        margin-top: 40px;
      `}
    }
  }
`;
const ChallengeBox = styled.div`
  border-radius: 24px;
  background-color: #28323c;

  padding: 66px 56px 60px 56px;
  margin-top: 140px;
  ${mediaQueries("mobile")`
    padding: 40px 41px 30px 41px;
    margin-top: 40px;
  `}
  img {
    width: 100%;
  }
  p {
    font-family: "neo-bold";
    font-size: 36px;
    line-height: 130%;
    color: #ffffff;

    margin-top: 66px;
    ${mediaQueries("mobile")`
      font-size: 20px;
      line-height: 140%;
      margin-top: 46px;
    `}
  }
`;
const ProgramBox = styled.div`
  background-color: #84a9fe;
  border-radius: 24px;
  padding: 147px 0 50px 0;

  overflow: hidden;
  ${mediaQueries("mobile")`
    margin-top: 40px;
    padding: 60px 0 30px 0;
  `}
  ul {
    display: flex;
    padding-left: 26%;

    margin-bottom: 80px;
    ${mediaQueries("mobile")`
      padding-left: 23%;
      margin-bottom: 90px;
    `}
    li {
      min-width: 172px;
      max-width: 172px;
      margin-right: 16px;
      ${mediaQueries("mobile")`
        min-width: 128px;
        max-width: 128px;
        margin-right: 11px;
      `}
      img {
        width: 100%;
      }
    }
  }
  p {
    font-family: "neo-bold";
    font-size: 36px;
    line-height: 130%;
    color: #f7f8f9;

    padding-left: 50px;
    ${mediaQueries("mobile")`
      font-size: 20px;
      line-height: 140%;
    `}
  }
`;
// 비용 절감 효과
const CuttingArea = styled.section`
  background-color: #000000;
  padding: 100px 16px 221px 16px;
  ${mediaQueries("mobile")`
    padding: 60px 16px;
  `}
  .inner {
    max-width: 1000px;
    margin: auto;
    text-align: center;

    .flex {
      display: flex;
      ${mediaQueries("mobile")`
        flex-direction: column;
      `}
    }
  }
`;
const DiscountBox = styled.div`
  background-color: #84a9fe;
  border-radius: 30px;

  padding: 60px 80px 0 50px;
  margin-top: 62px;
  margin-bottom: 20px;
  ${mediaQueries("mobile")`
    margin-top: 40px;
    padding: 40px 30px 0 30px;
    margin-bottom: 16px;
  `}
  h3 {
    font-family: "neo-bold";
    font-size: 30px;
    line-height: 40px;
    text-align: left;
    color: #f7f8f9;

    margin-bottom: 40px;
    ${mediaQueries("mobile")`
      font-size: 20px;
      line-height: 140%;
    `}
  }
  .flex {
    display: flex;
    align-items: center;
    ${mediaQueries("mobile")`
      flex-direction: column;
      align-items: flex-start;
    `}
    .left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      margin-right: 92px;
      ${mediaQueries("mobile")`
        margin-bottom: 20px;
        margin-right: 0;
      `}
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .text {
      font-size: 20px;
      line-height: 40px;
      color: #f7f8f9;
      margin-bottom: 10px;
      ${mediaQueries("mobile")`
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 9px;
      `}
    }
    .num {
      font-family: "neo-bold";
      font-size: 60px;
      line-height: 60px;
      color: #ffffff;
      ${mediaQueries("mobile")`
        font-size: 30px;
        line-height: 30px;
      `}
    }
  }
  .img-graph {
    display: flex;
    justify-content: flex-end;
    margin-top: -50px;
    ${mediaQueries("mobile")`
      margin-top: 38px;
      padding-left: 19px;
      padding-right: 32px;
    `}
    img {
      ${mediaQueries("mobile")`
        width: 100%;
      `}
    }
  }
`;
const AccountsBox = styled.div`
  width: calc(50% - 10px);

  border-radius: 20px;
  background-color: #28323c;
  padding: 50px 48px 80px 48px;
  margin-right: 20px;
  ${mediaQueries("mobile")`
    width: 100%;
    padding: 40px 30px;
    margin-bottom: 16px;
  `}
  h3 {
    font-family: "neo-bold";
    font-size: 30px;
    line-height: 140%;
    color: #f7f8f9;
    text-align: left;
    ${mediaQueries("mobile")`
      font-size: 20px;
    `}
  }
  img {
    width: 100%;
    margin-top: 81px;
    ${mediaQueries("mobile")`
      margin-top: 56px;
    `}
  }
`;
const ReduceBox = styled.div`
  width: calc(50% - 10px);

  border-radius: 20px;
  background-color: #f7f8f9;

  padding: 50px 50px 0 50px;
  ${mediaQueries("mobile")`
    width: 100%;
    padding: 40px 30px 0 30px;
  `}
  h3 {
    font-family: "neo-bold";
    font-size: 30px;
    line-height: 140%;
    color: #28323c;
    text-align: left;

    margin-bottom: 67px;
    ${mediaQueries("mobile")`
      font-size: 20px;
      margin-bottom: 96px;
    `}
  }
  img {
    width: 100%;
    padding: 0 23px;
  }
`;
// 관리 시스템 제공
const ManagementArea = styled.section`
  background-color: #000000;
  padding: 100px 16px 208px 16px;
  ${mediaQueries("mobile")`
    padding: 60px 16px;
  `}
  .inner {
    margin-left: 22%;
    ${mediaQueries("mobile")`
      margin-left: 0;
    `}

    p.desc {
      font-size: 28px;
      line-height: 44px;
      color: #999fa4;

      margin-top: 24px;
      margin-bottom: 60px;
      ${mediaQueries("mobile")`
        font-size: 16px;
        line-height: 140%;

        margin-top: 20px;
        margin-bottom: 40px;
      `}
    }
    ul {
      display: flex;
      overflow: hidden;
      ${mediaQueries("mobile")`
        flex-direction: column;
      `}
      li {
        min-width: 886px;

        margin-right: 20px;
        ${mediaQueries("mobile")`
          min-width: 100%;
          width: 100%;

          margin-right: 0;
          margin-bottom: 30px;
          &:last-child {
            margin-bottom: 0;
          }
        `}
        .img-box-m {
          background-color: #f7eff7;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.03);
          border-radius: 24px;
        }
        &:nth-child(2) .img-box-m {
          background-color: #f1f4f6;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.03);
          border-radius: 24px;
        }
        &:nth-child(3) .img-box-m {
          background-color: #e4f6d5;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.03);
          border-radius: 24px;
        }
        img {
          width: 100%;
        }
        p {
          font-size: 28px;
          line-height: 44px;
          color: #999fa4;

          margin-top: 20px;
          ${mediaQueries("mobile")`
            font-size: 12px;
            line-height: 140%;

            margin-top: 14px;
          `}
        }
      }
    }
  }
`;
// 기업 리스트
const BusinessList = styled.section`
  display: flex;
  align-items: center;

  background-color: #f7f8f9;
  padding: 197px 16px 205px 22%;
  @media only screen and (max-width: 1500px) {
    padding-left: 10%;
  }
  ${mediaQueries("mobile")`
    flex-direction: column;

    padding: 80px 16px;
  `}
  h3 {
    min-width: 361px;

    font-family: "neo-bold";
    font-size: 40px;
    line-height: 55px;
    color: #2e363a;

    margin-right: 80px;
    @media only screen and (max-width: 1500px) {
      margin-right: 0;
    }
    ${mediaQueries("mobile")`
      min-width: 100%;

      font-size: 28px;
      line-height: 140%;

      margin-right: 0;
      margin-bottom: 40px;
    `}
  }
  .img-box {
    max-width: 960px;
    img {
      width: 100%;
    }
  }
`;
// 고객들의 이야기
const StoryArea = styled.section`
  background-color: #000000;
  padding: 200px 16px;
  ${mediaQueries("mobile")`
    padding: 60px 16px 0 16px;
  `}
  .inner {
    text-align: center;

    max-width: 985px;
    margin: auto;
    h3 {
      font-family: "neo-bold";
      font-size: 50px;
      line-height: 64px;
      color: #f7f8f9;

      margin-bottom: 24px;
      ${mediaQueries("mobile")`
        font-size: 28px;
        line-height: 40px;

        margin-bottom: 12px;
      `}
    }
    .desc {
      font-size: 30px;
      line-height: 42px;
      color: #a5aab4;

      margin-bottom: 80px;
      ${mediaQueries("mobile")`
        font-size: 16px;
        line-height: 24px;

        margin-bottom: 40px;
      `}
    }
    ul {
      display: flex;
      align-items: center;
      overflow: auto;
      ${mediaQueries("mobile")`
        overflow: hidden;
      `}
    }
  }
`;
const StoryBox = styled.li`
  width: 315px;
  min-height: 550px;

  background-color: #28323c;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding: 46px 32px 50px 32px;
  margin-right: 20px;
  ${mediaQueries("mobile")`
    width: 260px;
    min-width: 260px;
    min-height: 407px;
    max-height: 407px;
    
    padding: 40px 24px 28px 24px;
    margin-right: 16px;
  `}
  &:last-child {
    margin-right: 0;
  }
  .top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .img-review {
    margin-bottom: 34px;
    ${mediaQueries("mobile")`
      margin-bottom: 27px;
    `}
  }
  .text {
    text-align: left;
    font-size: 20px;
    line-height: 30px;
    color: #f7f8f9;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    margin-bottom: 14px;
    ${mediaQueries("mobile")`
      font-size: 16px;
      line-height: 140%;
    `}
  }
  .bottom {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;

      margin-right: 10px;
      ${mediaQueries("mobile")`
        margin-right: 8px;
      `}
    }
    .user-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .user {
        font-family: "neo-bold";
        font-size: 18px;
        line-height: 22px;
        color: #c5c8ce;

        margin-bottom: 4px;
        ${mediaQueries("mobile")`
          font-size: 16px;
          line-height: 19px;
        `}
      }
      .info {
        font-size: 16px;
        line-height: 19px;
        color: #999fa4;
      }
    }
  }
`;
// 복지제도
const WelfareArea = styled.section`
  background-position: bottom;
  background-size: cover;
  padding: 90px 16px 298px 16px;
  ${mediaQueries("mobile")`
    padding: 99px 16px 238px 16px;
  `}
  .inner {
    max-width: 985px;
    margin: auto;
    h3 {
      font-family: "neo-bold";
      font-size: 40px;
      line-height: 55px;
      color: #ffffff;

      margin-bottom: 28px;
      ${mediaQueries("mobile")`
        font-size: 28px;
        line-height: 140%;
        margin-bottom: 30px;
      `}
    }
    .buttons {
      display: flex;
      margin-bottom: 130px;
      ${mediaQueries("mobile")`
        width: 240px;
        display: block;

        margin-bottom: 70px;
      `}
      .btn1-m {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
    .img-box {
      padding: 0 20px;
      img {
        width: 100%;
      }
    }
  }
`;
// 공통
const Title = styled.h2`
  font-family: "neo-bold";
  font-size: 28px;
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
  font-size: 50px;
  line-height: 140%;
  color: #f7f8f9;

  ${mediaQueries("mobile")`
    font-size: 28px;
  `}
`;
// <<< Style

const CompanyServicePage = () => {
  // 모바일 사이즈
  const MobileSize = useMediaQuery({ query: "(max-width: 767px)" });

  // 기업 맞춤 콘텐츠 > 롤링 animation
  const animatedItem = useScrollMove({
    x: MobileSize ? -340 : -450,
    duration: 3, // 속도 변경 가능합니다
    delay: 0,
  });

  // [Mobile/PC 공통UI]
  // 기업 맞춤 콘텐츠 > slider 영역 UI
  const programSliderEl = useMemo(() => {
    const imgs = [ImgProgram01, ImgProgram02, ImgProgram03, ImgProgram04];
    return (
      <ProgramBox>
        <ul {...animatedItem}>
          {imgs.map((img, i) => (
            <li key={i}>
              <img src={img} alt="" />
            </li>
          ))}
        </ul>
        <p>
          체계적인
          <br /> 전문가
          <Default>
            <br />
          </Default>{" "}
          운동 프로그램
        </p>
      </ProgramBox>
    );
  }, [animatedItem]);

  return (
    <Container>
      {/* Visual */}
      <VisualArea>
        <div className="inner">
          <Default>
            <h2>
              건강한 기업들의
              <br /> 온라인 피트니스 서비스,{" "}
              <span className="primary">사운드짐</span>
            </h2>
            <div className="button-area">
              <Button>상담 신청하기</Button>
              <Button>기업서비스 소개서 받기</Button>
            </div>
            <img src={ImgVisual} alt="" />
          </Default>
          <Mobile>
            <h2>
              건강한 기업들의
              <br /> 온라인 피트니스 서비스,{" "}
              <span className="primary">사운드짐</span>
            </h2>
            <div className="button-area">
              <ButtonLine>상담 신청하기</ButtonLine>
              <ButtonLine>기업 소개서 받기</ButtonLine>
            </div>
            <img src={ImgVisual_m} alt="" />
          </Mobile>
        </div>
      </VisualArea>
      {/* Info */}
      <InfoArea>
        <Default>
          <p>
            사운드짐 기업 서비스는 임직원의 복리후생을 위한
            <img src={IconDumbbel} alt="" />
            <br />
            합리적인 온라인 피트니스 서비스입니다
          </p>
        </Default>
        <Mobile>
          <p>
            사운드짐 기업 서비스는
            <br /> 임직원의 복리후생을 위한 합리적인
            <br /> 온라인 피트니스 서비스입니다
          </p>
        </Mobile>
      </InfoArea>
      {/* 기업 맞춤 콘텐츠 */}
      <ContentArea>
        <div className="inner">
          <Default>
            <div className="left">
              <Title>기업 맞춤 콘텐츠</Title>
              <SubTitle>
                직장인 맞춤,
                <br /> 기업만을 위한
                <br /> 챌린지를
                <br /> 제공합니다
              </SubTitle>
              <ChallengeBox>
                <img src={ImgChallenge} alt="" />
                <p>
                  직장인을 위한
                  <br />
                  특별 챌린지와
                  <br />
                  기업 맞춤 챌린지
                </p>
              </ChallengeBox>
            </div>
            <div className="right">
              {programSliderEl}
              <p className="desc">
                최고 전문가가 만든
                <br /> 40개 이상의 운동 프로그램으로
                <br /> 임직원들이 체계적으로 운동!
                <br /> 챌린지를 만들어 임직원들이
                <br /> 함께 운동 목표를 달성할 수 있습니다
              </p>
            </div>
          </Default>
          <Mobile>
            <Title>기업 맞춤 콘텐츠</Title>
            <SubTitle>
              직장인 맞춤,
              <br /> 기업만을 위한
              <br /> 챌린지를
              <br /> 제공합니다
            </SubTitle>
            {programSliderEl}
            <p className="desc">
              최고 전문가가 만든 40개 이상의 운동 프로그램으로 임직원들이
              체계적으로 운동! 챌린지를 만들어
              <br /> 임직원들이 함께 운동 목표를 달성할 수 있습니다
            </p>
            <ChallengeBox>
              <img src={ImgChallenge} alt="" />
              <p>
                직장인을 위한 특별 챌린지와
                <br />
                기업 맞춤 챌린지
              </p>
            </ChallengeBox>
          </Mobile>
        </div>
      </ContentArea>
      {/* 비용 절감 효과 */}
      <CuttingArea>
        <div className="inner">
          <Title>비용 절감 효과</Title>
          <SubTitle>
            합리적인 비용으로
            <br />
            복지혜택을 제공하세요
          </SubTitle>
          <DiscountBox>
            <h3>멤버십 요금 할인</h3>
            <div className="flex">
              <div className="left">
                <p className="text">임직원 1명당(월)</p>
                <p className="num">8,900원</p>
              </div>
              <div className="right">
                <p className="text">할인율 (최대)</p>
                <p className="num">30%</p>
              </div>
            </div>
            <div className="img-graph">
              <Default>
                <img src={ImgGraph} alt="" />
              </Default>
              <Mobile>
                <img src={ImgGraph_m} alt="" />
              </Mobile>
            </div>
          </DiscountBox>
          <div className="flex">
            <AccountsBox>
              <h3>
                합리적인{" "}
                <Mobile>
                  <br />
                </Mobile>
                <Default>
                  월<br />
                </Default>
                정산 방식
              </h3>
              <img src={ImgGraph02} alt="" />
            </AccountsBox>
            <ReduceBox>
              <h3>
                복지 운영비용
                <br />
                82% 이상 절감
              </h3>
              <img src={ImgGraph03} alt="" />
            </ReduceBox>
          </div>
        </div>
      </CuttingArea>
      {/* 관리 시스템 제공 */}
      <ManagementArea>
        <div className="inner">
          <Title>관리 시스템 제공</Title>
          <SubTitle>
            이용내역과 임직원 현황을
            <br />
            쉽게 확인하고 관리하세요
          </SubTitle>
          <p className="desc">
            별도의 추가 비용없이
            <Mobile>
              <br />
            </Mobile>{" "}
            관리 시스템을 제공해드립니다
          </p>
          <Default>
            <ul>
              <li>
                <img src={ImgDashboard01} alt="" />
                <p>기업관리 시스템_대시보드</p>
              </li>
              <li>
                <img src={ImgDashboard02} alt="" />
                <p>기업관리 시스템_임직원 리스트</p>
              </li>
              <li>
                <img src={ImgDashboard03} alt="" />
                <p>기업관리 시스템_임직원 상세</p>
              </li>
            </ul>
          </Default>
          <Mobile>
            <ul>
              <li>
                <div className="img-box-m">
                  <img src={ImgDashboard01_m} alt="" />
                </div>
                <p>기업관리 시스템_대시보드</p>
              </li>
              <li>
                <div className="img-box-m">
                  <img src={ImgDashboard02_m} alt="" />
                </div>
                <p>기업관리 시스템_임직원 리스트</p>
              </li>
              <li>
                <div className="img-box-m">
                  <img src={ImgDashboard03_m} alt="" />
                </div>
                <p>기업관리 시스템_임직원 상세</p>
              </li>
            </ul>
          </Mobile>
        </div>
      </ManagementArea>
      {/* 기업 리스트 */}
      <BusinessList>
        <h3>
          사운드짐은
          <br />
          건강한 기업들과
          <br />
          함께 해왔습니다
        </h3>
        <div className="img-box">
          <img src={ImgClientLogo} alt="" />
        </div>
      </BusinessList>
      {/* 고객들의 이야기 */}
      <StoryArea>
        <div className="inner">
          <h3>사운드짐 고객들의 이야기</h3>
          <Default>
            <div className="desc">
              사운드짐 기업 서비스를 도입한 기업은
              <br />
              비용 절감, 임직원 복지 혜택 증가, 업무 생산성 상승을 경험하고
              있습니다
            </div>
          </Default>
          <Mobile>
            <div className="desc">
              사운드짐 서비스를 이용한 회원들의
              <br />
              리얼 생생 후기를 들어보세요
            </div>
          </Mobile>
          <Default>
            <ul>
              <StoryBox>
                <div className="top">
                  <img className="img-review" src={ImgStoryReview} alt="" />
                  <div className="text">
                    운동 종류가 다양하고 할 수<br /> 있는게 많아서 임직원분들이
                    <br />
                    좋아했습니다.
                  </div>
                  <div className="text">
                    이전에 이용하던 복지
                    <br /> 프로그램보다 적은 비용으로
                    <br /> 복지혜택을 제공할 수<br /> 있는 점이 장점인 것
                    같습니다.
                  </div>
                </div>
                <div className="bottom">
                  <img src={ImgProfile_1} alt="" />
                  <div className="user-info">
                    <p className="user">윤OO - 30대</p>
                    <p className="info">S기업 관리자</p>
                  </div>
                </div>
              </StoryBox>
              <StoryBox>
                <div className="top">
                  <img className="img-review" src={ImgStoryReview} alt="" />
                  <div className="text">
                    PT 코치님이 바로 옆에서 알려
                    <br />
                    주는 것 같아 다른 운동 앱보다
                    <br /> 쉽게 운동할 수 있었어요.
                  </div>
                  <div className="text">
                    스트레칭, 명상까지 다양한
                    <br /> 프로그램이 많아 집에서 하기
                    <br /> 좋아요.
                  </div>
                  <div className="text">
                    30대에 접어드니 체력이 많이
                    <br /> 부족했는데, 조금씩 조금씩
                    <br /> 나아지는 것 같아요.
                  </div>
                </div>
                <div className="bottom">
                  <img src={ImgProfile_2} alt="" />
                  <div className="user-info">
                    <p className="user">이OO - 30대</p>
                    <p className="info">G기업 임직원</p>
                  </div>
                </div>
              </StoryBox>
              <StoryBox>
                <div className="top">
                  <img className="img-review" src={ImgStoryReview} alt="" />
                  <div className="text">
                    의지 박약타입인데, 운동
                    <br /> 선생님들이 짜준 프로그램에
                    <br /> 맞춰서 하니깐 따라갈 수<br /> 있었어요.
                  </div>
                  <div className="text">
                    코로나때문에 실내자전거를 타<br />게 됐는데, 사운드짐 앱에
                    집중
                    <br />
                    하고 타니 좋았어요.
                  </div>
                </div>
                <div className="bottom">
                  <img src={ImgProfile_3} alt="" />
                  <div className="user-info">
                    <p className="user">김OO - 40대</p>
                    <p className="info">K기관 임직원</p>
                  </div>
                </div>
              </StoryBox>
            </ul>
          </Default>
          {/* slider */}
          <Mobile>
            <ul>
              <StoryBox>
                <div className="top">
                  <img className="img-review" src={ImgStoryReview} alt="" />
                  <div className="text">
                    운동 종류가 다양하고 할 수<br /> 있는게 많아서 임직원분들이
                    <br />
                    좋아했습니다.
                  </div>
                  <div className="text">
                    이전에 이용하던 복지 프로그램
                    <br />
                    보다 적은 비용으로 복지혜택을
                    <br /> 제공할 수 있는 점이 장점인 것<br />
                    같습니다.
                  </div>
                </div>
                <div className="bottom">
                  <img src={ImgProfile_1} alt="" />
                  <div className="user-info">
                    <p className="user">윤OO - 30대</p>
                    <p className="info">S기업 관리자</p>
                  </div>
                </div>
              </StoryBox>
              <StoryBox>
                <div className="top">
                  <img className="img-review" src={ImgStoryReview} alt="" />
                  <div className="text">
                    PT 코치님이 바로 옆에서
                    <br /> 알려 주는 것 같아 다른 운동
                    <br /> 앱보다 쉽게 운동할 수 있었어요.
                  </div>
                  <div className="text">
                    스트레칭, 명상까지 다양한 프로
                    <br />
                    그램이 많아 집에서 하기 좋아요.
                  </div>
                  <div className="text">
                    30대에 접어드니 체력이 많이
                    <br /> 부족했는데, 조금씩 조금씩
                    <br /> 나아지는 것 같아요.
                  </div>
                </div>
                <div className="bottom">
                  <img src={ImgProfile_2} alt="" />
                  <div className="user-info">
                    <p className="user">이OO - 30대</p>
                    <p className="info">G기업 임직원</p>
                  </div>
                </div>
              </StoryBox>
              <StoryBox>
                <div className="top">
                  <img className="img-review" src={ImgStoryReview} alt="" />
                  <div className="text">
                    의지 박약타입인데, 운동 선생님
                    <br />
                    들이 짜준 프로그램에 맞춰서
                    <br /> 하니깐 따라갈 수 있었어요.
                  </div>
                  <div className="text">
                    코로나때문에 실내자전거를 타<br />게 됐는데, 사운드짐 앱에
                    <br />
                    집중 하고 타니 좋았어요.
                  </div>
                </div>
                <div className="bottom">
                  <img src={ImgProfile_3} alt="" />
                  <div className="user-info">
                    <p className="user">김OO - 40대</p>
                    <p className="info">K기관 임직원</p>
                  </div>
                </div>
              </StoryBox>
            </ul>
          </Mobile>
        </div>
      </StoryArea>
      {/* 복지제도 */}
      <Default>
        <WelfareArea style={{ backgroundImage: `url(${ImgWelfare})` }}>
          <div className="inner">
            <h3>
              언택트 시대, 코로나 걱정없는
              <br />
              사운드짐 기업 서비스로
              <br />
              임직원 맞춤형 복지제도를 마련하세요!
            </h3>
            <div className="buttons">
              <ButtonLine>상담 신청하기</ButtonLine>
              <ButtonLine>기업서비스 소개서 받기</ButtonLine>
            </div>
            <div className="img-box">
              <img src={ImgAdmins} alt="" />
            </div>
          </div>
        </WelfareArea>
      </Default>
      <Mobile>
        <WelfareArea style={{ backgroundImage: `url(${ImgWelfare_m})` }}>
          <div className="inner">
            <h3>
              언택트 시대,
              <br /> 코로나 걱정없는
              <br />
              사운드짐 기업 서비스로
              <br />
              임직원 맞춤형 복지제도를
              <br /> 마련하세요!
            </h3>
            <div className="buttons">
              <ButtonLine className="btn1-m">상담 신청하기</ButtonLine>
              <ButtonLine>기업서비스 소개서 받기</ButtonLine>
            </div>
            <div className="img-box">
              <img src={ImgAdmins_m} alt="" />
            </div>
          </div>
        </WelfareArea>
      </Mobile>
    </Container>
  );
};

export default CompanyServicePage;
