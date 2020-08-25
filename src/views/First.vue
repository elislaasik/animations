<template>
  <div>
     <css-doodle class="doodle">
  :doodle {
   <!-- @grid: 2 / 2em;
    grid-row-gap: 2px;
    grid-column-gap: 2px;-->
    @grid: 6 / 20em;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    margin: auto auto;

  }
  
  :doodle(:hover) { --s: 1 }
  
  transition: .5s cubic-bezier(.175, .885, .32, 1.275);
  transition-delay: @rand(400ms);
  transform: translateY(calc(var(--s) * 100%));
  border-radius: 50%;
  background: rgba(
  96, 86, 158,
  calc(@row * @col / @size)
  );
  
</css-doodle>
  </div>
</template>

<script>
import 'css-doodle'
export default {
  name: 'Template',
}
</script>

<style>
</style>
