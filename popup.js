document.getElementById("detailsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the input fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const mobile = document.getElementById("mobile").value;
    const college = document.getElementById("college").value;
    const course = document.getElementById("course").value;
    const instagram = document.getElementById("instagram").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const twitter = document.getElementById("twitter").value;

    // Store these values in Chrome's local storage
    chrome.storage.sync.set({
        firstName: firstName,
        lastName: lastName,
        address: address,
        mobile: mobile,
        college: college,
        course: course,
        instagram: instagram,
        linkedin: linkedin,
        github: github,
        twitter: twitter
    }, function() {
        // Notify the user that the details have been saved
        document.getElementById("status").textContent = "Details saved!";
    });
});

// On load, populate the fields with stored data if available
window.onload = function() {
    chrome.storage.sync.get([
        "firstName", "lastName", "address", "mobile", "college", "course", 
        "instagram", "linkedin", "github", "twitter"
    ], function(data) {
        if (data.firstName) document.getElementById("firstName").value = data.firstName;
        if (data.lastName) document.getElementById("lastName").value = data.lastName;
        if (data.address) document.getElementById("address").value = data.address;
        if (data.mobile) document.getElementById("mobile").value = data.mobile;
        if (data.college) document.getElementById("college").value = data.college;
        if (data.course) document.getElementById("course").value = data.course;
        if (data.instagram) document.getElementById("instagram").value = data.instagram;
        if (data.linkedin) document.getElementById("linkedin").value = data.linkedin;
        if (data.github) document.getElementById("github").value = data.github;
        if (data.twitter) document.getElementById("twitter").value = data.twitter;
    });
};
