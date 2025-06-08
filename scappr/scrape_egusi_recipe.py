import requests
from bs4 import BeautifulSoup

URL = "https://allnigerianfoods.com/nigerian-egusi-soup/"
HEADERS = {
    "User-Agent": "Mozilla/5.0"
}

def fetch_egusi_recipe():
    response = requests.get(URL, headers=HEADERS)
    if response.status_code != 200:
        print("Failed to retrieve the page")
        return

    soup = BeautifulSoup(response.text, 'html.parser')

    # Get title
    title = soup.title.string.strip()
    print(f"\nPage Title: {title}\n")

    # Get ingredients section (rough example – might need tuning)
    print("Ingredients:\n")
    ingredients_section = soup.find_all("ul")
    for ul in ingredients_section:
        if "egusi" in ul.get_text().lower():  # crude filter
            for li in ul.find_all("li"):
                print("-", li.get_text(strip=True))
            break

if __name__ == "__main__":
    fetch_egusi_recipe()
