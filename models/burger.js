module.exports = function(sequelize, DataTypes) {
	var burger = sequelize.define("burger", {
		burgerName: {
			type: DataTypes.STRING,
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});

	burger.associate = function(models) {
		burger.belongsTo(models.customer, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return burger;
};
