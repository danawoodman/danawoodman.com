---
title: Learn from your iMessage history on the Mac
published: 2017-05-31
# tags: [sql, osx]
draft: true
---

Did you know you can access your iMessage history on the Mac and that it is a SQLite DB?

Go to `~/Library/Messages/chat.db` and open it in a SQL browser like the open-source [DB Browser for SQLite](http://sqlitebrowser.org/). Now you can run queries on the db, like for example:

```sql
SELECT
  SUM(
    LENGTH(text) -
    LENGTH(REPLACE(text, '👍', ''))
  ) as total
from message where handle_id=23;
```

And get a count of the times you have sent 👍 to a friend with the ID "154".

Pretty interesting to play around with...
