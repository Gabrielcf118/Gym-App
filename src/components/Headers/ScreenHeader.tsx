import React from "react";
import { Center, Heading, Text } from "native-base";

type Props = {
  title: string;
};

export default function ScreenHeader({ title }: Props) {
  return (
    <Center bg="gray.600" pb={6} pt={16}>
      <Heading color="gray.200" fontSize="xl">
        {title}
      </Heading>
    </Center>
  );
}
