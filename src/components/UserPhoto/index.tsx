import React from "react";
import { IImageProps, Image } from "native-base";

type Props = IImageProps & {
  size: number;
};

export default function UserPhoto({ size, ...rest }: Props) {
  return (
    <Image
      w={size}
      h={size}
      rounded="full"
      borderWidth={2}
      borderColor="gray.600"
      {...rest}
    />
  );
}
