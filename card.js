function Card(tier, cost, benefit, points) {
    this.tier = tier;
    this.cost = cost;
    this.benefit = benefit;
    this.points = typeof points !== 'undefined' ? points : 0;
};


module.exports = exports = Card;