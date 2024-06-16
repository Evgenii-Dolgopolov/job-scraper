const puppeteer = require("puppeteer");

(async () => {
    let browser;
    try {
        // Launch browser and open a new page
        browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Example search term
        const searchTerm = "senior rust engineer";

        // Example URL (replace with actual job listing URL from a job site)
        const url = `https://cryptocurrencyjobs.co/?q=${encodeURIComponent(searchTerm)}`;

        // Navigate to the job listings page
        await page.goto(url);
        console.log(`Searching for ${searchTerm} jobs on: ${url}`);

        // Wait for the page to load completely
        await page.waitForSelector(".ais-Hits-list", {
            timeout: 100000,
        });

        // Extract job details including the listing URLs
        const jobListings = await page.evaluate(() => {
            const listings = [];
            // Extract job details
            document.querySelectorAll("ol .ais-Hits-item").forEach(job => {
                const title = job.querySelector("a").innerText;
                const company = job.querySelector("h3").innerText;
                const location = job.querySelector("h4").innerText;
                const listingUrl = job.querySelector("a").href;
                listings.push({ title, company, location, listingUrl });
            });
            return listings;
        });

        // Output the job listings
        console.log("Job Listings:", jobListings);

    } catch (error) {
        console.error("Main error:", error);
    } finally {
        // Close the browser at the end
        if (browser) {
            await browser.close();
        }
    }
})();
