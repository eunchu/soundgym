interface BreakpointsProps {
  // desktop: number;
  tablet: number;
  mobile: number;
}
const breakpoints: BreakpointsProps = {
  // desktop: 1024, // 1024 ~
  tablet: 1023, // ~1024
  mobile: 767, // 360~768
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};

// 사용법
// ${mediaQueries('mobile')`
// color: green;
// `};
