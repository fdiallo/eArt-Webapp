var $intern_2736 = 'AsyncLoader24', $intern_2738 = 'PermissionManagementPresenter', $intern_2739 = 'PermissionManagementPresenter$1', $intern_2734 = 'runCallbacks24';
function com_google_gwt_lang_asyncloaders_AsyncLoader24_$runCallbacks__Lcom_google_gwt_lang_asyncloaders_AsyncLoader24_2V(){
  var $e0, handler, next;
  while (com_google_gwt_lang_asyncloaders_AsyncLoader24_callbacksHead) {
    handler = com_google_gwt_core_client_GWT_sUncaughtExceptionHandler;
    next = com_google_gwt_lang_asyncloaders_AsyncLoader24_callbacksHead;
    com_google_gwt_lang_asyncloaders_AsyncLoader24_callbacksHead = com_google_gwt_lang_asyncloaders_AsyncLoader24_callbacksHead.com_google_gwt_lang_asyncloaders_AsyncLoader24_1_1Callback_next;
    !com_google_gwt_lang_asyncloaders_AsyncLoader24_callbacksHead && (com_google_gwt_lang_asyncloaders_AsyncLoader24_callbacksTail = null);
    if (!handler) {
      next.com_google_gwt_lang_asyncloaders_AsyncLoader24_1_1Callback_callback.org_broadleafcommerce_openadmin_client_reflection_ReflectiveFactoryWrapper$24_val$asyncClient.onSuccess__Ljava_lang_Object_2V(new org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter_PermissionManagementPresenter__V);
    }
     else {
      try {
        next.com_google_gwt_lang_asyncloaders_AsyncLoader24_1_1Callback_callback.org_broadleafcommerce_openadmin_client_reflection_ReflectiveFactoryWrapper$24_val$asyncClient.onSuccess__Ljava_lang_Object_2V(new org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter_PermissionManagementPresenter__V);
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, 78))
          throw $e0;
      }
    }
  }
}

function com_google_gwt_lang_asyncloaders_AsyncLoader24_AsyncLoader24__V(){
}

function com_google_gwt_lang_asyncloaders_AsyncLoader24_onLoad__V(){
  com_google_gwt_lang_asyncloaders_AsyncLoader24_instance = new com_google_gwt_lang_asyncloaders_AsyncLoader24_AsyncLoader24__V;
  com_google_gwt_core_client_impl_AsyncFragmentLoader_$fragmentHasLoaded__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2IV((com_google_gwt_core_client_impl_AsyncFragmentLoader_$clinit__V() , com_google_gwt_core_client_impl_AsyncFragmentLoader_BROWSER_1LOADER), 24);
  !!$stats && $stats(com_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_$createStatsEvent__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2Ljava_lang_String_2Ljava_lang_String_2IILcom_google_gwt_core_client_JavaScriptObject_2($intern_2734, $intern_14, -1, -1));
  com_google_gwt_lang_asyncloaders_AsyncLoader24_instance.runCallbacks__V();
  !!$stats && $stats(com_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_$createStatsEvent__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2Ljava_lang_String_2Ljava_lang_String_2IILcom_google_gwt_core_client_JavaScriptObject_2($intern_2734, $intern_117, -1, -1));
}

function com_google_gwt_lang_asyncloaders_AsyncLoader24(){
}

_ = com_google_gwt_lang_asyncloaders_AsyncLoader24_AsyncLoader24__V.prototype = com_google_gwt_lang_asyncloaders_AsyncLoader24.prototype = new java_lang_Object;
_.getClass__Ljava_lang_Class_2$ = function com_google_gwt_lang_asyncloaders_AsyncLoader24_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1asyncloaders_1AsyncLoader24_12_1classLit;
}
;
_.runCallbacks__V = function com_google_gwt_lang_asyncloaders_AsyncLoader24_runCallbacks__V(){
  com_google_gwt_lang_asyncloaders_AsyncLoader24_$runCallbacks__Lcom_google_gwt_lang_asyncloaders_AsyncLoader24_2V();
}
;
_.java_lang_Object_castableTypeMap$ = {};
function org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter_PermissionManagementPresenter__V(){
  org_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter_DynamicEntityPresenter__V.call(this);
}

function org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter(){
}

_ = org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter_PermissionManagementPresenter__V.prototype = org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter.prototype = new org_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter;
_.addClicked__V = function org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter_addClicked__V(){
  org_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter_$addClicked__Lorg_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter_2Ljava_lang_String_2V(this, org_broadleafcommerce_openadmin_client_MessageManager_$getString__Lorg_broadleafcommerce_openadmin_client_MessageManager_2Ljava_lang_String_2Ljava_lang_String_2((org_broadleafcommerce_openadmin_client_BLCMain_$clinit__V() , org_broadleafcommerce_openadmin_client_BLCMain_$clinit__V() , org_broadleafcommerce_openadmin_client_BLCMain_MESSAGE_1MANAGER), $intern_1178));
}
;
_.getClass__Ljava_lang_Class_2$ = function org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lorg_1broadleafcommerce_1openadmin_1client_1presenter_1user_1PermissionManagementPresenter_12_1classLit;
}
;
_.setup__V = function org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter_setup__V(){
  org_broadleafcommerce_openadmin_client_setup_PresenterSequenceSetupManager_$addOrReplaceItem__Lorg_broadleafcommerce_openadmin_client_setup_PresenterSequenceSetupManager_2Lorg_broadleafcommerce_openadmin_client_setup_PresenterSetupItem_2V(this.org_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter_presenterSequenceSetupManager, new org_broadleafcommerce_openadmin_client_setup_PresenterSetupItem_PresenterSetupItem__Ljava_lang_String_2Lorg_broadleafcommerce_openadmin_client_datasource_DataSourceFactory_2Lorg_broadleafcommerce_openadmin_client_setup_AsyncCallbackAdapter_2V($intern_2735, new org_broadleafcommerce_openadmin_client_datasource_user_AdminPermissionListDataSourceFactory_AdminPermissionListDataSourceFactory__V, new org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter$1_PermissionManagementPresenter$1__Lorg_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter_2V(this)));
}
;
_.java_lang_Object_castableTypeMap$ = {281:1};
function org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter$1_PermissionManagementPresenter$1__Lorg_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter_2V(this$0){
  this.org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter$1_this$0 = this$0;
}

function org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter$1(){
}

_ = org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter$1_PermissionManagementPresenter$1__Lorg_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter_2V.prototype = org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter$1.prototype = new org_broadleafcommerce_openadmin_client_setup_AsyncCallbackAdapter;
_.getClass__Ljava_lang_Class_2$ = function org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter$1_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lorg_1broadleafcommerce_1openadmin_1client_1presenter_1user_1PermissionManagementPresenter$1_12_1classLit;
}
;
_.onSetupSuccess__Lcom_smartgwt_client_data_DataSource_2V = function org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter$1_onSetupSuccess__Lcom_smartgwt_client_data_DataSource_2V(top){
  org_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter_$setupDisplayItems__Lorg_broadleafcommerce_openadmin_client_presenter_entity_DynamicEntityPresenter_2Lcom_smartgwt_client_data_DataSource_2_3Lcom_smartgwt_client_data_DataSource_2V(this.org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter$1_this$0, top, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Lcom_1smartgwt_1client_1data_1DataSource_12_1classLit, {65:1, 75:1}, 95, []));
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2ILjava_lang_Object_2(top, 181).setupGridFields___3Ljava_lang_String_2_3Ljava_lang_Boolean_2V(com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, {65:1, 72:1, 73:1, 74:1, 75:1, 76:1}, 1, [$intern_7, $intern_1947]), com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1Boolean_12_1classLit, {65:1, 72:1, 74:1, 75:1}, 133, [(java_lang_Boolean_$clinit__V() , java_lang_Boolean_$clinit__V() , java_lang_Boolean_TRUE), java_lang_Boolean_TRUE]));
}
;
_.java_lang_Object_castableTypeMap$ = {};
_.org_broadleafcommerce_openadmin_client_presenter_user_PermissionManagementPresenter$1_this$0 = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1asyncloaders_1AsyncLoader24_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1458, $intern_2736), com_google_gwt_lang_ClassLiteralHolder_Lorg_1broadleafcommerce_1openadmin_1client_1presenter_1user_1PermissionManagementPresenter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2737, $intern_2738), com_google_gwt_lang_ClassLiteralHolder_Lorg_1broadleafcommerce_1openadmin_1client_1presenter_1user_1PermissionManagementPresenter$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2737, $intern_2739);
$entry(com_google_gwt_lang_asyncloaders_AsyncLoader24_onLoad__V)();
