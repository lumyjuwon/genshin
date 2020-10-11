export function combineProps(defaultProps: any, elementProps: any): object {
  return {
    ...defaultProps,
    ...elementProps,
  }
}
