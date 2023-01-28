const envSetting = node_env => {
    let result = '';
    switch (node_env) {
        case 'development':
            result = '.development.env';
            break;
        case 'production':
            result = '.production.env';
            break;
        case 'development-local':
            result = '.development-local.env';
            break;
        default:
            result = '.env'
    }
    return result;
};

export default envSetting;
