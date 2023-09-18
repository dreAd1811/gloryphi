import requests

def call_api():
    url = "https://gloryphi.cyclic.cloud/scrape/49.36.136.242"
    response = requests.get(url)
    
    if response.status_code == 200:
        return response.text  # Get the raw HTML content as a string
    else:
        return {"error": "API request failed"}

if __name__ == "__main__":
    result = call_api()
    print(result)
