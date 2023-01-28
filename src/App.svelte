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
  import ThemeSelect from './lib/ThemeSelect.svelte'
  let theme = "g80";
  $: document.documentElement.setAttribute("theme", theme);
</script>

<Theme bind:theme />
<Header platformName="3D Mesh Viewer" />
<Content>
  <Grid fullWidth>
  <Row padding>
    <Column lg={{span: 13, offset: 0}} padding>
      <ModelViewer/>
    </Column>
    <Column ls={{span: 3, offset: 0}} padding>
      <ThemeSelect bind:theme/>
      <br/> <br/>
      <ModelLoader/>
    </Column>
  </Row>
  </Grid>
</Content>

