<template>
  
</template>

<script setup>
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = "http://35.201.143.205:8080/downloadFile?fileType=MessageUpload&fileId=1508&hash=11e70a066e13993684fc2cdb378611b470e80ca2aff3ec4f8f81d39d29eff2db"  //（放你的路徑）
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
</script>
