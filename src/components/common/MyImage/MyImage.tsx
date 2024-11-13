import {MyImageProps} from "./MyImage.props";
import {MyImageStyles} from "./MyImage.styles";
import React, {useState} from "react";
import cl from "classnames";

export const MyImage = ({alt = 'default image', ...props}: MyImageProps): React.ReactElement => {
  const [isImageLoad, setIsImageLoad] = useState(false)

  return (
    <MyImageStyles
      alt={alt}
      className={cl(isImageLoad ? 'imageVisible' : 'imageHidden')}
      onLoad={() => setIsImageLoad(true)}
      preview={false}
      {...props}
    />
  )
}