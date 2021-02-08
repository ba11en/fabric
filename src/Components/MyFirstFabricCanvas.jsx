import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import SVGString from "./SVGString";

function MyFirstFabricCanvas(props) {
  const [canvas, setCanvas] = useState(undefined);
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  useEffect(() => {
    console.log("canvas", canvas);
    if (canvas !== undefined) {
      //addFixedRect(canvas);
      //addImageScaleToFixedRect(canvas);
      addSVG(canvas);
    }
  }, [canvas]);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 400,
      width: 800,
      backgroundColor: "#afafaf",
      //backgroundImage: "http://www.madisonkat.com/img/mklogo_200x200.jpg",
      selectionColor: "blue",
      selectionLineWidth: 2,
    });

  const addSVG = (canvas) => {
    // fabric.loadSVGFromURL("../logo.svg", function (objects, options) {
    //   var obj = fabric.util.groupSVGElements(objects, options);
    //   canvas.add(obj).renderAll();
    // });
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Ebene_1" x="0px" y="0px" width="30px" height="60px" viewBox="0 0 30 60" style="enable-background:new 0 0 30 60;" xml:space="preserve" xmlns:xml="http://www.w3.org/XML/1998/namespace"><path style="fill:#F8F7F7;" data-color="true" d="M18.845,20.352V60h-7.622V20.352c0,0-9.42,1.963-9.644,1.963C0.704,22.315,0,21.617,0,20.746  c0-0.336,0.103-0.646,0.282-0.899L13.869,0.491C14.161,0.189,14.562,0,15.011,0c0.456,0,0.852,0.189,1.143,0.491l13.561,19.343  c0,0,0.286,0.574,0.286,0.905c0,0.869-0.713,1.575-1.582,1.575C28.189,22.315,18.845,20.352,18.845,20.352z"/></svg>';
    let svgStr =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#aaffaa"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>';

    let svgString = <SVGString />;
    console.log("svgString", svgString);
    fabric.loadSVGFromString(svg, function (objects, options) {
      var obj = fabric.util.groupSVGElements(objects, options);
      obj.scaleToHeight(canvas.getHeight());
      canvas.centerObject(obj);

      // obj.setFill("#ff0000");

      canvas.add(obj).renderAll();
    });
  };

  const addRect = (canvas) => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: "yellow",
      angle: 34,
    });
    canvas.add(rect);

    // set properties of rect
    //rect.set({ left: 200, top: 150 });
    rect.set("fill", "red");
    rect.set({ strokeWidth: 5, stroke: "rgba(100,200,200,0.5)" });
    rect.set("angle", 15).set("flipY", true);
    console.log("rect.getWidth()", rect.getScaledWidth());
    // circle and triangle
    var circle = new fabric.Circle({
      radius: 20,
      fill: "green",
      left: 100,
      top: 100,
    });
    var triangle = new fabric.Triangle({
      width: 20,
      height: 30,
      fill: "blue",
      left: 50,
      top: 50,
    });

    canvas.add(circle, triangle);
    // canvas.setBackgroundImage(
    //   "http://www.madisonkat.com/img/mklogo_200x200.jpg"
    // );
    canvas.renderAll();

    console.log("getObjects()", canvas.getObjects());
  };

  const addImage = (canvas) => {
    console.log("addImage");
    fabric.Image.fromURL(
      "http://www.madisonkat.com/img/mklogo_200x200.jpg",
      function (oImg) {
        canvas.add(oImg);

        canvas.renderAll();
      }
    );
  };

  const addPath = (canvas) => {
    var path = new fabric.Path(
      "M121.32,0L44.58,0C36.67,0,29.5,3.22,24.31,8.41\
    c-5.19,5.19-8.41,12.37-8.41,20.28c0,15.82,12.87,28.69,28.69,28.69c0,0,4.4,\
    0,7.48,0C36.66,72.78,8.4,101.04,8.4,101.04C2.98,106.45,0,113.66,0,121.32\
    c0,7.66,2.98,14.87,8.4,20.29l0,0c5.42,5.42,12.62,8.4,20.28,8.4c7.66,0,14.87\
    -2.98,20.29-8.4c0,0,28.26-28.25,43.66-43.66c0,3.08,0,7.48,0,7.48c0,15.82,\
    12.87,28.69,28.69,28.69c7.66,0,14.87-2.99,20.29-8.4c5.42-5.42,8.4-12.62,8.4\
    -20.28l0-76.74c0-7.66-2.98-14.87-8.4-20.29C136.19,2.98,128.98,0,121.32,0z"
    );

    canvas.add(path.set({ left: 100, top: 200 }));
  };

  const addText = (canvas) => {
    var text = new fabric.Text("hello world", {
      left: 100,
      top: 100,
      fill: "red",
      fontSize: 110,
      fontFamily: "Impact",
      stroke: "#ffffff",
      strokeWidth: 3,
    });
    canvas.add(text);
  };

  const addImageAutoScaleToCanvas = (canvas) => {
    fabric.Image.fromURL(
      //"http://www.madisonkat.com/img/mklogo_200x200.jpg",
      "http://ballen.com.au/alphapride/AlphaPride%20logo.png",
      function (oImg) {
        canvas.add(oImg);
        oImg.scaleToWidth(canvas.getWidth());
        canvas.renderAll();

        //canvas.clear();
        canvas.add(oImg);

        let imgWidth = oImg.width;
        let imgHeight = oImg.height;
        let canvasWidth = canvas.getWidth();
        let canvasHeight = canvas.getHeight();

        let imgRatio = imgWidth / imgHeight;
        let canvasRatio = canvasWidth / canvasHeight;

        console.log(
          imgWidth,
          imgHeight,
          canvasHeight,
          canvasWidth,
          imgRatio,
          canvasRatio
        );

        if (canvasWidth > canvasHeight) {
          // canvas is a rectangle
          oImg.scaleToHeight(canvasHeight - 40);
        }

        // if (imgRatio <= canvasRatio) {
        //   if (imgHeight > canvasHeight) {
        //     oImg.scaleToHeight(canvasHeight);
        //   }
        // } else {
        //   if (imgWidth > canvasWidth) {
        //     oImg.scaleToWidth(canvasWidth);
        //   }
        // }

        canvas.centerObject(oImg);
      }
    );
  };

  const addFixedRect = (canvas) => {
    const rect = new fabric.Rect({
      height: 380,
      width: 780,
      fill: "#dedede",
    });
    canvas.add(rect);
    canvas.centerObject(rect);
    canvas.renderAll();
  };

  const addRect2 = (canvas) => {
    const rect = new fabric.Rect({
      height: 110,
      width: 200,
      fill: "#fafafa",
    });
    rect.scaleToWidth(canvas.getWidth());
    canvas.add(rect);
    let height = rect.getScaledHeight();
    rect.scaleToHeight(height * 0.8);
    canvas.centerObject(rect);
    canvas.renderAll();
  };

  const addImage2 = (canvas) => {
    fabric.Image.fromURL(
      "http://www.madisonkat.com/img/mklogo_200x200.jpg",
      function (oImg) {
        canvas.add(oImg);
        oImg.scaleToWidth(600);
        canvas.renderAll();
      }
    );
  };

  const addImageScaleToFixedRect = (canvas) => {
    fabric.Image.fromURL(
      //   "http://www.madisonkat.com/img/mklogo_200x200.jpg",
      "http://ballen.com.au/alphapride/AlphaPride%20logo.png",
      function (oImg) {
        canvas.add(oImg);
        oImg.scaleToWidth(780);
        canvas.centerObject(oImg);
        canvas.renderAll();
      }
    );
  };

  return (
    <div>
      <h5>MyFirstFabricCanvas</h5>
      <button onClick={() => canvas.clear()}>Clear</button>
      <button onClick={() => addRect(canvas)}>Add Rectangle</button>
      <button onClick={() => addImage(canvas)}>Add Image</button>
      <button onClick={() => addPath(canvas)}>Add Path</button>
      <button onClick={() => addSVG(canvas)}>Add SVG</button>
      <button onClick={() => addText(canvas)}>add Text</button>
      <button onClick={() => console.log(JSON.stringify(canvas))}>
        Serialize (toJSON)
      </button>

      <button onClick={() => console.log(canvas.toObject())}>to Object</button>
      <button onClick={() => console.log(canvas.toSVG())}>to SVG</button>
      <hr />
      <button onClick={() => addImageAutoScaleToCanvas(canvas)}>
        Add Image and Scale to Canvas
      </button>

      <button onClick={() => addImage2(canvas)}>Add Image set width 300</button>
      <button onClick={() => addRect2(canvas)}>
        Add Rect bit Smaller than canvas
      </button>

      <canvas id="canvas" />
    </div>
  );
}

export default MyFirstFabricCanvas;
