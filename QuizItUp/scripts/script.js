/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

const Patches = require('Patches');
// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

const text1=Scene.root.findFirst('2dText0');
const patchval=Patches.getScalarValue('counter');
const newpatch=Scene.root.findFirst('zero');
text1.text=patchval.toString();