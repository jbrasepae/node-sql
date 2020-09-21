const { Pool } = require('../node_modules/pg');

const pool = new Pool({
    user: "user",
    host: "localhost",
    password: "pass",
    database: "db",
    port: 5432
})

function createTable(){
  pool.query((`CREATE TABLE IF NOT EXISTS Visitors(
      ID SERIAL,
      visitor_name varchar(50),
      visitor_age int,
      date_of_visit DATE,
      time_of_visit TIME,
      assissant_name varchar(50),
      comments varchar(100)
  )`), (err, res) =>{
      if(err){
          throw err;
      }
      console.table(res.rows);
  })
}

createTable();

function addNewVisitor(visitor_name,visitor_age,date_of_visit,time_of_visit,assissant_name,comments){
  pool.query(
     'INSERT INTO Visitors(visitor_name,visitor_age,date_of_visit,time_of_visit,assissant_name,comments) VALUES($1,$2,$3,$4,$5,$6);',
      [visitor_name,visitor_age,date_of_visit,time_of_visit,assissant_name,comments],
      (error, results) => {
        if (error) {
          throw error;
        }
        console.log('data inserted');
      }
    );
};
 addNewVisitor('Tumi',21,'2020-10-15','11:59:05','Vicent Jacobs','great service');

function listAllVisitors() {
  pool.query(`SELECT * FROM Visitors`,
    (error, results) => {
      if (error) {
        throw error;
      }
      console.table(results.rows)
    }
  );
};
// listAllVisitors();

function deleteVisitor(visitor_name) {
  pool.query(`DELETE FROM Visitors WHERE visitor_name = $1`,[visitor_name],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rowCount);
      }
    );
};
// deleteVisitor('Tumi');

function updateVisitor(id, updateColumn, newValue) {
  pool.query(
    `UPDATE Visitors SET ${updateColumn} = $1 WHERE ID = $2`,
    [newValue, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rowCount);
    }
    );
};
// updateVisitor(2, 'visitor_name', 'Jade Lieby');

function viewOneVisitor(id) {
  pool.query(`SELECT * FROM Visitors WHERE id = $1`,
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.table(results.rows);
    }
  );
};
// viewOneVisitor(1);

function deleteAllVisitors() {
  pool.query(`DELETE FROM Visitors`,
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rowCount);
    }
  );
};
// deleteAllVisitors();

module.exports = {addNewVisitor,createTable,listAllVisitors, deleteVisitor, updateVisitor, viewOneVisitor, deleteAllVisitors}