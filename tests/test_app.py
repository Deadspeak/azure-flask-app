import unittest
from app import app

class TestFlaskHomePage(unittest.TestCase):
    def setUp(self):
        # Tworzymy klienta testowego Flask
        self.client = app.test_client()

    def test_home_page_status_code(self):
        # Wysyłamy żądanie GET na /
        response = self.client.get('/')
        # Sprawdzamy czy kod odpowiedzi to 200 OK
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
