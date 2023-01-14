const keys = {
    staging: {
        MONGODB_URI: 'mongodb+srv://admin:admin@cluster0-c70ng.mongodb.net/lastpassclone?retryWrites=true&w=majority'
    },
    development: {
        MONGODB_URI: 'mongodb://localhost:27017/lastpassclone'
    },
    jwt: {
        secretKey: 'seH5Vl3UeWbA'
    }
};

module.exports = keys;
