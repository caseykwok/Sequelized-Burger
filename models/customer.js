module.exports = function(sequelize, DataTypes) {
	var customer = sequelize.define("customer", {
		customerName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		}
	});

	customer.associate = function(models) {
		customer.hasOne(models.burger, {
			onDelete: "CASCADE"
		});
	};

	return customer;
};
