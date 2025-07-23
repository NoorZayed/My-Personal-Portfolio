// script.js
document.addEventListener("DOMContentLoaded", () => {
  loadAboutData();
  loadProjectsData();
  setupProjectNav();
  setupFormValidation();
});

function loadAboutData() {
  fetch('./starter/data/aboutMeData.json')
    .then(response => response.json())
    .then(data => {
      // Update header name
      const headerName = document.querySelector('header h1');
      if (headerName && data.name) {
        headerName.textContent = data.name;
      }
      
      // Populate About Me section
      populateAboutMe(data);
      
      // Populate Contact Information
      populateContactInfo(data.contact);
      
      // Populate Education
      populateEducation(data.education);
      
      // Populate Certifications
      populateCertifications(data.certifications);
      
      // Populate Skills
      populateSkills(data.skills);
      
      // Populate Experience
      populateExperience(data.experience);
      
      // Populate Languages
      populateLanguages(data.languages);
    })
    .catch(error => {
      console.error('Error loading about me data:', error);
    });
}

function populateAboutMe(data) {
  const aboutMeDiv = document.getElementById('aboutMe');
  if (!aboutMeDiv) return;
  
  // Remove any existing children
  aboutMeDiv.innerHTML = '';
  
  // Create and append <p> for bio
  const bio = document.createElement('p');
  bio.textContent = data.aboutMe || 'Bio not available.';
  aboutMeDiv.appendChild(bio);
  
  // Create headshot container
  const headshotContainer = document.createElement('div');
  headshotContainer.className = 'headshotContainer';
  
  // Create image
  const img = document.createElement('img');
  img.src = data.headshot ? data.headshot.replace('..', './starter/images') : './starter/images/me.jpg';
  img.alt = 'Profile headshot';
  img.onerror = () => {
    img.src = './starter/images/me.jpg';
  };
  
  headshotContainer.appendChild(img);
  aboutMeDiv.appendChild(headshotContainer);
}

function populateContactInfo(contact) {
  const contactDiv = document.getElementById('contactInfo');
  if (!contactDiv || !contact) return;
  
  // Clear existing content except h3
  const h3 = contactDiv.querySelector('h3');
  contactDiv.innerHTML = '';
  if (h3) contactDiv.appendChild(h3);
  
  const contactList = document.createElement('ul');
  contactList.className = 'contact-list';
  
  if (contact.email) {
    const emailItem = document.createElement('li');
    emailItem.innerHTML = `<strong>Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a>`;
    contactList.appendChild(emailItem);
  }
  
  if (contact.phone) {
    const phoneItem = document.createElement('li');
    phoneItem.innerHTML = `<strong>Phone:</strong> ${contact.phone}`;
    contactList.appendChild(phoneItem);
  }
  
  if (contact.linkedin) {
    const linkedinItem = document.createElement('li');
    linkedinItem.innerHTML = `<strong>LinkedIn:</strong> <a href="${contact.linkedin}" target="_blank">View Profile</a>`;
    contactList.appendChild(linkedinItem);
  }
  
  if (contact.github) {
    const githubItem = document.createElement('li');
    githubItem.innerHTML = `<strong>GitHub:</strong> <a href="${contact.github}" target="_blank">View Profile</a>`;
    contactList.appendChild(githubItem);
  }
  
  if (contact.location) {
    const locationItem = document.createElement('li');
    locationItem.innerHTML = `<strong>Location:</strong> ${contact.location}`;
    contactList.appendChild(locationItem);
  }
  
  contactDiv.appendChild(contactList);
}

function populateEducation(education) {
  const educationDiv = document.getElementById('education');
  if (!educationDiv || !education) return;
  
  // Clear existing content except h3
  const h3 = educationDiv.querySelector('h3');
  educationDiv.innerHTML = '';
  if (h3) educationDiv.appendChild(h3);
  
  const eduContainer = document.createElement('div');
  eduContainer.className = 'education-details';
  
  const degree = document.createElement('p');
  degree.innerHTML = `<strong>${education.degree}</strong>`;
  eduContainer.appendChild(degree);
  
  const university = document.createElement('p');
  university.innerHTML = `${education.university} (${education.graduation_year})`;
  eduContainer.appendChild(university);
  
  if (education.notable_courses && education.notable_courses.length > 0) {
    const coursesTitle = document.createElement('p');
    coursesTitle.innerHTML = '<strong>Notable Courses:</strong>';
    eduContainer.appendChild(coursesTitle);
    
    const coursesList = document.createElement('ul');
    education.notable_courses.forEach(course => {
      const courseItem = document.createElement('li');
      courseItem.textContent = course;
      coursesList.appendChild(courseItem);
    });
    eduContainer.appendChild(coursesList);
  }
  
  educationDiv.appendChild(eduContainer);
}

function populateCertifications(certifications) {
  const certDiv = document.getElementById('certifications');
  if (!certDiv || !certifications || !Array.isArray(certifications)) return;
  
  // Clear existing content except h3
  const h3 = certDiv.querySelector('h3');
  certDiv.innerHTML = '';
  if (h3) certDiv.appendChild(h3);
  
  const certList = document.createElement('ul');
  certList.className = 'certifications-list';
  
  certifications.forEach(cert => {
    const certItem = document.createElement('li');
    certItem.innerHTML = `<strong>${cert.title}</strong> - ${cert.provider} (${cert.year})`;
    certList.appendChild(certItem);
  });
  
  certDiv.appendChild(certList);
}

function populateSkills(skills) {
  const skillsDiv = document.getElementById('skills');
  if (!skillsDiv || !skills) return;
  
  // Clear existing content except h3
  const h3 = skillsDiv.querySelector('h3');
  skillsDiv.innerHTML = '';
  if (h3) skillsDiv.appendChild(h3);
  
  const skillsContainer = document.createElement('div');
  skillsContainer.className = 'skills-container';
  
  // Helper function to create skill category
  function createSkillCategory(title, skillArray) {
    if (!skillArray || !Array.isArray(skillArray) || skillArray.length === 0) return null;
    
    const category = document.createElement('div');
    category.className = 'skill-category';
    
    const categoryTitle = document.createElement('h4');
    categoryTitle.textContent = title;
    category.appendChild(categoryTitle);
    
    const skillsList = document.createElement('ul');
    skillArray.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
    });
    category.appendChild(skillsList);
    
    return category;
  }
  
  // Add each skill category
  const categories = [
    { title: 'Programming Languages', skills: skills.programming_languages },
    { title: 'Web Technologies', skills: skills.web_technologies },
    { title: 'QA Testing', skills: skills.qa_testing },
    { title: 'Tools and Platforms', skills: skills.tools_and_platforms },
    { title: 'Soft Skills', skills: skills.soft_skills }
  ];
  
  categories.forEach(({ title, skills: skillArray }) => {
    const category = createSkillCategory(title, skillArray);
    if (category) skillsContainer.appendChild(category);
  });
  
  skillsDiv.appendChild(skillsContainer);
}

function populateExperience(experience) {
  const expDiv = document.getElementById('experience');
  if (!expDiv || !experience || !Array.isArray(experience)) return;
  
  // Clear existing content except h3
  const h3 = expDiv.querySelector('h3');
  expDiv.innerHTML = '';
  if (h3) expDiv.appendChild(h3);
  
  const expContainer = document.createElement('div');
  expContainer.className = 'experience-container';
  
  experience.forEach(exp => {
    const expItem = document.createElement('div');
    expItem.className = 'experience-item';
    
    const expHeader = document.createElement('div');
    expHeader.className = 'experience-header';
    expHeader.innerHTML = `<strong>${exp.role}</strong> at ${exp.company} (${exp.duration})`;
    expItem.appendChild(expHeader);
    
    if (exp.responsibilities && Array.isArray(exp.responsibilities)) {
      const respList = document.createElement('ul');
      exp.responsibilities.forEach(resp => {
        const respItem = document.createElement('li');
        respItem.textContent = resp;
        respList.appendChild(respItem);
      });
      expItem.appendChild(respList);
    }
    
    expContainer.appendChild(expItem);
  });
  
  expDiv.appendChild(expContainer);
}

function populateLanguages(languages) {
  const langDiv = document.getElementById('languages');
  if (!langDiv || !languages || !Array.isArray(languages)) return;
  
  // Clear existing content except h3
  const h3 = langDiv.querySelector('h3');
  langDiv.innerHTML = '';
  if (h3) langDiv.appendChild(h3);
  
  const langList = document.createElement('ul');
  langList.className = 'languages-list';
  
  languages.forEach(lang => {
    const langItem = document.createElement('li');
    langItem.innerHTML = `<strong>${lang.language}:</strong> ${lang.proficiency}`;
    langList.appendChild(langItem);
  });
  
  langDiv.appendChild(langList);
}

function loadProjectsData() {
  fetch('./starter/data/projectsData.json')
    .then(response => response.json())
    .then(projectsData => {
      if (!projectsData || !Array.isArray(projectsData)) {
        throw new Error('Projects data format is incorrect.');
      }
      // Use querySelector to select the <sidebar> element
      const projectList = document.querySelector('sidebar#projectList');
      const spotlight = document.getElementById('projectSpotlight');
      const spotlightTitles = document.getElementById('spotlightTitles');
      if (!projectList || !spotlight || !spotlightTitles) return;
      projectList.innerHTML = '';
      // Use a document fragment for performance
      const fragment = document.createDocumentFragment();
      // Helper for missing images
      const cardPlaceholder = './starter/images/card_placeholder_bg.webp';
      const spotlightPlaceholder = './starter/images/spotlight_placeholder_bg.webp';
      // Helper to resolve image path
      function resolveImagePath(path, placeholder) {
        if (!path) return placeholder;
        // Extract filename from any path
        const match = path.match(/([\w-]+\.(webp|jpg|jpeg|png|gif))/i);
        if (match) {
          return `./starter/images/${match[1]}`;
        }
        return placeholder;
      }
      // Create cards
      projectsData.forEach((project, idx) => {
        const card = document.createElement('div');
        card.className = 'projectCard';
        card.id = project.project_id;
        const cardImgSrc = resolveImagePath(project.card_image, cardPlaceholder);
        card.style.background = `url(${cardImgSrc}) center/cover no-repeat`;
        // Title
        const title = document.createElement('h4');
        title.textContent = project.project_name || 'Untitled Project';
        // Description
        const desc = document.createElement('p');
        desc.textContent = project.short_description || 'No description available.';
        card.appendChild(title);
        card.appendChild(desc);
        // Card click updates spotlight
        card.addEventListener('click', () => setSpotlight(project));
        fragment.appendChild(card);
      });
      projectList.appendChild(fragment);
      // Set default spotlight to first project
      if (projectsData.length > 0) {
        setSpotlight(projectsData[0]);
      }
      // Spotlight update function
      function setSpotlight(project) {
        // Clear and update content
        spotlightTitles.innerHTML = '';
        const h3 = document.createElement('h3');
        h3.textContent = project.project_name || 'Untitled Project';
        const p = document.createElement('p');
        p.textContent = project.long_description || 'No description available.';
        spotlightTitles.appendChild(h3);
        spotlightTitles.appendChild(p);
        let link = spotlightTitles.querySelector('a');
        if (link) spotlightTitles.removeChild(link);
        if (project.url) {
          link = document.createElement('a');
          link.href = project.url;
          link.target = '_blank';
          link.textContent = 'Click here to see more...';
          spotlightTitles.appendChild(link);
        }
        // Use spotlight_image if available, else fallback to card_image, else placeholder
        const spotlightImgSrc = resolveImagePath(project.spotlight_image || project.card_image, spotlightPlaceholder);
        spotlight.style.background = `url(${spotlightImgSrc}) center/cover no-repeat`;
        // Remove any previous image
        const prevImg = spotlight.querySelector('img.project-spotlight-img');
        if (prevImg) prevImg.remove();
        // Remove the <img> from the spotlight section (images should only be background images)
      }
    })
    .catch(error => {
      console.error('Error loading projects data:', error);
    });
}

function setupFormValidation() {
  const form = document.getElementById('formSection'); // Fix: match HTML id
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const charCount = document.getElementById('charactersLeft');
  if (!form || !emailInput || !messageInput || !emailError || !messageError || !charCount) return;
  // Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const illegalRegex = /[^a-zA-Z0-9@._-]/;
  // Live character count
  messageInput.addEventListener('input', () => {
    const len = messageInput.value.length;
    charCount.textContent = `Characters: ${len}/300`;
    if (len > 300) {
      charCount.classList.add('error');
    } else {
      charCount.classList.remove('error');
    }
  });
  // Form submit
  form.addEventListener('submit', (e) => {
    let valid = true;
    emailError.textContent = '';
    messageError.textContent = '';
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    // Email validation
    if (!email) {
      emailError.textContent = 'Email is required.';
      valid = false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      valid = false;
    } else if (illegalRegex.test(email)) {
      emailError.textContent = 'Email contains illegal characters.';
      valid = false;
    }
    // Message validation
    if (!message) {
      messageError.textContent = 'Message is required.';
      valid = false;
    } else if (illegalRegex.test(message)) {
      messageError.textContent = 'Message contains illegal characters.';
      valid = false;
    } else if (message.length > 300) {
      messageError.textContent = 'Message must be 300 characters or less.';
      valid = false;
    }
    if (!valid) {
      e.preventDefault();
      return;
    }
    alert('Form submitted successfully! Validation passed.');
    form.reset();
    charCount.textContent = 'Characters: 0/300';
    charCount.classList.remove('error');
  });
}

// Project list scroll navigation
function setupProjectNav() {
  // Use querySelector to select the <sidebar> element
  const projectList = document.querySelector('sidebar#projectList');
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');
  if (!projectList || !leftArrow || !rightArrow) return;
  const scrollAmount = 50;
  let scrollInterval = null;
  // Helper to determine scroll direction
  function isMobile() {
    return window.matchMedia('(max-width: 767px)').matches;
  }
  function scrollList(amount) {
    if (isMobile()) {
      projectList.scrollBy({ left: amount, behavior: 'smooth' });
    } else {
      projectList.scrollBy({ top: amount, behavior: 'smooth' });
    }
  }
  function startScroll(amount) {
    scrollList(amount);
    scrollInterval = setInterval(() => scrollList(amount), 150);
  }
  function stopScroll() {
    clearInterval(scrollInterval);
    scrollInterval = null;
  }
  // Left/Up arrow
  leftArrow.addEventListener('mousedown', () => startScroll(-scrollAmount));
  leftArrow.addEventListener('mouseup', stopScroll);
  leftArrow.addEventListener('mouseleave', stopScroll);
  leftArrow.addEventListener('click', () => scrollList(-scrollAmount));
  // Right/Down arrow
  rightArrow.addEventListener('mousedown', () => startScroll(scrollAmount));
  rightArrow.addEventListener('mouseup', stopScroll);
  rightArrow.addEventListener('mouseleave', stopScroll);
  rightArrow.addEventListener('click', () => scrollList(scrollAmount));
}
