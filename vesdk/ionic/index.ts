declare var VESDK;

vesdk_success(result) {
    console.log(result?.video);
};

vesdk_failure(error) {
    console.log(error);
};

VESDK.openEditor(
    this.vesdk_success,
    this.vesdk_failure,
    VESDK.resolveStaticResource('www/assets/Skater.mp4')
);