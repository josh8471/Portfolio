// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Form validation
            if (!name || !email || !message) {
                showFormNotification('Please fill in all required fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showFormNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual API call)
            showFormNotification('Sending your message...', 'info');
            
            // Simulate API delay
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                showFormNotification('Your message has been sent successfully!', 'success');
            }, 1500);
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Form notification function
    function showFormNotification(message, type) {
        // Check if notification exists
        let notification = document.querySelector('.form-notification');
        
        // If not, create it
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'form-notification';
            contactForm.insertAdjacentElement('afterend', notification);
            
            // Style the notification
            notification.style.padding = '10px 15px';
            notification.style.marginTop = '20px';
            notification.style.borderRadius = '8px';
            notification.style.fontSize = '14px';
            notification.style.fontWeight = '500';
            notification.style.transition = 'all 0.3s ease';
        }
        
        // Set notification type
        if (type === 'success') {
            notification.style.backgroundColor = 'rgba(74, 222, 128, 0.1)';
            notification.style.color = '#4ade80';
            notification.style.border = '1px solid rgba(74, 222, 128, 0.2)';
        } else if (type === 'error') {
            notification.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            notification.style.color = '#ef4444';
            notification.style.border = '1px solid rgba(239, 68, 68, 0.2)';
        } else {
            notification.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
            notification.style.color = '#3b82f6';
            notification.style.border = '1px solid rgba(59, 130, 246, 0.2)';
        }
        
        // Set message
        notification.textContent = message;
        
        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
        
        // Set opacity to 1 (for transitions)
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);
    }
    
    // Add form input animations
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        // Add focus effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('input-focused');
        });
        
        // Remove focus effect
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('input-focused');
            }
        });
        
        // Check initial state (for cases where browsers auto-fill inputs)
        if (input.value) {
            input.parentElement.classList.add('input-focused');
        }
    });
});