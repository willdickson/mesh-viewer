<script>
  import { Canvas, InteractiveObject, OrbitControls, Three } from '@threlte/core'
  import { spring } from 'svelte/motion'
  import {
    AmbientLight,
    BoxGeometry,
    CircleGeometry,
    DirectionalLight,
    Group,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera
  } from 'three'
  import { degToRad } from 'three/src/math/MathUtils'
  import { AspectRatio } from "carbon-components-svelte";
  import { meshGeoms, meshChecked, colorMap } from './stores.js'
  import { findCenterPoint, getCameraPosition, getMeshColor } from './geom_utils.js'
</script>

<div class='viewer'>
  <Canvas >
    <Three type={PerspectiveCamera} makeDefault position={getCameraPosition($meshGeoms)} fov={50}> 
      <OrbitControls enableZoom={true} target={findCenterPoint($meshGeoms)}/>
    </Three>
    <Three type={DirectionalLight} castShadow position={[3, 10, 10]} />
    <Three type={DirectionalLight} position={[-3, 10, -10]} intensity={0.2} />
    <Three type={AmbientLight} intensity={0.2} />
    {#each Object.entries($meshGeoms) as [name, geom]}
      {#if $meshChecked[name]}
        <Three type={Mesh} position.x={0.5} position.y={0.5} castShadow let:ref>
          <Three type={geom} />
          <Three type={MeshStandardMaterial} color={getMeshColor(name,$colorMap)} />
        </Three>
      {/if}
    {/each}
  </Canvas>
</div>

<style>
  .viewer {
    height: 90vh;
  }
</style>
