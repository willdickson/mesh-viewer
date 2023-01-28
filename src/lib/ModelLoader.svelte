<script>
  import "carbon-components-svelte/css/all.css";
  import { Button, FileUploader, Accordion, AccordionItem } from "carbon-components-svelte";
  import { useLoader } from '@threlte/core'
  import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
  import { meshGeoms, numMeshTotal, numMeshLoaded, colorMap } from './stores.js'

  let meshFileUploader;
  let colorMapFileUploader;
  let meshFiles = [];
  let colorMapFile = [];
  const stlMeshLoader = useLoader(STLLoader, () => new STLLoader());
  const objMeshLoader = useLoader(OBJLoader, () => new OBJLoader());

  async function onMeshFilesAdded() {
    $meshGeoms = {};
    $numMeshLoaded = 0;
    $numMeshTotal = meshFiles.length;
    for (let i=0; i<meshFiles.length; i++) {
      let f = meshFiles[i];
      let url = URL.createObjectURL(f);
      let ext = f.name.split('.').pop();
      let meshLoader;
      if (ext === 'stl') {
        meshLoader = stlMeshLoader;
      }
      else {
        meshLoader = objMeshLoader;
      }
      await meshLoader.load(url, (geom) => {
        geom.computeBoundingBox();
        $meshGeoms[f.name] = geom;
        $meshGeoms = $meshGeoms;
        $numMeshLoaded += 1;
      });
    }
  }

  async function onMeshFilesRemoved() {
    $meshGeoms = {};
    $numMeshTotal = 0;
    $numMeshLoaded = 0;
  }

  async function onColorMapFileAdded() {
    if (colorMapFile.length > 0) {
      let fileReader = new FileReader();
      fileReader.addEventListener("load", (e) => {
        try {
          $colorMap = JSON.parse(fileReader.result);
          console.log($colorMap);
        }
        catch(error) {
          console.log('JSON parse error', error);
        }
      })
      fileReader.readAsText(colorMapFile[0]);
    }
  }

  async function onColorMapFileRemoved() {
    $colorMap = {};
  }

</script>

<div>
  Loaded ({$numMeshLoaded}/{$numMeshTotal}) Files
  <br/><br/>
  <Accordion>
    <AccordionItem title="Mesh Files">
      <br/> 
      <FileUploader
        bind:this={meshFileUploader}
        multiple
        bind:files={meshFiles}
        labelTitle=".stl or .obj"
        buttonLabel="Load"
        accept={[".stl", ".obj"]}
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
      </AccordionItem>
      <AccordionItem title="Color Map">
      <br/>
      <FileUploader
        bind:this={colorMapFileUploader}
        bind:files={colorMapFile}
        labelTitle=".json"
        buttonLabel="Load"
        accept={[".json"]}
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
    </AccordionItem>
  </Accordion>
</div>
