const {
  Context2d,
  CanvasRenderingContext2D,
  CanvasGradient,
  CanvasPattern,
  Image,
  ImageData,
  PNGStream,
  PDFStream,
  JPEGStream,
  DOMMatrix,
  DOMPoint,
  registerFont,
  parseFont,
  createImageData,
  loadImage,
  backends,
  version,
  cairoVersion,
  jpegVersion,
  gifVersion,
  freetypeVersion,
} = require('canvas');

const {WebGLRenderingContext} = require('gl/src/javascript/webgl-rendering-context');
const {WebGLActiveInfo} = require('gl/src/javascript/webgl-active-info');
const {WebGLFramebuffer} = require('gl/src/javascript/webgl-framebuffer');
const {WebGLBuffer} = require('gl/src/javascript/webgl-buffer');
const {WebGLDrawingBufferWrapper} = require('gl/src/javascript/webgl-drawing-buffer-wrapper');
const {WebGLProgram} = require('gl/src/javascript/webgl-program');
const {WebGLRenderbuffer} = require('gl/src/javascript/webgl-renderbuffer');
const {WebGLShader} = require('gl/src/javascript/webgl-shader');
const {WebGLShaderPrecisionFormat} = require('gl/src/javascript/webgl-shader-precision-format');
const {WebGLTexture} = require('gl/src/javascript/webgl-texture');
const {WebGLUniformLocation} = require('gl/src/javascript/webgl-uniform-location');
const Canvas = require('./canvas');

const _drawImage = CanvasRenderingContext2D.prototype.drawImage;
CanvasRenderingContext2D.prototype.drawImage = function (img, ...args) {
  // call __ctx__ to sync image data
  if(img instanceof Canvas && img.__gl__) img.__ctx__; // eslint-disable-line no-unused-expressions
  return _drawImage.call(this, img, ...args);
};

const mockDOM = require('./mock');

function createCanvas(width, height, type) {
  return new Canvas(width, height, type);
}

module.exports = {
  Canvas,
  Context2d,
  CanvasRenderingContext2D,
  WebGLRenderingContext,
  WebGLActiveInfo,
  WebGLFramebuffer,
  WebGLBuffer,
  WebGLDrawingBufferWrapper,
  WebGLProgram,
  WebGLRenderbuffer,
  WebGLShader,
  WebGLShaderPrecisionFormat,
  WebGLTexture,
  WebGLUniformLocation,
  CanvasGradient,
  CanvasPattern,
  Image,
  ImageData,
  PNGStream,
  PDFStream,
  JPEGStream,
  DOMMatrix,
  DOMPoint,
  registerFont,
  parseFont,
  createCanvas,
  createImageData,
  loadImage,
  backends,
  version,
  cairoVersion,
  jpegVersion,
  gifVersion,
  freetypeVersion,
  mockDOM,
};