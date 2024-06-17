This project was built as an MVP (Minimum Viable Product) as part of a proof of concept. It is a job listing scraper script with no frontend interface. Currently, this scraper scrapes job listings from a single source: cryptocurrencyjobs.co. With minor refactoring, more sources can be added to improve functionality.

Follow these steps to run Job Scraper:
1. Install node.js on your system
2. Download the project zip file from this repo
3. Unpack the file
4. Add the project folder to your preferred code editor (such as VS Code)
5. Locate and open jobScraper.js file within the project folder
6. Modify the value for the 'searchTerm' variable to reflect job listings you want to scrape (line 11)
7. Open the terminal and navigate to the root folder of the project (cd path/to/project)
8. Install project dependencies by running 'npm install'
9. Run 'node jobScraper.js' command to start running the script
10. The scraped job listings will be displayed in the terminal