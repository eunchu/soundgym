// 에러가 전체 애플리케이션을 중단시키지 않게 하기 위한 코드입니다.
// 하위 컴포넌트 트리 어디든 에러를 기록하며, 깨진 컴포넌트 대신 폴백 UI를 보여주는 컴포넌트

import React, { Component } from "react";

interface Props {}
interface State {
  hasError: boolean;
}
export const errorBoundary = (Comp: React.FC<object> | any) =>
  class ErrorBoundary extends Component<Props, State> {
    constructor(props: any) {
      super(props);
      this.state = { hasError: false };

      this.resetError = this.resetError.bind(this);
    }

    render() {
      return this.state.hasError ? (
        <h1 onReset={this.resetError}>Something broken!</h1>
      ) : (
        <Comp />
      );
    }

    // NOTE 에러 발생 시 상태 변경
    componentDidCatch(error: Error) {
      this.setState({ hasError: true });
    }

    // NOTE 에러 초기화
    resetError() {
      this.setState({ hasError: false });
    }
  };
