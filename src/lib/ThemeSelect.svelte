<script>
  import { 
    RadioButtonGroup,
    RadioButton,
  } from "carbon-components-svelte";
  export let theme = 'g80';
</script>

<RadioButtonGroup legendText="Carbon theme" bind:selected={theme}>
  {#each ["white", "g10", "g80", "g100"] as value}
    <RadioButton labelText={value} {value} />
  {/each}
</RadioButtonGroup>
