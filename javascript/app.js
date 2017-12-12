    var config = {
    apiKey: "AIzaSyCZHmiFtFozBb0-qg3kc5zW08ekaSyao2M",
    authDomain: "train-activity-2801a.firebaseapp.com",
    databaseURL: "https://train-activity-2801a.firebaseio.com",
    projectId: "train-activity-2801a",
    storageBucket: "",
    messagingSenderId: "979896400155"
  };
  firebase.initializeApp(config);

	  var database = firebase.database();



$('#submit').on("click", function() {
	event.preventDefault();

	$('#trainName').append('<tr><td>'+ $('#name').val() + '</td></tr>');
	$('#trainDestination').append('<tr><td>'+ $('#destination').val() + '</td></tr>');
	$('#trainFrequency').append('<tr><td>'+ $('#frequency').val() + '</td></tr>');
	$('#trainNextArrival').append('<tr><td>'+ $('#arrival').val() + '</td></tr>');
	$('#trainMinutes').append('<tr><td>'+ $('#minutes').val() + '</td></tr>');
	

 // Initialize Firebase

	var name = $('#name').val();
	var destination = $('#destination').val();
	var frequency = $('#frequency').val();
	var arrival = $('#arrival').val();
	var minutes = $('#minutes').val();

	 database.ref().push(
    {
    trainName: name,
    trainDestination: destination,
    trainFrequency: date,
    trainNextArrival: arrival,
    trainMinutes: minutes,
    dateAdded: firebase.database.ServerValue.TIMESTAMP

    });
});



database.ref().on("child_added", function(snapshot){

 	console.log(snapshot.val().employeeName);
	$('#trainName').append('<tr><td>'+ snapshot.val().trainName + '</td></tr>');
	$('#trainDestination').append('<tr><td>'+ snapshot.val().trainDestination + '</td></tr>');
	$('#trainFrequency').append('<tr><td>'+ snapshot.val().trainFrequency + '</td></tr>');
	$('#trainNextArrival').append('<tr><td>'+ snapshot.val().trainNextArrival  + '</td></tr>');
	$('#trainMinutes').append('<tr><td>'+ snapshot.val().trainMinutes+ '</td></tr>');


	},

// 	{
 	function (errorObject) {
  	console.log("The read failed: " + errorObject.code);
	}),



// 	},
// 	{
	database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
		$('#trainName').text(snapshot.val().trainName);
	 	$('#trainDestination').text(snapshot.val().trainDestination);
	 	$('#trainFrequency').text(snapshot.val().trainFrequency);
	 	$('#trainNextArrival').text(snapshot.val().trainNextArrival);
	 	$('#trainMinutes').text(snapshot.val().trainMinutes);

	});
// 	}


// 	);
// }
