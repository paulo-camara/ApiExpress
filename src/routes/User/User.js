import { OperationDataBase } from '../../../connection';

export class User {
    CreateUser(request) {
        const { user, password, email } = request.body;

        OperationDataBase("users", "insertOne", {
            user: user,
            password: password,
            email: email,
            createdAt: new Date()
        });
    }
}