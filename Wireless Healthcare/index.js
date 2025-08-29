function register() {
    const name = document.getElementById("regName").value.trim();
    const age = document.getElementById("regAge").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;

    // Validate inputs
    if (!name || !age || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
        return;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return;
    }

    // Register user with Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            return firebase.database().ref("users/" + user.uid).set({
                name: name,
                age: age,
                email: email
            });
        })
        .then(() => {
            alert("Registered successfully! Redirecting to login page...");
            window.location.href = "login.html";
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert("This email is already registered. Please login instead.");
                    break;
                case 'auth/invalid-email':
                    alert("Please enter a valid email address.");
                    break;
                case 'auth/weak-password':
                    alert("Password should be at least 6 characters.");
                    break;
                default:
                    alert("Error: " + error.message);
            }
        });
}
