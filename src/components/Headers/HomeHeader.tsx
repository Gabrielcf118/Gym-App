import React from "react";
import { HStack, Heading, Icon, Text, VStack } from "native-base";
import UserPhoto from "../UserPhoto";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function HomeHeader() {
  return (
    <HStack bgColor="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        alt="Imgaem do usuario"
        source={{ uri: "https://github.com/gabrielcf118.png" }}
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.200" fontSize="md">
          Ola,
        </Text>
        <Heading color="gray.200" fontSize="md">
          Gabriel
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
