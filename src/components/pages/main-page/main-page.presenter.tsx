import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss";

import { mediaQueries } from "assets/styles/media";
import { Default, Mobile } from "utils";

// Visual imgs
import IconAppleLogo from "assets/images/ic-apple-logo.svg";
import IconGoogleLogo from "assets/images/ic-google-logo.svg";
import ImgVisualMain from "assets/images/img-visual.png";
import ImgVisualMainM from "assets/images/img-visual-m.png";
import IconArrowBottom from "assets/images/ic-arrow-bottom.png";
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
// Shopping imgs
import ImgShopping from "assets/images/img-shopping.png";
// Story imgs
import ImgStoryReview from "assets/images/img-story-review.svg";
import ImgProfile_1 from "assets/images/img-profile-01.png";
// import ImgProfile_2 from "assets/images/img-profile-02.png";
// import ImgProfile_3 from "assets/images/img-profile-03.png";
// import ImgProfile_4 from "assets/images/img-profile-04.png";
// import ImgProfile_5 from "assets/images/img-profile-05.png";
// Link imgs
import ImgYoga from "assets/images/img-link-yoga.png";
import ImgYoga_m from "assets/images/img-link-yoga-m.png";
import IconAppleLogoWhite from "assets/images/ic-apple-logo-white.svg";
import IconGoogleLogoWhite from "assets/images/ic-google-logo-white.svg";

// Swiper modules
SwiperCore.use([Autoplay]);

/**
 * Style >>>
 */
const Container = styled.div``;
// Visual
const VisualArea = styled.section`
  height: auto;
  width: 100%;

  background-color: #f3f9fd;
  padding: 120px 16px 110px 16px;

  ${mediaQueries("mobile")`
    padding: 42px 0 60px 0;
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
        position: relative;
        padding: 0 42px;
      `}
      img {
        width: 100%;
      }
      img.arrow-bottom {
        position: absolute;
        bottom: 17%;
        left: 50%;
        transform: translateX(-50%);

        width: 15%;
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
// ????????????
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

    color: #606872;
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

  padding: 147px 0 60px 0;
  overflow: hidden;
  ${mediaQueries("mobile")`
    padding: 60px 0 30px 0;
  `}
  .category-swiper {
    display: flex;
    align-items: center;

    overflow: hidden;
    .slider-box {
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
    padding-left: 50px;
    ${mediaQueries("mobile")`
      font-size: 20px;
      line-height: 140%;

      padding-left: 30px;
      margin-top: 91px;
    `}
  }
`;
// ????????????
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
      max-width: 50%;
      margin-right: 56px;

      ${mediaQueries("mobile")`
        max-width: 100%;
        margin-top: 50px;
        margin-right: 0;
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
// ????????????
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
        flex-direction: column;

        margin-top: 42px;
        padding: 0 0 40px 40px;
      `}
      p {
        font-family: "neo-bold";
        font-size: 30px;
        line-height: 140%;
        text-align: left;
        color: #38323c;

        padding-top: 60px;
        ${mediaQueries("mobile")`
          order: 2;
          text-align: center;
          padding-right: 40px;
          font-size: 20px;
        `}
        .pink {
          color: #e7c2ea;
        }
      }
      .img-box {
        width: calc(50% + 20px);
        padding-right: 90px;
        ${mediaQueries("mobile")`
          order: 1;
          width: 100%;
          
          padding-right: 40px;
        `}
        img {
          width: 100%;
          max-width: 420px;
          ${mediaQueries("mobile")`
            max-width: 100%;
          `}
        }
      }
    }
    .tip2 {
      display: flex;
      ${mediaQueries("mobile")`
        flex-direction: column;
      `}
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
  ${mediaQueries("mobile")`
    width: 100%;
    align-items: center;
    justify-content: space-between;

    padding: 70px 0 42px 0;
    margin-bottom: 16px;
  `}
  p {
    display: flex;
    align-items: flex-start;
    text-align: left;

    font-family: "neo-bold";
    font-size: 30px;
    line-height: 140%;
    color: #ffffff;

    margin-bottom: 57px;
    ${mediaQueries("mobile")`
      order: 2;
      text-align: center;

      font-size: 20px;
      line-height: 29px;

      margin-bottom: 0;
      margin-top: 63px;
    `}
  }
  .img-inner {
    display: flex;
    align-items: flex-end;
    justify-content: end;
    ${mediaQueries("mobile")`
      order: 1;
      padding: 0 37px;
    `}
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
  ${mediaQueries("mobile")`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 129px 0 51px 0;
  `}
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
    ${mediaQueries("mobile")`
      order: 2;
      text-align: center;

      font-size: 20px;

      padding-left: 0;
      margin-bottom: 0;
      margin-top: 97px;
    `}
  }
  img {
    width: calc(100% + 33px);
    margin-left: -13px;
    ${mediaQueries("mobile")`
      order: 1;
      margin-left: 0;
    `}
  }
`;
// ????????????
const ShoppingArea = styled.section`
  background-color: #f1f4f6;
  padding: 160px 16px 180px 16px;
  ${mediaQueries("mobile")`
    padding: 80px 16px 100px 16px;    
  `}
  .inner {
    max-width: 1000px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mediaQueries("mobile")`
      width: 100%;

      flex-direction: column;
      align-items: flex-start;      
    `}
    .left {
      width: 50%;
      margin-right: 60px;
    }
    .desc {
      font-size: 28px;
      line-height: 44px;
      color: #a5aab4;

      margin-top: 44px;
      ${mediaQueries("mobile")`
        font-size: 16px;
        line-height: 24px;  

        margin-top: 30px;
      `}
    }
    .right {
      width: 60%;
      max-width: 630px;
      img {
        width: 100%;
      }
    }
    .m-img {
      width: 100%;
      padding: 30px 0 30px 30px;
    }
  }
`;
// ???????????? ?????????
interface StoryAreaProps {
  swiperEnd: boolean;
}
const StoryArea = styled.section<StoryAreaProps>`
  text-align: center;

  background-color: #ffffff;
  padding: 200px 0 253px 0;
  ${mediaQueries("mobile")`
    padding: 62px 0 60px 0;
  `}
  h2 {
    font-family: "neo-bold";
    font-size: 50px;
    line-height: 64px;

    margin-bottom: 24px;
    ${mediaQueries("mobile")`
      font-size: 28px;
      line-height: 40px;
      text-align: left;

      padding-left: 16px;
      margin-bottom: 14px;
    `}
  }
  p.desc {
    font-size: 30px;
    line-height: 30px;
    color: #a5aab4;

    margin-bottom: 80px;
    ${mediaQueries("mobile")`
      width: 70%;
      
      font-size: 16px;
      line-height: 24px;
      text-align: left;
      
      padding-left: 16px;
      margin-bottom: 40px;
    `}
  }
  .story-slide {
    @media only screen and (max-width: 767px) {
      padding: ${(props) => (props.swiperEnd ? "0 16px 0 0" : "0 0 0 16px")};
    }
  }
`;
const StoryBoxContainer = styled.ul`
  display: flex;
  align-items: center;

  overflow: hidden;
  ${mediaQueries("mobile")`
    margin-left: 0;
    padding-left: 0;
  `}
  .story-slide {
    width: 100%;
  }
  .swiper-box {
    text-align: left;
    background: #f1f6f9;
    border-radius: 20px;

    padding: 50px 30px;
    ${mediaQueries("mobile")`
      padding: 36px 23px 28px 23px;
    `}
    img {
      margin-bottom: 16px;
    }
    p.title {
      width: 74%;

      font-family: "neo-bold";
      font-size: 26px;
      line-height: 34px;
      color: #38323c;

      margin-bottom: 14px;
      ${mediaQueries("mobile")`
        width: 64%;
        font-size: 18px;
        line-height: 140%;

        margin-bottom: 10px;
      `}
    }
    p.comment {
      font-size: 20px;
      line-height: 30px;
      color: #606872;

      margin-bottom: 60px;
      ${mediaQueries("mobile")`
        font-size: 16px;
        line-height: 140%;

        margin-bottom: 40px;
      `}
    }
    .user-info {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;

        margin-bottom: 0;
        margin-right: 10px;
      }
      .text {
        .user {
          font-family: "neo-bold";
          font-size: 18px;
          line-height: 22px;
          color: #38323c;

          margin-bottom: 3px;
          ${mediaQueries("mobile")`
            font-size: 16px;
            line-height: 19px;

            margin-bottom: 4px;
          `}
        }
        .type {
          font-size: 16px;
          line-height: 19px;
          color: #606872;
        }
      }
    }
  }
`;
// Link
const LinkArea = styled.section`
  background-color: #f1f4f6;
  padding: 150px 16px 160px 16px;

  ${mediaQueries("mobile")`
    padding: 95px 0 100px 0;
  `}
  .inner {
    max-width: 990px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mediaQueries("mobile")`
      width: 100%;
      flex-direction: column;
    `}
    .text-area {
      width: 50%;
      p.text {
        font-family: "neo-bold";
        font-size: 40px;
        line-height: 140%;
        color: #38323c;

        margin-bottom: 40px;
      }
      .buttons {
        display: flex;
        align-items: center;
      }
    }
    img.yoga {
      width: 50%;
    }
    // mobile style
    img.yoga-m {
      width: calc(100% - 110px);
      margin-bottom: 48px;
    }
    p.text-m {
      text-align: center;
      font-family: "neo-bold";
      font-size: 24px;
      line-height: 36px;
      color: #38323c;

      margin-bottom: 22px;
    }
    .download-btn-m {
      background-color: #38323c;
      border-radius: 8px;

      font-family: "neo-bold";
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;

      padding: 18px 30px;
      cursor: pointer;
    }
  }
`;
const LinkButtonBlack = styled.div`
  background-color: #38323c;
  border-radius: 8px;

  display: flex;
  align-items: center;

  padding: 18px 20px;
  margin-right: 10px;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  p {
    font-family: "neo-bold";
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }
`;
// ?????? ?????????
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
  font-size: 3.5rem;
  line-height: 140%;
  color: #38323c;

  ${mediaQueries("mobile")`
    font-size: 28px;
  `}
`;
// <<< Style

interface MainPageProps {
  storyList: {}[];
}
const MainPage = ({ storyList }: MainPageProps) => {
  const categoryBoxDom = useRef<any>();

  /**
   * State >>>
   * @isPlaySwiper : ?????? ????????? ?????? ????????? ?????? ??????
   * @isStoryEndSlide : ????????? ????????? ?????? ????????? ???????????? ??????
   * @scrollY : ????????? ??? y ???
   */
  const [isPlaySwiper, setIsPlaySwiper] = useState<any>(false);
  const [isStoryEndSlide, changeStoryEndSlide] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  // <<<

  // ????????? ?????????
  const MobileSize = useMediaQuery({ query: "(max-width: 767px)" });

  // ???????????? ????????? ??????, ????????? ?????? ??? ????????????
  useEffect(() => {
    let observer: any;
    const { current } = categoryBoxDom;

    if (current) {
      // threshold : ?????? ?????? 0.7 = 70% ?????? ??????????????? ??? ?????????
      observer = new IntersectionObserver(
        ([entry]) => {
          const { current }: { current: any } = categoryBoxDom;
          if (current && entry.isIntersecting) {
            setIsPlaySwiper(true);
          }
        },
        {
          threshold: 0.7,
        }
      );
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, []);

  // [Mobile/PC ??????UI]
  // ???????????? > ???????????? slider ?????? ?????? ?????? UI
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
    if (!isPlaySwiper)
      return (
        <CategoryBox
          ref={categoryBoxDom}
          className="category-swiper-container"
        ></CategoryBox>
      );
    return (
      <CategoryBox ref={categoryBoxDom} className="category-swiper-container">
        <Swiper
          className="category-swiper"
          speed={1000}
          autoplay={{
            delay: 1,
            stopOnLastSlide: true,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "767": {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
            },
            "300": {
              slidesPerView: 3,
              spaceBetween: 12,
              centeredSlides: true,
            },
          }}
        >
          {imgs.map((img, i) => (
            // data-swiper-autoplay ???????????? ????????? ????????? ??? ????????????
            <SwiperSlide
              key={i}
              className="swiper-slide"
              data-swiper-autoplay={100}
            >
              <div className="slider-box">
                <img src={img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p>
          13?????? ?????????
          <br />
          ?????? ????????????
        </p>
      </CategoryBox>
    );
  }, [isPlaySwiper]);

  // ????????? y??? ?????? ??????
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(), true);
    return () =>
      window.removeEventListener("scroll", () => handleScroll(), true);
  }, [handleScroll]);
  // <<<

  return (
    <Container>
      {/* Visual */}
      <VisualArea>
        <div className="inner">
          <Default>
            <h2>
              ?????? ???????????? ????????? ?????????
              <br />
              ?????? ?????? <span className="primary">????????????</span>
            </h2>
          </Default>
          <Mobile>
            <h2>
              ?????? ????????????
              <br /> ????????? ?????????
              <br />
              ?????? ?????? <span className="primary">????????????</span>
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
              <DownloadButton>??? ????????????</DownloadButton>
            </Mobile>
          </div>
          <div className="visual-img">
            <Default>
              <img src={ImgVisualMain} alt="" />
            </Default>
            <Mobile>
              <img src={ImgVisualMainM} alt="" />
              {scrollY === 0 && (
                <img className="arrow-bottom" src={IconArrowBottom} alt="" />
              )}
            </Mobile>
          </div>
        </div>
      </VisualArea>
      {/* Info text */}
      <InfoArea>
        <Default>
          <p>
            ??????????????? ??????????????? ???????????????
            <img src={IconFire} alt="" />
            <br /> ????????? ????????? ????????????, ?????? ????????? ????????? ??????????????????
          </p>
        </Default>
        <Mobile>
          <p>
            ??????????????? ??????????????? ???????????????
            <br /> ????????? ????????? ????????????,
            <br /> ?????? ????????? ????????? ??????????????????
          </p>
        </Mobile>
      </InfoArea>
      {/* ???????????? */}
      <ExerciseArea>
        <Default>
          <div className="inner">
            <div className="left">
              <Title>????????????</Title>
              <SubTitle className="sub-title">
                ??????????????????
                <br /> ???????????? ????????????
                <br /> ????????? ?????? ?????????
                <br /> ??????????????????
              </SubTitle>
              <MyExerciseBox>
                <img src={ImgExercise} alt="" />
                <p>
                  ?????????
                  <br /> ?????? ??????
                </p>
              </MyExerciseBox>
            </div>
            <div className="right">
              {categorySliderEl}
              <p className="desc">
                ??????, ??????, ????????????, ????????????,
                <br />
                ???????????????, ???????????? ???<br />
                13??? ???????????? 600??? ?????????
                <br />
                ????????? ??????????????????
                <br />
                ?????? ????????? ?????? ?????? ?????????
                <br />
                ?????????????????????
              </p>
            </div>
          </div>
        </Default>
        <Mobile>
          <MobileExerciseArea>
            <Title>????????????</Title>
            <SubTitle className="sub-title">
              ??????????????????
              <br /> ???????????? ????????????
              <br /> ????????? ?????? ?????????
              <br /> ??????????????????
            </SubTitle>
            {categorySliderEl}
            <p className="desc">
              ??????, ??????, ????????????, ????????????, ???????????????,
              <br /> ???????????? ??? 13??? ???????????? 600??? ????????? ?????????
              <br /> ?????????????????? ?????? ????????? ?????? ?????? ?????????
              <br />
              ?????????????????????
            </p>
            <MyExerciseBox>
              <img src={ImgExercise} alt="" />
              <p>
                ?????????
                <br /> ?????? ??????
              </p>
            </MyExerciseBox>
          </MobileExerciseArea>
        </Mobile>
      </ExerciseArea>
      {/* ???????????? */}
      <ChallengeArea>
        <Default>
          <div className="inner">
            <img src={ImgChallenge} alt="" />
            <div className="right">
              <Title>????????????</Title>
              <SubTitle>
                ????????????,
                <br />
                ????????? ??????
                <br />
                ???????????????
                <br />
              </SubTitle>
              <p className="desc">
                ??? ????????? ??????????????? ??????
                <br />
                ??????????????? ??????????????????.
                <br />
                ?????? ????????? ??????????????????
                <br />
                ???????????? ????????????,
                <br />
                ????????? ???????????????
              </p>
            </div>
          </div>
        </Default>
        <Mobile>
          <div className="inner">
            <Title>????????????</Title>
            <SubTitle>
              ????????????,
              <br />
              ????????? ?????? ???????????????
              <br />
            </SubTitle>
            <img src={ImgChallenge} alt="" />
            <p className="desc">
              ??? ????????? ??????????????? ?????? ???????????????
              <br /> ??????????????????. ?????? ????????? ??????????????????
              <br />
              ???????????? ????????????, ????????? ???????????????
            </p>
          </div>
        </Mobile>
      </ChallengeArea>
      {/* ???????????? */}
      <TogetherArea>
        <div className="inner">
          <Title>????????????</Title>
          <SubTitle>
            ?????? ????????????
            <Mobile>
              <br />
            </Mobile>
            ????????????,{" "}
            <Default>
              <br />
            </Default>
            ?????????
            <Mobile>
              <br />
            </Mobile>
            ??????????????? ????????????
          </SubTitle>
          <div className="tip1">
            <Default>
              <p>
                <span className="pink">?????? ???????????? ??????</span>
                <br />
                ??????????????? ?????????
                <br />
                ???????????? ?????????
                <br />
                ????????? ?????????
              </p>
            </Default>
            <Mobile>
              <p>
                <span className="pink">?????? ???????????? ??????</span>
                <br />
                ??????????????? ????????? ????????????
                <br /> ????????? ????????? ?????????
              </p>
            </Mobile>
            <div className="img-box">
              <img src={ImgChallengeTip1} alt="" />
            </div>
          </div>
          <div className="tip2">
            <ReviewBox>
              <Default>
                <p>
                  ???????????? ?????????
                  <br />
                  ?????? ????????? ?????????
                  <br />
                  ???????????? ?????? ???
                </p>
              </Default>
              <Mobile>
                <p>
                  ???????????? ????????? ?????? ????????? ?????????
                  <br />
                  ???????????? ?????? ???
                </p>
              </Mobile>
              <div className="img-inner">
                <div className="img-box">
                  <img src={ImgTogatherReview} alt="" />
                </div>
              </div>
            </ReviewBox>
            <ChatBox>
              <Default>
                <p>
                  ?????? ?????????
                  <br />
                  ????????? ???????????????
                  <br />
                  ???????????? ????????? ?????????
                </p>
              </Default>
              <Mobile>
                <p>
                  ?????? ????????? ????????? ???????????????
                  <br />
                  ???????????? ????????? ?????????
                </p>
              </Mobile>
              <img src={ImgTogatherChat} alt="" />
            </ChatBox>
          </div>
        </div>
      </TogetherArea>
      {/* ???????????? */}
      <ShoppingArea>
        <div className="inner">
          <Default>
            <div className="left">
              <Title>????????????</Title>
              <SubTitle>
                ?????? ?????? ?????? ??????,
                <br />
                ?????? ?????? ?????? ??????
                <br />
                ?????? ?????? ????????????
              </SubTitle>
              <p className="desc">
                ???????????? ????????? ????????????
                <br />
                ?????? ???????????????
                <br />
                ????????? ?????? ?????????
                <br />??? ????????? ???????????????
              </p>
            </div>
            <div className="right">
              <img src={ImgShopping} alt="" />
            </div>
          </Default>
          <Mobile>
            <Title>????????????</Title>
            <SubTitle>
              ?????? ?????? ?????? ??????,
              <br />
              ?????? ?????? ?????? ??????
              <br />
              ?????? ?????? ????????????
            </SubTitle>
            <img className="m-img" src={ImgShopping} alt="" />
            <p className="desc">
              ???????????? ????????? ????????????
              <br />
              ?????? ???????????????
              <br />
              ????????? ?????? ?????????
              <br />??? ????????? ???????????????
            </p>
          </Mobile>
        </div>
      </ShoppingArea>
      {/* ???????????? ????????? */}
      <StoryArea swiperEnd={isStoryEndSlide}>
        <h2>???????????? ???????????? ?????????</h2>
        <p className="desc">
          ???????????? ???????????? ????????? ???????????? ?????? ?????? ????????? ???????????????
        </p>
        <StoryBoxContainer>
          <Swiper
            className="story-slide"
            breakpoints={{
              "1750": {
                slidesPerView: 5.2,
                spaceBetween: 20,
              },
              "1200": {
                slidesPerView: 4.2,
                spaceBetween: 20,
              },
              "768": {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
              "300": {
                slidesPerView: 1.3,
                spaceBetween: 16,
              },
            }}
            autoHeight={true}
            onActiveIndexChange={(swiper) => changeStoryEndSlide(swiper.isEnd)}
          >
            <Default>
              {!isStoryEndSlide && !MobileSize && <SwiperSlide></SwiperSlide>}
            </Default>
            {storyList?.map((item: any) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-box">
                  <img src={ImgStoryReview} alt="" />
                  <p className="title">{item.title}</p>
                  <p className="comment">{item.comment}</p>
                  <div className="user-info">
                    <img src={ImgProfile_1} alt="" />
                    <div className="text">
                      <p className="user">
                        {item.name[0]}OO - {item.age} {item.gender}
                      </p>
                      <p className="type">{item.type}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <Default>
              {isStoryEndSlide && !MobileSize && <SwiperSlide></SwiperSlide>}
            </Default>
          </Swiper>
        </StoryBoxContainer>
      </StoryArea>
      {/* Link */}
      <LinkArea>
        <div className="inner">
          <Default>
            <div className="text-area">
              <p className="text">
                ????????? ????????? ??????,
                <br /> ?????? ???????????? ??????
                <br /> ????????? ?????? ????????????!
              </p>
              <div className="buttons">
                <LinkButtonBlack>
                  <img src={IconAppleLogoWhite} alt="" />
                  <p>App Store</p>
                </LinkButtonBlack>
                <LinkButtonBlack>
                  <img src={IconGoogleLogoWhite} alt="" />
                  <p>Google Play</p>
                </LinkButtonBlack>
              </div>
            </div>
            <img className="yoga" src={ImgYoga} alt="" />
          </Default>
          <Mobile>
            <img className="yoga-m" src={ImgYoga_m} alt="" />
            <p className="text-m">
              ????????? ????????? ??????,
              <br /> ?????? ???????????? ??????
              <br /> ????????? ?????? ????????????!
            </p>
            <div className="download-btn-m">??? ????????????</div>
          </Mobile>
        </div>
      </LinkArea>
    </Container>
  );
};

export default MainPage;
