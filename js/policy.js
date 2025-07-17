document.addEventListener('DOMContentLoaded', function() {
    // Get all policy links and overlays
    const policyLinks = document.querySelectorAll('a[href^="#privacy"], a[href^="#refund"], a[href^="#terms"]');
    const overlays = document.querySelectorAll('.overlay');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Function to open overlay
    function openOverlay(overlay) {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to close overlay
    function closeOverlay(overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = ''; // Restore background scrolling
    }

    // Add click event listeners to policy links
    policyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const overlay = document.getElementById(targetId);
            if (overlay) {
                openOverlay(overlay);
            }
        });
    });

    // Add click event listeners to close buttons
    closeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const overlay = this.closest('.overlay');
            if (overlay) {
                closeOverlay(overlay);
            }
        });
    });

    // Close overlay when clicking outside the popup content
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeOverlay(this);
            }
        });
    });

    // Close overlay when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            overlays.forEach(overlay => {
                if (overlay.style.display === 'flex') {
                    closeOverlay(overlay);
                }
            });
        }
    });
}); 