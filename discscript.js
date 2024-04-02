// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const commentForms = document.querySelectorAll('.comment-form');

    commentForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            const textarea = form.querySelector('textarea');
            const commentContent = textarea.value.trim();

            if (commentContent !== '') {
                // Create new comment element
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `
                    <p>${commentContent}</p>
                    <span class="author">Posted by: You</span>
                `;

                // Append the new comment to comments section
                const commentsSection = form.parentElement.querySelector('.comments');
                commentsSection.appendChild(commentDiv);

                // Clear the textarea
                textarea.value = '';
            } else {
                // Show an alert or error message for empty comment
                alert('Please enter a comment before posting.');
            }
        });
    });
});
