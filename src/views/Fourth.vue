<template>
  <div>
      <css-doodle>
:doodle {
    @grid: 18 / 100em;
    grid-column-gap:20px;
    grid-row-gap: 20px;
  }
  :doodle(:hover) { --s: 1 }

  background: #45e670;
   transition: @r(.5s) ease;
  opacity: @rand(0.1, 0.5);
  @shape: fish;


	@random {
	filter: blur(1.5px);
	}
    @random {
	animation: move 5s linear alternate infinite;
	}
    @keyframes move {		
		0% {
			transform:	translate(
			@rand(-50%, 50%), @rand(-50%, 50%)
			);
		}
	
		100% {
			transform:	translate(
			@rand(-50%, 50%), @rand(-50%, 50%)
			);
		}
	}
	

  
	</css-doodle>
	<div class="header">
		<h1>Hey, There!</h1>
	</div>
  </div>
</template>

<script>
import 'css-doodle'
export default {
  name: 'Fourth'
}
</script>

<style scoped>
html{
    margin-top: 0px;
    padding-top: 0px;
}
.header {
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  transform: translateY(-50%);
}
.header h1 {
  color: #333;
  text-transform: uppercase;
  text-align: center;
  top: 50%;
  position: absolute;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  font-family: Impact;
  letter-spacing: 4px;
  font-size: 45px;
  margin: 0;
}
.header h1:after {
  content: "-ALL ABOARD-";
  display: block;
  text-align: center;
  font-size: small;
}


</style>
