function Building () {
  this.isBurned = false;
}

Building.prototype.burn = function () {
  console.log('🔥');
  this.isBurned = true;
};

module.exports = new Building;


/* This is a singleton.  Any variable defined as this module required will
 * be a reference to the constructed 'Building' object.
 */
