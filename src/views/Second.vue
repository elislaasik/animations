<template>
  <div>
      <css-doodle grid="31x1">
          :doodle{
              @size: 25em;
              margin: auto auto;
              grid-row-gap: 1px;
            
          }
           
            background: steelblue;
            width: @rand(5%, 100%);

            transition: .5s cubic-bezier(.175, .885, .32, 1.275);
            transition-delay: 500ms;
            transform: translateX(calc(var(--s) * 100%));

            @keyframes slideInFromLeft {
                0% {
                    transform: translateX(-100%);
                }
                100% {
                    transform: translateX(0);
                    }
            }

            animation: 1s ease-out 0s 1 slideInFromLeft;
      </css-doodle>

  </div>
</template>

<script>
import 'css-doodle'
export default {
  name: 'Second',
}
</script>

<style>
</style>
