window.addEventListener("load", () => {
    const $ = (id) => window.document.getElementById(id);      //helper function
    $("empForm").reset();       //clear form on page load

    $("empForm").addEventListener("submit", (e) => {
        e.preventDefault();
        console.clear();        //clear console on each submit       
        console.log("ID: " + $("id").value);
        console.log("Name: " + $("name").value);
        console.log("Extension: " + $("ext").value);
        console.log("Email: " + $("email").value);
        console.log("Department: " + $("department").value);
        e.target.reset();       //clear form after each submit   
    });
});