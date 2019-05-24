import { USER, PASSWORD } from 'secret_file';

export const config = {
    host: 'localhost',
    port: 9000,
    mongo_db: `mongodb+srv://${USER}:${PASSWORD}@cluster-ais90.mongodb.net/test?retryWrites=true"
};
s