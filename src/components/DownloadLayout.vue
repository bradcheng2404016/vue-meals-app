<template>
  
</template>

<script setup>
  // <button @click="handleClick">Click me</button>
  let url = new URL(window.location.href);
  let fileType = url.searchParams.get("fileType");
  let fileId = url.searchParams.get("fileId");
  let hash = url.searchParams.get("hash");
  console.log("fileType="+ fileType );
  console.log("fileId="+fileId );
  console.log("hash="+ hash );

  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = "http://35.201.143.205:8080/downloadFile?fileType="+fileType+"&fileId="+fileId+"&hash="+hash  //（放你的路徑）
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
</script>
