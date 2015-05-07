(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 190,
	height: 220,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/cat1.png", id:"cat1"},
		{src:"images/cat2.png", id:"cat2"}
	]
};



// symbols:



(lib.cat1 = function() {
	this.initialize(img.cat1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,214);


(lib.cat2 = function() {
	this.initialize(img.cat2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,213);


// stage content:
(lib.Cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cat1();
	this.instance.setTransform(3.5,2);

	this.instance_1 = new lib.cat2();
	this.instance_1.setTransform(3.5,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(6).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.5,112,183,214);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;