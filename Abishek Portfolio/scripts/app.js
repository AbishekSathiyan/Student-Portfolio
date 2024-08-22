document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Section visibility
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Show and hide forms
    function showForm(formId) {
        document.getElementById(formId).classList.remove('hidden');
    }

    function hideForm(formId) {
        document.getElementById(formId).classList.add('hidden');
    }

    document.getElementById('addProjectBtn').addEventListener('click', () => showForm('addProjectForm'));
    document.getElementById('addBlogBtn').addEventListener('click', () => showForm('addBlogForm'));
    document.getElementById('addEducationBtn').addEventListener('click', () => showForm('addEducationForm'));

    document.getElementById('closeProjectForm').addEventListener('click', () => hideForm('addProjectForm'));
    document.getElementById('closeBlogForm').addEventListener('click', () => hideForm('addBlogForm'));
    document.getElementById('closeEducationForm').addEventListener('click', () => hideForm('addEducationForm'));

    // Add Project
    document.getElementById('projectForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('projectTitle').value;
        const description = document.getElementById('projectDescription').value;

        const projectList = document.getElementById('projectList');
        const newProject = document.createElement('div');
        newProject.className = 'card project-item';
        newProject.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="#" class="btn">View More</a>
        `;
        projectList.appendChild(newProject);
        hideForm('addProjectForm');
        // Clear form fields
        document.getElementById('projectTitle').value = '';
        document.getElementById('projectDescription').value = '';
    });

    // Add Blog
    document.getElementById('blogForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('blogTitle').value;
        const summary = document.getElementById('blogSummary').value;

        const blogList = document.getElementById('blogList');
        const newBlog = document.createElement('div');
        newBlog.className = 'card blog-item';
        newBlog.innerHTML = `
            <h3>${title}</h3>
            <p>${summary}</p>
            <a href="#" class="btn">Read More</a>
        `;
        blogList.appendChild(newBlog);
        hideForm('addBlogForm');
        // Clear form fields
        document.getElementById('blogTitle').value = '';
        document.getElementById('blogSummary').value = '';
    });

    // Add Education
    document.getElementById('educationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const degree = document.getElementById('educationDegree').value;
        const institution = document.getElementById('educationInstitution').value;
        const graduation = document.getElementById('educationGraduation').value;

        const educationList = document.getElementById('educationList');
        const newEducation = document.createElement('div');
        newEducation.className = 'card education-item';
        newEducation.innerHTML = `
            <h3>${degree}</h3>
            <p>${institution}</p>
            <p>${graduation}</p>
        `;
        educationList.appendChild(newEducation);
        hideForm('addEducationForm');
        // Clear form fields
        document.getElementById('educationDegree').value = '';
        document.getElementById('educationInstitution').value = '';
        document.getElementById('educationGraduation').value = '';
    });
});
