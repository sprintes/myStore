const userModel = (sequelize, Sequelize) => {
    const User = sequelize.define('users', 
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
        
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                len: [2, 255],
            },
            
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                len: [8, 255],
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                len: [8, 300]
            },
            isAdmin: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            refresh_token: {
                type: Sequelize.STRING,
                allowNull: true,
            }
        }
    )

    return User;
}

module.exports = userModel;