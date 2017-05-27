/**
 * Created by jeewendrakumar on 5/28/2017.
 */
function showImage() {
    var biggerImg = document.querySelector("#biggerImg");
    var image = document.createElement('img');
    var imgsrc = "https://placehold.it/50x50";
    image.src = imgsrc;
    image.style.width = "300px";
    image.style.height = "300px";
    biggerImg.append(image);
}
function removeImage() {
    var element = document.querySelector("#biggerImg");
    element.removeChild(element.firstChild);
}
document.getElementById('hoverImg').addEventListener('mouseover', showImage);
document.getElementById('hoverImg').addEventListener('mouseout', removeImage);