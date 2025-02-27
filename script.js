document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const closeSidebar = document.querySelector('.close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const sidebarDropdowns = document.querySelectorAll('.sidebar-dropdown');
    const sidebarLinks = document.querySelectorAll('.sidebar-dropdown-content a, .sidebar-footer .icon');

    // Function to close sidebar
    const closeSidebarMenu = () => {
        sidebar.classList.remove('active');
    };

    // Toggle sidebar
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    // Close sidebar
    closeSidebar.addEventListener('click', closeSidebarMenu);

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            closeSidebarMenu();
        }
    });

    // Close sidebar when clicking on any link or icon
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeSidebarMenu();
        });
    });

    // Toggle sidebar dropdown menus
    sidebarDropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.sidebar-item');
        const dropdownContent = dropdown.querySelector('.sidebar-dropdown-content');

        dropdownLink.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownContent.classList.toggle('active');
            
            // Update chevron icon
            const chevron = dropdownLink.querySelector('.fas');
            chevron.classList.toggle('fa-chevron-right');
            chevron.classList.toggle('fa-chevron-down');
        });
    });
});
