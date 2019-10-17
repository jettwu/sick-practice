import './style/main.scss';

var MAXIMGSIZE = 2100000; //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
const inputImage = document.querySelector('#uploadImage')

inputImage.onchange = function (e) {
  // console.log(e.target === this) true
  if (this.files[0].size > MAXIMGSIZE) {
    alert('File size too big. Max 2M')
    this.value = ''
  } else {
    const reader = new FileReader()

    reader.onload = function (e) {
      const img = document.createElement('img')
      img.src = reader.result // event.target.result <-- same -->
      img.setAttribute('style', 'height: 10vh')
      img.onclick = function (e) {
        inputImage.value = ''
        this.parentNode.removeChild(this)
      }
      document.querySelector('body').appendChild(img)
    }

    reader.readAsDataURL(this.files[0])
  }
}

