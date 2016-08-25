var has = require('has');

var camel = [
    "allowReorder", "attributeName", "attributeType", "autoReverse", "baseFrequency",
    "baseProfile", "calcMode", "clipPathUnits", "contentScriptType", "contentStyleType",
    "diffuseConstant", "edgeMode", "externalResourcesRequired", "filterRes", "filterUnits",
    "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength",
    "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle",
    "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits",
    "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits",
    "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio",
    "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions",
    "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod",
    "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage",
    "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget",
    "xChannelSelector", "yChannelSelector", "zoomAndPan"
];

module.exports = function (name, attr) {
    var elem = document.createElementNS('http://www.w3.org/2000/svg', name);
    if (!attr) return elem;
    for (var key in attr) {
        if (!has(attr, key)) continue;
        var nkey;
        if (camel.indexOf(key) === -1) {
            nkey = key.replace(/([a-z])([A-Z])/g, function (_, a, b) {
                return a + '-' + b.toLowerCase();
            });
        } else {
            nkey = key;
        }
        elem.setAttribute(nkey, attr[key]);
    }
    return elem;
}
