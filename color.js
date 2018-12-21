// NOTE: http://www.w3.org/TR/AERT#color-contrast
  public static getColorConstract({ red, green, blue }) {
    const redBrightness = Number(red) * 299;
    const greenBrightness = Number(green) * 587;
    const blueBrightness = Number(blue) * 114;
    const averageBrightness = Math.round((redBrightness + greenBrightness + blueBrightness) / 1000)
    return averageBrightness > 125 ? '#000000' : '#ffffff';
  }

  public static shadeColor(color: string, percent: number) {
    let R: any = parseInt(color.substring(1,3),16);
    let G: any = parseInt(color.substring(3,5),16);
    let B: any = parseInt(color.substring(5,7),16);

    R = Math.floor(R * (100 + percent) / 100);
    G = Math.floor(G * (100 + percent) / 100);
    B = Math.floor(B * (100 + percent) / 100);

    R = (R<255)?R:255;
    G = (G<255)?G:255;
    B = (B<255)?B:255;

    let RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    let GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    let BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
  }

  public static hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      red: parseInt(result[1], 16),
      green: parseInt(result[2], 16),
      blue: parseInt(result[3], 16)
    } : null;
  }
