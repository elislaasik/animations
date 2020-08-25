<template>
  <div>
      <css-doodle>
  :doodle {
    @grid: 18 / 100vmax;
    background: #0a0c27;
  }
  --hue: calc(180 + 1.5 * @row * @col);
  background: hsl(var(--hue), 50%, 70%);
  margin: -.5px;
  transition: @r(.5s) ease;
  clip-path: polygon(@pick(
    '0 0, 100% 0, 100% 100%',
    '0 0, 100% 0, 0 100%',
    '0 0, 100% 100%, 0 100%',
    '100% 0, 100% 100%, 0 100%'
  ));
</css-doodle>
  </div>
</template>

<script>
import 'css-doodle'; 

export default {
  name: 'Template',
}
</script>

<style>
body {
  margin: 0;
  overflow-x: hidden;
}

.doodle {
  overflow: hidden;
}
</style>
