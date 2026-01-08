/* Use the profile below */
// 1. Create the image element
var img = document.createElement("img");

// 2. Set the source path
img.src = ""; // Use a relative or absolute URL

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

// Profile object for Andrew Lincoln

const profile = {
    name: "Andrew Lincoln",
    tittle: "Voice actor, Film actor & Stage actor",
    email: "contact@andrewlincol.com",
    phone: "+44 (20) 7946 0958",
    location: "London, England, UK",
    imageURL:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    aboutTittle: "#About Me",
    aboutText: "A British actor renowed for his trasnformative performances and commanding presemce on screen. Best known for his iconic role as Rick Grimes in The Walking Dead, Andrew has captiavted audiences worldwide with his depth and authenticity. A versatile performer spanning drama, television, and film, he continues to take on challenging roles that showcase his exceptional talent and dedication to the craft.",
    skillsTittle: "#Skills & Talents",
    Skills[
        {
            name: "Acting Range", percentage:
        }
    ]
}
