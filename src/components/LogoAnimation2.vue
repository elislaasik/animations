<template>
<div class=" container1">
  <svg width="200px" height="247px" viewBox="0 0 26 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Group</title>
    <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="iPhone-8" transform="translate(-16.000000, -32.000000)">
            <g id="Group" transform="translate(16.000000, 32.000000)">
                <path d="M0.4,0 L23.2,0 C24.5254834,0 25.6,1.0745166 25.6,2.4 L25.6,29.6 C25.6,30.9254834 24.5254834,32 23.2,32 L0.4,32 C0.1790861,32 7.10542736e-15,31.8209139 7.10542736e-15,31.6 L7.10542736e-15,0.4 C7.10542736e-15,0.1790861 0.1790861,0 0.4,0 Z" id="Rectangle-Copy-7" fill="#C3F5FA"></path>
                <path d="M0.4,0 L16.8,0 C18.1254834,0 19.2,1.0745166 19.2,2.4 L19.2,29.6 C19.2,30.9254834 18.1254834,32 16.8,32 L0.4,32 C0.1790861,32 -5.32907052e-15,31.8209139 -5.32907052e-15,31.6 L-5.32907052e-15,0.4 C-5.32907052e-15,0.1790861 0.1790861,0 0.4,0 Z" id="Rectangle" fill="#0077FF"></path>
                <path d="M4,0 C5.3254834,0 6.4,1.0745166 6.4,2.4 L6.4,12.4 L19.2,12.4 L19.2,19.6 L6.4,19.6 L6.4,29.6 C6.4,30.9254834 5.3254834,32 4,32 L0.4,32 C0.1790861,32 -5.32907052e-15,31.8209139 -5.32907052e-15,31.6 L-5.32907052e-15,0.4 C-5.32907052e-15,0.1790861 0.1790861,0 0.4,0 L4,0 Z" id="Path" fill="#00ADE9"></path>
            </g>
        </g>
    </g>
</svg>
</div>
</template>

<script>
import 'css-doodle'
export default {
  name: 'BorderSimmer'
}
</script>


<style scoped>
.container1 {
  width: 100%;
  
}
.container{
  transition: all 0.5s;
  padding: 30px;
}
#Path, #Rectangle, #Rectangle-Copy-7{

  transform: scaleX(0);
  transition: all 0.5s;
  transform-origin: left;
}
.container:hover #Path{
  transform: scaleX(1);
}
.container:hover #Rectangle{
  transform: scaleX(1);
}
.container:hover  #Rectangle-Copy-7{
  transform: scaleX(1);
}

#Rectangle{
  left: 25%;
  transition-delay: 0.15s;
}
#Path{
  left: 25%;
  transition-delay: 0.30s;
}




</style>
