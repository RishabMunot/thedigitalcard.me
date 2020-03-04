var db = firebase.firestore();

var username;
var input = document.getElementById("input");
input.addEventListener("change", event => {
  username = event["target"].value;
  checkUsername();
});
document.querySelector(".button-search").addEventListener("click",(event)=>{
    username = input.value;
    checkUsername(username)
})


function checkUsername() {
  console.log(username);
  var usernameRef = db.collection("username").doc(username);
  usernameRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
}
