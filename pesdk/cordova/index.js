pesdk_success = function (result) {
  console.log(result.image);
};

pesdk_failure = function (error) {
  console.log(error);
};

PESDK.openEditor(
  pesdk_success,
  pesdk_failure,
  PESDK.resolveStaticResource("www/assets/LA.jpg")
);
