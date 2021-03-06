var util = require('../map_util');

var tiles = require('../tile_types');
var map_repr = require('../map_repr');
var DenseMap = map_repr.DenseMap;

exports.name = 'Funlimited'
exports.generate = function() {
  var m = 17, n = 9;
  var map = new DenseMap(m, n, 0, exports.name);
  var allJs = util.range(0,n);

  //start and finish cols
  map.set(tiles.GREEN_START, 0, allJs);
  map.set(tiles.FINISH, m-1, allJs);
  //a warp
  map.placeRandomly(tiles.TELE_IN_1);
  map.placeRandomly(tiles.TELE_OUT_1);

  //Tune some parameters
  map.walls = 888;
  var numCheckpoints = util.getRandomInt(3,4);
  for (var i = 0; i < numCheckpoints; i++) {
    map.placeRandomly(tiles.CHECKPOINTS[i]);
  }

  var numExtraRocks = util.getRandomInt(7,11);
  map.placeRandomly(tiles.ROCK, numExtraRocks);

  var numPatches = util.getRandomInt(11,15);
  map.placeRandomly(tiles.PATCH, numPatches);

  return map;
}

