import styled from "styled-components";

import { mediaQueries } from "assets/styles/media";
import { Default, Mobile } from "utils";

/**
 * Style >>>
 */
interface ContainerProps {
  bg: string;
}
const Container = styled.footer<ContainerProps>`
  background-color: ${(props) => props.bg};
  border-top: 1px solid #c5c8ce;
  padding: 40px 0 60px;
  div.inner {
    max-width: 1223px;
    margin: auto;

    @media (max-width: 1380px) {
      padding: 0 16px;
    }
    h3 {
      font-family: "neo-bold";
      font-size: 14px;
      line-height: 22px;
      color: #606872;

      margin-bottom: 16px;
    }
    h3.title {
      margin-bottom: 10px;
      ${mediaQueries("mobile")`
        margin-top: 30px;
      `};
    }
    ul {
      display: flex;
      align-items: center;

      margin-bottom: 36px;

      ${mediaQueries("mobile")`
        display: block;
      `};
      li {
        font-family: "neo-medium";
        font-size: 14px;
        line-height: 22px;
        color: #999fa4;

        margin-right: 20px;
        cursor: pointer;

        ${mediaQueries("mobile")`
          margin-right: 0;
          margin-bottom: 18px;
        `};
      }
    }
    address {
      div {
        display: flex;
        align-items: center;
        ${mediaQueries("mobile")`
          margin-bottom: 4px;
        `};
        p {
          display: inline-block;
          font-size: 12px;
          line-height: 18px;
          color: #a5aab4;
        }
        span.bar {
          width: 1px;
          height: 12px;

          background-color: #a5aab4;
          margin: 0 6px;
        }
      }
    }
    div.copy {
      font-size: 10px;
      line-height: 12px;
      color: #c5c8ce;

      margin-top: 12px;
    }
  }
`;
// <<< Style

interface FooterProps {
  theme: string;
}
const Footer = ({ theme }: FooterProps) => {
  return (
    <Container bg={theme === "dark" ? "#28323C" : "#F4F4F4"}>
      <div className="inner">
        <h3>사운드짐 이용 안내</h3>
        <ul>
          <li>서비스 이용약관</li>
          <li>개인정보 처리방침</li>
          <li>자주 묻는 질문</li>
          <li>트레이너 채용</li>
        </ul>
        <h3 className="title">(주)사운드짐</h3>
        {/* 데스크탑 UI */}
        <Default>
          <address>
            <div>
              <p>사업자 등록번호 636-88-01257</p>
              <span className="bar" />
              <p>대표 이미림</p>
              <p>통신판매번호 2019-서울강남-03792</p>
            </div>
            <div>
              <p>
                주소 서울특별시 강남구 테헤란로 507, 14층(삼성동, Wework 빌딩)
              </p>
              <p>이메일 soundgym@soundgym.kr </p>
              <p>전화번호 070-5157-8210</p>
            </div>
          </address>
        </Default>
        {/* 모바일 UI */}
        <Mobile>
          <address>
            <div>
              <p>사업자 등록번호 636-88-01257</p>
              <span className="bar" />
              <p>대표 이미림</p>
            </div>
            <div>
              <p>통신판매번호 2019-서울강남-03792</p>
            </div>
            <div>
              <p>전화번호 070-5157-8210</p>
            </div>
            <div>
              <p>
                주소 서울특별시 강남구 테헤란로 507, 14층(삼성동,
                <br /> Wework 빌딩)
              </p>
            </div>
            <div>
              <p>이메일 soundgym@soundgym.kr </p>
            </div>
          </address>
        </Mobile>
        <div className="copy">Copyright@SOUNDGYM. All rights reserved</div>
      </div>
    </Container>
  );
};

export default Footer;
