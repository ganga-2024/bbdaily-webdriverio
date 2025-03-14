    describe('Bbdaily App Tests', () =>
        {
    
            it('Buy carrot and print total bill amount',  async () => {

        await driver.startRecordingScreen();

        const mobileNumberTextBox = await driver.$("id:com.raincan.android.hybrid:id/mobile_number");
        await mobileNumberTextBox.click();
        await mobileNumberTextBox.addValue("9944696474");

        const continueLoginButton = await driver.$("id:com.raincan.android.hybrid:id/continue_login");
        await continueLoginButton.click();

        const otpTextBox = await driver.$("id:com.raincan.android.hybrid:id/otp_text");
        await otpTextBox.click();
        await driver.pause(5000);
     
        const loginNowButton = await driver.$("id:com.raincan.android.hybrid:id/login_now");
        await loginNowButton.click();
        
        await driver.pause(60);
        const homePageSearchBox = await driver.$("id:com.raincan.android.hybrid:id/homePageSearchBox");
        await homePageSearchBox.click();

        const searchBox = await driver.$("id:com.raincan.android.hybrid:id/searchView");
        await searchBox.addValue("carrots");
        await driver.pressKeyCode(66);
        await driver.pause(1000);

        const addToBasketButton = await driver.$("-android uiautomator:new UiSelector().resourceId(\"com.raincan.android.hybrid:id/btnAddToBasket\").instance(0)");
        await addToBasketButton.click();
        await driver.pause(1000);

        const viewCartButton = await $('android=new UiSelector().text("View Cart")');
        await viewCartButton.click();
        await driver.pause(500);

        const cartAmount = await driver.$("//android.widget.TextView[@resource-id='com.raincan.android.hybrid:id/cart_amount']");
        const cartAmountText = await cartAmount.getText();
        console.log(`Total amount is: ${cartAmountText}`);

        const videoBase64 = await driver.stopRecordingScreen();
        const fs = require('fs');

        fs.writeFileSync('bbdaily.mp4', Buffer.from(videoBase64, 'base64'))
                    
            })
});

