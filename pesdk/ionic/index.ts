declare var PESDK;

pesdk_success(result) {
    console.log(result?.image);
}

pesdk_failure(error) {  
    console.log(error);
};

PESDK.openEditor(
    this.pesdk_success,
    this.pesdk_failure,
    PESDK.resolveStaticResource("www/assets/LA.jpg")
);