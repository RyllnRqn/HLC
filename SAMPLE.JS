function toggleBiography() {
    const bioElement = document.getElementById("performer-bio");
    const currentText = bioElement.style.display;

    if (currentText === "none") {
        bioElement.style.display = "block";
    } else {
        bioElement.style.display = "none";
    }
}
