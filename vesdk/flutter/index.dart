import 'package:video_editor_sdk/video_editor_sdk.dart';

try {
  final result = await VESDK.openEditor(Video("assets/Skater.mp4"));
  print(result?.video);
} catch (error) {
  print(error);
}