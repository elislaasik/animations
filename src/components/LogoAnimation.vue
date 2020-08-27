<template>
<div class="book container">
  <div class="back"></div>
  <div class="page6"><svg version="1.1" width="80%" height="auto" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M160,0H0v160h160V0z M128,128H32V32h96V128z"/>
			<rect x="64" y="64" width="32" height="32"/>
			<path d="M352,0v160h160V0H352z M480,128h-96V32h96V128z"/>
			<rect x="416" y="64" width="32" height="32"/>
			<path d="M0,512h160V352H0V512z M32,384h96v96H32V384z"/>
			<rect x="64" y="416" width="32" height="32"/>
			<rect x="256" width="64" height="32"/>
			<polygon points="256,128 288,128 288,96 320,96 320,64 224,64 224,32 192,32 192,64 192,80 192,96 256,96 			"/>
			<rect x="192" y="128" width="32" height="32"/>
			<polygon points="320,160 288,160 288,192 192,192 192,224 320,224 			"/>
			<polygon points="32,288 64,288 64,256 32,256 32,192 0,192 0,320 32,320 			"/>
			<rect x="64" y="192" width="32" height="32"/>
			<polygon points="192,320 256,320 256,288 224,288 224,256 160,256 160,192 128,192 128,256 96,256 96,320 128,320 128,288 
				144,288 160,288 192,288 			"/>
			<rect x="288" y="256" width="32" height="64"/>
			<polygon points="288,352 192,352 192,384 256,384 256,480 192,480 192,512 288,512 288,480 352,480 352,448 288,448 			"/>
			<rect x="192" y="416" width="32" height="32"/>
			<rect x="320" y="352" width="32" height="64"/>
			<polygon points="480,416 384,416 384,512 416,512 416,448 480,448 			"/>
			<rect x="448" y="480" width="64" height="32"/>
			<rect x="480" y="352" width="32" height="32"/>
			<polygon points="384,384 416,384 416,288 352,288 352,320 384,320 			"/>
			<polygon points="448,224 416,224 416,192 384,192 384,224 352,224 352,256 480,256 480,224 512,224 512,192 448,192 			"/>
			<rect x="448" y="288" width="64" height="32"/>
		</g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></div>
  <div class="page5"></div>
  <div class="page4"></div>
  <div class="page3"></div>
  <div class="page2"></div>
  <div class="page1"></div>
  <div class="front"><svg width="200px" height="auto" viewBox="0 0 26 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg></div>
</div>
</template>

<script>
import 'css-doodle'
export default {
  name: 'BorderSimmer'
}
</script>


<style scoped>
.container {
  width: 100%;
  
}


.book {
  transform-style: preserve-3d;
  margin: 0 auto;
  
  height: 245px;
  cursor: pointer;
  backface-visibility: visible;

}

.front, .back, .page1, .page2, .page3, .page4, .page5, .page6 {
  transform-style: preserve-3d;
  position: absolute;
  width: 200px;
  height: 100%;
  top: 0; left: 0;
  transform-origin: left center;
  transition: transform .5s ease-in-out, box-shadow .35s ease-in-out;
}

.front, .back {
  background: #C3F5FA;
}

.front, .page1, .page3, .page5 {
  border-bottom-right-radius: .5em;
  border-top-right-radius: .5em;
}

.back, .page2, .page4, .page6 {
  border-bottom-right-radius: .5em;
  border-top-right-radius: .5em;
}

.page1 { 
  background: #efefef;
}

.page2 {
  background: #efefef;
}

.page3 {
  background: #f5f5f5;
}

.page4 {
  background: #f5f5f5;
}

.page5 {
  background: #fafafa;
}

.page6 {
  background: #fdfdfd;
}

.book:hover .front {
  transform: rotateY(-160deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:hover .page1 {
  transform: rotateY(-150deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:hover .page2 {
  transform: rotateY(-30deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:hover .page3 {
  transform: rotateY(-140deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:hover .page4 {
  transform: rotateY(-40deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:hover .page5 {
  transform: rotateY(-130deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:hover .page6 {
  transform: rotateY(-50deg) scale(1.1);
  box-shadow: 0 1em 3em 0 rgba(0, 0, 0, .2);
}

.book:hover .back {
  transform: rotateY(-20deg) scale(1.1);
}

</style>
