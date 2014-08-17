//model obj1 create
var obj1 = new Backbone.Model({name: "aoki",age: 350});
//model obj2 create
var obj2 = new Backbone.Model({name: "Kenichiro", age: 4000});

//Collection obj1 + obj2 create
var obj = new Backbone.Collection([obj1, obj2]);

//Collection add
var obj3 = obj.add(new Backbone.Model({name: "kamei",age: 29}))

// Obj sort
obj.comparator = function(item) {
    return item.get("age");
};

obj.sort();

obj.each(function(item,index) {
	console.log("each(" + index + "): " + JSON.stringify(item));
});