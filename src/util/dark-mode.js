const darkMode = () => {

   // theme
   const light = localStorage.getItem('theme')
   
   // On mount
   light && document.body.classList.add('light')

   // handler 
   const themeHandler = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.toggle.contains('light-mode')) {

        localStorage.setItem('theme','light-mode');
    }
    else {
      
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
};

   //Event
    const themeToggleBtn = document.querySelectorAll('#theme-toggle');   
    themeToggleBtn.forEach(btntoggle =>
    btntoggle.addEventListener('click', themeHandler)
    )
};
export default darkMode;