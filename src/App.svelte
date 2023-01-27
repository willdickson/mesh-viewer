<script>
  import "carbon-components-svelte/css/all.css";
  import { 
    Header, 
    Content, 
    Grid, 
    Row, 
    Column, 
    Theme,
    RadioButtonGroup,
    RadioButton,
  } from "carbon-components-svelte";
  import ModelViewer from './lib/ModelViewer.svelte'
  import ModelLoader from './lib/ModelLoader.svelte'
  let theme = "g80";
  $: document.documentElement.setAttribute("theme", theme);
</script>


<Header platformName="3D Mesh Viewer" />
<Content>
  <Grid fullWidth>
  <Row padding>
    <Column lg={{span: 13, offset: 0}} padding>
      <ModelViewer/>
    </Column>
    <Column ls={{span: 3, offset: 0}} padding>
      <Theme bind:theme />
      <RadioButtonGroup legendText="Carbon theme" bind:selected={theme}>
        {#each ["white", "g10", "g80", "g100"] as value}
          <RadioButton labelText={value} {value} />
        {/each}
      </RadioButtonGroup>
      <br/>
      <br/>
      <ModelLoader/>
    </Column>
  </Row>
  </Grid>
</Content>

