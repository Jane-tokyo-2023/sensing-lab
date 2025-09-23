document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>{
  document.querySelector('.menu').classList.remove('open');
}));

// Email obfuscation functionality
document.addEventListener('DOMContentLoaded', function() {
  const emailContainer = document.querySelector('.email-obfuscated');
  if (emailContainer) {
    // Add click handler to reveal email
    emailContainer.addEventListener('click', function() {
      const parts = Array.from(this.querySelectorAll('.email-part'));
      const separators = Array.from(this.querySelectorAll('.email-separator'));
      
      // Temporarily show the full email
      const fullEmail = parts.map(part => part.textContent).join('') + 
                       separators.map(sep => sep.textContent).join('');
      
      // Create a temporary element to copy to clipboard
      const tempInput = document.createElement('input');
      tempInput.value = fullEmail;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      
      // Show feedback
      const originalText = this.innerHTML;
      this.innerHTML = '<span style="color: var(--brand-2);">Email copied to clipboard!</span>';
      setTimeout(() => {
        this.innerHTML = originalText;
      }, 2000);
    });
    
    // Add additional obfuscation by shuffling parts on page load
    const parts = Array.from(emailContainer.querySelectorAll('.email-part'));
    const separators = Array.from(emailContainer.querySelectorAll('.email-separator'));
    
    // Add random delays to make it harder to select all at once
    parts.forEach((part, index) => {
      part.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Prevent right-click context menu on email
    emailContainer.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      return false;
    });
    
    // Add keyboard event prevention
    emailContainer.addEventListener('keydown', function(e) {
      if (e.ctrlKey && (e.key === 'c' || e.key === 'a')) {
        e.preventDefault();
        return false;
      }
    });
  }
});
