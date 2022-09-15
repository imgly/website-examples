import 'package:photo_editor_sdk/photo_editor_sdk.dart';

try {
  final result = await PESDK.openEditor(image: "assets/LA.jpg");
} catch (error) {
  print(error);
}