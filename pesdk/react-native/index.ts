import { PESDK } from "react-native-photoeditorsdk";

try {
  const result = await PESDK.openEditor(require("./assets/LA.jpg"));
  console.log(result?.image);
} catch (error) {
  console.log(error);
}
