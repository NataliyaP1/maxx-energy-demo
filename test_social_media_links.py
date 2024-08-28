# woohoo first python file test code to fiddle with
# pip install selenium 
from selenium import webdriver
from selenium.webdriver.common.by import By
import unittest

class TestSocialMediaLinks(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        # Setup WebDriver (use ChromeDriver in this example)
        cls.driver = webdriver.Chrome()
        cls.driver.maximize_window()

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    def setUp(self):
        # Navigate to the webpage where social media links are displayed
        self.driver.get('about.html')

    def test_social_media_links_display_desktop(self):
        """SM-001: Social Media Links Display on Desktop"""
        # Verify that social media links are visible on desktop
        social_media_links = self.driver.find_elements(By.CSS_SELECTOR, '.social-media a')
        self.assertTrue(all(link.is_displayed() for link in social_media_links))

    def test_social_media_links_display_mobile(self):
        """SM-002: Social Media Links Display on Mobile"""
        # Simulate mobile view by setting the window size
        self.driver.set_window_size(375, 667)
        social_media_links = self.driver.find_elements(By.CSS_SELECTOR, '.social-media a')
        self.assertTrue(all(link.is_displayed() for link in social_media_links))

    def test_social_media_links_redirect(self):
        """SM-003: Social Media Links Redirect"""
        social_media_links = {
            "facebook": "https://www.facebook.com/yourprofile",
            "twitter": "https://twitter.com/yourprofile",
            "linkedin": "https://www.linkedin.com/in/yourprofile",
            "instagram": "https://www.instagram.com/yourprofile",
        }
        for platform, url in social_media_links.items():
            link = self.driver.find_element(By.CSS_SELECTOR, f'.social-media a.{platform}')
            link.click()
            self.driver.switch_to.window(self.driver.window_handles[-1])
            self.assertTrue(url in self.driver.current_url)
            self.driver.close()
            self.driver.switch_to.window(self.driver.window_handles[0])

    def test_social_media_links_open_in_new_tab(self):
        """SM-004: Social Media Links Open in New Tab"""
        for link in self.driver.find_elements(By.CSS_SELECTOR, '.social-media a'):
            link.click()
            self.assertEqual(len(self.driver.window_handles), 2)
            self.driver.switch_to.window(self.driver.window_handles[1])
            self.driver.close()
            self.driver.switch_to.window(self.driver.window_handles[0])

    def test_social_media_links_order(self):
        """SM-005: Social Media Links Display Order"""
        expected_order = ['facebook', 'twitter', 'linkedin', 'instagram']
        actual_order = [link.get_attribute('class') for link in self.driver.find_elements(By.CSS_SELECTOR, '.social-media a')]
        self.assertEqual(expected_order, actual_order)

    def test_social_media_links_alt_text(self):
        """SM-006: Social Media Links Alt Text"""
        social_media_links = {
            "facebook": "Facebook Profile Link",
            "twitter": "Twitter Profile Link",
            "linkedin": "LinkedIn Profile Link",
            "instagram": "Instagram Profile Link",
        }
        for platform, expected_alt in social_media_links.items():
            link = self.driver.find_element(By.CSS_SELECTOR, f'.social-media a.{platform} img')
            self.assertEqual(link.get_attribute('alt'), expected_alt)

if __name__ == "__main__":
    unittest.main()
