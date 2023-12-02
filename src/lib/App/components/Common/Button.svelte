<script lang="ts"></script>
<button class="app-button {$$props.class}" on:click>
    <slot></slot>
</button>
<style lang="scss">
    .app-button{
        @apply px-8 h-[56px] rounded-full bg-primary text-white text-sm;
          }
</style>