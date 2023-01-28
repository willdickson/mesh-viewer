
export function getBoundingBox(meshGeoms) {
  let xMaxArray = [];
  let yMaxArray = [];
  let zMaxArray = [];
  let xMinArray = [];
  let yMinArray = [];
  let zMinArray = [];
  for (const key in meshGeoms) {
    let geom = meshGeoms[key];
    xMaxArray.push(geom.boundingBox.max.x);
    yMaxArray.push(geom.boundingBox.max.y);
    zMaxArray.push(geom.boundingBox.max.z);
    xMinArray.push(geom.boundingBox.min.x);
    yMinArray.push(geom.boundingBox.min.y);
    zMinArray.push(geom.boundingBox.min.z);
  }
  let xmax = Math.max(...xMaxArray);
  let ymax = Math.max(...yMaxArray);
  let zmax = Math.max(...zMaxArray);
  let xmin = Math.min(...xMinArray);
  let ymin = Math.min(...yMinArray);
  let zmin = Math.min(...zMinArray);
  let bbox = {
    min: {x: xmin, y: ymin, z: zmin},
    max: {x: xmax, y: ymax, z: zmax},
  };
  return bbox;
}

export function findCenterPoint(meshGeoms) { 
  let bbox = getBoundingBox(meshGeoms);
  let xctr = 0.5*(bbox.max.x + bbox.min.x);
  let yctr = 0.5*(bbox.max.y + bbox.min.y);
  let zctr = 0.5*(bbox.max.z + bbox.min.z);
  let centerPoint = {x: xctr, y: yctr, z: zctr};
  return centerPoint 
}

export function getCameraPosition(meshGeoms) {
  let p = [0, 0, 0];
  if (Object.entries(meshGeoms).length > 0) {
    let bbox = getBoundingBox(meshGeoms);
    let x = 0.0*(bbox.max.x + bbox.min.x);
    let y = 0.5*(bbox.max.y + bbox.min.y);
    let dx = bbox.max.x - bbox.min.x;
    let dy = bbox.max.y - bbox.min.y;
    let dz = bbox.max.z - bbox.min.z;
    let z = 4*Math.max(dx, dy, dz);
    p = [x, y, z];
  }
  return p;
}

export function getMeshColor(name, colorMap) {
  let meshColor = '#505050';
  if (colorMap[name]) {
    meshColor = colorMap[name];
  }
  return meshColor;
}




