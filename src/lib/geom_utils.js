
export function findCenterPoint(meshGeoms) { 
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
  let xctr = 0.5*(xmax + xmin);
  let yctr = 0.5*(ymax + ymin);
  let zctr = 0.5*(zmax + zmin);
  let centerPoint = {x: xctr, y: yctr, z: zctr};
  return centerPoint 
}
