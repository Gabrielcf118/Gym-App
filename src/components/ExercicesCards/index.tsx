import { HStack, Heading, Image, VStack, Text, Icon } from "native-base";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  name: string;
};

export default function ExerciceCard({ name, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          alt="Exercicio"
          source={{
            uri: "https://ginasiovirtual.com/wp-content/uploads/2021/01/press-no-chao-peito-ginasiovirtual.jpg",
          }}
          w={16}
          h={16}
          rounded="md"
          mr={4}
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white">
            {name}
          </Heading>
          <Text fontSize="sm" color="gray.200" mt={1}>
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
