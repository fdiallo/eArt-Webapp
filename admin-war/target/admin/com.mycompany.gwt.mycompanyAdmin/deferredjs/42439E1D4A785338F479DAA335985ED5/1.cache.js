var $intern_1896 = 'AsyncLoader1', $intern_1901 = 'MyCompanyProductPresenter', $intern_1902 = 'MyCompanyProductPresenter$1', $intern_1903 = 'MyCompanyProductPresenter$2', $intern_1898 = 'ShippingCountryListDataSourceFactory', $intern_1899 = 'ShippingCountrySearchDataSourceFactory', $intern_1897 = 'com.mycompany.admin.client.datasource.', $intern_1900 = 'com.mycompany.admin.client.presenter.product.', $intern_1889 = 'com.mycompany.core.catalog.domain.MyCompanyProductImpl', $intern_1890 = 'com.mycompany.core.catalog.domain.ShippingCountry', $intern_1893 = 'countryIso', $intern_1894 = 'currencyCode', $intern_1888 = 'products', $intern_1887 = 'runCallbacks1', $intern_1892 = 'shippingCountryDS', $intern_1891 = 'shippingCountrySearchDS', $intern_1895 = 'shippingCountrySearchView';
function com_google_gwt_lang_asyncloaders_AsyncLoader1_$runCallbacks__Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_2V(){
  var $e0, handler, next;
  while (com_google_gwt_lang_asyncloaders_AsyncLoader1_callbacksHead) {
    handler = com_google_gwt_core_client_GWT_sUncaughtExceptionHandler;
    next = com_google_gwt_lang_asyncloaders_AsyncLoader1_callbacksHead;
    com_google_gwt_lang_asyncloaders_AsyncLoader1_callbacksHead = com_google_gwt_lang_asyncloaders_AsyncLoader1_callbacksHead.com_google_gwt_lang_asyncloaders_AsyncLoader1_1_1Callback_next;
    !com_google_gwt_lang_asyncloaders_AsyncLoader1_callbacksHead && (com_google_gwt_lang_asyncloaders_AsyncLoader1_callbacksTail = null);
    if (!handler) {
      next.com_google_gwt_lang_asyncloaders_AsyncLoader1_1_1Callback_callback.org_broadleafcommerce_openadmin_client_reflection_ReflectiveFactoryWrapper$1_val$asyncClient.onSuccess__Ljava_lang_Object_2V(new com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_MyCompanyProductPresenter__V);
    }
     else {
      try {
        next.com_google_gwt_lang_asyncloaders_AsyncLoader1_1_1Callback_callback.org_broadleafcommerce_openadmin_client_reflection_ReflectiveFactoryWrapper$1_val$asyncClient.onSuccess__Ljava_lang_Object_2V(new com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_MyCompanyProductPresenter__V);
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, 78))
          throw $e0;
      }
    }
  }
}

function com_google_gwt_lang_asyncloaders_AsyncLoader1_AsyncLoader1__V(){
}

function com_google_gwt_lang_asyncloaders_AsyncLoader1_onLoad__V(){
  com_google_gwt_lang_asyncloaders_AsyncLoader1_instance = new com_google_gwt_lang_asyncloaders_AsyncLoader1_AsyncLoader1__V;
  com_google_gwt_core_client_impl_AsyncFragmentLoader_$fragmentHasLoaded__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2IV((com_google_gwt_core_client_impl_AsyncFragmentLoader_$clinit__V() , com_google_gwt_core_client_impl_AsyncFragmentLoader_BROWSER_1LOADER), 1);
  !!$stats && $stats(com_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_$createStatsEvent__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2Ljava_lang_String_2Ljava_lang_String_2IILcom_google_gwt_core_client_JavaScriptObject_2($intern_1887, $intern_14, -1, -1));
  com_google_gwt_lang_asyncloaders_AsyncLoader1_instance.runCallbacks__V();
  !!$stats && $stats(com_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_$createStatsEvent__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2Ljava_lang_String_2Ljava_lang_String_2IILcom_google_gwt_core_client_JavaScriptObject_2($intern_1887, $intern_124, -1, -1));
}

function com_google_gwt_lang_asyncloaders_AsyncLoader1(){
}

_ = com_google_gwt_lang_asyncloaders_AsyncLoader1_AsyncLoader1__V.prototype = com_google_gwt_lang_asyncloaders_AsyncLoader1.prototype = new java_lang_Object;
_.getClass__Ljava_lang_Class_2$ = function com_google_gwt_lang_asyncloaders_AsyncLoader1_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1asyncloaders_1AsyncLoader1_12_1classLit;
}
;
_.runCallbacks__V = function com_google_gwt_lang_asyncloaders_AsyncLoader1_runCallbacks__V(){
  com_google_gwt_lang_asyncloaders_AsyncLoader1_$runCallbacks__Lcom_google_gwt_lang_asyncloaders_AsyncLoader1_2V();
}
;
_.java_lang_Object_castableTypeMap$ = {};
function com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory_ShippingCountryListDataSourceFactory__V(){
}

function com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory(){
}

_ = com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory_ShippingCountryListDataSourceFactory__V.prototype = com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory.prototype = new java_lang_Object;
_.createDataSource__Ljava_lang_String_2Lorg_broadleafcommerce_openadmin_client_dto_OperationTypes_2_3Ljava_lang_Object_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2V = function com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory_createDataSource__Ljava_lang_String_2Lorg_broadleafcommerce_openadmin_client_dto_OperationTypes_2_3Ljava_lang_Object_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2V(name, operationTypes, additionalItems, cb){
  var modules, persistencePerspective;
  if (!com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory_dataSource) {
    operationTypes = new org_broadleafcommerce_openadmin_client_dto_OperationTypes_OperationTypes__Lorg_broadleafcommerce_openadmin_client_dto_OperationType_2Lorg_broadleafcommerce_openadmin_client_dto_OperationType_2Lorg_broadleafcommerce_openadmin_client_dto_OperationType_2Lorg_broadleafcommerce_openadmin_client_dto_OperationType_2Lorg_broadleafcommerce_openadmin_client_dto_OperationType_2V((org_broadleafcommerce_openadmin_client_dto_OperationType_$clinit__V() , org_broadleafcommerce_openadmin_client_dto_OperationType_ENTITY), org_broadleafcommerce_openadmin_client_dto_OperationType_FOREIGNKEY, org_broadleafcommerce_openadmin_client_dto_OperationType_FOREIGNKEY, org_broadleafcommerce_openadmin_client_dto_OperationType_ENTITY, org_broadleafcommerce_openadmin_client_dto_OperationType_ENTITY);
    persistencePerspective = new org_broadleafcommerce_openadmin_client_dto_PersistencePerspective_PersistencePerspective__Lorg_broadleafcommerce_openadmin_client_dto_OperationTypes_2_3Ljava_lang_String_2_3Lorg_broadleafcommerce_openadmin_client_dto_ForeignKey_2V(operationTypes, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, {65:1, 72:1, 73:1, 74:1, 75:1, 76:1}, 1, []), com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lorg_1broadleafcommerce_1openadmin_1client_1dto_1ForeignKey_12_1classLit, {65:1, 72:1, 75:1}, 150, []));
    persistencePerspective.org_broadleafcommerce_openadmin_client_dto_PersistencePerspective_persistencePerspectiveItems.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2((org_broadleafcommerce_openadmin_client_dto_PersistencePerspectiveItemType_$clinit__V() , org_broadleafcommerce_openadmin_client_dto_PersistencePerspectiveItemType_FOREIGNKEY), new org_broadleafcommerce_openadmin_client_dto_ForeignKey_ForeignKey__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2V($intern_1888, $intern_1889));
    persistencePerspective.org_broadleafcommerce_openadmin_client_dto_PersistencePerspective_populateToOneFields = (java_lang_Boolean_$clinit__V() , java_lang_Boolean_$clinit__V() , java_lang_Boolean_TRUE);
    modules = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lorg_1broadleafcommerce_1openadmin_1client_1datasource_1dynamic_1module_1DataSourceModule_12_1classLit, {65:1, 75:1, 261:1}, 69, [new org_broadleafcommerce_openadmin_client_datasource_dynamic_module_BasicClientEntityModule_BasicClientEntityModule__Ljava_lang_String_2Lorg_broadleafcommerce_openadmin_client_dto_PersistencePerspective_2Lorg_broadleafcommerce_openadmin_client_service_DynamicEntityServiceAsync_2V($intern_1890, persistencePerspective, (org_broadleafcommerce_openadmin_client_service_AppServices_$clinit__V() , org_broadleafcommerce_openadmin_client_service_AppServices_DYNAMIC_1ENTITY))]);
    com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory_dataSource = new org_broadleafcommerce_openadmin_client_datasource_dynamic_ListGridDataSource_ListGridDataSource__Ljava_lang_String_2Lorg_broadleafcommerce_openadmin_client_dto_PersistencePerspective_2Lorg_broadleafcommerce_openadmin_client_service_DynamicEntityServiceAsync_2_3Lorg_broadleafcommerce_openadmin_client_datasource_dynamic_module_DataSourceModule_2V(name, persistencePerspective, org_broadleafcommerce_openadmin_client_service_AppServices_DYNAMIC_1ENTITY, modules);
    com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory_dataSource.buildFields___3Ljava_lang_String_2Ljava_lang_Boolean_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2V(null, java_lang_Boolean_FALSE, cb);
  }
   else {
    !!cb && org_broadleafcommerce_openadmin_client_setup_AsyncCallbackAdapter_$onSuccess__Lorg_broadleafcommerce_openadmin_client_setup_AsyncCallbackAdapter_2Lcom_smartgwt_client_data_DataSource_2V(cb, com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory_dataSource);
  }
}
;
_.getClass__Ljava_lang_Class_2$ = function com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1mycompany_1admin_1client_1datasource_1ShippingCountryListDataSourceFactory_12_1classLit;
}
;
_.java_lang_Object_castableTypeMap$ = {};
var com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory_dataSource = null;
function com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory_ShippingCountrySearchDataSourceFactory__V(){
}

function com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory(){
}

_ = com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory_ShippingCountrySearchDataSourceFactory__V.prototype = com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory.prototype = new java_lang_Object;
_.createDataSource__Ljava_lang_String_2Lorg_broadleafcommerce_openadmin_client_dto_OperationTypes_2_3Ljava_lang_Object_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2V = function com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory_createDataSource__Ljava_lang_String_2Lorg_broadleafcommerce_openadmin_client_dto_OperationTypes_2_3Ljava_lang_Object_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2V(name, operationTypes, additionalItems, cb){
  var modules, persistencePerspective;
  if (!com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory_dataSource) {
    operationTypes = new org_broadleafcommerce_openadmin_client_dto_OperationTypes_OperationTypes__Lorg_broadleafcommerce_openadmin_client_dto_OperationType_2Lorg_broadleafcommerce_openadmin_client_dto_OperationType_2Lorg_broadleafcommerce_openadmin_client_dto_OperationType_2Lorg_broadleafcommerce_openadmin_client_dto_OperationType_2Lorg_broadleafcommerce_openadmin_client_dto_OperationType_2V((org_broadleafcommerce_openadmin_client_dto_OperationType_$clinit__V() , org_broadleafcommerce_openadmin_client_dto_OperationType_ENTITY), org_broadleafcommerce_openadmin_client_dto_OperationType_ENTITY, org_broadleafcommerce_openadmin_client_dto_OperationType_ENTITY, org_broadleafcommerce_openadmin_client_dto_OperationType_ENTITY, org_broadleafcommerce_openadmin_client_dto_OperationType_ENTITY);
    persistencePerspective = new org_broadleafcommerce_openadmin_client_dto_PersistencePerspective_PersistencePerspective__Lorg_broadleafcommerce_openadmin_client_dto_OperationTypes_2_3Ljava_lang_String_2_3Lorg_broadleafcommerce_openadmin_client_dto_ForeignKey_2V(operationTypes, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, {65:1, 72:1, 73:1, 74:1, 75:1, 76:1}, 1, []), com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lorg_1broadleafcommerce_1openadmin_1client_1dto_1ForeignKey_12_1classLit, {65:1, 72:1, 75:1}, 150, []));
    persistencePerspective.org_broadleafcommerce_openadmin_client_dto_PersistencePerspective_populateToOneFields = (java_lang_Boolean_$clinit__V() , java_lang_Boolean_$clinit__V() , java_lang_Boolean_TRUE);
    modules = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lorg_1broadleafcommerce_1openadmin_1client_1datasource_1dynamic_1module_1DataSourceModule_12_1classLit, {65:1, 75:1, 261:1}, 69, [new org_broadleafcommerce_openadmin_client_datasource_dynamic_module_BasicClientEntityModule_BasicClientEntityModule__Ljava_lang_String_2Lorg_broadleafcommerce_openadmin_client_dto_PersistencePerspective_2Lorg_broadleafcommerce_openadmin_client_service_DynamicEntityServiceAsync_2V($intern_1890, persistencePerspective, (org_broadleafcommerce_openadmin_client_service_AppServices_$clinit__V() , org_broadleafcommerce_openadmin_client_service_AppServices_DYNAMIC_1ENTITY))]);
    com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory_dataSource = new org_broadleafcommerce_openadmin_client_datasource_dynamic_ListGridDataSource_ListGridDataSource__Ljava_lang_String_2Lorg_broadleafcommerce_openadmin_client_dto_PersistencePerspective_2Lorg_broadleafcommerce_openadmin_client_service_DynamicEntityServiceAsync_2_3Lorg_broadleafcommerce_openadmin_client_datasource_dynamic_module_DataSourceModule_2V(name, persistencePerspective, org_broadleafcommerce_openadmin_client_service_AppServices_DYNAMIC_1ENTITY, modules);
    com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory_dataSource.buildFields___3Ljava_lang_String_2Ljava_lang_Boolean_2Lcom_google_gwt_user_client_rpc_AsyncCallback_2V(null, java_lang_Boolean_FALSE, cb);
  }
   else {
    !!cb && org_broadleafcommerce_openadmin_client_setup_AsyncCallbackAdapter_$onSuccess__Lorg_broadleafcommerce_openadmin_client_setup_AsyncCallbackAdapter_2Lcom_smartgwt_client_data_DataSource_2V(cb, com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory_dataSource);
  }
}
;
_.getClass__Ljava_lang_Class_2$ = function com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1mycompany_1admin_1client_1datasource_1ShippingCountrySearchDataSourceFactory_12_1classLit;
}
;
_.java_lang_Object_castableTypeMap$ = {};
var com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory_dataSource = null;
function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_MyCompanyProductPresenter__V(){
  org_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter_DynamicEntityPresenter__V.call(this);
  this.org_broadleafcommerce_admin_client_presenter_catalog_product_OneToOneProductSkuPresenter_library = new java_util_HashMap_HashMap__IV(10);
  this.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_ganzCategoryLibrary = new java_util_HashMap_HashMap__V;
}

function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter(){
}

_ = com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_MyCompanyProductPresenter__V.prototype = com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter.prototype = new org_broadleafcommerce_admin_client_presenter_catalog_product_OneToOneProductSkuPresenter;
_.bind__V = function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_bind__V(){
  org_broadleafcommerce_admin_client_presenter_catalog_product_OneToOneProductSkuPresenter_$bind__Lorg_broadleafcommerce_admin_client_presenter_catalog_product_OneToOneProductSkuPresenter_2V(this);
  org_broadleafcommerce_openadmin_client_presenter_structure_SimpleSearchJoinStructurePresenter_$bind__Lorg_broadleafcommerce_openadmin_client_presenter_structure_SimpleSearchJoinStructurePresenter_2V(this.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_shippingCountryPresenter);
}
;
_.changeSelection__Lcom_smartgwt_client_data_Record_2V = function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_changeSelection__Lcom_smartgwt_client_data_Record_2V(selectedRecord){
  var dataSource;
  org_broadleafcommerce_admin_client_presenter_catalog_product_OneToOneProductSkuPresenter_$changeSelection__Lorg_broadleafcommerce_admin_client_presenter_catalog_product_OneToOneProductSkuPresenter_2Lcom_smartgwt_client_data_Record_2V(this, selectedRecord);
  dataSource = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(com_smartgwt_client_data_DataSource_getOrCreateRef__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_smartgwt_client_data_DataSource_2(com_smartgwt_client_widgets_BaseWidget_$getAttributeAsJavaScriptObject__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2(this.org_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter_display.getListDisplay__Lorg_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListDisplay_2().getGrid__Lcom_smartgwt_client_widgets_grid_ListGrid_2(), $intern_1404)), 180);
  org_broadleafcommerce_openadmin_client_presenter_entity_AbstractSubPresentable_$load__Lorg_broadleafcommerce_openadmin_client_presenter_entity_AbstractSubPresentable_2Lcom_smartgwt_client_data_Record_2Lorg_broadleafcommerce_openadmin_client_datasource_dynamic_AbstractDynamicDataSource_2Lcom_smartgwt_client_data_DSCallback_2Z(this.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_shippingCountryPresenter, selectedRecord, dataSource, null);
}
;
_.getClass__Ljava_lang_Class_2$ = function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1mycompany_1admin_1client_1presenter_1product_1MyCompanyProductPresenter_12_1classLit;
}
;
_.setup__V = function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_setup__V(){
  org_broadleafcommerce_admin_client_presenter_catalog_product_OneToOneProductSkuPresenter_$setup__Lorg_broadleafcommerce_admin_client_presenter_catalog_product_OneToOneProductSkuPresenter_2V(this);
  org_broadleafcommerce_openadmin_client_setup_PresenterSequenceSetupManager_$addOrReplaceItem__Lorg_broadleafcommerce_openadmin_client_setup_PresenterSequenceSetupManager_2Lorg_broadleafcommerce_openadmin_client_setup_PresenterSetupItem_2V(this.org_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter_presenterSequenceSetupManager, new org_broadleafcommerce_openadmin_client_setup_PresenterSetupItem_PresenterSetupItem__Ljava_lang_String_2Lorg_broadleafcommerce_openadmin_client_datasource_DataSourceFactory_2Lorg_broadleafcommerce_openadmin_client_dto_OperationTypes_2_3Ljava_lang_Object_2Lorg_broadleafcommerce_openadmin_client_setup_AsyncCallbackAdapter_2V($intern_1891, new com_mycompany_admin_client_datasource_ShippingCountrySearchDataSourceFactory_ShippingCountrySearchDataSourceFactory__V, null, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Object_12_1classLit, {65:1, 75:1}, 0, []), new com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$1_MyCompanyProductPresenter$1__Lcom_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_2V(this)));
  org_broadleafcommerce_openadmin_client_setup_PresenterSequenceSetupManager_$addOrReplaceItem__Lorg_broadleafcommerce_openadmin_client_setup_PresenterSequenceSetupManager_2Lorg_broadleafcommerce_openadmin_client_setup_PresenterSetupItem_2V(this.org_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter_presenterSequenceSetupManager, new org_broadleafcommerce_openadmin_client_setup_PresenterSetupItem_PresenterSetupItem__Ljava_lang_String_2Lorg_broadleafcommerce_openadmin_client_datasource_DataSourceFactory_2Lorg_broadleafcommerce_openadmin_client_dto_OperationTypes_2_3Ljava_lang_Object_2Lorg_broadleafcommerce_openadmin_client_setup_AsyncCallbackAdapter_2V($intern_1892, new com_mycompany_admin_client_datasource_ShippingCountryListDataSourceFactory_ShippingCountryListDataSourceFactory__V, null, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Object_12_1classLit, {65:1, 75:1}, 0, []), new com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2_MyCompanyProductPresenter$2__Lcom_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_2V(this)));
}
;
_.java_lang_Object_castableTypeMap$ = {281:1};
_.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_shippingCountryPresenter = null;
function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$1_MyCompanyProductPresenter$1__Lcom_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_2V(this$0){
  this.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$1_this$0 = this$0;
}

function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$1(){
}

_ = com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$1_MyCompanyProductPresenter$1__Lcom_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_2V.prototype = com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$1.prototype = new org_broadleafcommerce_openadmin_client_setup_AsyncCallbackAdapter;
_.getClass__Ljava_lang_Class_2$ = function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$1_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1mycompany_1admin_1client_1presenter_1product_1MyCompanyProductPresenter$1_12_1classLit;
}
;
_.onSetupSuccess__Lcom_smartgwt_client_data_DataSource_2V = function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$1_onSetupSuccess__Lcom_smartgwt_client_data_DataSource_2V(result){
  var shippingCountrySearchDataSource, shippingCountrySearchView;
  shippingCountrySearchDataSource = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(result, 181);
  org_broadleafcommerce_openadmin_client_datasource_dynamic_DynamicEntityDataSource_$resetPermanentFieldVisibility__Lorg_broadleafcommerce_openadmin_client_datasource_dynamic_DynamicEntityDataSource_2_3Ljava_lang_String_2V(shippingCountrySearchDataSource, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, {65:1, 72:1, 73:1, 74:1, 75:1, 76:1}, 1, [$intern_1893, $intern_1894]));
  shippingCountrySearchView = new org_broadleafcommerce_openadmin_client_view_dynamic_dialog_EntitySearchDialog_EntitySearchDialog__Lorg_broadleafcommerce_openadmin_client_datasource_dynamic_ListGridDataSource_2V(shippingCountrySearchDataSource);
  this.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$1_this$0.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_ganzCategoryLibrary.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2($intern_1895, shippingCountrySearchView);
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$1_this$0 = null;
function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2_MyCompanyProductPresenter$2__Lcom_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_2V(this$0){
  this.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2_this$0 = this$0;
}

function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2(){
}

_ = com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2_MyCompanyProductPresenter$2__Lcom_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_2V.prototype = com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2.prototype = new org_broadleafcommerce_openadmin_client_setup_AsyncCallbackAdapter;
_.getClass__Ljava_lang_Class_2$ = function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1mycompany_1admin_1client_1presenter_1product_1MyCompanyProductPresenter$2_12_1classLit;
}
;
_.onSetupSuccess__Lcom_smartgwt_client_data_DataSource_2V = function com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2_onSetupSuccess__Lcom_smartgwt_client_data_DataSource_2V(result){
  var shippingCountryDataSource;
  shippingCountryDataSource = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(result, 181);
  this.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2_this$0.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_shippingCountryPresenter = new org_broadleafcommerce_openadmin_client_presenter_structure_SimpleSearchJoinStructurePresenter_SimpleSearchJoinStructurePresenter__Lorg_broadleafcommerce_openadmin_client_view_dynamic_grid_GridStructureDisplay_2Lorg_broadleafcommerce_openadmin_client_view_dynamic_dialog_EntitySearchDialog_2Ljava_lang_String_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2_this$0.org_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter_display, 182), 183), 184).com_mycompany_admin_client_view_product_MyCompanyProductView_shippingCountryDisplay, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(this.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2_this$0.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_ganzCategoryLibrary.get__Ljava_lang_Object_2Ljava_lang_Object_2($intern_1895), 185), org_broadleafcommerce_openadmin_client_MessageManager_$getString__Lorg_broadleafcommerce_openadmin_client_MessageManager_2Ljava_lang_String_2Ljava_lang_String_2((org_broadleafcommerce_openadmin_client_BLCMain_$clinit__V() , org_broadleafcommerce_openadmin_client_BLCMain_$clinit__V() , org_broadleafcommerce_openadmin_client_BLCMain_MESSAGE_1MANAGER), $intern_905));
  org_broadleafcommerce_openadmin_client_presenter_structure_SimpleSearchJoinStructurePresenter_$setDataSource__Lorg_broadleafcommerce_openadmin_client_presenter_structure_SimpleSearchJoinStructurePresenter_2Lorg_broadleafcommerce_openadmin_client_datasource_dynamic_ListGridDataSource_2_3Ljava_lang_String_2_3Ljava_lang_Boolean_2V(this.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2_this$0.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter_shippingCountryPresenter, shippingCountryDataSource, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, {65:1, 72:1, 73:1, 74:1, 75:1, 76:1}, 1, [$intern_1893, $intern_1894]), com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Boolean_12_1classLit, {65:1, 72:1, 74:1, 75:1}, 133, [(java_lang_Boolean_$clinit__V() , java_lang_Boolean_$clinit__V() , java_lang_Boolean_FALSE), java_lang_Boolean_FALSE]));
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.com_mycompany_admin_client_presenter_product_MyCompanyProductPresenter$2_this$0 = null;
function org_broadleafcommerce_openadmin_client_presenter_structure_SimpleSearchJoinStructurePresenter_SimpleSearchJoinStructurePresenter__Lorg_broadleafcommerce_openadmin_client_view_dynamic_grid_GridStructureDisplay_2Lorg_broadleafcommerce_openadmin_client_view_dynamic_dialog_EntitySearchDialog_2Ljava_lang_String_2V(display, searchDialog, searchDialogTitle){
  this.org_broadleafcommerce_openadmin_client_presenter_entity_AbstractSubPresentable_disabled = (java_lang_Boolean_$clinit__V() , java_lang_Boolean_$clinit__V() , java_lang_Boolean_FALSE);
  this.org_broadleafcommerce_openadmin_client_presenter_entity_AbstractSubPresentable_display = display;
  this.org_broadleafcommerce_openadmin_client_presenter_entity_AbstractSubPresentable_availableToTypes = null;
  this.org_broadleafcommerce_openadmin_client_presenter_structure_SimpleSearchJoinStructurePresenter_searchDialog = searchDialog;
  this.org_broadleafcommerce_openadmin_client_presenter_structure_SimpleSearchJoinStructurePresenter_searchDialogTitle = searchDialogTitle;
}

_ = org_broadleafcommerce_openadmin_client_presenter_structure_SimpleSearchJoinStructurePresenter_SimpleSearchJoinStructurePresenter__Lorg_broadleafcommerce_openadmin_client_view_dynamic_grid_GridStructureDisplay_2Lorg_broadleafcommerce_openadmin_client_view_dynamic_dialog_EntitySearchDialog_2Ljava_lang_String_2V.prototype = org_broadleafcommerce_openadmin_client_presenter_structure_SimpleSearchJoinStructurePresenter.prototype;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1asyncloaders_1AsyncLoader1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1470, $intern_1896), com_google_gwt_lang_ClassLiteralHolder_Lcom_1mycompany_1admin_1client_1datasource_1ShippingCountryListDataSourceFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1897, $intern_1898), com_google_gwt_lang_ClassLiteralHolder_Lcom_1mycompany_1admin_1client_1datasource_1ShippingCountrySearchDataSourceFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1897, $intern_1899), com_google_gwt_lang_ClassLiteralHolder_Lcom_1mycompany_1admin_1client_1presenter_1product_1MyCompanyProductPresenter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1900, $intern_1901), com_google_gwt_lang_ClassLiteralHolder_Lcom_1mycompany_1admin_1client_1presenter_1product_1MyCompanyProductPresenter$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1900, $intern_1902), com_google_gwt_lang_ClassLiteralHolder_Lcom_1mycompany_1admin_1client_1presenter_1product_1MyCompanyProductPresenter$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1900, $intern_1903);
$entry(com_google_gwt_lang_asyncloaders_AsyncLoader1_onLoad__V)();
