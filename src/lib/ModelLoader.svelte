<script>
  import "carbon-components-svelte/css/all.css";
  import { Button, FileUploader} from "carbon-components-svelte";
  import { useLoader } from '@threlte/core'
  import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
  import { meshGeoms } from './stores.js'

  let meshFileUploader;
  let colorMapFileUploader;
  let meshFiles = [];
  let colorMapFile = [];
  const stlMeshLoader = useLoader(STLLoader, () => new STLLoader());


  async function onMeshFilesAdded() {
    console.log('onMeshFilesAdded');
    for (let i=0; i<meshFiles.length; i++) {
      let f = meshFiles[i];
      let url = URL.createObjectURL(f);
      await stlMeshLoader.load(url, (geom) => {
        geom.computeBoundingBox();
        $meshGeoms[f.name] = geom;
        $meshGeoms = $meshGeoms;
      });
    }
  }

  async function onMeshFilesRemoved() {
    console.log('onMeshFilesRemoved');
    $meshGeoms = {};
  }

  async function onColorMapFileAdded() {
    console.log('onColorMapFileAdded');
  }

  async function onColorMapFileRemoved() {
    console.log('onColorMapFileRemoved');
  }

</script>

<div>
  <FileUploader
    bind:this={meshFileUploader}
    multiple
    bind:files={meshFiles}
    labelTitle="Mesh Files"
    buttonLabel="Load"
    labelDescription="Only .stl and .obj files are accepted."
    accept={[".stl", ".obj", ".png"]}
    status="complete"
    on:add={onMeshFilesAdded}
    on:remove={onMeshFilesRemoved}
  />
  {#if meshFiles && meshFiles.length!==0}
    <br/>
    <Button kind="tertiary" on:click={meshFileUploader.clearFiles}> 
      Clear Mesh Files 
    </Button>
  {/if}
  <br/>
  <br/>
  <FileUploader
    bind:this={colorMapFileUploader}
    bind:files={colorMapFile}
    labelTitle="Color Map"
    buttonLabel="Load"
    labelDescription="Only .json files are accepted."
    accept={[".json", ".png"]}
    status="complete"
    on:add={onColorMapFileAdded}
    on:remove={onColorMapFileRemoved}
  />
  {#if colorMapFile && colorMapFile.length!==0}
    <br/>
    <Button kind="tertiary" on:click={colorMapFileUploader.clearFiles}>
      Clear File
    </Button>
  {/if}
</div>
