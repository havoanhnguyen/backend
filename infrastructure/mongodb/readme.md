# Setup docker mongodb with auth
1. Run mongodb without auth
2. Connect to mongodb without auth
```
mongo
```
3. Create root user:

```
use admin

_note: db.auth('root','root');_
```
```
db.createUser(
    {
        user: "root", 
        pwd: "root", 
        roles:["root"]
    }
);
```
4. Create other user
```
use ${db-name}
```
```
db.createUser(
    {
        user: "username",
        pwd: "password",
        roles:[
            {
                role: "readWrite",
                db: "db-name"
            }
        ]
    }
);
```
5. Run docker-compose [mongoose](../docker-compose.yml) service with auth `command: [--auth]`
