import React from "react";
import {Layout} from "antd";
import {useOutlet} from "react-router-dom";
import {useTheme, useLang} from "../../hooks";
import {StyledLayout} from "./Layout.styles";
import {Header} from "../Header/Header";

export const PublicLayout = (): React.ReactElement => {
  const outlet = useOutlet();
  const {theme} = useTheme()
  const {lang} = useLang()

  return (
    <StyledLayout className={`theme-${theme}`} lang={lang}>
      <Layout>
        <Header/>

        <Layout.Content>
          {outlet}
        </Layout.Content>
      </Layout>
    </StyledLayout>
  )
}
