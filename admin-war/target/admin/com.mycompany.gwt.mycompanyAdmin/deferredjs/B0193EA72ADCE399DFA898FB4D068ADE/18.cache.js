var $intern_2698 = 'AsyncLoader18', $intern_2700 = 'StaticAssetsView', $intern_2701 = 'StaticAssetsView$1', $intern_2699 = 'org.broadleafcommerce.cms.admin.client.view.file.', $intern_2692 = 'runCallbacks18', $intern_2693 = 'staticFolderAssetsGridLayout';
function com_google_gwt_lang_asyncloaders_AsyncLoader18_$runCallbacks__Lcom_google_gwt_lang_asyncloaders_AsyncLoader18_2V(){
  var $e0, handler, next;
  while (com_google_gwt_lang_asyncloaders_AsyncLoader18_callbacksHead) {
    handler = com_google_gwt_core_client_GWT_sUncaughtExceptionHandler;
    next = com_google_gwt_lang_asyncloaders_AsyncLoader18_callbacksHead;
    com_google_gwt_lang_asyncloaders_AsyncLoader18_callbacksHead = com_google_gwt_lang_asyncloaders_AsyncLoader18_callbacksHead.com_google_gwt_lang_asyncloaders_AsyncLoader18_1_1Callback_next;
    !com_google_gwt_lang_asyncloaders_AsyncLoader18_callbacksHead && (com_google_gwt_lang_asyncloaders_AsyncLoader18_callbacksTail = null);
    if (!handler) {
      next.com_google_gwt_lang_asyncloaders_AsyncLoader18_1_1Callback_callback.org_broadleafcommerce_openadmin_client_reflection_ReflectiveFactoryWrapper$18_val$asyncClient.onSuccess__Ljava_lang_Object_2V(new org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_StaticAssetsView__V);
    }
     else {
      try {
        next.com_google_gwt_lang_asyncloaders_AsyncLoader18_1_1Callback_callback.org_broadleafcommerce_openadmin_client_reflection_ReflectiveFactoryWrapper$18_val$asyncClient.onSuccess__Ljava_lang_Object_2V(new org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_StaticAssetsView__V);
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, 78))
          throw $e0;
      }
    }
  }
}

function com_google_gwt_lang_asyncloaders_AsyncLoader18_AsyncLoader18__V(){
}

function com_google_gwt_lang_asyncloaders_AsyncLoader18_onLoad__V(){
  com_google_gwt_lang_asyncloaders_AsyncLoader18_instance = new com_google_gwt_lang_asyncloaders_AsyncLoader18_AsyncLoader18__V;
  com_google_gwt_core_client_impl_AsyncFragmentLoader_$fragmentHasLoaded__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2IV((com_google_gwt_core_client_impl_AsyncFragmentLoader_$clinit__V() , com_google_gwt_core_client_impl_AsyncFragmentLoader_BROWSER_1LOADER), 18);
  !!$stats && $stats(com_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_$createStatsEvent__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2Ljava_lang_String_2Ljava_lang_String_2IILcom_google_gwt_core_client_JavaScriptObject_2($intern_2692, $intern_14, -1, -1));
  com_google_gwt_lang_asyncloaders_AsyncLoader18_instance.runCallbacks__V();
  !!$stats && $stats(com_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_$createStatsEvent__Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2Ljava_lang_String_2Ljava_lang_String_2IILcom_google_gwt_core_client_JavaScriptObject_2($intern_2692, $intern_116, -1, -1));
}

function com_google_gwt_lang_asyncloaders_AsyncLoader18(){
}

_ = com_google_gwt_lang_asyncloaders_AsyncLoader18_AsyncLoader18__V.prototype = com_google_gwt_lang_asyncloaders_AsyncLoader18.prototype = new java_lang_Object;
_.getClass__Ljava_lang_Class_2$ = function com_google_gwt_lang_asyncloaders_AsyncLoader18_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1asyncloaders_1AsyncLoader18_12_1classLit;
}
;
_.runCallbacks__V = function com_google_gwt_lang_asyncloaders_AsyncLoader18_runCallbacks__V(){
  com_google_gwt_lang_asyncloaders_AsyncLoader18_$runCallbacks__Lcom_google_gwt_lang_asyncloaders_AsyncLoader18_2V();
}
;
_.java_lang_Object_castableTypeMap$ = {};
function org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_StaticAssetsView__V(){
  var com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0, com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1;
  com_smartgwt_client_widgets_BaseWidget_$clinit__V();
  com_smartgwt_client_widgets_layout_HLayout_HLayout__V.call(this);
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(this)?(com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0 = this.getJsObj__Lcom_google_gwt_core_client_JavaScriptObject_2() , com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0.setProperty($intern_204, $intern_1372) , undefined):(this.com_smartgwt_client_widgets_BaseWidget_config[$intern_204] = $intern_1372 , undefined);
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(this)?(com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1 = this.getJsObj__Lcom_google_gwt_core_client_JavaScriptObject_2() , com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1.setProperty($intern_209, $intern_1372) , undefined):(this.com_smartgwt_client_widgets_BaseWidget_config[$intern_209] = $intern_1372 , undefined);
}

function org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView(){
}

_ = org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_StaticAssetsView__V.prototype = org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView.prototype = new com_smartgwt_client_widgets_layout_HLayout;
_.asCanvas__Lcom_smartgwt_client_widgets_Canvas_2 = function org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_asCanvas__Lcom_smartgwt_client_widgets_Canvas_2(){
  return this;
}
;
_.build__Lcom_smartgwt_client_data_DataSource_2_3Lcom_smartgwt_client_data_DataSource_2V = function org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_build__Lcom_smartgwt_client_data_DataSource_2_3Lcom_smartgwt_client_data_DataSource_2V(entityDataSource, additionalDataSources){
  var leftVerticalLayout, com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0, com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1;
  leftVerticalLayout = new com_smartgwt_client_widgets_layout_VLayout_VLayout__V;
  leftVerticalLayout.com_smartgwt_client_widgets_BaseWidget_id = $intern_2693;
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(leftVerticalLayout)?undefined:(leftVerticalLayout.com_smartgwt_client_widgets_BaseWidget_config[$intern_210] = $intern_2693 , undefined);
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(leftVerticalLayout)?(com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0 = leftVerticalLayout.getJsObj__Lcom_google_gwt_core_client_JavaScriptObject_2() , com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_0.setProperty($intern_204, $intern_1372) , undefined):(leftVerticalLayout.com_smartgwt_client_widgets_BaseWidget_config[$intern_204] = $intern_1372 , undefined);
  com_smartgwt_client_widgets_BaseWidget_$isCreated__Lcom_smartgwt_client_widgets_BaseWidget_2Z(leftVerticalLayout)?(com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1 = leftVerticalLayout.getJsObj__Lcom_google_gwt_core_client_JavaScriptObject_2() , com_smartgwt_client_widgets_BaseWidget_$setProperty__Lcom_smartgwt_client_widgets_BaseWidget_2Ljava_lang_String_2Ljava_lang_String_2V_widget_1.setProperty($intern_209, $intern_2694) , undefined):(leftVerticalLayout.com_smartgwt_client_widgets_BaseWidget_config[$intern_209] = $intern_2694 , undefined);
  com_smartgwt_client_widgets_Canvas_$setShowResizeBar__Lcom_smartgwt_client_widgets_Canvas_2Ljava_lang_Boolean_2V(leftVerticalLayout, (java_lang_Boolean_$clinit__V() , java_lang_Boolean_$clinit__V() , java_lang_Boolean_TRUE));
  this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_listDisplay = new org_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListView_DynamicEntityListView__Lcom_smartgwt_client_data_DataSource_2V(entityDataSource);
  com_smartgwt_client_widgets_Canvas_$setHoverMoveWithMouse__Lcom_smartgwt_client_widgets_Canvas_2Ljava_lang_Boolean_2V(this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_listDisplay.org_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListView_grid, java_lang_Boolean_TRUE);
  com_smartgwt_client_widgets_grid_ListGrid_$setCanHover__Lcom_smartgwt_client_widgets_grid_ListGrid_2Ljava_lang_Boolean_2V(this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_listDisplay.org_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListView_grid, java_lang_Boolean_TRUE);
  com_smartgwt_client_widgets_grid_ListGrid_$setShowHover__Lcom_smartgwt_client_widgets_grid_ListGrid_2Ljava_lang_Boolean_2V(this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_listDisplay.org_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListView_grid, java_lang_Boolean_TRUE);
  com_smartgwt_client_widgets_Canvas_$setHoverOpacity__Lcom_smartgwt_client_widgets_Canvas_2Ljava_lang_Integer_2V(this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_listDisplay.org_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListView_grid, java_lang_Integer_valueOf__ILjava_lang_Integer_2(75));
  com_smartgwt_client_widgets_grid_ListGrid_$setHoverCustomizer__Lcom_smartgwt_client_widgets_grid_ListGrid_2Lcom_smartgwt_client_widgets_grid_HoverCustomizer_2V(this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_listDisplay.org_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListView_grid, new org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView$1_StaticAssetsView$1__Lorg_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_2V);
  leftVerticalLayout.addMember__Lcom_smartgwt_client_widgets_Canvas_2V(this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_listDisplay);
  this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_dynamicFormDisplay = new org_broadleafcommerce_openadmin_client_view_dynamic_form_DynamicFormView_DynamicFormView__Lcom_smartgwt_client_data_DataSource_2V(entityDataSource);
  this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_assetDescriptionDisplay = new org_broadleafcommerce_openadmin_client_view_dynamic_grid_GridStructureView_GridStructureView__Ljava_lang_String_2Ljava_lang_Boolean_2Ljava_lang_Boolean_2V(org_broadleafcommerce_openadmin_client_MessageManager_$getString__Lorg_broadleafcommerce_openadmin_client_MessageManager_2Ljava_lang_String_2Ljava_lang_String_2((org_broadleafcommerce_openadmin_client_BLCMain_$clinit__V() , org_broadleafcommerce_openadmin_client_BLCMain_$clinit__V() , org_broadleafcommerce_openadmin_client_BLCMain_MESSAGE_1MANAGER), $intern_1046), java_lang_Boolean_FALSE, java_lang_Boolean_TRUE);
  com_smartgwt_client_widgets_layout_Layout_$addMember__Lcom_smartgwt_client_widgets_layout_Layout_2Lcom_smartgwt_client_widgets_Canvas_2V(this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_dynamicFormDisplay.org_broadleafcommerce_openadmin_client_view_dynamic_form_DynamicFormView_formOnlyView, this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_assetDescriptionDisplay);
  com_smartgwt_client_widgets_layout_Layout_$addMember__Lcom_smartgwt_client_widgets_layout_Layout_2Lcom_smartgwt_client_widgets_Canvas_2V(this, leftVerticalLayout);
  com_smartgwt_client_widgets_layout_Layout_$addMember__Lcom_smartgwt_client_widgets_layout_Layout_2Lcom_smartgwt_client_widgets_Canvas_2V(this, this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_dynamicFormDisplay);
}
;
_.getClass__Ljava_lang_Class_2$ = function org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lorg_1broadleafcommerce_1cms_1admin_1client_1view_1file_1StaticAssetsView_12_1classLit;
}
;
_.getDynamicFormDisplay__Lorg_broadleafcommerce_openadmin_client_view_dynamic_form_DynamicFormDisplay_2 = function org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_getDynamicFormDisplay__Lorg_broadleafcommerce_openadmin_client_view_dynamic_form_DynamicFormDisplay_2(){
  return this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_dynamicFormDisplay;
}
;
_.getListDisplay__Lorg_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListDisplay_2 = function org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_getListDisplay__Lorg_broadleafcommerce_openadmin_client_view_dynamic_DynamicEntityListDisplay_2(){
  return this.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_listDisplay;
}
;
_.java_lang_Object_castableTypeMap$ = {3:1, 4:1, 6:1, 7:1, 10:1, 11:1, 12:1, 13:1, 14:1, 15:1, 16:1, 17:1, 18:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 41:1, 86:1, 87:1, 120:1, 121:1, 127:1, 128:1, 239:1, 240:1, 272:1, 280:1};
_.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_assetDescriptionDisplay = null;
_.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_dynamicFormDisplay = null;
_.org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_listDisplay = null;
function org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView$1_StaticAssetsView$1__Lorg_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_2V(){
}

function org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView$1(){
}

_ = org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView$1_StaticAssetsView$1__Lorg_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView_2V.prototype = org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView$1.prototype = new java_lang_Object;
_.getClass__Ljava_lang_Class_2$ = function org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView$1_getClass__Ljava_lang_Class_2(){
  return com_google_gwt_lang_ClassLiteralHolder_Lorg_1broadleafcommerce_1cms_1admin_1client_1view_1file_1StaticAssetsView$1_12_1classLit;
}
;
_.hoverHTML__Ljava_lang_Object_2Lcom_smartgwt_client_widgets_grid_ListGridRecord_2IILjava_lang_String_2 = function org_broadleafcommerce_cms_admin_client_view_file_StaticAssetsView$1_hoverHTML__Ljava_lang_Object_2Lcom_smartgwt_client_widgets_grid_ListGridRecord_2IILjava_lang_String_2(value, record, rowNum, colNum){
  var com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_0, com_smartgwt_client_util_JSOHelper_getAttributeAsBoolean__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Z_ret_0, com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_1, com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_2;
  if (!!record && (com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_0 = record.com_smartgwt_client_core_JsObject_jsObj[$intern_2461] , com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_0 === undefined || com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_0 == null?null:String(com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_0)) != null && (java_lang_Boolean_$clinit__V() , (com_smartgwt_client_util_JSOHelper_getAttributeAsBoolean__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Z_ret_0 = record.com_smartgwt_client_core_JsObject_jsObj[$intern_2461] , com_smartgwt_client_util_JSOHelper_getAttributeAsBoolean__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Z_ret_0 == null || com_smartgwt_client_util_JSOHelper_getAttributeAsBoolean__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Z_ret_0 === undefined?false:com_smartgwt_client_util_JSOHelper_getAttributeAsBoolean__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Z_ret_0)?java_lang_Boolean_TRUE:java_lang_Boolean_FALSE).java_lang_Boolean_value) {
    return org_broadleafcommerce_openadmin_client_MessageManager_$replaceKeys__Lorg_broadleafcommerce_openadmin_client_MessageManager_2Ljava_lang_String_2_3Ljava_lang_String_2_3Ljava_lang_String_2Ljava_lang_String_2((org_broadleafcommerce_openadmin_client_BLCMain_$clinit__V() , org_broadleafcommerce_openadmin_client_MessageManager_$getString__Lorg_broadleafcommerce_openadmin_client_MessageManager_2Ljava_lang_String_2Ljava_lang_String_2(org_broadleafcommerce_openadmin_client_BLCMain_MESSAGE_1MANAGER, $intern_1050)), com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, {65:1, 72:1, 73:1, 74:1, 75:1, 76:1}, 1, [$intern_2695, $intern_2696]), com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2ILcom_google_gwt_lang_Array_2Lcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1String_12_1classLit, {65:1, 72:1, 73:1, 74:1, 75:1, 76:1}, 1, [(com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_1 = record.com_smartgwt_client_core_JsObject_jsObj[$intern_2697] , com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_1 === undefined || com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_1 == null?null:String(com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_1)), (com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_2 = record.com_smartgwt_client_core_JsObject_jsObj[$intern_2582] , com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_2 === undefined || com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_2 == null?null:String(com_smartgwt_client_util_JSOHelper_getAttribute__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_String_2_ret_2))]));
  }
  return null;
}
;
_.java_lang_Object_castableTypeMap$ = {};
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1asyncloaders_1AsyncLoader18_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_1458, $intern_2698), com_google_gwt_lang_ClassLiteralHolder_Lorg_1broadleafcommerce_1cms_1admin_1client_1view_1file_1StaticAssetsView_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2699, $intern_2700), com_google_gwt_lang_ClassLiteralHolder_Lorg_1broadleafcommerce_1cms_1admin_1client_1view_1file_1StaticAssetsView$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2699, $intern_2701);
$entry(com_google_gwt_lang_asyncloaders_AsyncLoader18_onLoad__V)();
