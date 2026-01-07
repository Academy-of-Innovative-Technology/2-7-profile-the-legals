/* Use the profile below */

// 1. Create the image element
var img = document.createElement("img");

// 2. Set the source path
img.src = "path/to/your/image.jpg"; // Use a relative or absolute URL

// 3. Set optional attributes for accessibility and styling
img.alt = "";
img.width = 300; 

// 4. Find the container element and append the image to it
var src = document.getElementById("image-container");
src.appendChild(img);




var profile = {
    bio: {
        first: "",
        last: "",
        title: "",
        about: ""
    }, 

    social: [
        { facebook: " "},
        { X: "" },
        { youtube: "" },
        { linkedIn: "" }
    ],
    edu: {
        name: "",
        major: ""
    },
    career: {
        company: "",
        title: "",
        role: ""
    },

    skills: [
        { title: "", level: 0 },
        { title: "", level: 0 },
        { title: "", level: 0 }
    ]
};

