var $intern_2783 = 'AsyncLoader28', $intern_2784 = 'RoleManagementView', $intern_2782 = 'roleDetailsTab', $intern_2780 = 'roleLeftVerticalLayout', $intern_2781 = 'roleTopTabSet', $intern_2779 = 'runCallbacks28';
function com_google_gwt_lang_asyncloaders_AsyncLoader28_$runCallbacks__Lcom_google_gwt_lang_asyncloaders_AsyncLoader28_2V(){
  var $e0, handler, next;
  while (com_google_gwt_lang_asyncloaders_AsyncLoader28_callbacksHead) {
    handler = com_google_gwt_core_client_GWT_sUncaughtExceptionHandler;
    next = com_google_gwt_lang_asyncloaders_AsyncLoader28_callbacksHead;
    com_google_gwt_lang_asyncloaders_AsyncLoader28_callbacksHead = com_google_gwt_lang_asyncloaders_AsyncLoader28_callbacksHead.com_google_gwt_lang_asyncloaders_AsyncLoader28_1_1Callback_next;
    !com_google_gwt_lang_asyncloaders_AsyncLoader28_callbacksHead && (com_google_gwt_lang_asyncloaders_AsyncLoader28_callbacksTail = null);
    if (!handler) {
      next.com_google_gwt_lang_asyncloaders_AsyncLoader28_1_1Callback_callback.org_broadleafcommerce_openadmin_client_reflection_ReflectiveFactoryWrapper$28_val$asyncClient.onSuccess__Ljava_lang_Object_2V(new org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_RoleManagementView__V);
    }
     else {
      try {
        next.com_google_gwt_lang_asyncloaders_AsyncLoader28_1_1Callback_callback.org_broadleafcommerce_openadmin_client_reflection_ReflectiveFactoryWrapper$28_val$asyncClient.onSuccess__Ljava_lang_Object_2V(new org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_RoleManagementView__V);
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, 78))
          throw $e0;
      }
    }
  }
}

function com_google_gwt_lang_asyncloaders_AsyncLoader28_AsyncLoader28__V(){
}

function com_google_gwt_lang_asyncloaders_AsyncLoader28_onLoad__V(){
  com_google_gwt_lang_asyncloaders_AsyncLoader28_instance = new com_google_gwt_lang_asyncloaders_AsyncLoader28_AsyncLoader28__V;
  com_google_gwt_core_client_impl_AsyncFragmentLoader_$fragmentHasLoaded__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2IV((com_google_gwt_core_client_impl_AsyncFragmentLoader_$clinit__V() , com_google_gwt_core_client_impl_AsyncFragmentLoader_BROWSER_1LOADER), 28);
  !!$stats && $stats(com_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_$createStatsEvent__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2Ljava_lang_String_2Ljava_lang_String_2IILcom_google_gwt_core_client_JavaScriptObject_2($intern_2779, $intern_14, -1, -1));
  com_google_gwt_lang_asyncloaders_AsyncLoader28_instance.runCallbacks__V();
  !!$stats && $stats(com_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_$createStatsEvent__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2Ljava_lang_String_2Ljava_lang_String_2IILcom_google_gwt_core_client_JavaScriptObject_2($intern_2779, $intern_117, -1, -1));
}

function com_google_gwt_lang_asyncloaders_AsyncLoader28(){
}

_ = com_google_gwt_lang_asyncloaders_AsyncLoader28_AsyncLoader28__V.prototype = com_google_gwt_lang_asyncloaders_AsyncLoader28.prototype = new java_lang_Object;
_.getClass__Ljava_lang_Class_2$ = function com_google_gwt_lang_asyncloaders_AsyncLoader28_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1asyncloaders_1AsyncLoader28_12_1classLit;
}
;
_.runCallbacks__V = function com_google_gwt_lang_asyncloaders_AsyncLoader28_runCallbacks__V(){
  com_google_gwt_lang_asyncloaders_AsyncLoader28_$runCallbacks__Lcom_google_gwt_lang_asyncloaders_AsyncLoader28_2V();
}
;
_.java_lang_Object_castableTypeMap$ = {};
function org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_RoleManagementView__V(){
  var com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0, com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1;
  com_smartgwt_client_widgets_BaseWidget_$clinit__V();
  com_smartgwt_client_widgets_layout_HLayout_HLayout__V.call(this);
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(this)?(com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0 = this.getJsObj__Lcom_google_gwt_core_client_JavaScriptObject_2() , com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0.setProperty($intern_202, $intern_1369) , undefined):(this.com_smartgwt_client_widgets_BaseWidget_config[$intern_202] = $intern_1369 , undefined);
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(this)?(com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1 = this.getJsObj__Lcom_google_gwt_core_client_JavaScriptObject_2() , com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1.setProperty($intern_207, $intern_1369) , undefined):(this.com_smartgwt_client_widgets_BaseWidget_config[$intern_207] = $intern_1369 , undefined);
}

function org_broadleafcommerce_openadmin_client_view_user_RoleManagementView(){
}

_ = org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_RoleManagementView__V.prototype = org_broadleafcommerce_openadmin_client_view_user_RoleManagementView.prototype = new com_smartgwt_client_widgets_layout_HLayout;
_.asCanvas__Lcom_smartgwt_client_widgets_Canvas_2 = function org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_asCanvas__Lcom_smartgwt_client_widgets_Canvas_2(){
  return this;
}
;
_.build__Lcom_smartgwt_client_data_DataSource_2_3Lcom_smartgwt_client_data_DataSource_2V = function org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_build__Lcom_smartgwt_client_data_DataSource_2_3Lcom_smartgwt_client_data_DataSource_2V(entityDataSource, additionalDataSources){
  var detailsTab, leftVerticalLayout, topTabSet, com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0, com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1, com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_2, com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_3;
  leftVerticalLayout = new com_smartgwt_client_widgets_layout_VLayout_VLayout__V;
  leftVerticalLayout.com_smartgwt_client_widgets_BaseWidget_id = $intern_2780;
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(leftVerticalLayout)?undefined:(leftVerticalLayout.com_smartgwt_client_widgets_BaseWidget_config[$intern_208] = $intern_2780 , undefined);
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(leftVerticalLayout)?(com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0 = leftVerticalLayout.getJsObj__Lcom_google_gwt_core_client_JavaScriptObject_2() , com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0.setProperty($intern_202, $intern_1369) , undefined):(leftVerticalLayout.com_smartgwt_client_widgets_BaseWidget_config[$intern_202] = $intern_1369 , undefined);
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(leftVerticalLayout)?(com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1 = leftVerticalLayout.getJsObj__Lcom_google_gwt_core_client_JavaScriptObject_2() , com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1.setProperty($intern_207, $intern_2308) , undefined):(leftVerticalLayout.com_smartgwt_client_widgets_BaseWidget_config[$intern_207] = $intern_2308 , undefined);
  com_smartgwt_client_widgets_Canvas_$setShowResizeBar__Lcom_smartgwt_client_widgets_Canvas_2Ljava_lang_Boolean_2V(leftVerticalLayout, (java_lang_Boolean_$clinit__V() , java_lang_Boolean_$clinit__V() , java_lang_Boolean_TRUE));
  this.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_listDisplay = new org_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListView_DynamicEntityListView__Ljava_lang_String_2Lcom_smartgwt_client_data_DataSource_2Ljava_lang_Boolean_2Ljava_lang_Boolean_2V((org_broadleafcommerce_openadmin_client_MessageManager_$getString__Lorg_broadleafcommerce_openadmin_client_MessageManager_2Ljava_lang_String_2Ljava_lang_String_2((org_broadleafcommerce_openadmin_client_BLCMain_$clinit__V() , org_broadleafcommerce_openadmin_client_BLCMain_$clinit__V() , org_broadleafcommerce_openadmin_client_BLCMain_MESSAGE_1MANAGER), $intern_1144) , entityDataSource), java_lang_Boolean_FALSE, java_lang_Boolean_FALSE);
  leftVerticalLayout.addMember__Lcom_smartgwt_client_widgets_Canvas_2V(this.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_listDisplay);
  topTabSet = new org_broadleafcommerce_openadmin_client_view_TabSet_TabSet__V;
  topTabSet.com_smartgwt_client_widgets_BaseWidget_id = $intern_2781;
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(topTabSet)?undefined:(topTabSet.com_smartgwt_client_widgets_BaseWidget_config[$intern_208] = $intern_2781 , undefined);
  com_smartgwt_client_widgets_BaseWidget_$setAttribute__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2ZV(topTabSet, $intern_2316, (com_smartgwt_client_types_Side_$clinit__V() , com_smartgwt_client_types_Side_TOP).com_smartgwt_client_types_Side_value, false);
  com_smartgwt_client_widgets_BaseWidget_$setAttribute__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2ZV(topTabSet, $intern_2317, (com_smartgwt_client_types_Overflow_$clinit__V() , com_smartgwt_client_types_Overflow_HIDDEN).com_smartgwt_client_types_Overflow_value, true);
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(topTabSet)?(com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_2 = topTabSet.getJsObj__Lcom_google_gwt_core_client_JavaScriptObject_2() , com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_2.setProperty($intern_207, $intern_2308) , undefined):(topTabSet.com_smartgwt_client_widgets_BaseWidget_config[$intern_207] = $intern_2308 , undefined);
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(topTabSet)?(com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_3 = topTabSet.getJsObj__Lcom_google_gwt_core_client_JavaScriptObject_2() , com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_3.setProperty($intern_202, $intern_1369) , undefined):(topTabSet.com_smartgwt_client_widgets_BaseWidget_config[$intern_202] = $intern_1369 , undefined);
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(topTabSet)?undefined:(topTabSet.com_smartgwt_client_widgets_BaseWidget_config[$intern_2318] = $intern_68 , undefined);
  detailsTab = new com_smartgwt_client_widgets_tab_Tab_Tab__Ljava_lang_String_2V(org_broadleafcommerce_openadmin_client_MessageManager_$getString__Lorg_broadleafcommerce_openadmin_client_MessageManager_2Ljava_lang_String_2Ljava_lang_String_2(org_broadleafcommerce_openadmin_client_BLCMain_MESSAGE_1MANAGER, $intern_1172));
  detailsTab.com_smartgwt_client_core_JsObject_jsObj[$intern_208] = $intern_2782;
  this.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_dynamicFormDisplay = new org_broadleafcommerce_openadmin_client_view_dynamic_form_DynamicFormView_DynamicFormView__Ljava_lang_String_2Lcom_smartgwt_client_data_DataSource_2V((org_broadleafcommerce_openadmin_client_MessageManager_$getString__Lorg_broadleafcommerce_openadmin_client_MessageManager_2Ljava_lang_String_2Ljava_lang_String_2(org_broadleafcommerce_openadmin_client_BLCMain_MESSAGE_1MANAGER, $intern_1172) , entityDataSource));
  this.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_permissionsDisplay = new org_broadleafcommerce_openadmin_client_view_dynamic_grid_GridStructureView_GridStructureView__Ljava_lang_String_2Ljava_lang_Boolean_2Ljava_lang_Boolean_2V(org_broadleafcommerce_openadmin_client_MessageManager_$getString__Lorg_broadleafcommerce_openadmin_client_MessageManager_2Ljava_lang_String_2Ljava_lang_String_2(org_broadleafcommerce_openadmin_client_BLCMain_MESSAGE_1MANAGER, $intern_1198), java_lang_Boolean_FALSE, java_lang_Boolean_FALSE);
  com_smartgwt_client_widgets_layout_Layout_$addMember__Lcom_smartgwt_client_widgets_layout_Layout_2Lcom_smartgwt_client_widgets_Canvas_2V(this.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_dynamicFormDisplay.org_broadleafcommerce_openadmin_client_view_dynamic_form_DynamicFormView_formOnlyView, this.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_permissionsDisplay);
  detailsTab.com_smartgwt_client_core_JsObject_jsObj[$intern_2320] = com_smartgwt_client_widgets_BaseWidget_$getOrCreateJsObj__Lcom_smartgwt_client_widgets_BaseWidget_2Lcom_google_gwt_core_client_JavaScriptObject_2(this.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_dynamicFormDisplay);
  com_smartgwt_client_widgets_tab_TabSet_$addTab__Lcom_smartgwt_client_widgets_tab_TabSet_2Lcom_smartgwt_client_widgets_tab_Tab_2V(topTabSet, detailsTab);
  com_smartgwt_client_widgets_layout_Layout_$addMember__Lcom_smartgwt_client_widgets_layout_Layout_2Lcom_smartgwt_client_widgets_Canvas_2V(this, leftVerticalLayout);
  com_smartgwt_client_widgets_layout_Layout_$addMember__Lcom_smartgwt_client_widgets_layout_Layout_2Lcom_smartgwt_client_widgets_Canvas_2V(this, topTabSet);
}
;
_.getClass__Ljava_lang_Class_2$ = function org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lorg_1broadleafcommerce_1openadmin_1client_1view_1user_1RoleManagementView_12_1classLit;
}
;
_.getDynamicFormDisplay__Lorg_broadleafcommerce_openadmin_client_view_dynamic_form_DynamicFormDisplay_2 = function org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_getDynamicFormDisplay__Lorg_broadleafcommerce_openadmin_client_view_dynamic_form_DynamicFormDisplay_2(){
  return this.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_dynamicFormDisplay;
}
;
_.getListDisplay__Lorg_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListDisplay_2 = function org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_getListDisplay__Lorg_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListDisplay_2(){
  return this.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_listDisplay;
}
;
_.java_lang_Object_castableTypeMap$ = {3:1, 4:1, 6:1, 7:1, 10:1, 11:1, 12:1, 13:1, 14:1, 15:1, 16:1, 17:1, 18:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 41:1, 86:1, 87:1, 120:1, 121:1, 127:1, 128:1, 272:1, 274:1, 275:1, 280:1};
_.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_dynamicFormDisplay = null;
_.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_listDisplay = null;
_.org_broadleafcommerce_openadmin_client_view_user_RoleManagementView_permissionsDisplay = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1asyncloaders_1AsyncLoader28_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1458, $intern_2783), com_google_gwt_lang_ClassLiteralHolder_Lorg_1broadleafcommerce_1openadmin_1client_1view_1user_1RoleManagementView_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2776, $intern_2784);
$entry(com_google_gwt_lang_asyncloaders_AsyncLoader28_onLoad__V)();
