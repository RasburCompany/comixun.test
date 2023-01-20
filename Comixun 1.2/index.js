(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.subscriptions_buttom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.text = new cjs.Text("subscriptions", "bold 41px 'Arial Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 60;
	this.text.lineWidth = 325;
	this.text.parent = this;
	this.text.setTransform(0.5,-24.25,1.3541,1.3541);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:0.55,color:"#000000"},0).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(4,1,1).p("Egi+gMMMBF9AAAQBkAAAABkIAAVRQAABkhkAAMhF9AAAQhkAAAAhkIAA1RQAAhkBkAAg");
	this.shape.setTransform(0.325,-5.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#333333"],[0,1],0,1.3,0,111.4).s().p("Egi+AMNQhkAAAAhkIAA1RQAAhkBkAAMBF9AAAQBkAAAABkIAAVRQAABkhkAAg");
	this.shape_1.setTransform(0.325,-5.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(4,1,1).p("Egi+gMMMBF9AAAQBkAAAABkIAAVRQAABkhkAAMhF9AAAQhkAAAAhkIAA1RQAAhkBkAAg");
	this.shape_2.setTransform(0.325,-5.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFCC99","#FFCC00"],[0,1],-0.9,-40.7,1.7,77.1).s().p("Egi+AMNQhkAAAAhkIAA1RQAAhkBkAAMBF9AAAQBkAAAABkIAAVRQAABkhkAAg");
	this.shape_3.setTransform(0.325,-5.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.6,-85.8,471.9,160.1);


(lib.search_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.text = new cjs.Text("Search", "12px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 39;
	this.text.parent = this;
	this.text.setTransform(-2.95,-22.35,4.0171,4.0171);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},3).wait(1));

	// Слой_3
	this.text_1 = new cjs.Text("Search", "12px 'Arial'", "#CCCCCC");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 39;
	this.text_1.parent = this;
	this.text_1.setTransform(-1.05,-20.9,4.0171,4.0171);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({color:"#999999"},0).to({_off:true},2).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(4,1,1).p("At7pvIb3AAQBkAAAABkIAAQXQAABkhkAAI73AAQhkAAAAhkIAAwXQAAhkBkAAg");
	this.shape.setTransform(-1.9,-4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("At7JwQhkAAAAhkIAAwXQAAhkBkAAIb3AAQBkAAAABkIAAQXQAABkhkAAg");
	this.shape_1.setTransform(-1.9,-4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("At7JwQhkAAAAhkIAAwXQAAhkBkAAIb3AAQBkAAAABkIAAQXQAABkhkAAg");
	this.shape_2.setTransform(-1.9,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-68.5,202.39999999999998,128.8);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.recommendations_buttom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.text = new cjs.Text("recommendations", "bold 41px 'Arial Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 60;
	this.text.lineWidth = 408;
	this.text.parent = this;
	this.text.setTransform(1.8,-22.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#000000"},0).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(4,1,1).p("Egi+gMMMBF9AAAQBkAAAABkIAAVRQAABkhkAAMhF9AAAQhkAAAAhkIAA1RQAAhkBkAAg");
	this.shape.setTransform(0.325,-5.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#333333"],[0,1],0,1.3,0,111.4).s().p("Egi+AMNQhkAAAAhkIAA1RQAAhkBkAAMBF9AAAQBkAAAABkIAAVRQAABkhkAAg");
	this.shape_1.setTransform(0.325,-5.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(4,1,1).p("Egi+gMMMBF9AAAQBkAAAABkIAAVRQAABkhkAAMhF9AAAQhkAAAAhkIAA1RQAAhkBkAAg");
	this.shape_2.setTransform(0.325,-5.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFCC99","#FFCC00"],[0,1],-0.9,-40.7,1.7,77.1).s().p("Egi+AMNQhkAAAAhkIAA1RQAAhkBkAAMBF9AAAQBkAAAABkIAAVRQAABkhkAAg");
	this.shape_3.setTransform(0.325,-5.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.6,-85.8,471.9,160.1);


(lib.no_account = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("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");
	this.shape.setTransform(49.025,-269.1514);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("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");
	this.shape_1.setTransform(42.936,-253.5312);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Слой_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#FF6666","#FF0000","#CCCCCC","#CCCCCC"],[0,1,1,1],0,0.1,0,0,0.1,340.8).ss(10,1,1).p("AzX07MAmvAAAQBkAAAABkMAAAAmvQAABkhkAAMgmvAAAQhkAAAAhkMAAAgmvQAAhkBkAAg");
	this.shape_2.setTransform(-2.975,-2.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AwNQ3QgGgHgBgSQgDgtATgoIADgFQgCgHAAgMIAAjsIAAgJIAAjMIgBghQAAgJABgIIAAh3QgLgzgCgZQgDgZAAgiQgBhYABhYIAAgBIAAgIIAAmGQgIgIAAgVIAAkgQgBhIACgoQACg/AJgxQAEgYAFgSIgDgbQgEgVAEgKIAAgCQgQgDgCgMQgCgMAOgHQALgFAPAAIMsAIIJhACQATAAAJAEQAGAEADAGIABACIIGAAIAAgVQAAgTAIgFQAGgFAIADQAIADAEAHQAGAJAAAVIAAARQADAFAAAFQAAAFgDAEIAANsIADAEQAGAJAAAYIgCBhQAAApADAiIACAMQAEATgBAJIAEAdQAEAcABAUIAAAwQgBAeACASQABAPAGAdQAGAeABAPQACARgBAxQgBApAFAYIAEAUQABALgCAIQgDAJgKAFIgCABIgBGiQAAAQgDAHQgFANgMAAQgEAAgDgCIgDAAIgPABQgHABgJAAIg3AAIlPAGIgBABQgGADgIgDIgCgBIgcABQgdAGgkACQgXABguAAImZAAQgwAKg9AEQgpAChJABIj7AEQgdACgoAGIhUALQgsAGg4ACIhlADIirAFQgZAAgJgJgAvav1QAJADADAIQADAHgFAJIgJAPIgEAHQACAXAAAfIAATYIAEAVQAGAaACAQQAGAsgDBCQgBAZgNAEIgBAAIAAGcQAAAQgDAHIgBACQABAMgIAUQgMAfAHAMQBzAABGgCQgCgGABgGQAFgNAagBIDugEIAAgBQABgRgEgSQgFgXAAgEQABgSAMgFQAKgEAIAIIABABIAAgqQAAgYACgNQADgUAIgPQAGgKAHgFIAEgHIAGgOQADgKADgFQAFgIAKgIIATgOQARgNAXgbQAdgiAJgJQAQgQAdgUIAwghIAggaQAUgPAPgIIAYgLIAZgLQAbgOAKgCQAIgCAMAAIAUAAIAVABIAJgCQAmgGA4AAIBfABIAfAAQARAAANAEQAMADAPAIIAaANQAbANAcAIIAMADQAEABAEABQAKAFAMATQAaAnAqAwIBKBSIA2A/QAPASAGAKQAIAOADAQIAFAfQADAUADALIAHAVQAFAUAAAVIEcgFIAHAAIBmgCIAHAAIABoWQABg9gDghQgEgzgMgoIgCgEQgEgJAAgUIAAiYQgGgrgCgyIAAhKIAAuGIsqAAQgZAAgEgMIgBgDIrxgBQgSAAgHgGIlYgDIACAGIABAFIACgBIAHABgAiyHpQgEgDgCgFIgIgCQgNgDgZgPIghgTQgtgagXgRIgMgLIgVgPIgfgZQgjgdgNgVIgIgQIgJgPQgHgJgRgRQgHgJgIgQIgCgEIgDgIIgEgTQgGgNgCgHQgBgFgBgLIgCgQQgBgHgFgKIgIgRQgGgQgDgfQgFgogBgVQgDggABgvIAAg+IgDgBQgJgBgEgJQgDgGgBgLQgBgdAJgZQAFgOANgbIAJgdQAFgRAGgKIAOgTIAPgSQAKgNAPgdQAQgdAJgNQASgWADgHQAHgMAEgEQAFgDAGAAIADABIALgLQAXgTAhgOQAWgJApgMQBEgWAqgHQAPgDAJADQAFABAEAEIAHgEQAGgCAWAAQAOAAAWgCIAjgEIAsgBQAcAAARgDIArgHQARgCAiAAIA8AAQAVAAAIAFIACACIAPACQA3AMAxAOQA7AQAbAXQAWASANAdQAJAVAAAWQAAAVgJAQIABAKIAHAmIAHAnQADARACAjQAFBTgBC8IgBA6QAAAbgOADQgFACgGgDIAAANIABAdQgBAjgSASQgGAFgLAGIgRAKQgJAFgZAYQgTASgVAPIgGADIgDAEIgJAIQgGAHgHAMIgMAVQgOAUgaAPQgQAKgiAOQiBA0hDAVQgvAPgfAFIglAFQgYADgOADIgVAEIgWAEIgHABQgHAAgEgDg");
	this.shape_3.setTransform(-5.5794,0.415);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AzXU8QhkAAAAhkMAAAgmvQAAhkBkAAMAmvAAAQBkAAAABkMAAAAmvQAABkhkAAgAwpwCQgOAHACAMQACAMAQADIAAACQgEAKAEAVIADAbQgFASgEAYQgJAxgCA/QgCAoABBIIAAEgQAAAVAIAIIAAGGIAAAIIAAABQgBBYABBYQAAAiADAZQACAZALAzIAAB3QgBAIAAAJIABAhIAADMIAAAJIAADsQAAAMABAHIgCAFQgTAoADAtQABASAGAHQAJAJAZAAICrgFIBlgDQA4gCAsgGIBUgLQAngGAegCID7gEQBJgBApgCQA9gEAwgKIGZAAQAuAAAXgBQAkgCAdgGIAcgBIACABQAIADAGgDIABgBIFOgGIA4AAQAJAAAHgCIAPAAIADAAQADACAEAAQAMAAAFgNQADgHAAgQIABmjIACAAQAKgFADgJQACgIgBgLIgEgUQgFgYABgpQABgxgCgRQgBgPgGgeQgGgdgBgPQgCgSABgeIAAgwQgBgUgEgcIgEgeQABgIgEgTIgCgMQgDgiAAgqIAChgQAAgYgGgJIgDgEIAAtsQADgEAAgFQAAgGgDgEIAAgRQAAgVgGgJQgEgHgIgDQgIgDgGAFQgIAFAAATIAAAVIoGAAIgBgCQgDgGgGgEQgJgEgTAAIphgCIssgIQgPAAgLAFgAwAQLQAIgUgBgMIABgCQADgHAAgQIAAmcIABAAQANgEABgZQADhCgGgsQgCgQgGgaIgEgVIAAzYQAAgfgCgYIAEgGIAJgPQAFgJgDgHQgDgIgJgDQgFgBgEAAIgBgEIgCgGIFYADQAHAGASAAILxABIABADQAEAMAZAAIMqAAIAAOGIAABJQACAzAGArIAACYQAAAUAEAJIACAEQAMAoAEAzQADAhgBA9IgBIWIgHAAIhmACIgHAAIkcAFQAAgVgFgUIgHgVQgDgLgDgUIgFgfQgDgQgIgOQgGgKgPgSIg2g/IhKhSQgqgwgagnQgMgTgKgFQgEgCgEAAIgMgDQgcgIgbgNIgagNQgPgIgMgDQgNgEgRAAIgfAAIhfgBQg4AAgmAGIgJACIgVgBIgUAAQgMAAgIACQgKACgbAOIgZALIgYALQgPAIgUAPIggAaIgwAhQgdAUgQAQQgJAJgdAiQgXAbgRANIgTAOQgKAIgFAIQgDAFgDAKIgGAOIgEAHQgHAFgGAKQgIAPgDAUQgCANAAAYIAAAqIgBgBQgIgIgKAEQgMAFgBASQAAAEAFAXQAEASgBARIAAABIjuAEQgaABgFANQgCAGADAGQhGABhzABQgHgMAMgfgApBg2QgBAvADAfQABAWAFAoQADAfAGAQIAIARQAFAKABAHIACAQQABALABAFQACAHAGANIAEATIADAHIACAFQAIAQAHAJQARARAHAJIAJAPIAIAQQANAVAjAdIAfAZIAVAPIAMALQAXARAtAaIAhATQAZAPANADIAIACQABAFAFADQAGAEAMgCIAWgEIAVgEQAOgDAYgDIAlgFQAfgFAvgPQBDgVCBg0QAigOAQgKQAagPAOgUIAMgVQAHgMAGgHIAJgIIADgEIAGgDQAVgPATgSQAZgYAJgFIARgKQALgGAGgFQASgSABgjIgBgdIAAgNQAGADAFgCQAOgDAAgbIABg6QABi8gFhTQgCgjgDgRIgHgnIgHgmIgBgKQAJgQAAgVQAAgWgJgVQgNgdgWgSQgbgXg7gQQgxgOg3gMIgPgDIgCgBQgIgFgVAAIg8AAQgiAAgRACIgrAHQgRADgbAAIgtABIgjAEQgWACgOAAQgWAAgGACIgHAEQgEgEgFgBQgJgDgPADQgqAHhEAWQgpAMgWAJQghAOgXATIgMAKIgCAAQgGAAgFADQgEAEgHAMQgDAHgSAWQgJANgQAdQgPAdgKANIgPASIgOATQgGAKgFARIgJAdQgNAbgFAOQgJAZABAdQABALADAGQAEAJAJABIADABg");
	this.shape_4.setTransform(-2.975,-2.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.9,-354.4,395.70000000000005,490.4);


(lib.movie_buttom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.text = new cjs.Text("Movie", "bold 41px 'Arial Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 60;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(3.55,-36.35,1.9796,1.9796);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#000000"},0).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(4,1,1).p("Egi+gMMMBF9AAAQBkAAAABkIAAVRQAABkhkAAMhF9AAAQhkAAAAhkIAA1RQAAhkBkAAg");
	this.shape.setTransform(0.325,-5.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#333333"],[0,1],0,1.3,0,111.4).s().p("Egi+AMNQhkAAAAhkIAA1RQAAhkBkAAMBF9AAAQBkAAAABkIAAVRQAABkhkAAg");
	this.shape_1.setTransform(0.325,-5.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(4,1,1).p("Egi+gMMMBF9AAAQBkAAAABkIAAVRQAABkhkAAMhF9AAAQhkAAAAhkIAA1RQAAhkBkAAg");
	this.shape_2.setTransform(0.325,-5.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFCC99","#FFCC00"],[0,1],-0.9,-40.7,1.7,77.1).s().p("Egi+AMNQhkAAAAhkIAA1RQAAhkBkAAMBF9AAAQBkAAAABkIAAVRQAABkhkAAg");
	this.shape_3.setTransform(0.325,-5.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-235.6,-85.8,471.9,167.89999999999998);


(lib.logo_site = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlVlUIKLAAIAAKLIqLAAgAm5mIINzAAIAAMRItzAAg");
	this.shape.setTransform(15.05,2.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],3.1,36.9,1.8,21.1).s().p("Am5GJIAAsRINzAAIAAMRgAlVE3IKKAAIAAqLIqKAAg");
	this.shape_1.setTransform(15.05,2.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AA0DuQgYgBgNgDQgLgCgMgEIgYgJIgtgRQgOgFgIgFQgHgFgMgMIgUgUIgNgOIgMgQQgOgVgFgeQgEgWAAghQAAgZADgSQABgNAEgQIAHgcIAAgCQAAgIAEgKIAJgRQAVgiAbgYQAegaAjgKIAdgHQBWgOBjgFQAFgBADACIABABIADgBIADAAQADACAAAHIAABhIAAAEIgBADIAAAAQgCADgCAAIgCAAIgHgBQgkgJgkgBQgYgBgTAEQgXAEgQAMQgLAIgMAQQgcAhgHAeQgDAMgBAQIgCAdIgCAVQAAAMADAJQAEANAOAMQAJAHARAKIAQAJIASAIQARAGAWADIAoACIAeAAQARgBAOgDQAFgCADABIADACIABAEIABAEIAABJIAAADIAAABIgBABIAAABQgCACgDAAIgBABQgdAHgjABIgeABIgigBg");
	this.shape_2.setTransform(11.7722,-0.9937);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlFFGIAAqLIKLAAIAAKLgACZkCQhjAFhWAOIgeAHQgiAKgeAaQgbAYgVAiIgJARQgEAKAAAIIAAACIgHAcQgEAQgCANQgCASAAAaQgBAgAEAWQAFAeAOAVIAMAQIAOAOIAUAUQAMAMAHAFQAHAFAPAFIAsARIAYAJQAOAEALACQAMADAXABQAlACAcgCQAigBAdgHIACgBQADAAABgCIAAgBIABgBIAAgBIAAgDIAAhJIAAgEIgBgEIgEgCQgCgBgGACQgNADgRABIgfAAIgogCQgWgDgRgGIgRgIIgQgJQgSgKgJgHQgNgMgFgNQgDgJABgMIACgVIABgcQACgRACgMQAIgeAbghQAOgQAKgIQAQgMAXgEQASgEAZABQAkABAjAJIAIABIABAAQADAAABgDIABAAIAAgDIAAgEIAAhhQAAgHgDgCIgCAAIgDABIgCgBIgFgBIgCAAg");
	this.shape_3.setTransform(13.425,1.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-37.8,90.4,80.69999999999999);


// stage content:
(lib.Comixun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Остановить на этом кадре
		Если вставить этот код в кадр, то остановит/приостановит воспроизведение на нем.
		Также может использоваться для остановки/приостановки воспроизведения фрагментов ролика.
		*/
		
		this.stop();
		
		/* Нажмите для перехода к кадру и остановки воспроизведения
		При нажатии на указанный экземпляр символа точка воспроизведения перемещается на кадр, указанный на временной шкале, а воспроизведение останавливается.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		
		Инструкции:
		1. Замените цифру 5 в коде ниже на номер кадра, с которого продолжится воспроизведение после нажатия на экземпляр символа.
		2. Номера кадров в EaselJS начинаются с 0, а не с 1
		*/
		
		
		this.button_3.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop(0);
		}
		
		
		/* Нажмите для перехода к кадру и остановки воспроизведения
		При нажатии на указанный экземпляр символа точка воспроизведения перемещается на кадр, указанный на временной шкале, а воспроизведение останавливается.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		
		Инструкции:
		1. Замените цифру 5 в коде ниже на номер кадра, с которого продолжится воспроизведение после нажатия на экземпляр символа.
		2. Номера кадров в EaselJS начинаются с 0, а не с 1
		*/
		
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop(1);
		}
		
		/* Нажмите для перехода к кадру и остановки воспроизведения
		При нажатии на указанный экземпляр символа точка воспроизведения перемещается на кадр, указанный на временной шкале, а воспроизведение останавливается.
		Может использоваться на основной временной шкале или на временной шкале фрагмента ролика.
		
		Инструкции:
		1. Замените цифру 5 в коде ниже на номер кадра, с которого продолжится воспроизведение после нажатия на экземпляр символа.
		2. Номера кадров в EaselJS начинаются с 0, а не с 1
		*/
		
		
		this.button_5.addEventListener("click", fl_ClickToGoToAndStopAtFrame_6.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_6()
		{
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой_1
	this.no_account = new lib.no_account();
	this.no_account.name = "no_account";
	this.no_account.setTransform(1376.55,303.45,0.4626,0.4626);
	new cjs.ButtonHelper(this.no_account, 0, 1, 1);

	this.movie_buttom = new lib.movie_buttom();
	this.movie_buttom.name = "movie_buttom";
	this.movie_buttom.setTransform(165.2,450.6,0.4785,0.5189,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.movie_buttom, 0, 1, 1);

	this.subscriptions_buttom = new lib.subscriptions_buttom();
	this.subscriptions_buttom.name = "subscriptions_buttom";
	this.subscriptions_buttom.setTransform(165.2,352.7,0.4785,0.5189,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.subscriptions_buttom, 0, 1, 1);

	this.recommendations_buttom = new lib.recommendations_buttom();
	this.recommendations_buttom.name = "recommendations_buttom";
	this.recommendations_buttom.setTransform(165.2,253.8,0.4785,0.5189,0,0,0,0.3,0);
	new cjs.ButtonHelper(this.recommendations_buttom, 0, 1, 1);

	this.search_button = new lib.search_button();
	this.search_button.name = "search_button";
	this.search_button.setTransform(1249.4,100.2,0.1902,0.1533,0,0,0,0.6,0.4);
	new cjs.ButtonHelper(this.search_button, 0, 1, 2, false, new lib.search_button(), 3);

	this.search = new lib.an_TextInput({'id': 'search', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.search.name = "search";
	this.search.setTransform(1067.1,99.4,3.226,0.8507,0,0,0,50.1,11.1);

	this.instance = new lib.logo_site("synched",0);
	this.instance.setTransform(78.95,89.05,1.4285,1.5489,0,0,0,15.2,2.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("EB8eg1SQhXgjhXgfQgLgEgLgEQgdgLgdgJQi6hAi9gtQ06k92qJrMiBzAAAUgeUgK3ggBAI3QhsAehuAiEBHFA6JMAAAhtxEg6ugzpMAAABtQ");
	this.shape.setTransform(756.8,533.0791);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(2,1,1).p("A+QimMA8gAAAQBNAAAAAdIAAETQAAAdhNAAMg8gAAAQhMAAAAgdIAAkTQAAgdBMAAg");
	this.shape_1.setTransform(1087.4,98.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(4,1,1).p("EB8ZgQBIAAAbEB8agPDQAPgBAOAAEB8xAPAIgDAEEB8xAPAQADACADABEB8agO/IAXd/Eh82gOyIAeAAQAAgCAAgBEh8IAQCQgBgQAAgQQgEhhgChtQgCg7gBhAQgBg0gBg2QgKpeAGuD");
	this.shape_2.setTransform(754.875,96);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],0.1,90.5,-0.1,-246.1).s().p("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");
	this.shape_3.setTransform(755.947,100.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#666666","#33292C"],[0,1],114.6,-48.4,0,114.6,-48.4,355.6).s().p("A+QCmQhMAAAAgcIAAkTQAAgdBMAAMA8hAAAQBMAAAAAdIAAETQAAAchMAAg");
	this.shape_4.setTransform(1087.4,98.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#999999"],[0,1],71.4,-101.4,62.6,341.6).s().p("Egg2A6OMAAAhu+IAAgaQBtgiBsgfUAgAgI/AeUALBMAAABtQQgBBHhbAAg");
	this.shape_5.setTransform(170.625,536.2876);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],-0.1,8.2,-0.1,-32).s().p("AgPB3IgNgFQgEgBgKAAIgOgBQgGgBgMgJQgSgNgGgLQgKgQAFgVQAHgCACgJIADgQIAGgVQAFgPABgJQAAgNACgHIAGgQIADgUQACgJALgQQADgEACgBQAEgCAFAAIAoAAQAXAAALAEQAJACAUALQAXANAJALQAHAHADAKQACAGAAAQIgBAhQAAAJgCAFIgHAMQgIAKgGALQgJAUgGAJQgHALgOAOQgSASgLAEQgIADgOAAIgKgBg");
	this.shape_6.setTransform(191.3417,89.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#999999"],[0,1],-57.3,-257.7,-76,323.6).s().p("EgZTA6nQhbAAgBg8MAAAhtxQWrp1U4FCQC9AtC7BBIA5AUIAXAJQBWAfBVAjIACABIAHADMAAABwPg");
	this.shape_7.setTransform(1382.825,536.1096);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AO3GkQgYgSgUgYQgngugWhEQgXhJgGh3QgEhFABhwIAAkrIABgHQACgXAIgIQAIgHAWABIBpAHQAOABAFAFQALAJgDAbQgOCJAHDLQACA0AJAXQAHATAMANQAOAPASADQAiAGAsgsIADgDQA5g4AQg2QAJggAAhAIgBj8QAAgPAFgHQAGgKAWAAIBKAAQAUAAAIAGQAHAGAEASIABAOQAGBaACBdQACBzgFB3QgFB2gOBNQgMA/goB6IgMAiQgIASgLALIAAABQgRASgbAIIgBAAQgVAGggACIgTAAQh0AAhGgygAdAHTQgigCgvAAQgZgCgHABQgGABgHgOIgBgDIgfg9QghhGgNggQgZg6gOgwIgHD6QAAARgHAHQgGAHgSAAIhEAAQgWAAgJgJQgGgIgBgVIgBgiQgJmWAamVQAAgLACgGQACgGAEgDQAFgEAIAAIANABIAhgDQASgDAKAIQAHAGAIASQAKAaAMAlQAYBNAeB7QAVBaAUBDQATA+ARAqIABlqQAAhqAEg1QABgRAGgIQACgCAEgCQAIgEAPgBIBOgCQAVgBAJAIIABABQAIAIAAAYIABNVQAAAXgJAGQgGAEgUAAIgQAAgAheHOQgPAAgGgHQgGgGAAgQIAAqTQAAgWAHgJQAHgHAMgCIAXABIAiAAQATACAJAMQAIAKABAbQABAtgBBZQAACOABB3QADCKAGBpQACAagKAIQgFAEgOAAgAvBHMQgRAAgGgGQgFgEgCgHIAAgBQgEgHACgIQABgFAEgGIACgCQgFgZABgpIAJpNQABhMAJgnQADgLAEgGQAGgTALgIQAKgGAWgBIArgDQAUgBAIAFQAMAGAOAWICYD9IAyh/QAYhHAQg7QAGgWAJgJQALgKAeACIBtAHIAlADQARABAHAGQAIAGADANQACAIAAAQIgEEfQAAB0ABB0QAAB/ADB/QABAXgIAIQgEADgHACIgMABIhEAAQgPAAgHgFQgEgEgDgJIgCgMQgNhagCgfQgEgtgCijQgBiAgOhOQhaBdgxB3IgHAPQgNAegPgCQgJgBgKgRIg6h4QgkhHgignQgbEHAMEGQACAdgLALQgHAGgVAAgAGRHCQgJgCgFgDQgMgJgFgeQgRhoglhoIhfDCQgOAfgQAHQgJAGgZAAIg2gBQgWgBgGgJQgHgIABgTQAEgxASg/IAkhsQAWhCAJgtQALg+gGgyQgEgdgQg4QgThJgWhbIgchvQgFgTAGgIQAFgHARAAICHgCQAUAAAJAHQAKAHAFAbIAEAaQAWBkAnBgIAaiaQAIgyABgcIAAgFIABgRQABgJAGgFQAGgGARAAIEKAAQARAAAGAHQAHAJgFAQIgDAJQgOAcgXAmQgTAfgbAlQgrA7gYAmIgUAjQgVAogdBNIgBACQgLAcAAAPQAAARAMAbQAxB5ARArQAjBdAVBMQAIAigMANQgIAJgYAAIiSABIgOgBgA5WG+QgjgDgQgDQgcgFgWgKQg/ghgthxQghhTgbh1QgJglgDgYQgFgoAEgiQABgOAGgZQALgzAHgWQAMgmAcguQAdguAhgiQAmgmA8ggQArgYAggFQAcgEAvAHQAtAHAhALQA8AUA1ApQAyAoApA3QAgAtANApQAMAogCA6QgFB9g4CVQgdBOggApQgWAcghAYQgZATgmAVQgbAPgWAIQgeAKgnABIgGAAQgYAAgqgDgA4wCeIANAFIAKABQAPAAAIgDQALgDASgTQAOgOAHgLQAGgJAJgUQAGgLAIgJIAHgNQACgFAAgKIABghQAAgOgCgHQgDgKgHgHQgJgLgXgNQgUgLgJgCQgLgDgYAAIgogBQgFAAgEACQgCABgDAFQgLAQgCAIIgDAVIgGAPQgCAHAAANQgBAIgFAPIgGAWIgDAQQgCAJgHADQgFAUAKARQAGAKASANQAMAJAGABIAOABIAFAAIAJABgAhrkpQgFgCgLgKIgVgSQgQgPgHgLIgFgNQgBgFgBgRIAAgJQABgWAHgLQAEgGAGgIQAHgIAGgCQAEgCAKAAIAggBQAeAAAMAJIANAMIAKAJQAHAGACAFQAEAHABAPIAFAPQAEAKAAAOQAAAKgEAIQgGAOgcAMIgdALIgPAFIgCAAQgHAAgHgCg");
	this.shape_8.setTransform(346.9111,84.8673);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("Eh7MAAhIgWgBIgjgCIgDgBIgCAAIgEgBQgVgDAAgHIAAgjQAAgIAZgDIACAAIADAAQAWgEAnAAMD2QAAAQBTAAAIANIABACIAAAgIAAADIAAABIgBACQgGAGgZADQgWADgmAAg");
	this.shape_9.setTransform(753.875,-1.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.search},{t:this.search_button},{t:this.recommendations_buttom},{t:this.subscriptions_buttom},{t:this.movie_buttom},{t:this.no_account}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(713.3,441.4,842.7,469.80000000000007);
// library properties:
lib.properties = {
	id: '50CAC33BCA2BB748996A2486E0925A4A',
	width: 1519,
	height: 900,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['50CAC33BCA2BB748996A2486E0925A4A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;