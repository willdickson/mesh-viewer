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
  import { AspectRatio } from "carbon-components-svelte";
	import { degToRad } from 'three/src/math/MathUtils'
  import { meshGeoms } from './stores.js'
  import { findCenterPoint } from './geom_utils.js'
</script>

<div class='viewer'>
	<Canvas >
		<Three type={PerspectiveCamera} makeDefault position={[0, 0, 2000]} fov={50}>
      <!-- <OrbitControls maxPolarAngle={degToRad(80)} enableZoom={true} target={{ y: 0.5 }} /> -->
			<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={true} target={findCenterPoint($meshGeoms)} />
		</Three>
		<Three type={DirectionalLight} castShadow position={[3, 10, 10]} />
		<Three type={DirectionalLight} position={[-3, 10, -10]} intensity={0.2} />
		<Three type={AmbientLight} intensity={0.2} />
    {#each Object.entries($meshGeoms) as [name, geom]}
		  <Three type={Mesh} position.x={0.5} position.y={0.5} castShadow let:ref>
		  	<Three type={geom} />
		  	<Three type={MeshStandardMaterial} color="#40f0f0" />
		  </Three>
    {/each}
	</Canvas>
</div>

<style>
  .viewer {
    height: 90vh;
  }
</style>
