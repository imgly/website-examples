vesdk_success = function (result) {
  console.log(result.video);
};

vesdk_failure = function (error) {
  console.log(error);
};

VESDK.openEditor(
  vesdk_success,
  vesdk_failure,
  VESDK.resolveStaticResource("www/assets/Skater.mp4")
);
