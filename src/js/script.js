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
            name: "Acting Range", percentage:96, color: "bg-primary" },
            { name: "Character Devlopment", percentage: 94, color: "bg-success"},
            { name: "Film, Voice and Stage Actor", percentage: 92, color: "bg-danger" },
            { name: "Improvisation", percentage: 88, color: "bg-warning"  }
    ],
     socialLinks: [
    { icon: "fab fa-twitter", url: "https://twitter.com/andrewlincoln", title: "Twitter" },
    { icon: "fab fa-instagram", url: "https://instagram.com/andrewlincoln", title: "Instagram" },
    { icon: "fab fa-imdb", url: "https://www.imdb.com/name/nm0513840/", title: "IMDb" },
    { icon: "fab fa-facebook", url: "https://www.facebook.com/andrewlincoln", title: "Facebook" }
  ]
};

// Function to render the profile 
function renderProfile(){
     // Update profile image
  document.querySelector("#profileImage").src = profile.imageUrl;
  document.querySelector("#profileImage").alt = profile.name;

  // Update headings
  document.querySelector("#profileName").innerText = profile.name;
  document.querySelector("#profileTitle").innerText = profile.title;
  document.querySelector("#aboutTitle").innerText = profile.aboutTitle;
  document.querySelector("#skillsTitle").innerText = profile.skillsTitle;

   // Update about text
  document.querySelector("#aboutText").innerText = profile.aboutText;

  // Update contact information
  const contactInfo = document.querySelector("#contactInfo");
  const contactHTML = `
    <li class="mb-3"><i class="fas fa-envelope me-3 text-secondary"></i><span>${profile.email}</span></li>
    <li class="mb-3"><i class="fas fa-phone me-3 text-secondary"></i>${profile.phone}</li>
    <li><i class="fas fa-map-marker-alt me-3 text-secondary"></i>${profile.location}</li>
  `;
contactInfo.innerHTML = contactHTML;

  // Update social links
  const socialLinks = document.querySelector("#socialLinks");
  let socialHTML = "";
  profile.socialLinks.forEach(link => {
    socialHTML += `<li><a href="${link.url}" target="_blank" class="rounded-3 social-btn" title="${link.title}"><i class="${link.icon}"></i></a></li>`;
  });
  socialLinks.innerHTML = socialHTML;
    // Update skills section
  const skillsContainer = document.querySelector("#skillsContainer");
  let skillsHTML = "";
  profile.skills.forEach(skill => {
    skillsHTML += `
      <div class="mb-4">
        <div class="d-flex justify-content-between mb-2">
          <strong>${skill.name}</strong>
          <span>${skill.percentage}%</span>
        </div>
        <div class="progress">
          <div class="progress-bar ${skill.color}" role="progressbar" style="width: ${skill.percentage}%" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
      </div>
    `;
  });
  skillsContainer.innerHTML = skillsHTML;

  // Update page background color
  document.body.style.backgroundColor = "#f8f9fa";
}

// Execute render when DOM is loaded
document.addEventListener("DOMContentLoaded", renderProfile);



