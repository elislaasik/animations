<template>
  <div>
<css-doodle> 
	:doodle {
		@grid: 1x3 / 100vmax;
    position: absolute;
    top: 0; left: 0;
    z-index: 0;
	}

	@size: 100% 150%;
	position: absolute;
  
	background: @m(100, (
		linear-gradient(transparent, @p(
      #FFFDE1@repeat(2, @p([0-9a-f])), 
      #FB3569@repeat(2, @p([0-9a-f])) 
    ))
		@r(0%, 100%) @r(0%, 100%) /
		@r(1px) @r(23vmin)
		no-repeat
	));

	will-change: transform;
	animation: f 20s linear calc(-20s / @size() * @i()) infinite;
	@keyframes f {
		from { transform: translateY(-100%) }
		to { transform: translateY(100%) }
	}
</css-doodle>
  </div>
</template>

<script>
import 'css-doodle'
export default {
  name: 'Fifth',
}
</script>

<style scoped>
div { 
  height: 100vh; 
  margin: 0; 
  background: #261c33; 
  overflow: hidden; 
  display: flex; 
  align-items: center; 
  justify-content: center 
}
</style>
