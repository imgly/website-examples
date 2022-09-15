import { VESDK } from "react-native-videoeditorsdk";

try {
  const result = await VESDK.openEditor(require("./assets/Skater.mp4"));
  console.log(result?.video);
} catch (error) {
  console.log(error);
}
