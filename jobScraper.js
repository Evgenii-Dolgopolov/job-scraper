const puppeteer = require("puppeteer");

(async () => {
  let browser
  try {
    // Launch browser and open a new page
    browser = await puppeteer.launch()
    const page = await browser.newPage()

    // Search term for scraping
    const searchTerm = "growth marketing" // Enter your search term to scrape job listings for a desired role.

    // Job listings url for scraping
    const url = `https://cryptocurrencyjobs.co/?query=${encodeURIComponent(searchTerm)}`

    // Navigate to the job listings page
    await page.goto(url)
    console.log(`Searching for ${searchTerm} jobs on: ${url}`)

    // Wait for the page to load completely
    await page.waitForSelector(".ais-Hits-list", {
      timeout: 5000,
    })

    // Extract job details
    const jobListings = await page.evaluate(() => {
      const listings = []
      document.querySelectorAll("ol .ais-Hits-item").forEach(job => {
        const title = job.querySelector("a").innerText
        const company = job.querySelector("h3").innerText
        const location = job.querySelector("h4").innerText
        const listingUrl = job.querySelector("a").href
        listings.push({ title, company, location, listingUrl })
      })
      return listings
    })

    // Output the job listings
    console.log("Job Listings:", jobListings)
  } catch (error) {
    console.error("Main error:", error)
  } finally {
    // Close the browser at the end
    if (browser) {
      await browser.close()
    }
  }
})()
