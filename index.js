document.addEventListener("DOMContentLoaded", () => {
const hamburgerIcon = document.getElementById('hamburger-icon');
const mobileNav = document.getElementById('mobileNav');
const page = document.querySelector(".page-content");
const body = document.querySelector("body");
const grid = document.querySelector('.gridhero');
const totalCells = 56; // rows * columns -40 ( subtract 40 because of the div inside the grid)
const toggleButtons = document.querySelectorAll('.buttonswitches button')
const toggleTitle = document.querySelector('.top-sellingpoints h1');
const togglePar = document.querySelector('.top-sellingpoints p');

hamburgerIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    page.classList.toggle('hide');
    body.classList.toggle("hamburger-bgc");
});

for(let i = 0; i < totalCells; i++){
    const cell = document.createElement('div');
    cell.classList.add("cell");
    grid.append(cell);
}

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        toggleButtons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");

        switch(button.id){
            case 'AI-apps':
                toggleTitle.textContent = "runway build times went from 7m to 40s.leonardo-ai saw a 95% reduction in page load times. _zapier saw 24x faster builds.";
                togglePar.textContent = "Get started using our pre-built templates. Easily stream long-running LLM responses for a better user experience with zero-config infrastructure that's always globally performant."
                break;
            
            case 'web-apps':
                toggleTitle.textContent = "adobe saw 6x faster builds & deployment. typefully saw build times decrease by 30%. Neo saw 50% reduction in infra admin effort.";
                togglePar.textContent = "Iterate and collaborate at light speed. Security is made easy, managing auth with third-party solutions like Okta. Superior performance through highly optimized infrastructure and CDN."
                break;

            case 'ecommerce':
                toggleTitle.textContent = "stripe saw 100% uptime during Black Friday. box saw 300% more pageviews. hydrow improved Core Web Vitals by 50%.";
                togglePar.textContent = "Fast load times, zero overhead with Vercel's highly optimized infrastructure and CDN, reducing bounce rates and improving SEO. Streamline content creation & publishing with built-in previews."
                break;

            case 'marketing':
                toggleTitle.textContent = "ruggable gained 300% more organic clicks. sonos saved 1 year of developer time. chicos saw 98% faster build times.";
                togglePar.textContent = "Get a fully personalized experience by seamlessly integrating with leading headless solutions. Increase website performance by up to 90%. Support traffic spikes, even on Black Friday."
                break;

            case 'platforms':
                toggleTitle.textContent = "super serves thousands of domains from 1 code base. hashnode page load decreased by 5%. zapier saw 24x faster builds.";
                togglePar.textContent = "Build the platform of your dreams. Serve multiple customers across different subdomains and custom domains in your application with just a few lines of code."
                break;

            default:
                break;
        }
    })

})

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); 
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


})

