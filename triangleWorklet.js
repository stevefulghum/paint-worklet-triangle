class trianglePainter {
    paint(ctx, geom, properties) {
      let midpoint = geom.width / 2;
      let bottom = geom.height;
      let right = geom.width;
      
      ctx.beginPath();
      ctx.moveTo(0, bottom);
      ctx.lineTo(midpoint, 0);
      ctx.lineTo(right, bottom);
      ctx.lineTo(0, bottom);
      ctx.closePath();
      
      ctx.fillStyle = 'green';
      ctx.fill();
    }
  }
  
  registerPaint('triangle', trianglePainter);
  