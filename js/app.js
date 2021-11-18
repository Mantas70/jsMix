let imagesAll = ['Images/img1.jpeg','Images/img2.jpeg','Images/img3.jpeg','Images/img4.jpeg','Images/img5.jpeg','Images/img6.jpeg','Images/img7.jpeg','Images/img8.jpeg','Images/img9.jpeg','Images/img10.jpeg','Images/img11.jpeg','Images/img12.jpeg']

function showImage(){
    let divImg = document.createElement('div')
    divImg.setAttribute("class","images")
    document.getElementById('con').appendChild(divImg);
    for(let i=0;i < 12;i++){
      let image =  document.createElement('img');
      divImg.appendChild(image);
      image.src = imagesAll[i];
    }
    let disabled = document.getElementById('input1');
    disabled.remove();
}
function mixImage() {
    let image = document.querySelectorAll('img');

}