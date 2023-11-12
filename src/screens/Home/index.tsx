import React, { useState } from "react";
import { FlatList, HStack, Heading, Text, VStack } from "native-base";
import HomeHeader from "../../components/Headers/HomeHeader";
import Group from "../../components/Group";
import ExerciceCard from "../../components/ExercicesCards";
import { useNavigation } from "@react-navigation/native";
import { TabNavigatorRoutesProps } from "../../routes/app.routes";

export default function Home() {
  const [groups, setGroups] = useState([
    "Costas",
    "Biceps",
    "Ombro",
    "Peito",
    "Perna",
  ]);

  const [exercices, setExercices] = useState([
    "Exercicio de perna",
    "Exercicio de costas",
    "Exercicio de abdomen",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");

  const navigation = useNavigation<TabNavigatorRoutesProps>();

  function handleOpenExerciceDetails() {
    navigation.navigate("Exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercicios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {exercices.length}
          </Text>
        </HStack>

        <FlatList
          data={exercices}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciceCard onPress={handleOpenExerciceDetails} name={item} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </VStack>
    </VStack>
  );
}
