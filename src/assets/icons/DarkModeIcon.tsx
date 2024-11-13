import Icon from "@ant-design/icons";

const Svg = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M22 12.9009C21.5127 18.174 17.0067 22.1578 11.7135 21.9952C6.42038 21.8326 2.16745 17.5796 2.00481 12.2865C1.84217 6.99333 5.82596 2.48731 11.0991 2C8.8058 5.10263 9.12747 9.41621 11.8556 12.1444C14.5838 14.8725 18.8974 15.1942 22 12.9009Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
export const MyIcon = (props: any) => <Icon component={Svg} {...props} />;
