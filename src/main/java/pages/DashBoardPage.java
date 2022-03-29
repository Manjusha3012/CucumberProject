package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DashBoardPage {
WebDriver driver;

public DashBoardPage(WebDriver driver) {
	this.driver =driver;
	PageFactory.initElements(driver, this);
}
	
@FindBy(how =How.XPATH,using="//span[contains(text(), 'Bank & Cash')]") WebElement Bank_AND_CASH_ELEMENT;;
@FindBy(how =How.XPATH,using="//a[contains(text(), 'New Account']") WebElement NEW_ACCOUNT_ELEMENT;

public void clickBankButton() {
	Bank_AND_CASH_ELEMENT.click();
}

public void clickNewAccount() {
	NEW_ACCOUNT_ELEMENT.click();
	
}
public void waitForDashBoardPage() {
	WebDriverWait wait = new WebDriverWait(driver,10);
	wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath("//h2[text()='Dashboard']")));
	System.out.println("Dashboard loaded");
}


}
