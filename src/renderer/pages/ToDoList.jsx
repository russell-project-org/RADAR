/* eslint-disable consistent-return */
const sqlite3 = require('sqlite3').verbose();

function ToDoList() {
  const data = [];
  const db = new sqlite3.Database('./public/radar_db.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('connected to in-memory sqlite database');
  });

  db.serialize(() => {
    db.each('SELECT * FROM TASKS', (err, row) => {
      if (err) {
        console.log(err.message);
      }
      data.push(row.Name);
      console.log(row.ID + '\t' + row.Name);
    });
  });

  db.close();
  return (
    <>
      <h1>TODO LIST</h1>
      <p>{data}</p>
    </>
  );
}

export default ToDoList;
