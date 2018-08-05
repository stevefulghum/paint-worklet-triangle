class TrianglePainter {

  static get inputProperties() {
    return ['--arrow-pos-left', '--arrow-height', '--arrow-width', '--arrow-fill', '--arrow-stroke'];
  }
  
  paint(ctx, geom, properties, args) {
    const widthProp = properties.get('--arrow-width');
    const heightProp = properties.get('--arrow-height');
    const fill = properties.get('--arrow-fill');
    const stroke = properties.get('--arrow-stroke');
    
    let width;
    let height;
    let midpoint;
    
    if (!widthProp.unit) {
      console.log('is not fancy');
      
      width = parseInt(widthProp[0], 10);
      height = parseInt(heightProp[0], 10);
      
      
      // let derp = width;
    } else {
      width = widthProp.value;
      height = heightProp.value;
    }
    
    midpoint = width / 2;
    
    console.log(width);
    console.log(height);
    console.log(midpoint);
    
    ctx.beginPath();
    ctx.moveTo(1, (height + 1));
    ctx.lineTo(midpoint, 3);
    ctx.lineTo((width - 1), (height + 1));
    ctx.lineTo(1, (height + 1));
    ctx.closePath();
    
    ctx.lineWidth = 2;
    ctx.strokeStyle = stroke.toString();
    ctx.stroke();
    
    ctx.fillStyle = fill.toString();
    ctx.fill();
  }
  
  parseCSSPxLength(value) {
    let slicer = -2;
    let parsed = value.slice(slicer);
    
    return parsed;
  }
}

registerPaint('triangle', TrianglePainter);

