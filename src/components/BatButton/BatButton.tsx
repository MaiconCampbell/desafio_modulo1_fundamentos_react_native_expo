import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import generatePass from "../../service/passwordService";

export function BatButton() {
  const [pass, setPass] = useState("");

  const handleGenerateButton = () => {
    let generateToken = generatePass();
    setPass(generateToken);
  };

  const handleCopyButton = () => {
    Clipboard.setStringAsync(pass);
  };

  return (
    <>
      <BatTextInput pass={pass} />

      <Pressable onPress={handleGenerateButton} style={styles.button}>
        <Text style={styles.Text}>⚡ GENERATE</Text>
      </Pressable>

      <Pressable onPress={handleCopyButton} style={styles.button}>
        <Text style={styles.Text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
