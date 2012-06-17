package com.mycompany.admin.client;

import com.google.gwt.core.client.GWT;
import org.broadleafcommerce.admin.client.MerchandisingModule;
import org.broadleafcommerce.openadmin.client.reflection.ModuleFactory;

public class MyCompanyAdminModule extends MerchandisingModule {
	
	public static final MyCompanyAdminMessages ADMINMESSAGES = GWT.create(MyCompanyAdminMessages.class);
	
	public void onModuleLoad() {
        super.onModuleLoad();

		ModuleFactory moduleFactory = ModuleFactory.getInstance();
		moduleFactory.put("product", "com.mycompany.admin.client.view.product.MyCompanyProductView");
		moduleFactory.put("productPresenter", "com.mycompany.admin.client.presenter.product.MyCompanyProductPresenter");
	}

    @Override
    public void postDraw() {
        super.postDraw();
        //BLCMain.MASTERVIEW.getModuleTabs().removeTab(0);
    }
}