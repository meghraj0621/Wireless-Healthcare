function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const userId = userCredential.user.uid;

      // Check if user data exists in Realtime Database
      return firebase.database().ref("users/" + userId).once("value");
    })
    .then(snapshot => {
      if (snapshot.exists()) {
        // User exists in database, redirect to dashboard
        window.location.href = "dashboard.html";
      } else {
        alert("User data not found in database.");
        firebase.auth().signOut(); // Optional: sign out since user not valid in DB
      }
    })
    .catch(error => {
      console.error("Login error:", error);
      alert("Login failed: " + error.message);
    });
}
