import { Center, Heading, Text, VStack, SectionList } from "native-base";
import React, { useState } from "react";
import ScreenHeader from "../../components/Headers/ScreenHeader";
import HistoryCard from "../../components/HistoryCards";

export default function History() {
  const [exercices, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["Puxada frontal", "Remada unilateral"],
    },
    {
      title: "27.08.22",
      data: ["Puxada frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Historico de exercicios" />

      <SectionList
        sections={exercices}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="white" fontSize="sm" mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          exercices.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="gray.200" textAlign="center">
            Nao ha exercicios registrados ainda
          </Text>
        )}
      />
    </VStack>
  );
}
