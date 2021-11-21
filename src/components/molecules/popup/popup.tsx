import { useCallback } from "react";
import ReactDOM from "react-dom";

import { errorBoundary } from "hocs";

import PopupPresenter from "./popup.presenter";

interface PopupPreviewProps {
  onClose: () => void;
}
const Popup = ({ onClose }: PopupPreviewProps) => {
  // 팝업 닫기 버튼 클릭 시 동작(:창 닫힘)
  const onClickClose = useCallback(() => onClose(), [onClose]);
  return <PopupPresenter onClickClose={onClickClose} />;
};

errorBoundary(Popup);

const openPopup = () => {
  const wrapper = document.body.appendChild(document.createElement("div"));

  return new Promise((resolve, reject) => {
    try {
      ReactDOM.render(<Popup onClose={() => resolve(null)} />, wrapper);
    } catch {
      reject("Failed to mount Popup component");
    }
  }).then((result) => {
    ReactDOM.unmountComponentAtNode(wrapper);
    wrapper.remove();

    return result;
  });
};

export { openPopup };
