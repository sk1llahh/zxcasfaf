import Icon from "@ant-design/icons";

const Svg = () => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.9997 1V3.18182M12.9997 22.8182V25M4.51281 4.51273L6.06185 6.06182M19.937 19.9382L21.486 21.4873M1 13H3.18176M22.8182 13H25M4.51281 21.4873L6.06185 19.9382M19.937 6.06179L21.486 4.5127M12.9991 18.4547C16.0115 18.4547 18.4535 16.0127 18.4535 13.0002C18.4535 9.98774 16.0115 7.54565 12.9991 7.54565C9.98676 7.54565 7.54474 9.98774 7.54474 13.0002C7.54474 16.0127 9.98676 18.4547 12.9991 18.4547Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
export const MyIcon = (props: any) => <Icon component={Svg} {...props} />;
