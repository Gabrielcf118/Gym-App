import React, { useState } from "react";
import { Center, ScrollView, Skeleton, Text, VStack } from "native-base";
import ScreenHeader from "../../components/Headers/ScreenHeader";
import UserPhoto from "../../components/UserPhoto";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as ImagePicker from "expo-image-picker";

export default function Profile() {
  const [photoIsloading, setPhotoIsloading] = useState(false);

  const [userPhoto, setUserPhoto] = useState(
    "https://github.com/gabrielcf118.png"
  );

  async function handleUserPhoto() {
    setPhotoIsloading(true);

    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsloading(false);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
          <Center mt={6} px={10}>
            {photoIsloading ? (
              <Skeleton w={33} h={33} rounded="full" />
            ) : (
              <UserPhoto
                alt="user photo"
                source={{ uri: userPhoto }}
                size={33}
              />
            )}

            <TouchableOpacity onPress={handleUserPhoto}>
              <Text
                color="green.500"
                fontWeight="bold"
                fontSize="md"
                mt={2}
                mb={8}
              >
                Alterar foto
              </Text>
            </TouchableOpacity>

            <Input placeholder="Nome" bg="gray.900" borderRadius={5} />
            <Input
              placeholder="E-mail"
              isDisabled
              bg="gray.900"
              borderRadius={5}
            />
          </Center>

          <VStack px={10} mt={10} mb={9}>
            <Text color="gray.200" fontSize="sm" fontWeight="bold" mb={4}>
              Alterar senha
            </Text>
            <Input
              placeholder="Senha antiga"
              secureTextEntry
              bg="gray.900"
              borderRadius={5}
            />
            <Input
              placeholder="Nova senha"
              secureTextEntry
              bg="gray.900"
              borderRadius={5}
            />
            <Input
              placeholder="Confirmar nova senha"
              secureTextEntry
              bg="gray.900"
              borderRadius={5}
            />
            <Button title="Atualizar" mt={10} />
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </VStack>
  );
}

export { UserPhoto };
