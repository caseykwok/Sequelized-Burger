var express = require("express");
var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
	db.burger.findAll({
		order: [
			["burgerName", "ASC"]
		],
		include: [ db.customer ]
	}).then(function(results) {
		res.render("index", {
			all: results
		});
	});
});

router.post("/", function(req, res) {
	db.customer.create({
		customerName: req.body.customerName
	}).then(function(results) {
		db.burger.create({
			burgerName: req.body.burgerName,
			customerId: results.id
		});
	}).then(function(results) {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	db.burger.update({
		devoured: true
	}, {
		where: {
			id: req.params.id
		}
	}).then(function(results) {
		res.redirect("/");
	});
});

module.exports = router;