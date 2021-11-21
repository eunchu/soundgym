import styled from "styled-components";

import IconPopupClose from "assets/images/ic-popup-close.svg";
import IconOops from "assets/images/ic-oops.png";
import IconGoogle from "assets/images/ic-google.svg";
import IconApple from "assets/images/ic-apple.svg";

/**
 * >>> Style
 */
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 10;
`;
const Container = styled.div`
  width: 320px;
  height: 410px;

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #171b1c;
  border-radius: 8px;

  padding: 20px;
  z-index: 20;
`;
const TopArea = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  img {
    width: 20px;
    height: 20px;

    cursor: pointer;
  }
`;
const Contents = styled.div`
  width: 100%;

  text-align: center;
  img {
    width: 48px;
    height: 48px;

    margin-top: 12px;
    margin-bottom: 20px;
  }
  p.text1 {
    font-family: "neo-bold";
    font-size: 16px;
    line-height: 24px;
    color: #f7f8f9;

    margin-bottom: 4px;
  }
  p.text2 {
    font-family: "neo-medium";
    font-size: 14px;
    line-height: 22px;
    color: #999fa4;

    margin-bottom: 34px;
  }
  p.text3 {
    font-family: "neo-medium";
    line-height: 22px;
    color: #606872;

    cursor: pointer;
  }
  ul.buttons {
    margin-bottom: 25px;
    li {
      display: flex;
      align-items: center;

      font-family: "neo-bold";
      font-size: 14px;
      line-height: 22px;
      border-radius: 4px;

      padding: 14px 24px;
      cursor: pointer;
      img {
        width: 24px;
        height: 24px;

        margin: 0;
      }
    }
    li.google {
      color: #38323c;
      background-color: #f7f8f9;

      margin-bottom: 10px;
      img {
        margin-right: 53px;
      }
    }
    li.app-store {
      color: #ffffff;
      border: 1px solid #a5aab4;
      img {
        margin-right: 58px;
      }
    }
  }
`;
// <<< Style

interface PopupProps {
  onClickClose: () => void;
}
const Popup = ({ onClickClose }: PopupProps) => {
  return (
    <>
      <Container>
        <TopArea>
          <img src={IconPopupClose} alt="" onClick={onClickClose} />
        </TopArea>
        <Contents>
          <img src={IconOops} alt="" />
          <p className="text1">앗! 앱에서 이용 가능해요. </p>
          <p className="text2">앱에서 더 간단하게 이용할 수 있어요.</p>
          <ul className="buttons">
            <li className="google">
              <img src={IconGoogle} alt="" />
              Google Play
            </li>
            <li className="app-store">
              <img src={IconApple} alt="" />
              App Store
            </li>
          </ul>
          <p className="text3" onClick={onClickClose}>
            다음에 할게요
          </p>
        </Contents>
      </Container>
      <Background />
    </>
  );
};

export default Popup;
