import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
  Text,
} from "native-base";
import React from "react";

type Props = IInputProps & {
  errorMessage?: string | null;
};

export default function Input({
  errorMessage = null,
  isInvalid,
  ...rest
}: Props) {
  const Ivanlid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={Ivanlid} mb={4}>
      <NativeBaseInput
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        placeholderTextColor="gray.300"
        isInvalid={isInvalid}
        _invalid={{
          borderWidth: 0.5,
          borderColor: "red.500",
        }}
        _focus={{
          bg: "gray.700",
          borderWidth: 1,
          borderColor: "green.500",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>
        {errorMessage && <Text color="red.500">{errorMessage}</Text>}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
