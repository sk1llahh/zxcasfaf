import {DefaultTokenTheme} from "./defaultTheme";
import {ThemeConfig} from "antd/es/config-provider/context";

export const LightTheme: ThemeConfig | undefined = {
  token: {
    ...DefaultTokenTheme,
    colorPrimary: DefaultTokenTheme.primary,
  },
  components: {
    Button: {
      colorPrimary: DefaultTokenTheme.primary,
      colorPrimaryHover: DefaultTokenTheme.hover,
      colorPrimaryActive: DefaultTokenTheme.pressed,
      controlHeight: 48,
    },
    Input: {
      controlHeight: 48,
      colorBgContainer: 'transparent',
      colorText: '#FFFFFF',
      colorTextPlaceholder: '#4A5154',
      colorBorder: '#4A5154',
      fontSize: 18
    },
    Select: {
      colorTextPlaceholder: '#FFFFFF',
    }
  }
}
