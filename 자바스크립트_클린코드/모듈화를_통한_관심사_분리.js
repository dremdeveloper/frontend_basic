// 모듈화를 통해 관심사 분리하기

// 관심사 분리는 코드의 각 부분이 하나의 기능 또는 목적에만 집중하도록 하는 디자인 원칙입니다.
// 이렇게 하면 코드의 유지 관리와 재사용성이 높아지고, 버그를 줄일 수 있습니다.

// 모듈은 코드를 분리된 파일로 나누고 필요할 때 가져와 사용하는 방식으로 도와줍니다.

// users.js (모듈)
// ------------------------------------
export class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

// database.js (모듈)
// ------------------------------------
import { User } from './users.js';

export class Database {
    constructor() {
        this.users = [];
    }

    addUser(name) {
        const user = new User(name);
        this.users.push(user);
        return user;
    }

    getUserByName(name) {
        return this.users.find(user => user.name === name);
    }
}

// main.js (메인 로직)
// ------------------------------------
import { Database } from './database.js';

const db = new Database();
const newUser = db.addUser('John');
console.log(newUser.greet());

// 왜 이렇게 분리하는 것이 좋을까?

// 1. 가독성: 각 모듈은 특정 기능에만 집중하기 때문에 코드를 읽고 이해하기 쉽습니다.
// 2. 재사용성: 각 모듈은 다른 프로젝트에서도 사용할 수 있습니다.
// 3. 유지 관리: 버그를 찾거나 기능을 수정할 때, 관련된 코드만 집중하여 확인하면 됩니다.
// 4. 팀 작업: 각 팀원은 특정 모듈에 집중하여 작업할 수 있으므로 병렬 작업이 용이합니다.

// 결론: 모듈화를 통해 코드의 관심사를 분리하면 가독성, 재사용성, 유지 관리성, 그리고 팀 협업에 큰 이점을 얻을 수 있습니다.
