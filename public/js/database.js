//  Declare SQL Query for SQLite

var createStatement = "CREATE TABLE IF NOT EXISTS Events (id INTEGER PRIMARY KEY AUTOINCREMENT, event_date TEXT, title TEXT, description text,event_type text)";

var selectAllStatement = "SELECT * FROM Events";

var insertStatement = "INSERT INTO Events (event_date, title,description,event_type) VALUES (?, ?,?,?)";

var updateStatement = "UPDATE Events SET title = ?, description = ? WHERE id=?";

var deleteStatement = "DELETE FROM Events WHERE id=?";

var dropStatement = "DROP TABLE Events";

var db = openDatabase("eventBook", "1.0", "Event Book", 200000); // Open SQLite Database

var dataset;

var DataType;

function initDatabase() // Function Call When Page is ready.

{

    try {

        if (!window.openDatabase) // Check browser is supported SQLite or not.

        {

            alert('Databases are not supported in this browser.');

        } else {

            createTable(); // If supported then call Function for create table in SQLite

        }

    } catch (e) {

        if (e == 2) {

            // Version number mismatch. 

            console.log("Invalid database version.");

        } else {

            console.log("Unknown error " + e + ".");

        }

        return;

    }

}

function createTable() // Function for Create Table in SQLite.

{

    db.transaction(function (tx) {
        tx.executeSql(createStatement, [], showRecords, onError);
    });
    //insertRecord();
}

function insertRecord() // Get value from Input and insert record . Function Call when Save/Submit Button Click..

{

    var eventName = $('input:text[id=eventName]').val(),
        eventDesc = $('textarea#eventDesc').val(),
        eventDate = moment($($('.selected-date')[0]).text()).format(),
        eventType = $('#eventType option:selected').text();

    db.transaction(function (tx) {
        tx.executeSql(insertStatement, [eventDate, eventName, eventDesc, eventType], loadAndReset, onError);
    });


}

function deleteRecord(id) // Get id of record . Function Call when Delete Button Click..

{

    var iddelete = id.toString();

    db.transaction(function (tx) {
        tx.executeSql(deleteStatement, [id], showRecords, onError);
        alert("Delete Sucessfully");
    });

    resetForm();

}

function dropTable() // Function Call when Drop Button Click.. Talbe will be dropped from database.

{
    db.transaction(function (tx) {
        tx.executeSql(dropStatement, [], showRecords, onError);
    });

    resetForm();
    initDatabase();
}

function loadRecord(i) // Function for display records which are retrived from database.

{

    var item = dataset.item(i);

    $("#username").val((item['username']).toString());

    $("#useremail").val((item['useremail']).toString());

    $("#id").val((item['id']).toString());

}

function resetForm() // Function for reset form input values.

{

    $("#username").val("");

    $("#useremail").val("");

    $("#id").val("");

}

function loadAndReset() //Function for Load and Reset...

{

    resetForm();

    // showRecords()

}

function onError(tx, error) // Function for Hendeling Error...

{

    alert(error.message);

}

function showRecords() // Function For Retrive data from Database Display records as list

{
    db.transaction(function (tx) {

        tx.executeSql(selectAllStatement, [], function (tx, result) {

            dataset = result.rows;

            for (var i = 0, item = null; i < dataset.length; i++) {

                var thisEvent = {};

                item = dataset.item(i);
                thisEvent.Date = item['event_date'];
                thisEvent.Title = item['title'];
                thisEvent.Desc = item['description'];
                thisEvent.Type = item['event_type'];
                events.push(thisEvent);
            }
           new caleandar(element, events, settings);
        });
    });

}