
; /* Start:"a:4:{s:4:"full";s:93:"/bitrix/components/bitrix/socialnetwork.admin.set/templates/.default/script.js?15622056192527";s:6:"source";s:78:"/bitrix/components/bitrix/socialnetwork.admin.set/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var waitDiv = null;
var waitPopup = null;
var waitTimeout = null;
var waitTime = 500;

function __SASSetAdmin()
{
	__SASShowWait();
	BX.ajax({
		url: '/bitrix/components/bitrix/socialnetwork.admin.set/ajax.php',
		method: 'POST',
		dataType: 'json',
		data: {'ACTION': 'SET', 'sessid': BX.bitrix_sessid(), 'site': BX.util.urlencode(BX.message('SASSiteId'))},
		onsuccess: function(data) { __SASProcessAJAXResponse(data); }
	});
}

function __SASProcessAJAXResponse(data)
{
	if (data["SUCCESS"] != "undefined" && data["SUCCESS"] == "Y")
	{
		BX.reload();
		return false;
	}
	else if (data["ERROR"] != "undefined" && data["ERROR"].length > 0)
	{
		if (data["ERROR"].indexOf("SESSION_ERROR", 0) === 0)
		{
			__SASShowError(BX.message('SASErrorSessionWrong'));
			BX.reload();
		}
		else if (data["ERROR"].indexOf("CURRENT_USER_NOT_ADMIN", 0) === 0)
		{
			__SASShowError(BX.message('SASErrorNotAdmin'));
			return false;
		}
		else if (data["ERROR"].indexOf("CURRENT_USER_NOT_AUTH", 0) === 0)
		{
			__SASShowError(BX.message('SASErrorCurrentUserNotAuthorized'));
			return false;
		}
		else if (data["ERROR"].indexOf("SONET_MODULE_NOT_INSTALLED", 0) === 0)
		{
			__SASShowError(BX.message('SASErrorModuleNotInstalled'));
			return false;
		}
		else
		{
			__SASShowError(data["ERROR"]);
			return false;		
		}
	}
}
				
function __SASShowError(errorText) 
{
	__SASCloseWait();

	var errorPopup = new BX.PopupWindow('sas-error' + Math.random(), window, {
		autoHide: true,
		lightShadow: false,
		zIndex: 2,
		content: BX.create('DIV', {props: {'className': 'sonet-adminset-error-text-block'}, html: errorText}),
		closeByEsc: true,
		closeIcon: true
	});
	errorPopup.show();

}

function __SASShowWait(timeout)
{
	if (timeout !== 0)
	{
		return (waitTimeout = setTimeout(function(){
			__SASShowWait(0)
		}, 50));
	}

	if (!waitPopup)
	{
		waitPopup = new BX.PopupWindow('sas_wait', window, {
			autoHide: true,
			lightShadow: true,
			zIndex: 2,
			content: BX.create('DIV', {
				props: {
					className: 'sonet-adminset-wait-cont'
				},
				children: [
					BX.create('DIV', {
						props: {
							className: 'sonet-adminset-wait-icon'
						}
					}),
					BX.create('DIV', {
						props: {
							className: 'sonet-adminset-wait-text'
						},
						html: BX.message('SASWaitTitle')
					})
				]
			})
		});
	}
	else
		waitPopup.setBindElement(window);

	waitPopup.show();
}

function __SASCloseWait()
{
	if (waitTimeout)
	{
		clearTimeout(waitTimeout);
		waitTimeout = null;
	}

	if (waitPopup)
		waitPopup.close();
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:104:"/bitrix/components/bitrix/socialnetwork.group_create.ex/templates/.default/script.min.js?156220562021538";s:6:"source";s:84:"/bitrix/components/bitrix/socialnetwork.group_create.ex/templates/.default/script.js";s:3:"min";s:88:"/bitrix/components/bitrix/socialnetwork.group_create.ex/templates/.default/script.min.js";s:3:"map";s:88:"/bitrix/components/bitrix/socialnetwork.group_create.ex/templates/.default/script.map.js";}"*/
function BXSwitchProject(e){BX.BXGCE.recalcFormPartProject(e)}function BXSwitchNotVisible(e){if(BX("GROUP_OPENED")&&BX("GROUP_OPENED").type=="checkbox"){if(e){BX("GROUP_OPENED").disabled=false}else{BX("GROUP_OPENED").disabled=true;BX("GROUP_OPENED").checked=false}}}function BXSwitchExtranet(e,t){if(BX("INVITE_EXTRANET_block")){if(e){BX("INVITE_EXTRANET_block_container").style.display="block"}BX.BXGCE.showHideBlock({container:BX("INVITE_EXTRANET_block_container"),block:BX("INVITE_EXTRANET_block"),show:e,duration:t?1e3:0,callback:{complete:function(){if(e){BX.removeClass(BX("INVITE_EXTRANET_block_container"),"invisible")}else{BX("INVITE_EXTRANET_block_container").style.display="none";BX.addClass(BX("INVITE_EXTRANET_block_container"),"invisible")}}}})}if(BX("GROUP_OPENED")){if(!e){if(BX("GROUP_OPENED").type=="checkbox"){BX("GROUP_OPENED").disabled=false}}else{if(BX("GROUP_OPENED").type=="checkbox"){BX("GROUP_OPENED").disabled=true;BX("GROUP_OPENED").checked=false}else{BX("GROUP_OPENED").value="N"}}}if(BX("GROUP_VISIBLE")){if(!e){if(BX("GROUP_VISIBLE").type=="checkbox"){BX("GROUP_VISIBLE").disabled=false}}else{if(BX("GROUP_VISIBLE").type=="checkbox"){BX("GROUP_VISIBLE").disabled=true;BX("GROUP_VISIBLE").checked=false}else{BX("GROUP_VISIBLE").value="N"}}}if(BX("GROUP_INITIATE_PERMS")&&BX("GROUP_INITIATE_PERMS_OPTION_E")&&BX("GROUP_INITIATE_PERMS_OPTION_K")){if(e){BX("GROUP_INITIATE_PERMS_OPTION_E").selected=true}else{BX("GROUP_INITIATE_PERMS_OPTION_K").selected=true}}if(BX("GROUP_INITIATE_PERMS_PROJECT")&&BX("GROUP_INITIATE_PERMS_OPTION_PROJECT_E")&&BX("GROUP_INITIATE_PERMS_OPTION_PROJECT_K")){if(e){BX("GROUP_INITIATE_PERMS_OPTION_PROJECT_E").selected=true}else{BX("GROUP_INITIATE_PERMS_OPTION_PROJECT_K").selected=true}}if(BX("USERS_employee_section_extranet")){BX("USERS_employee_section_extranet").style.display=e?"inline-block":"none"}}function BXGCESubmitForm(e){if(BX("EXTRANET_INVITE_ACTION")){BX("EXTRANET_INVITE_ACTION").value=BX.BXGCE.lastAction}var t=BX("sonet_group_create_popup_form").action;if(t){if(BX("SONET_GROUP_ID")&&parseInt(BX("SONET_GROUP_ID").value)<=0){t+=(t.indexOf("?")>=0?"&":"?")+"action=createGroup&groupType="+BX.BXGCE.selectedTypeCode}BX.BXGCE.disableSubmitButton(true);var o="addSonetGroup";if(BX("SONET_GROUP_ID")&&parseInt(BX("SONET_GROUP_ID").value)>0){o="editSonetGroup"}t=BX.util.add_url_param(t,{b24statAction:o});if(document.forms.sonet_group_create_popup_form.elements.GROUP_PROJECT&&(document.forms.sonet_group_create_popup_form.elements.IS_EXTRANET_GROUP||document.forms.sonet_group_create_popup_form.elements.GROUP_OPENED)){var i=document.forms.sonet_group_create_popup_form.elements.GROUP_PROJECT.checked?"project-":"group-";if(document.forms.sonet_group_create_popup_form.elements.IS_EXTRANET_GROUP&&document.forms.sonet_group_create_popup_form.elements.IS_EXTRANET_GROUP.checked){i+="external"}else{i+=document.forms.sonet_group_create_popup_form.elements.GROUP_OPENED.checked?"open":"closed"}t=BX.util.add_url_param(t,{b24statType:i})}BX.ajax.submitAjax(document.forms.sonet_group_create_popup_form,{url:t,method:"POST",dataType:"json",onsuccess:function(e){if(BX.type.isNotEmptyString(e.ERROR)){BX.BXGCE.showError((BX.type.isNotEmptyString(e.WARNING)?e.WARNING+"<br>":"")+e.ERROR);if(typeof e["USERS_ID"]!="undefined"&&BX.type.isArray(e["USERS_ID"])){var t=false,o=[],i=false,n=0,a=null,r=null;for(n=0;n<e["USERS_ID"].length;n++){o["U"+e["USERS_ID"][n]]="users"}var s=null;if(BX.BXGCE.arUserSelector.length>0){for(var l=0;l<BX.BXGCE.arUserSelector.length;l++){s=BX.UI.SelectorManager.instances[BX.BXGCE.arUserSelector[l]];if(!BX.type.isNotEmptyObject(s)){continue}t=BX.findChildren(BX("ui-tile-selector-"+BX.BXGCE.arUserSelector[l]),{className:"ui-tile-selector-item"},true);if(t){for(n=0;n<t.length;n++){i=t[n].getAttribute("data-bx-id");if(BX.type.isNotEmptyString(i)){s.getRenderInstance().deleteItem({entityType:"USERS",itemId:i})}}}s.itemsSelected=o;s.reinit()}}}BX.BXGCE.disableSubmitButton(false)}else if(e["MESSAGE"]=="SUCCESS"){if(window===top.window){if(typeof e["URL"]!=="undefined"&&e["URL"].length>0){top.location.href=e["URL"]}}else{if(typeof e.ACTION!="undefined"){var c=false;if(BX.util.in_array(e.ACTION,["create","edit"])&&typeof e.GROUP!="undefined"){c={code:e.ACTION=="create"?"afterCreate":"afterEdit",data:{group:e.GROUP}}}else if(BX.util.in_array(e.ACTION,["invite"])){c={code:"afterInvite",data:{}}}if(c){window.top.BX.SidePanel.Instance.postMessageAll(window,"sonetGroupEvent",c);BX.SidePanel.Instance.close();if(e.ACTION=="create"&&BX.type.isNotEmptyString(e.URL)&&(!BX.type.isNotEmptyString(BX.BXGCE.config.refresh)||BX.BXGCE.config.refresh=="Y")){top.window.location.href=e.URL}}else{BX.SocialnetworkUICommon.reload();var _=BX.SidePanel.Instance.getSliderByWindow(window);if(_){window.top.BX.onCustomEvent("SidePanel.Slider:onClose",[_.getEvent("onClose")])}window.top.BX.onCustomEvent("BX.Bitrix24.PageSlider:close",[false]);window.top.BX.onCustomEvent("onSonetIframeCancelClick")}}}}},onfailure:function(e){BX.BXGCE.disableSubmitButton(false);BX.BXGCE.showError(BX.message("SONET_GCE_T_AJAX_ERROR"))}})}e.preventDefault()}(function(){if(!!BX.BXGCE){return}BX.BXGCE={config:{refresh:"Y"},groupId:null,userSelector:"",lastAction:"invite",arUserSelector:[],formSteps:2,animationList:{},selectedTypeCode:false};BX.BXGCE.init=function(e){if(typeof e!="undefined"){if(typeof e.groupId!="undefined"){this.groupId=parseInt(e.groupId)}if(typeof e.config!="undefined"){this.config=e.config}}var t=null,o=null;if(BX("sonet_group_create_form_step_1")){var i=BX.findChildren(BX("sonet_group_create_form_step_1"),{className:"social-group-tile-item"},true);for(t=0,o=i.length;t<o;t++){BX.bind(i[t],"click",BX.delegate(function(e){var t=e.currentTarget;var o=this.selectedTypeCode=t.getAttribute("bx-type");if(BX.type.isNotEmptyString(o)){this.showStep({step:2});if(BX("GROUP_NAME_input")){BX("GROUP_NAME_input").focus()}this.recalcForm({type:o})}e.preventDefault()},this))}}if(BX("additional-block-features")){var n=BX.findChildren(BX("additional-block-features"),{className:"social-group-create-form-pencil"},true);for(t=0,o=n.length;t<o;t++){BX.bind(n[t],"click",BX.delegate(function(e){var t=e.currentTarget;var o=BX.findParent(t,{className:"social-group-create-form-field-list-item"},BX("additional-block-features"));if(o){BX.addClass(o,"custom-value")}var i=BX.findChild(o,{className:"social-group-create-form-field-input-text"},true);var n=BX.findChild(o,{className:"social-group-create-form-field-list-label"},true);if(i&&n){i.value=n.innerText}e.preventDefault()},this))}var a=BX.findChildren(BX("additional-block-features"),{className:"social-group-create-form-field-cancel"},true);for(t=0,o=a.length;t<o;t++){BX.bind(a[t],"click",BX.delegate(function(e){var t=e.currentTarget;var o=BX.findParent(t,{className:"social-group-create-form-field-list-item"},BX("additional-block-features"));if(o){BX.removeClass(o,"custom-value")}var i=BX.findChild(o,{className:"social-group-create-form-field-input-text"},true);if(i){i.value=""}e.preventDefault()},this))}}if(BX("GROUP_NAME_input")){BX("GROUP_NAME_input").focus()}BX.bind(BX("sonet_group_create_popup_form_button_step_2_back"),"click",BX.delegate(function(e){this.showStep({step:1});return e.preventDefault()},this));BX.bind(BX("sonet_group_create_popup_form_button_submit"),"click",function(e){BXGCESubmitForm(e);var t=BX.SidePanel.Instance.getSliderByWindow(window);if(t){window.top.BX.onCustomEvent("SidePanel.Slider:onClose",[t.getEvent("onClose")])}});BX.bind(BX("sonet_group_create_popup_form_button_step_2_cancel"),"click",function(e){var t=BX.SidePanel.Instance.getSliderByWindow(window);if(t){window.top.BX.onCustomEvent("SidePanel.Slider:onClose",[t.getEvent("onClose")])}window.top.BX.onCustomEvent("BX.Bitrix24.PageSlider:close",[false]);window.top.BX.onCustomEvent("onSonetIframeCancelClick");return e.preventDefault()});if(BX.SidePanel.Instance.getTopSlider()){BX.addCustomEvent(BX.SidePanel.Instance.getTopSlider().getWindow(),"SidePanel.Slider:onClose",function(e){setTimeout(function(){BX.SidePanel.Instance.destroy(e.getSlider().getUrl())},500)})}BX.bind(BX("GROUP_INITIATE_PERMS"),"change",BX.BXGCE.onInitiatePermsChange);BX.bind(BX("GROUP_INITIATE_PERMS_PROJECT"),"change",BX.BXGCE.onInitiatePermsChange);if(BX("GROUP_MODERATORS_switch")&&BX("GROUP_MODERATORS_PROJECT_switch")){var r=BX.delegate(function(){var e=BX.hasClass(BX("GROUP_MODERATORS_block_container"),"invisible");if(e){BX("GROUP_MODERATORS_block_container").style.display="block"}this.showHideBlock({container:BX("GROUP_MODERATORS_block_container"),block:BX("GROUP_MODERATORS_block"),show:e,duration:500,callback:{complete:function(){if(!e){BX("GROUP_MODERATORS_block_container").style.display="none"}BX.toggleClass(BX("GROUP_MODERATORS_block_container"),"invisible")}}})},this);BX.bind(BX("GROUP_MODERATORS_switch"),"click",r);BX.bind(BX("GROUP_MODERATORS_PROJECT_switch"),"click",r)}if(BX("IS_EXTRANET_GROUP")&&BX("IS_EXTRANET_GROUP").type=="checkbox"){BX.bind(BX("IS_EXTRANET_GROUP"),"click",function(){BXSwitchExtranet(BX("IS_EXTRANET_GROUP").checked,true)})}if(BX("GROUP_VISIBLE")&&BX("GROUP_VISIBLE").type=="checkbox"){BX.bind(BX("GROUP_VISIBLE"),"click",function(){BXSwitchNotVisible(BX("GROUP_VISIBLE").checked)})}if(BX("switch_additional")){BX.bind(BX("switch_additional"),"click",BX.delegate(function(e){var t=BX.getEventTarget(e).getAttribute("bx-block-id");if(BX.type.isNotEmptyString(t)){if(!BX.hasClass(BX("switch_additional"),"opened")){this.onToggleAdditionalBlock({callback:BX.delegate(function(){this.highlightAdditionalBlock(t)},this)})}else{this.highlightAdditionalBlock(t)}}else{this.onToggleAdditionalBlock()}},this))}if(BX.type.isNotEmptyString(e.avatarUploaderId)&&BX("GROUP_IMAGE_ID_block")&&typeof BX.UploaderManager!="undefined"){setTimeout(function(){var t=BX.UploaderManager.getById(e.avatarUploaderId);if(t){BX.addCustomEvent(t,"onQueueIsChanged",function(e,t,o,i){if(t=="add"){BX.addClass(BX("GROUP_IMAGE_ID_block"),"social-group-create-link-upload-set")}else if(t=="delete"){BX.removeClass(BX("GROUP_IMAGE_ID_block"),"social-group-create-link-upload-set")}})}},0)}};BX.BXGCE.onToggleAdditionalBlock=function(e){BX.toggleClass(BX("switch_additional"),"opened");var t=BX.hasClass(BX("block_additional"),"invisible");if(t){BX("block_additional").style.display="block"}this.showHideBlock({container:BX("block_additional"),block:BX("block_additional_inner"),show:t,duration:1e3,callback:{complete:function(){BX.toggleClass(BX("block_additional"),"invisible");if(typeof e!="undefined"&&typeof e.callback=="function"){if(!t){BX("block_additional").style.display="none"}e.callback()}}}})};BX.BXGCE.showHideBlock=function(e){if(typeof e=="undefined"){return false}var t=typeof e.container!="undefined"?BX(e.container):false;var o=typeof e.block!="undefined"?BX(e.block):false;var i=!!e.show;if(!t||!o){return false}if(typeof this.animationList[o.id]!="undefined"&&this.animationList[o.id]!=null){return false}this.animationList[o.id]=null;var n=parseInt(o.offsetHeight);var a=typeof e.duration!="undefined"&&parseInt(e.duration)>0?parseInt(e.duration):0;if(i){t.style.display="block"}if(a>0){if(BX.type.isNotEmptyString(o.id)){this.animationList[o.id]=true}BX.delegate(new BX["easing"]({duration:a,start:{height:i?0:n,opacity:i?0:100},finish:{height:i?n:0,opacity:i?100:0},transition:BX.easing.makeEaseOut(BX.easing.transitions.quart),step:function(e){t.style.maxHeight=e.height+"px";t.style.opacity=e.opacity/100},complete:BX.delegate(function(){if(BX.type.isNotEmptyString(o.id)){this.animationList[o.id]=null}if(typeof e.callback!="undefined"&&typeof e.callback.complete=="function"){t.style.maxHeight="";t.style.opacity="";e.callback.complete()}},this)}).animate(),this)}else{e.callback.complete()}return true};BX.BXGCE.highlightAdditionalBlock=function(e){var t=BX("additional-block-"+e);if(t){var o="item-highlight";var i=BX.GetWindowScrollPos();BX.addClass(t,o);setTimeout(function(){var e=BX.pos(t);new BX.easing({duration:500,start:{scroll:i.scrollTop},finish:{scroll:e.top},transition:BX.easing.makeEaseOut(BX.easing.transitions.quart),step:function(e){window.scrollTo(0,e.scroll)},complete:function(){}}).animate()},600);setTimeout(function(){BX.removeClass(t,o)},3e3)}};BX.BXGCE.onInitiatePermsChange=function(){var e=this.id=="GROUP_INITIATE_PERMS"?"GROUP_INITIATE_PERMS_OPTION_PROJECT_":"GROUP_INITIATE_PERMS_OPTION_";if(BX(e+this.options[this.selectedIndex].value)){BX(e+this.options[this.selectedIndex].value).selected=true}};BX.BXGCE.showStep=function(e){var t=typeof e!="undefined"&&typeof e.step!="undefined"?parseInt(e.step):1;for(var o=1;o<=this.formSteps;o++){if(BX("sonet_group_create_form_step_"+o)){BX("sonet_group_create_form_step_"+o).style.display=o==t?"block":"none"}}};BX.BXGCE.recalcFormPartProjectBlock=function(e,t){if(BX(e)){if(t){BX.addClass(BX(e),"sgcp-switch-project")}else{BX.removeClass(e,"sgcp-switch-project")}}};BX.BXGCE.recalcFormPartProject=function(e){e=!!e;if(BX("GROUP_PROJECT")){this.setCheckedValue(BX("GROUP_PROJECT"),e)}BX.BXGCE.recalcFormPartProjectBlock("IS_PROJECT_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_VISIBLE_LABEL_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_OPENED_LABEL_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_CLOSED_LABEL_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_EXTRANET_LABEL_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_OWNER_LABEL_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_ADD_DEPT_HINT_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_MODERATORS_LABEL_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_MODERATORS_SWITCH_LABEL_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_TYPE_LABEL_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_SUBJECT_ID_LABEL_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_INVITE_PERMS_block",e);BX.BXGCE.recalcFormPartProjectBlock("GROUP_INVITE_PERMS_LABEL_block",e);if(BX("sonet_group_create_popup_form_button_submit")&&BX("sonet_group_create_popup_form_button_submit").getAttribute("bx-action-type")=="create"){BX("sonet_group_create_popup_form_button_submit").innerHTML=BX.message(e?"SONET_GCE_T_DO_CREATE_PROJECT":"SONET_GCE_T_DO_CREATE")}if(BX("GROUP_NAME_input")){BX("GROUP_NAME_input").placeholder=BX.message(e?"SONET_GCE_T_NAME2_PROJECT":"SONET_GCE_T_NAME2")}if(BX("pagetitle-slider")){BX("pagetitle-slider").innerHTML=BX.message(this.groupId>0?e?"SONET_GCE_T_TITLE_EDIT_PROJECT":"SONET_GCE_T_TITLE_EDIT":e?"SONET_GCE_T_TITLE_CREATE_PROJECT":"SONET_GCE_T_TITLE_CREATE")}};BX.BXGCE.recalcForm=function(e){var t=typeof e!="undefined"&&typeof e.type!="undefined"?e.type:false;if(!t||typeof this.types[t]=="undefined"){return}this.recalcFormPartProject(this.types[t].PROJECT=="Y");if(BX("GROUP_OPENED")){this.setCheckedValue(BX("GROUP_OPENED"),this.types[t].OPENED=="Y")}if(BX("GROUP_VISIBLE")){this.setCheckedValue(BX("GROUP_VISIBLE"),this.types[t].VISIBLE=="Y")}if(BX("IS_EXTRANET_GROUP")){this.setCheckedValue(BX("IS_EXTRANET_GROUP"),this.types[t].EXTERNAL=="Y")}this.recalcFormDependencies()};BX.BXGCE.recalcFormDependencies=function(){if(BX("IS_EXTRANET_GROUP")){BXSwitchExtranet(this.getCheckedValue(BX("IS_EXTRANET_GROUP")),false)}if(BX("GROUP_VISIBLE")&&BX("GROUP_OPENED")){var e=this.getCheckedValue(BX("GROUP_VISIBLE"));if(!e){this.setCheckedValue(BX("GROUP_OPENED"),false)}}};BX.BXGCE.setSelector=function(e){BX.BXGCE.userSelector=e};BX.BXGCE.showDepartmentHint=function(e){if(!BX.type.isNotEmptyString(e.selectorId)){return}var t=BX("GROUP_ADD_DEPT_HINT_block");if(!t){return}var o=BX.UI.SelectorManager.instances[e.selectorId];if(!BX.type.isNotEmptyObject(o)){return}if(!BX.type.isNotEmptyObject(o.itemsSelected)){return false}var i=false;for(var n in o.itemsSelected){if(!o.itemsSelected.hasOwnProperty(n)){continue}if(n.match(/DR\d+/)){i=true;break}}if(i){BX.addClass(t,"visible")}else{BX.removeClass(t,"visible")}return i};BX.BXGCE.bindActionLink=function(e){if(e===undefined||e==null){return}BX.bind(e,"click",function(t){BX.PopupMenu.destroy("invite-dialog-usertype-popup");var o=[{text:BX.message("SONET_GCE_T_DEST_EXTRANET_SELECTOR_INVITE"),id:"sonet_group_create_popup_action_invite",className:"menu-popup-no-icon",onclick:function(){BX.BXGCE.onActionSelect("invite")}},{text:BX.message("SONET_GCE_T_DEST_EXTRANET_SELECTOR_ADD"),id:"sonet_group_create_popup_action_add",className:"menu-popup-no-icon",onclick:function(){BX.BXGCE.onActionSelect("add")}}];var i={offsetLeft:-14,offsetTop:4,zIndex:1200,lightShadow:false,angle:{position:"top",offset:50},events:{onPopupShow:function(e){}}};BX.PopupMenu.show("sonet_group_create_popup_action_popup",e,o,i)})};BX.BXGCE.onActionSelect=function(e){if(e!="add"){e="invite"}BX.BXGCE.lastAction=e;BX("sonet_group_create_popup_action_title_link").innerHTML=BX.message("SONET_GCE_T_DEST_EXTRANET_SELECTOR_"+(e=="invite"?"INVITE":"ADD"));if(e=="invite"){BX("sonet_group_create_popup_action_block_invite").style.display="block";BX("sonet_group_create_popup_action_block_invite_2").style.display="block";BX("sonet_group_create_popup_action_block_add").style.display="none"}else{BX("sonet_group_create_popup_action_block_invite").style.display="none";BX("sonet_group_create_popup_action_block_invite_2").style.display="none";BX("sonet_group_create_popup_action_block_add").style.display="block"}BX("sonet_group_create_popup_action_block_"+e).style.display="block";BX("sonet_group_create_popup_action_block_"+(e=="invite"?"add":"invite")).style.display="none";BX.PopupMenu.destroy("sonet_group_create_popup_action_popup")};BX.BXGCE.showError=function(e){if(BX("sonet_group_create_error_block")){BX("sonet_group_create_error_block").innerHTML=e;BX.removeClass(BX("sonet_group_create_error_block"),"sonet-ui-form-error-block-invisible")}};BX.BXGCE.showMessage=function(){};BX.BXGCE.disableSubmitButton=function(e){e=!!e;var t=BX("sonet_group_create_popup_form_button_submit");if(t){if(e){BX.SocialnetworkUICommon.showButtonWait(t);BX.unbind(t,"click",BXGCESubmitForm)}else{BX.SocialnetworkUICommon.hideButtonWait(t);BX.bind(t,"click",BXGCESubmitForm)}}};BX.BXGCE.getCheckedValue=function(e){var t=false;if(!BX(e)){return t}if(e.type=="hidden"){t=e.value=="Y"}else if(e.type=="checkbox"){t=e.checked}return t};BX.BXGCE.setCheckedValue=function(e,t){if(!BX(e)){return}t=!!t;if(e.type=="checkbox"){e.checked=t}else{e.value=t?"Y":"N"}};BX.BXGCETagsForm=function(e){this.popup=null;this.addNewLink=null;this.hiddenField=null;this.popupContent=null;this.init(e)};BX.BXGCETagsForm.prototype.init=function(e){this.addNewLink=BX(e.addNewLinkId);this.tagsContainer=BX(e.containerNodeId);this.hiddenField=BX(e.hiddenFieldId);this.popupContent=BX(e.popupContentNodeId);this.popupInput=BX.findChild(this.popupContent,{tag:"input"});var t=BX.findChildren(this.tagsContainer,{className:"js-id-tdp-mem-sel-is-item-delete"},true);for(var o=0,i=t.length;o<i;o++){BX.bind(t[o],"click",BX.proxy(this.onTagDelete,{obj:this,tagBox:t[o].parentNode.parentNode,tagValue:t[o].parentNode.parentNode.getAttribute("data-tag")}))}BX.bind(this.addNewLink,"click",BX.proxy(this.onAddNewClick,this))};BX.BXGCETagsForm.prototype.onTagDelete=function(){BX.remove(this.tagBox);this.obj.hiddenField.value=this.obj.hiddenField.value.replace(this.tagValue+",","").replace("  "," ")};BX.BXGCETagsForm.prototype.show=function(){if(this.popup===null){this.popup=new BX.PopupWindow("bx-group-tag-popup",this.addNewLink,{content:this.popupContent,lightShadow:false,offsetTop:8,offsetLeft:10,autoHide:true,angle:true,closeByEsc:true,zIndex:-840,buttons:[new BX.PopupWindowButton({text:BX.message("SONET_GCE_T_TAG_ADD"),events:{click:BX.proxy(this.onTagAdd,this)}})]});BX.bind(this.popupInput,"keydown",BX.proxy(this.onKeyPress,this));BX.bind(this.popupInput,"keyup",BX.proxy(this.onKeyPress,this))}this.popup.show();BX.focus(this.popupInput)};BX.BXGCETagsForm.prototype.addTag=function(e){var t=BX.type.isNotEmptyString(e)?e.split(","):this.popupInput.value.split(",");var o=[];for(var i=0;i<t.length;i++){var n=BX.util.trim(t[i]);if(n.length>0){var a=this.hiddenField.value.split(",");if(!BX.util.in_array(n,a)){var r=null;var s=BX.create("span",{children:[BX.create("span",{props:{className:"js-id-tdp-mem-sel-is-item social-group-create-form-field-item"},children:[BX.create("a",{props:{className:"social-group-create-form-field-item-text"},text:n}),r=BX.create("span",{props:{className:"js-id-tdp-mem-sel-is-item-delete social-group-create-form-field-item-delete"}})]})],attrs:{"data-tag":n},props:{className:"js-id-tdp-mem-sel-is-items social-group-create-sliders-h-invisible"}});this.tagsContainer.insertBefore(s,this.addNewLink);BX.bind(r,"click",BX.proxy(this.onTagDelete,{obj:this,tagBox:s,tagValue:n}));this.hiddenField.value+=n+",";o.push(n)}}}return o};BX.BXGCETagsForm.prototype.onTagAdd=function(){this.addTag();this.popupInput.value="";this.popup.close()};BX.BXGCETagsForm.prototype.onAddNewClick=function(e){e=e||window.event;this.show();e.preventDefault()};BX.BXGCETagsForm.prototype.onKeyPress=function(e){e=e||window.event;var t=e.keyCode?e.keyCode:e.which?e.which:null;if(t==13){setTimeout(BX.proxy(this.onTagAdd,this),0)}};BX.BXGCESelectorInstance=function(e){};BX.BXGCESelectorInstance.prototype.init=function(e){BX.addCustomEvent("BX.Main.User.SelectorController:select",function(t){if(t.selectorId==e.selectorId){BX.BXGCE.showDepartmentHint({selectorId:t.selectorId})}});BX.addCustomEvent("BX.Main.User.SelectorController:unSelect",function(t){if(t.selectorId==e.selectorId){BX.BXGCE.showDepartmentHint({selectorId:t.selectorId})}})}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:89:"/bitrix/components/bitrix/main.file.input/templates/.default/script.min.js?15622054959095";s:6:"source";s:70:"/bitrix/components/bitrix/main.file.input/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(){var e=window.BX;if(e["MFInput"])return;var t={},i=function(){var i=function(i){try{this.params=i;this.controller=e("mfi-"+i.controlId);this.button=e("mfi-"+i.controlId+"-button");this.editor=null;if(e("mfi-"+i.controlId+"-editor")){this.editor=new e.AvatarEditor({enableCamera:i.enableCamera});e.addCustomEvent(this.editor,"onApply",e.delegate(this.addFile,this));e.bind(e("mfi-"+i.controlId+"-editor"),"click",e.delegate(this.editor.click,this.editor))}this.init(i);t[i.controlId]=this;this.template=e.message("MFI_THUMB2").replace("#input_name#",this.params.inputName);window["FILE_INPUT_"+i.controlId]=this;this.INPUT=e("file_input_"+i["controlId"])}catch(t){e.debug(t)}};i.prototype={init:function(t){this.agent=e.Uploader.getInstance({id:t["controlId"],CID:t["controlUid"],streams:1,uploadFormData:"N",uploadMethod:"immediate",uploadFileUrl:t["urlUpload"],allowUpload:t["allowUpload"],allowUploadExt:t["allowUploadExt"],uploadMaxFilesize:t["uploadMaxFilesize"],showImage:false,sortItems:false,input:e("file_input_"+t["controlId"]),dropZone:this.controller.parentNode,placeHolder:this.controller,fields:{thumb:{tagName:"",template:e.message("MFI_THUMB")}}});this.fileEvents={onFileIsAttached:e.delegate(this.onFileIsAttached,this),onFileIsAppended:e.delegate(this.onFileIsAppended,this),onFileIsBound:e.delegate(this.onFileIsBound,this),onFileIsReadyToFrame:e.delegate(this.onFileIsReadyToFrame,this),onUploadStart:e.delegate(this.onUploadStart,this),onUploadProgress:e.delegate(this.onUploadProgress,this),onUploadDone:e.delegate(this.onUploadDone,this),onUploadError:e.delegate(this.onUploadError,this),onUploadRestore:e.delegate(this.onUploadRestore,this)};e.addCustomEvent(this.agent,"onAttachFiles",e.delegate(this.onAttachFiles,this));e.addCustomEvent(this.agent,"onQueueIsChanged",e.delegate(this.onQueueIsChanged,this));e.addCustomEvent(this.agent,"onFileIsInited",e.delegate(this.onFileIsInited,this));e.addCustomEvent(this.agent,"onPackageIsInitialized",e.delegate(function(e){var t={mfi_mode:"upload",cid:this.agent.CID,moduleId:this.params["moduleId"],forceMd5:this.params["forceMd5"],allowUpload:this.agent.limits["allowUpload"],allowUploadExt:this.agent.limits["allowUploadExt"],uploadMaxFilesize:this.agent.limits["uploadMaxFilesize"],mfi_sign:this.params["controlSign"]},i;for(i in t){if(t.hasOwnProperty(i)&&t[i]){e.post.data[i]=t[i];e.post.size+=(i+"").length+(t[i]+"").length}}},this));var i=[],a=[],n,s,r=e.findChildren(this.controller,{tagName:"LI"});for(var o=0;o<r.length;o++){n=e.findChild(r[o],{attribute:{"data-bx-role":"file-name"}},true);s=e.findChild(r[o],{attribute:{"data-bx-role":"file-id"}},true);if(n&&s){i.push({name:n.innerHTML,file_id:s.value});a.push(r[o])}}this.agent.onAttach(i,a);this.inited=true;this.checkUploadControl()},checkUploadControl:function(){if(e(this.button)){if(!(this.params["maxCount"]>0&&this.params["maxCount"]<=this.agent.getItems().length)){this.button.removeAttribute("disable")}else if(this.params["maxCount"]==1){}else{this.button.setAttribute("disable","Y")}}},onQueueIsChanged:function(){if(this.params["maxCount"]>0){this.checkUploadControl()}},onAttachFiles:function(t){var i=false,a;if(t&&this.inited===true&&this.params["maxCount"]>0){if(this.params["maxCount"]==1&&t.length>0){while(this.agent.getItems().length>0){this.deleteFile(this.agent.getItems().getFirst(),false)}while(t.length>1)t.pop()}var n=this.params["maxCount"]-this.agent.getItems().length;n=n>0?n:0;while(t.length>n){t.pop();i=true}}if(i){this.onError("Too much files.")}e.onCustomEvent(this,"onFileUploaderChange",[t,this]);return t},onFileIsInited:function(t,i){for(var a in this["fileEvents"]){if(this["fileEvents"].hasOwnProperty(a))e.addCustomEvent(i,a,this["fileEvents"][a])}},onFileIsAppended:function(e,t){var i=this.agent.getItem(e);this.bindEventsHandlers(i.node,t)},onFileIsBound:function(e,t){var i=this.agent.getItem(e);this.bindEventsHandlers(i.node,t)},bindEventsHandlers:function(t,i){var a=e.findChild(t,{attribute:{"data-bx-role":"file-delete"}},true),n;if(a)e.bind(a,"click",e.proxy(function(){this.deleteFile(i)},this));a=e.findChild(t,{attribute:{"data-bx-role":"file-preview"}},true);if(a){a.removeAttribute("data-bx-role");if(i.file.parentCanvas){var s=e.UploaderUtils.scaleImage(i.file.parentCanvas,{width:100,height:100},"exact"),r=e.create("CANVAS",{props:{width:100,height:100}});a.appendChild(r);r.getContext("2d").drawImage(i.file.parentCanvas,s.source.x,s.source.y,s.source.width,s.source.height,0,0,s.destin.width,s.destin.height);i.canvas=r}}i.file.parentCanvas=null;a=e.findChild(t,{tagName:"A",attribute:{"data-bx-role":"file-name"}},true);if(a){if(this.editor&&((n=e.findChild(t,{tagName:"CANVAS"},true))&&n||(n=e.findChild(t,{tagName:"IMG"},true))&&n)){e.bind(a,"click",e.proxy(function(t){e.PreventDefault(t);this.editor.showFile({name:a.innerHTML,tmp_url:a.href});return false},this))}else if(a.getAttribute("href")==="#"){e.bind(a,"click",e.proxy(function(t){e.PreventDefault(t);return false},this))}}},addFile:function(e,t){e.name=e["name"]||"image.png";e.parentCanvas=t;this.agent.onAttach([e])},deleteFile:function(t){var i=t?this.agent.getItem(t.id):false;if(!i)return;t=i.item;var a=i.node;var n;if(t.file["justUploaded"]===true&&t.file["file_id"]>0){var s={fileID:t.file["file_id"],sessid:e.bitrix_sessid(),cid:this.agent.CID,mfi_mode:"delete"};e.ajax.post(this.agent.uploadFileUrl,s)}else{var r=a.parentNode.parentNode,o=e.findChild(a,{tagName:"INPUT",attribute:{"data-bx-role":"file-id"}},true);if(o){var l=o.name,d=o.value,h=l+"_del",p=this.agent.id+"_deleted[]";if(l.indexOf("[")>0){h=l.substr(0,l.indexOf("["))+"_del"+l.substr(l.indexOf("["))}n=e.create("INPUT",{props:{name:l,type:"hidden",value:d}});r.appendChild(n);var f=e.create("INPUT",{props:{name:h,type:"hidden",value:d}});r.appendChild(f);f=e.create("INPUT",{props:{name:p,type:"hidden",value:d}});r.appendChild(f)}}for(var u in this["fileEvents"]){if(this["fileEvents"].hasOwnProperty(u))e.addCustomEvent(t,u,this["fileEvents"][u])}e.unbindAll(a);var g=t.file?t.file["file_id"]:null;delete t.hash;t.deleteFile("deleteFile");if(g){e.onCustomEvent(this,"onDeleteFile",[g,t,this]);e.onCustomEvent(this,"onFileUploaderChange",[[g],this]);if(!!n){e.fireEvent(n,"change")}}},_deleteFile:function(){},clear:function(){while(this.agent.getItems().length>0){this.deleteFile(this.agent.getItems().getFirst(),false)}},onUploadStart:function(t){var i=this.agent.getItem(t.id).node;if(i)e.addClass(i,"uploading")},onUploadProgress:function(t,i){i=Math.min(i,98);var a=t.id;if(!t.__progressBarWidth)t.__progressBarWidth=5;if(i>t.__progressBarWidth){t.__progressBarWidth=Math.ceil(i);t.__progressBarWidth=t.__progressBarWidth>100?100:t.__progressBarWidth;if(e("wdu"+a+"Progressbar"))e.adjust(e("wdu"+a+"Progressbar"),{style:{width:t.__progressBarWidth+"%"}});if(e("wdu"+a+"ProgressbarText"))e.adjust(e("wdu"+a+"ProgressbarText"),{text:t.__progressBarWidth+"%"})}},onUploadDone:function(t,i){var a=this.agent.getItem(t.id).node,n=i["file"];if(e(a)){e.removeClass(a,"uploading");e.addClass(a,"saved");var s=this.template,r;n["ext"]=t.ext;n["preview_url"]=t.canvas?t.canvas.toDataURL("image/png"):"/bitrix/images/1.gif";t.canvas=null;delete t.canvas;for(var o in n){if(n.hasOwnProperty(o)){r=n[o];if(o.toLowerCase()==="size")r=e.UploaderUtils.getFormattedSize(r,0);else if(o.toLowerCase()==="name")r=n["originalName"];s=s.replace(new RegExp("#"+o.toLowerCase()+"#","gi"),e.util.htmlspecialchars(r)).replace(new RegExp("#"+o.toUpperCase()+"#","gi"),e.util.htmlspecialchars(r))}}t.file.file_id=n["file_id"];t.file.justUploaded=true;t.name=n["originalName"];a.innerHTML=s;this.bindEventsHandlers(a,t);if(this.params.inputName.indexOf("[")<0){e.remove(e.findChild(a.parentNode.parentNode,{tagName:"INPUT",attr:{name:this.params.inputName}},false));e.remove(e.findChild(a.parentNode.parentNode,{tagName:"INPUT",attr:{name:this.params.inputName+"_del"}},false))}e.onCustomEvent(this,"onAddFile",[n["file_id"],this,n,a]);e.onCustomEvent(this,"onUploadDone",[i["file"],t,this]);e.fireEvent(e("file-"+n["file_id"]),"change")}else{this.onUploadError(t,i,this.agent)}},onUploadError:function(t,i,a){var n=this.agent.getItem(t.id).node,s=e.message("MFI_UPLOADING_ERROR");if(i&&i.error)s=i.error;e.removeClass(n,"uploading");e.addClass(n,"error");n.appendChild(e.create("DIV",{attrs:{className:"upload-file-error"},html:s}));e.onCustomEvent(this,"onErrorFile",[t["file"],this])},onError:function(t,i,a){var n="Uploading error.",s=n,r,o;if(a){if(a["error"]&&typeof a["error"]=="string")s=a["error"];else if(a["message"]&&typeof a["message"]=="string")s=a["message"];else if(e.type.isArray(a["errors"])&&a["errors"].length>0){s=[];for(var l=0;l<a["errors"].length;l++){if(typeof a["errors"][l]=="object"&&a["errors"][l]["message"])s.push(a["errors"][l]["message"])}if(s.length<=0)s.push("Uploading error.");s=s.join(" ")}}t.files=t.files||{};for(o in t.files){if(t.files.hasOwnProperty(o)){r=this.agent.queue.items.getItem(o);this.onUploadError(r,{error:s},s!=n)}}}};return i}();e.MFInput={init:function(e){return new i(e)},get:function(e){return t[e]||null}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:92:"/bitrix/components/bitrix/main.user.selector/templates/.default/script.min.js?15622054955945";s:6:"source";s:73:"/bitrix/components/bitrix/main.user.selector/templates/.default/script.js";s:3:"min";s:77:"/bitrix/components/bitrix/main.user.selector/templates/.default/script.min.js";s:3:"map";s:77:"/bitrix/components/bitrix/main.user.selector/templates/.default/script.map.js";}"*/
(function(){BX.namespace("BX.Main.User");if(BX.Main.User.Selector){return}function e(e){this.caller=e.caller;this.container=BX(e.containerId);this.id=e.id;this.containerId=e.containerId;this.inputName=e.inputName;this.inputId=e.inputName;this.isInputMultiple=e.isInputMultiple;this.inputNode=this.container.querySelector('input[name="'+e.inputName+'"]');this.useSymbolicId=e.useSymbolicId;this.openDialogWhenInit=!!e.openDialogWhenInit;this.selector=BX.UI.TileSelector.getById(this.id);if(!this.selector){throw new Error("Tile selector `"+this.id+"` not found.")}this.searchInputNode=this.selector.getSearchInput();if(!this.searchInputNode.id){this.searchInputNode.id=this.inputId+"-"+this.id+"-search-input"}this.lazyload=!!e.lazyload;BX.addCustomEvent(this.selector,this.selector.events.buttonSelect,this.openDialog.bind(this));BX.addCustomEvent(this.selector,this.selector.events.tileRemove,this.removeTile.bind(this));BX.Main.User.SelectorController.init(this)}e.prototype={openDialog:function(){if(this.lazyload){BX.onCustomEvent("BX.Main.SelectorV2:initDialog",[{selectorId:this.id,openDialogWhenInit:true}])}else{BX.Main.User.SelectorController.open(this)}},removeTile:function(e){this.unsetValue(e.id)},setUsers:function(e){e=e||[];if(this.isInputMultiple){this.addInputs(e)}else{this.inputNode.value=e.join(",")}},getUsers:function(){if(!this.isInputMultiple&&!this.inputNode){return[]}var e;if(this.isInputMultiple){e=this.getInputs().map(function(e){return e.value})}else{e=this.inputNode.value.split(",")}if(!this.useSymbolicId){return e.filter(function(e){e=parseInt(e);return!!e}).map(function(e){return parseInt(e)})}else{return e.filter(function(e){return e.length>0})}},setValue:function(e){if(!this.useSymbolicId){if(/^\d+$/.test(e)!==true){return}e=parseInt(e)}if(this.selectOne){this.setUsers([e])}else{var t=this.getUsers();if(!BX.util.in_array(e,t)){t.push(e)}this.setUsers(t)}},unsetValue:function(e){if(!this.useSymbolicId){if(/^\d+$/.test(e)!==true){return}e=parseInt(e)}if(this.selectOne){this.setUsers()}else{var t=this.getUsers().filter(function(t){return t!==e});this.setUsers(t)}},addInput:function(e){var t=document.createElement("input");t.type="hidden";t.name=this.inputName;t.value=e;this.container.insertBefore(t,this.container.firstElementChild)},addInputs:function(e){this.removeInputs();e.forEach(function(e){this.addInput(e)},this)},getInputs:function(){return BX.convert.nodeListToArray(this.container.querySelectorAll('input[name="'+this.inputName+'"]'))},removeInputs:function(){this.getInputs().forEach(function(e){BX.remove(e)})}};var t={list:[],init:function(e){this.list.push(e);BX.onCustomEvent(window,"BX.Main.User.SelectorController::init",[{id:e.id,inputId:e.searchInputNode.id,containerId:e.containerId,openDialogWhenInit:e.openDialogWhenInit}])},open:function(e){if(e.isOpen){return}if(BX.UI.SelectorManager){var t=BX.UI.SelectorManager.instances[e.id];if(t){if(!e.isInputMultiple){t.itemsSelected={}}e.getUsers().forEach(function(e){var i=null;for(var n in t.entities){if(t.entities.hasOwnProperty(n)&&BX.type.isNotEmptyObject(t.entities[n].items)){if(BX.util.in_array(e,Object.keys(t.entities[n].items))){i=n}}}if(i){t.itemsSelected[e]=i.toLowerCase()}});t.nodes.input=e.selector.input;t.nodes.tag=e.selector.buttonSelect}}e.isOpen=true;BX.onCustomEvent(window,"BX.Main.User.SelectorController::open",[{id:e.id,inputId:e.searchInputNode.id,containerId:e.containerId,bindNode:e.container}])},select:function(e){var t=BX.Main.User.SelectorController;var i=t.getUserSelector(e.selectorId);if(!i||!BX.type.isNotEmptyObject(e.item)){return}var n=i.useSymbolicId?e.item.id:e.item.entityId;if(BX.type.isNotEmptyObject(e.item.params)&&BX.type.isNotEmptyString(e.item.params.email)){n="UE"+n}i.setValue(n);var r={readonly:!!e.undeletable};if(BX.type.isNotEmptyString(e.entityType)){r.entityType=e.entityType}if(BX.type.isNotEmptyString(e.item.isExtranet)&&e.item.isExtranet=="Y"){r.extranet=true}if(BX.type.isNotEmptyString(e.item.isCrmEmail)&&e.item.isCrmEmail=="Y"){r.crmEmail=true}i.selector.addTile(e.item.name,r,n);i.selector.input.value="";if(!i.isInputMultiple||!BX.type.isNotEmptyString(e.tab)||e.tab!="search"){i.selector.input.style.display="none";i.selector.buttonSelect.style.display=""}BX.onCustomEvent("BX.Main.User.SelectorController:select",[{selectorId:e.selectorId,item:e.item,contextNode:i.selector.context}])},unSelect:function(e){var t=BX.Main.User.SelectorController;var i=t.getUserSelector(e.selectorId);if(!i||!BX.type.isNotEmptyObject(e.item)){return}var n=i.useSymbolicId?e.item.id:e.item.entityId;i.unsetValue(n);var r=i.selector.getTile(n);if(r){i.selector.removeTile(r)}if(BX.UI.SelectorManager){var s=BX.UI.SelectorManager.instances[e.selectorId];if(s){if(typeof s.deleteSelectedItem=="function"){s.deleteSelectedItem({itemId:e.item.id})}else{delete s.itemsSelected[e.item.id]}}}BX.onCustomEvent("BX.Main.User.SelectorController:unSelect",[{selectorId:e.selectorId,item:e.item,contextNode:i.selector.context}])},openDialog:function(e){var t=BX.Main.User.SelectorController;var i=t.getUserSelector(e.selectorId);if(!i){return}i.isOpen=true;if(i.selector){i.selector.input.style.display="";i.selector.buttonSelect.style.display="none";i.selector.input.focus()}},closeDialog:function(e){var t=BX.Main.User.SelectorController;var i=t.getUserSelector(e.selectorId);if(!i){return}i.isOpen=false;if(i.selector){i.selector.input.style.display="none";i.selector.buttonSelect.style.display=""}},openSearch:function(e){var t=BX.Main.User.SelectorController;var i=t.getUserSelector(e.selectorId);if(!i){return}i.isOpen=false;if(i.selector){i.selector.input.style.display="";i.selector.buttonSelect.style.display="none"}},closeSearch:function(e){},getUserSelector:function(e){var t=this.list.filter(function(t){return t.id===e});return t[0]}};if(!BX.Main.User.SelectorController){BX.Main.User.SelectorController=t}BX.Main.User.Selector=e})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:91:"/bitrix/components/bitrix/ui.tile.selector/templates/.default/script.min.js?156220563712760";s:6:"source";s:71:"/bitrix/components/bitrix/ui.tile.selector/templates/.default/script.js";s:3:"min";s:75:"/bitrix/components/bitrix/ui.tile.selector/templates/.default/script.min.js";s:3:"map";s:75:"/bitrix/components/bitrix/ui.tile.selector/templates/.default/script.map.js";}"*/
(function(t){BX.namespace("BX.UI");if(BX.UI.TileSelector){return}var e=[];function i(t){this.id=t.id;this.name=t.name||null;this.node=t.node;this.data=t.data;this.removeNode=null;this.nameNode=o.getNode("tile-item-name",this.node);if(!this.name){this.name=this.nameNode.textContent}}i.prototype.changeRemoving=function(t){if(!this.removeNode){return}this.removeNode.style.display=t?"":"none"};function n(t){this.init(t)}n.prototype.events={containerClick:"container-click",tileClick:"tile-click",tileRemove:"tile-remove",tileEdit:"tile-edit",tileAdd:"tile-add",buttonAdd:"add",buttonSelect:"select",buttonSelectFirst:"select-first",search:"search",input:"input",searcherCategoryClick:"popup-category-click",searcherItemClick:"popup-item-click"};n.getById=function(t){var i=e.filter(function(e){return e.id===t});return i.length>0?i[0]:null};n.getList=function(){return e};n.prototype.init=function(t){this.list=[];this.id=t.id;this.context=BX(t.containerId);this.duplicates=t.duplicates;this.multiple=t.multiple;this.readonly=t.readonly;this.manualInputEnd=t.manualInputEnd;this.caption=t.caption;this.captionMore=t.captionMore;this.attributeId="data-bx-id";this.attributeData="data-bx-data";this.tileContainer=o.getNode("tile-container",this.context);this.tileTemplate=o.getNode("tile-template",this.context);this.input=o.getNode("tile-input",this.context);this.buttonAdd=o.getNode("tile-add",this.context);this.buttonSelect=o.getNode("tile-select",this.context);if(!this.context||!this.input){return}o.getNodes("tile-item",this.context).forEach(this.initNode.bind(this));if(!this.readonly){this.initEventHandlers()}this.searcher=null;e.push(this)};n.prototype.initEventHandlers=function(){if(this.buttonAdd){BX.bind(this.buttonAdd,"click",this.onButtonAdd.bind(this))}if(this.context){BX.bind(this.context,"click",this.onContainerClick.bind(this))}if(this.buttonSelect){BX.bind(this.buttonSelect,"click",this.onButtonSelect.bind(this));BX.bind(this.tileContainer,"click",this.onButtonSelect.bind(this))}BX.bind(this.input,"input",this.onInput.bind(this));if(!this.manualInputEnd){BX.bind(this.input,"blur",this.onInputEnd.bind(this));o.handleKeyEnter(this.input,this.onInputEnd.bind(this))}};n.prototype.getSearchInput=function(){return this.input};n.prototype.isSearcherInit=function(){return!!this.searcher};n.prototype.clearSearcher=function(){this.isButtonSelectFired=false;if(this.searcher){this.searcher.hide();this.searcher=null}};n.prototype.hideSearcher=function(){this.searcher.hide()};n.prototype.showSearcher=function(t){if(!this.searcher){this.searcher=new r({id:this.id,caller:this,context:this.context,title:t||""})}this.searcher.filterByName();this.searcher.show()};n.prototype.setSearcherData=function(t){if(!this.searcher){this.showSearcher()}this.searcher.setCategories(t)};n.prototype.initNode=function(t){if(!t){return null}var e=t.getAttribute(this.attributeId);var n=t.getAttribute(this.attributeData);try{n=JSON.parse(n)}catch(t){try{n=JSON.parse(BX.util.htmlspecialcharsback(n))}catch(t){n={}}}var r=new i({id:e,node:t,data:n});if(r.id&&!this.duplicates&&this.findDuplicates(r.id)){r=null;return null}r.removeNode=o.getNode("remove",t);if(r.removeNode){BX.bind(r.removeNode,"click",this.onRemove.bind(this,r))}BX.bind(t,"click",this.onClick.bind(this,r));this.list.push(r);return r};n.prototype.onRemove=function(t,e){e.preventDefault();e.stopPropagation();this.removeTile(t);if(BX.UI.SelectorManager){var i=BX.UI.SelectorManager.instances[this.id];if(i&&i.callback.unSelect){if(BX.type.isNotEmptyObject(t.data)&&BX.type.isNotEmptyString(t.data.entityType)){i.callback.unSelect({item:i.entities[t.data.entityType].items[t.id.match(/^\d+$/)?"U"+t.id:t.id],entityType:t.data.entityType,selectorId:i.id})}}}return false};n.prototype.onClick=function(t,e){e.preventDefault();e.stopPropagation();this.fire(this.events.tileClick,[t])};n.prototype.removeTiles=function(){var t=this.list;t.forEach(this.removeTile.bind(this))};n.prototype.removeTile=function(t){this.list=BX.util.deleteFromArray(this.list,this.list.indexOf(t));BX.remove(t.node);this.fire(this.events.tileRemove,[t]);this.recalcButtonSelectText()};n.prototype.getTile=function(t){var e=this.list.filter(function(e){return e.id===t});return e.length>0?e[0]:null};n.prototype.getTilesData=function(){return this.list.map(function(t){return t.data})};n.prototype.getTilesId=function(){return this.list.map(function(t){return t.id}).filter(function(t){return!!t})};n.prototype.getTiles=function(){return this.list};n.prototype.findDuplicates=function(t){var e=this.getTile(t);if(!e){return false}this.removeTile(e)};n.prototype.addTile=function(t,e,i,n,r){if(!t||this.readonly){return null}if(!this.multiple){this.removeTiles();if(this.isSearcherInit()){this.hideSearcher()}}e=e||{};i=i||"";r=r||"";n=n||"";var s=this.tileTemplate;if(!s){return null}s=s.innerHTML;var a="";if(r){a+="color: "+BX.util.htmlspecialchars(r)+"; "}if(n){a+="background-color: "+BX.util.htmlspecialchars(n)+"; "}var l=BX.type.isNotEmptyString(e.entityType)?e.entityType.toLowerCase():"none";if(!!e.extranet){l+="-extranet"}if(!!e.crmEmail){l+="-crm"}s=o.replace(s,{id:BX.util.htmlspecialchars(i+""),name:t,data:BX.util.htmlspecialchars(JSON.stringify(e)),style:a,type:l,readonly:!!e.readonly?"yes":"no"},true);var c=document.createElement("div");c.innerHTML=s;c=c.children[0];var h=this.initNode(c);if(!h){return null}this.input.parentNode.insertBefore(c,this.input);this.fire(this.events.tileAdd,[h]);this.recalcButtonSelectText();return h};n.prototype.updateTile=function(t,e,i,n,o){if(!t||this.readonly){return null}e=e||null;i=i||null;n=n||null;o=o||null;if(e){t.nameNode.textContent=e}if(i){t.data=i}if(n||n===null){t.node.style.backgroundColor=n}if(o){t.node.style.color=o}this.fire(this.events.tileEdit,[t]);return t};n.prototype.fire=function(t,e){BX.onCustomEvent(this,t,e)};n.prototype.onInput=function(){var t=this.input.value;if(this.searcher&&t.length>0){this.searcher.filterByName(t)}this.fire(this.events.input,[this.input.value])};n.prototype.onInputEnd=function(){var t=this.input.value;this.input.value="";o.changeDisplay(this.input,false);o.changeDisplay(this.buttonSelect,true);this.recalcButtonSelectText();this.fire(this.events.search,[t])};n.prototype.onButtonAdd=function(t){t.preventDefault();t.stopPropagation();this.fire(this.events.buttonAdd,[])};n.prototype.onContainerClick=function(){this.fire(this.events.containerClick,[])};n.prototype.onButtonSelect=function(t){t.preventDefault();t.stopPropagation();o.changeDisplay(this.buttonSelect,false);o.changeDisplay(this.input,true);this.input.focus();this.fire(this.events.buttonSelect,[]);if(!this.isButtonSelectFired){this.fire(this.events.buttonSelectFirst,[]);this.isButtonSelectFired=true}};n.prototype.recalcButtonSelectText=function(){if(!this.buttonSelect){return}var t=this.getTiles();this.buttonSelect.innerHTML=t.length>0?this.captionMore:this.caption};var o={getObjectByKey:function(t,e,i){var n=t.filter(function(t){return t.hasOwnProperty(e)&&t[e]===i});return n.length>0?n[0]:null},getNode:function(t,e){var i=this.getNodes(t,e);return i.length>0?i[0]:null},getNodes:function(t,e){if(!e){return[]}return BX.convert.nodeListToArray(e.querySelectorAll('[data-role="'+t+'"]'))},changeClass:function(t,e,i){if(!t){return}if(i){BX.addClass(t,e)}else{BX.removeClass(t,e)}},changeDisplay:function(t,e){if(!t){return}t.style.display=e?"":"none"},replace:function(t,e,i){e=e||{};i=i||false;if(!t){return""}for(var n in e){if(!e.hasOwnProperty(n)){continue}var o=e[n];o=o||"";if(!i&&o){o=BX.util.htmlspecialchars(o)}t=t.replace(new RegExp("%"+n+"%","g"),o)}return t},handleKeyEnter:function(e,i){if(!i){return}var n=function(e){e=e||t.event;if(e.keyCode===10||e.keyCode===13){e.preventDefault();e.stopPropagation();i();return false}};BX.bind(e,"keyup",n)},getTemplatedNode:function(t,e,i){if(!t){return null}var n=o.replace(t.innerHTML,e,i);var r=document.createElement("div");r.innerHTML=n;return r.children[0]}};function r(t){this.init(t)}r.prototype.classNameCategoryActive="ui-tile-selector-searcher-sidebar-item-selected";r.prototype.classNameItemActive="ui-tile-selector-searcher-content-item-selected";r.prototype.init=function(t){this.id=t.id;this.context=t.context;this.caller=t.caller;this.categories=[];this.items=[];this.currentCategory=null;this.categoryTemplate=o.getNode("popup-category-template",this.context);this.itemTemplate=o.getNode("popup-item-template",this.context);this.content=o.getTemplatedNode(o.getNode("popup-template",this.context));this.loader=o.getNode("popup-loader",this.content);this.categoryContainer=o.getNode("popup-category-list",this.content);this.itemContainer=o.getNode("popup-item-list",this.content);this.itemContainer.innerHTML="";this.categoryContainer.innerHTML="";this.title=o.getNode("popup-title",this.content);if(this.title){this.title.textContent=t.title}if(t.dataList){this.setCategories(t.dataList)}BX.addCustomEvent(this.caller,this.caller.events.tileAdd,this.onTileAdd.bind(this));BX.addCustomEvent(this.caller,this.caller.events.tileRemove,this.onTileRemove.bind(this))};r.prototype.onTileAdd=function(t){var e=o.getObjectByKey(this.items,"id",t.id);if(!e){return}o.changeClass(e.node,this.classNameItemActive,true)};r.prototype.onTileRemove=function(t){var e=o.getObjectByKey(this.items,"id",t.id);if(!e){return}o.changeClass(e.node,this.classNameItemActive,false)};r.prototype.filterByName=function(t){t=t||"";if(t.length<3){o.changeDisplay(this.categoryContainer,true);this.setCurrentCategory();return}var e=new RegExp(BX.util.escapeRegExp(t),"i");this.items.forEach(function(t){o.changeDisplay(t.node,e.test(t.name))});o.changeDisplay(this.categoryContainer,false)};r.prototype.onCategoryClick=function(t){this.setCurrentCategory(t);this.caller.fire(this.caller.events.searcherCategoryClick,[t])};r.prototype.setCurrentCategory=function(t){t=t||this.categories[0];if(this.currentCategory){BX.removeClass(this.currentCategory.node,this.classNameCategoryActive)}this.currentCategory=t;if(!t){return}BX.addClass(this.currentCategory.node,this.classNameCategoryActive);this.items.forEach(function(e){o.changeDisplay(e.node,e.category===t)})};r.prototype.onItemClick=function(t){this.caller.addTile(t.name,t.data,t.id,t.bgcolor,t.color);this.caller.fire(this.caller.events.searcherItemClick,[t])};r.prototype.getCategory=function(t){return o.getObjectByKey(this.categories,"id",t)};r.prototype.getItem=function(t){return o.getObjectByKey(this.items,"id",t)};r.prototype.updateItem=function(t,e,i){if(e){t.node.textContent=e;t.node.title=e}if(i){t.data=i}};r.prototype.addItem=function(t,e,i,n){var r=o.getTemplatedNode(this.itemTemplate,{name:i});var s={category:t,node:r,id:e,name:i,data:n||{}};this.items.push(s);this.itemContainer.appendChild(r);BX.bind(r,"click",this.onItemClick.bind(this,s));return s};r.prototype.setItems=function(t,e){this.items=[];e.forEach(function(e){this.addItem(t,e.id,e.name,e.data)},this)};r.prototype.addItems=function(t,e){e.forEach(function(e){this.addItem(t,e.id,e.name,e.data)},this)};r.prototype.addCategory=function(t,e,i,n){var r=o.getTemplatedNode(this.categoryTemplate,{name:e});var s={node:r,id:t,name:e,data:i||{}};this.categories.push(s);this.categoryContainer.appendChild(r);BX.bind(r,"click",this.onCategoryClick.bind(this,s));this.addItems(s,n);return s};r.prototype.setCategories=function(t){this.items=[];this.categories=[];this.itemContainer.innerHTML="";this.categoryContainer.innerHTML="";t.forEach(function(t){this.addCategory(t.id,t.name,t.data,t.items)},this);if(this.categories.length>0){this.setCurrentCategory(this.categories[0])}var e=this.caller.getTilesId();this.items.filter(function(t){var i=t.id&&BX.util.in_array(t.id,e);o.changeClass(t.node,this.classNameItemActive,i)},this);o.changeDisplay(this.loader,false);o.changeDisplay(this.itemContainer,true);o.changeDisplay(this.categoryContainer,true)};r.prototype.showLoader=function(){o.changeDisplay(this.loader,true)};r.prototype.hide=function(){if(!this.popup){return}this.popup.close()};r.prototype.show=function(){if(this.popup){this.popup.show();return}this.popup=BX.PopupWindowManager.create(this.id,this.context,{width:620,height:225,autoHide:true,lightShadow:true,closeByEsc:true,closeIcon:true,offsetLeft:40,angle:true});this.popup.setContent(this.content);o.changeDisplay(this.content,true);this.popup.show()};BX.UI.TileSelector=n;BX.addCustomEvent("BX.Main.SelectorV2:onGetDataStart",function(t){var e=BX("ui-tile-selector-"+t+"-mask");if(!e){return}e.classList.add("ui-tile-selector-selector-mask-active")});BX.addCustomEvent("BX.Main.SelectorV2:onGetDataFinish",function(t){var e=BX("ui-tile-selector-"+t+"-mask");if(!e){return}e.classList.remove("ui-tile-selector-selector-mask-active")})})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:91:"/bitrix/components/bitrix/main.ui.selector/templates/.default/script.min.js?156220549512758";s:6:"source";s:71:"/bitrix/components/bitrix/main.ui.selector/templates/.default/script.js";s:3:"min";s:75:"/bitrix/components/bitrix/main.ui.selector/templates/.default/script.min.js";s:3:"map";s:75:"/bitrix/components/bitrix/main.ui.selector/templates/.default/script.map.js";}"*/
(function(){"use strict";BX.namespace("BX.Main");BX.Main.selectorManagerV2={getById:function(t){if(typeof this.controls[t]!="undefined"){return this.controls[t]}return null},controls:{}};BX.Main.SelectorV2=function(){this.initialized=false;this.blockInit=false;this.id="";this.apiVersion=2;this.fieldName=null;this.inputId=null;this.input=null;this.tagId=null;this.tag=null;this.options=null;this.callback=null;this.items=null;this.entities=null;this.mainPopupWindow=null;this.entitiesSet=["users","emails","crmemails","groups","sonetgroups","department","departmentRelation","contacts","companies","leads","deals"];this.entityTypes={};this.auxObject=null;this.selectorInstance=null};BX.Main.SelectorV2.controls={};BX.Main.SelectorV2.create=function(t){if(typeof t.id=="undefined"||!t.id){t.id=BX.util.hashCode(Math.random().toString())}else if(typeof BX.Main.selectorManagerV2.controls[t.id]!="undefined"){return BX.Main.selectorManagerV2.controls[t.id]}var e=new BX.Main.SelectorV2;e.init(t);BX.Main.selectorManagerV2.controls[e.getId()]=e;return e};BX.Main.SelectorV2.proxyCallback=function(t,e){t(e)};BX.Main.SelectorV2.prototype={init:function(t){this.id=t.id;this.apiVersion=t.apiVersion&&parseInt(t.apiVersion)>=2?parseInt(t.apiVersion):2;this.fieldName=t.fieldName?t.fieldName:null;this.inputId=t.inputId?t.inputId:null;this.input=t.inputId&&BX(t.inputId)?BX(t.inputId):null;this.inputBox=t.inputBoxId&&BX(t.inputBoxId)?BX(t.inputBoxId):null;this.inputItemsContainer=t.inputContainerId&&BX(t.inputContainerId)?BX(t.inputContainerId):null;this.containerNode=t.containerId&&BX(t.containerId)?BX(t.containerId):null;this.bindNode=t.bindId&&BX(t.bindId)?BX(t.bindId):this.containerNode;this.tagId=t.tagId?t.tagId:null;this.tag=t.tagId&&BX(t.tagId)?BX(t.tagId):null;this.openDialogWhenInit=typeof t.openDialogWhenInit=="undefined"||!!t.openDialogWhenInit;this.options=t.options||{};this.callback=t.callback||null;this.items=t.items||null;this.entities=t.entities||null;this.entityTypes={};BX.onCustomEvent("BX.Main.SelectorV2:onGetEntityTypes",[{selector:this}]);this.selectorInstance=BX.UI.Selector.create({id:this.id,fieldName:this.fieldName,type:"xxx",pathToAjax:BX.type.isNotEmptyString(t.pathToAjax)?t.pathToAjax:null,input:this.input||null,tag:this.tag||null,inputBox:this.inputBox||null,inputItemsContainer:this.inputItemsContainer||null,entities:BX.clone(this.entityTypes),itemsSelected:BX.clone(this.items.selected)||{},itemsUndeletable:BX.clone(this.items.undeletable)||[],options:{multiple:this.getOption("multiple"),useSearch:this.getOption("useSearch"),useContainer:this.getOption("useContainer")=="Y"?"Y":"N",userNameTemplate:this.getOption("userNameTemplate"),siteDepartmentId:this.getOption("siteDepartmentId"),showCloseIcon:"Y",last:{disable:this.getOption("disableLast")=="Y"?"Y":"N"},search:{useAjax:this.getOption("sendAjaxSearch")!="N"?"Y":"N",useClientDatabase:this.getOption("useClientDatabase")=="Y"?"Y":"N"},focusInputOnSelectItem:this.getOption("focusInputOnSelectItem")!="N"?"Y":"N",focusInputOnSwitchTab:this.getOption("focusInputOnSwitchTab")!="N"?"Y":"N",isCrmFeed:this.getOption("isCrmFeed")=="Y"?"Y":"N",tagLink1:this.getOption("tagLink1"),tagLink2:this.getOption("tagLink2")},bindOptions:{node:this.bindNode,offsetTop:5,offsetLeft:15},callback:this.callback});BX.addCustomEvent("BX.UI.SelectorManager:getTreeItemRelation",function(t){if(this.id==t.selectorId){this.getTreeItemRelation(t)}}.bind(this));BX.addCustomEvent("BX.UI.SelectorManager:loadAll",function(t){this.loadAll(t)}.bind(this));BX.addCustomEvent("BX.Main.SelectorV2:initDialog",function(t){if(this.id==t.selectorId){if(!!t.openDialogWhenInit){this.openDialogWhenInit=true}this.initDialog()}}.bind(this));BX.addCustomEvent("BX.Main.SelectorV2:reInitDialog",function(t){if(this.id==t.selectorId){this.initialized=false;this.items.selected=BX.type.isNotEmptyObject(t.selectedItems)?t.selectedItems:{};this.items.undeletable=BX.type.isNotEmptyObject(t.undeletableItems)?t.undeletableItems:{};var e=BX.UI.SelectorManager.instances[t.selectorId],i=null,n=null,s=0;if(e){for(var o in e.itemsSelected){if(e.itemsSelected.hasOwnProperty(o)){i=e.itemsSelected[o].toUpperCase();n=BX.UI.SelectorManager.getEntityTypeFullList(i);for(s=0;s<n.length;s++){if(BX.type.isNotEmptyObject(e.entities[n[s]])&&BX.type.isNotEmptyObject(e.entities[n[s]].items)&&BX.type.isNotEmptyObject(e.entities[n[s]].items[o])){e.unselectItem({itemNode:e.entities[n[s]].items[o],itemId:o,entityType:n[s],mode:"reinit"})}}}}e.itemsSelected=this.items.selected;e.itemsUndeletable=this.items.undeletable}this.initDialog()}}.bind(this));BX.addCustomEvent("BX.UI.SelectorManager:searchRequest",function(t){if(this.id==t.selectorInstance.id){t.selectorInstance.timeouts.search=setTimeout(function(){this.searchRequest(t)}.bind(this),1e3)}}.bind(this));BX.addCustomEvent("BX.UI.Selector:onSelectItem",function(t){if(this.apiVersion>=3&&BX.type.isNotEmptyObject(t)&&this.id==t.selectorId&&BX.type.isNotEmptyString(t.itemId)){this.saveDestination({itemId:t.itemId})}}.bind(this));if(!BX.type.isNotEmptyString(this.getOption("lheName"))){var e=BX("div"+this.getOption("lheName"));if(e){BX.addCustomEvent(e,"OnShowLHE",function(t){if(!t){this.selectorInstance.closeAllPopups()}}.bind(this))}}if(this.getOption("useContainer")!="Y"&&this.input){if(this.getOption("lazyLoad")!="Y"||BX.type.isNotEmptyObject(this.items.selected)){if(BX.type.isNotEmptyObject(this.items.selected)){this.openDialogWhenInit=false}this.initDialog()}if(this.tag){BX.bind(this.tag,"focus",BX.delegate(function(t){this.initDialog({realParams:true,bByFocusEvent:true});return t.preventDefault()},this));this.selectorInstance.setTagTitle()}BX.bind(this.input,"keydown",function(t){this.selectorInstance.getSearchInstance().beforeSearchHandler({event:t})}.bind(this));BX.bind(this.input,"bxchange",function(e){setTimeout(function(){this.selectorInstance.getSearchInstance().searchHandler({event:e,tagInputName:t.tagId})}.bind(this),0)}.bind(this));this.input.setAttribute("data-bxchangehandler","Y")}else if(this.getOption("useContainer")=="Y"&&(this.getOption("lazyLoad")!="Y"||this.getOption("useContainer")=="Y")){this.initDialog()}if(this.items.hidden){for(var i in this.items.hidden){if(this.items.hidden.hasOwnProperty(i)){this.callback.select.apply({id:(typeof this.items.hidden[i]["PREFIX"]!="undefined"?this.items.hidden[i]["PREFIX"]:"SG")+this.items.hidden[i]["ID"],name:this.items.hidden[i]["NAME"]},typeof this.items.hidden[i]["TYPE"]!="undefined"?this.items.hidden[i]["TYPE"]:"sonetgroups","",true,"","init")}}}},show:function(){this.initDialog()},initDialog:function(t){if(typeof t=="undefined"||typeof t.realParams=="undefined"){t=null}if(this.blockInit){return}var e={id:this.id};if(!this.initialized){BX.onCustomEvent(window,"BX.Main.SelectorV2:beforeInitDialog",[e])}setTimeout(BX.delegate(function(){if(typeof e.blockInit=="undefined"||e.blockInit!==true){if(this.initialized){if(!this.mainPopupWindow||!this.mainPopupWindow.isShown()){if(this.input){this.input.style.display="inline-block"}if(this.inputBox){this.inputBox.style.display="inline-block"}this.openDialog(t)}}else{this.getData(BX.delegate(function(e){if(!!this.openDialogWhenInit){if(this.input){this.input.style.display="inline-block"}if(this.inputBox){this.inputBox.style.display="inline-block"}this.openDialog(t)}BX.onCustomEvent(window,"BX.Main.SelectorV2:afterInitDialog",[{id:this.id}]);if(typeof this.options.eventOpen!="undefined"){BX.addCustomEvent(window,this.options.eventOpen,function(t){if(typeof t.id=="undefined"||t.id!=this.id){return}if(this.options.multiple!="Y"&&this.inputItemsContainer&&this.inputItemsContainer.children.length>0){return}if(this.mainPopupWindow&&this.mainPopupWindow.isShown()){return}if(this.input){this.input.style.display="inline-block"}if(this.inputBox){this.inputBox.style.display="inline-block"}var e=BX.type.isNotEmptyObject(t)&&t.bindNode?t.bindNode:this.bindNode;var i=BX.type.isNotEmptyObject(t)&&BX.type.isNotEmptyObject(t.bindPosition)?t.bindPosition:false;if(e){var n=BX.findChild(e,{tagName:"input",attr:{type:"text"}},true);if(n){this.selectorInstance.nodes.input=n;var s=this.tag||BX(t.tagId);if(s){this.selectorInstance.nodes.tag=s}if(n.getAttribute("data-bxchangehandler")!=="Y"){BX.bind(n,"keydown",function(t){this.selectorInstance.getSearchInstance().beforeSearchHandler({event:t})}.bind(this));BX.bind(n,"bxchange",function(t){this.selectorInstance.getSearchInstance().searchHandler({event:t})}.bind(this));n.setAttribute("data-bxchangehandler","Y")}}}if(i||e){if(!this.initialized){this.selectorInstance.itemsSelected={}}if(typeof t.value!="undefined"){this.selectorInstance.itemsSelected=t.value}this.openDialog({bindNode:e,bindPosition:i})}}.bind(this))}},this))}}},this),1)},openDialog:function(t){if(BX.type.isNotEmptyObject(t)){if(typeof t.bindNode!="undefined"){this.selectorInstance.bindOptions.node=t.bindNode}if(typeof t.bindPosition!="undefined"){this.selectorInstance.bindOptions.position=t.bindPosition}}this.selectorInstance.openDialog();this.mainPopupWindow=this.getOption("useContainer")=="Y"?this.selectorInstance.popups.container:this.selectorInstance.popups.main},closeDialog:function(){this.selectorInstance.closeDialog()},getData:function(t){this.blockInit=true;BX.onCustomEvent("BX.Main.SelectorV2:onGetDataStart",[this.id]);BX.ajax.runComponentAction("bitrix:main.ui.selector","getData",{mode:"ajax",data:{options:this.options,entityTypes:this.entityTypes,selectedItems:this.items.selected||{}}}).then(function(e){if(BX.type.isNotEmptyObject(e.data)){this.blockInit=false;BX.onCustomEvent("BX.Main.SelectorV2:onGetDataFinish",[this.id]);this.addData(e.data,t);this.initialized=true}}.bind(this),function(t){this.blockInit=false;BX.onCustomEvent("BX.Main.SelectorV2:onGetDataFinish",[this.id])}.bind(this))},loadAll:function(t){if(BX.type.isNotEmptyObject(t)&&BX.type.isFunction(t.callback)&&(BX.type.isNotEmptyString(t.entity)||t.entity=="users")){BX.ajax.runComponentAction("bitrix:main.ui.selector","loadAll",{mode:"ajax",data:{entityType:BX.type.isNotEmptyString(t.entity)?t.entity.toUpperCase():""}}).then(function(e){if(BX.type.isNotEmptyObject(e.data)){for(var i in e.data){if(e.data.hasOwnProperty(i)){BX.onCustomEvent("onFinderAjaxLoadAll",[e.data[i],BX.UI.SelectorManager,i.toLowerCase()])}}t.callback()}}.bind(this),function(t){}.bind(this))}},searchRequest:function(t){this.blockInit=true;if(this.selectorInstance.timeouts.search){clearTimeout(this.selectorInstance.timeouts.search)}var e=new Date;this.selectorInstance.searchRequestId=e.getTime();BX.ajax.runComponentAction("bitrix:main.ui.selector","doSearch",{mode:"ajax",data:{searchString:t.searchString,searchStringConverted:BX.message("LANGUAGE_ID")=="ru"&&BX.correctText?BX.correctText(t.searchString):"",currentTimestamp:this.selectorInstance.searchRequestId,options:this.options,entityTypes:this.entityTypes,additionalData:BX.type.isNotEmptyObject(t.additionalData)?t.additionalData:{}},onrequeststart:function(t){this.selectorInstance.searchXhr=t}.bind(this)}).then(function(e){this.blockInit=false;if(BX.type.isNotEmptyObject(e.data)&&e.data.currentTimestamp&&e.data.currentTimestamp==this.selectorInstance.searchRequestId&&BX.type.isNotEmptyObject(t.callback)&&BX.type.isFunction(t.callback.success)){t.callback.success(e.data,{searchString:t.searchString,searchStringOriginal:BX.type.isNotEmptyObject(t.searchStringOriginal)?t.searchStringOriginal:t.searchString})}}.bind(this),function(e){this.blockInit=false;if(BX.type.isNotEmptyObject(t.callback)&&BX.type.isFunction(t.callback.failure)){t.callback.failure(BX.type.isNotEmptyObject(e.data)?e.data:{})}}.bind(this))},getTreeItemRelation:function(t){BX.ajax.runComponentAction("bitrix:main.ui.selector","getTreeItemRelation",{mode:"ajax",data:{entityType:t.entityType,categoryId:t.categoryId}}).then(function(e){if(BX.type.isNotEmptyObject(e.data)&&typeof t.callback!="undefined"){t.callback({selectorInstanceId:this.selectorInstance.id,entityType:t.entityType,categoryId:t.categoryId,data:e.data})}}.bind(this),function(t){})},addData:function(t,e){BX.onCustomEvent("BX.Main.SelectorV2:onAddData",[this.id,t]);if(typeof t.ENTITIES.CRM!="undefined"&&typeof t.ENTITIES.CRM.ITEMS_LAST!="undefined"&&BX.type.isNotEmptyObject(t.ENTITIES.CRM.ITEMS_LAST)){}e.apply(this,t)},getId:function(){return this.id},getOption:function(t){return typeof this.options[t]!="undefined"?this.options[t]:null},saveDestination:function(t){if(BX.type.isNotEmptyObject(t)&&BX.type.isNotEmptyString(t.itemId)){var e=this.getOption("context");if(BX.type.isNotEmptyString(e)){BX.ajax.runComponentAction("bitrix:main.ui.selector","saveDestination",{mode:"ajax",data:{context:e,itemId:t.itemId}}).then(function(t){},function(t){})}}}}})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:88:"/bitrix/components/bitrix/search.tags.input/templates/.default/script.js?156220561413020";s:6:"source";s:72:"/bitrix/components/bitrix/search.tags.input/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var Errors = {
	"result_unval" : "Error in result",
	"result_empty" : "Empty result"
};

function JsTc(oHandler, sParams, sParser) // TC = TagCloud
{
	var t = this;

	t.oObj = typeof oHandler == 'object' ? oHandler : document.getElementById("TAGS");
	t.sParams = sParams;
	// Arrays for data
	if (sParser)
	{
		t.sExp = new RegExp("["+sParser+"]+", "i");
	}
	else
	{
		t.sExp = new RegExp(",");
	}
	t.oLast = {"str":false, "arr":false};
	t.oThis = {"str":false, "arr":false};
	t.oEl = {"start":false, "end":false};
	t.oUnfinedWords = {};
	// Flags
	t.bReady = true;
	t.eFocus = true;
	// Array with results & it`s showing
	t.aDiv = null;
	t.oDiv = null;
	// Pointers
	t.oActive = null;
	t.oPointer = [];
	t.oPointer_default = [];
	t.oPointer_this = 'input_field';

	t.oObj.onblur = function()
	{
		t.eFocus = false;
	};

	t.oObj.onfocus = function()
	{
		if (!t.eFocus)
		{
			t.eFocus = true;
			setTimeout(function(){t.CheckModif('focus')}, 500);
		}
	};

	t.oLast["arr"] = t.oObj.value.split(t.sExp);
	t.oLast["str"] = t.oLast["arr"].join(":");

	setTimeout(function(){t.CheckModif('this')}, 500);

	this.CheckModif = function(__data)
	{
		var
			sThis = false, tmp = 0,
			bUnfined = false, word = "",
			cursor = {};

		if (!t.eFocus)
			return;

		if (t.bReady && t.oObj.value.length > 0)
		{
			// Preparing input data
			t.oThis["arr"] = t.oObj.value.split(t.sExp);
			t.oThis["str"] = t.oThis["arr"].join(":");

			// Getting modificated element
			if (t.oThis["str"] && (t.oThis["str"] != t.oLast["str"]))
			{
				cursor['position'] = TCJsUtils.getCursorPosition(t.oObj);
				if (cursor['position']['end'] > 0 && !t.sExp.test(t.oObj.value.substr(cursor['position']['end']-1, 1)))
				{
					cursor['arr'] = t.oObj.value.substr(0, cursor['position']['end']).split(t.sExp);
					sThis = t.oThis["arr"][cursor['arr'].length - 1];

					t.oEl['start'] = cursor['position']['end'] - cursor['arr'][cursor['arr'].length - 1].length;
					t.oEl['end'] = t.oEl['start'] + sThis.length;
					t.oEl['content'] = sThis;

					t.oLast["arr"] = t.oThis["arr"];
					t.oLast["str"] = t.oThis["str"];
				}
			}
			if (sThis)
			{
				// Checking for UnfinedWords
				for (tmp = 2; tmp <= sThis.length; tmp++)
				{
					word = sThis.substr(0, tmp);
					if (t.oUnfinedWords[word] == '!fined')
					{
						bUnfined = true;
						break;
					}
				}
				if (!bUnfined)
					t.Send(sThis);
			}
		}
		setTimeout(function(){t.CheckModif('this')}, 500);
	};

	t.Send = function(sSearch)
	{
		if (!sSearch)
			return false;

		var oError = [];
		t.bReady = false;
		if (BX('wait_container'))
		{
			BX('wait_container').innerHTML = BX.message('JS_CORE_LOADING');
			BX.show(BX('wait_container'));
		}
		BX.ajax.post(
			'/bitrix/components/bitrix/search.tags.input/search.php',
			{"search":sSearch, "params":t.sParams},
			function(data)
			{
				var result = {};
				t.bReady = true;

				try
				{
					eval("result = " + data + ";");
				}
				catch(e)
				{
					oError['result_unval'] = e;
				}

				if (TCJsUtils.empty(result))
					oError['result_empty'] = Errors['result_empty'];

				try
				{
					if (TCJsUtils.empty(oError) && (typeof result == 'object'))
					{
						if (!(result.length == 1 && result[0]['NAME'] == t.oEl['content']))
						{
							t.Show(result);
							return;
						}
					}
					else
					{
						t.oUnfinedWords[t.oEl['content']] = '!fined';
					}
				}
				catch(e)
				{
					oError['unknown_error'] = e;
				}

				if(BX('wait_container'))
					BX.hide(BX('wait_container'));
			}
		);
	};

	t.Show = function(result)
	{
		t.Destroy();
		t.oDiv = document.body.appendChild(document.createElement("DIV"));
		t.oDiv.id = t.oObj.id+'_div';

		t.oDiv.className = "search-popup";
		t.oDiv.style.position = 'absolute';

		t.aDiv = t.Print(result);
		var pos = TCJsUtils.GetRealPos(t.oObj);
		t.oDiv.style.width = parseInt(pos["width"]) + "px";
		TCJsUtils.show(t.oDiv, pos["left"], pos["bottom"]);
		TCJsUtils.addEvent(document, "click", t.CheckMouse);
		TCJsUtils.addEvent(document, "keydown", t.CheckKeyword);
	};

	t.Print = function(aArr)
	{
		var aEl = null;
		var aResult = [];
		var aRes = [];
		var iCnt = 0;
		var oDiv = null;
		var oSpan = null;
		var sPrefix = t.oDiv.id;

		for (var tmp_ in aArr)
		{
			// Math
			if (aArr.hasOwnProperty(tmp_))
			{
				aEl = aArr[tmp_];
				aRes = [];
				aRes['ID'] = (aEl['ID'] && aEl['ID'].length > 0) ? aEl['ID'] : iCnt++;
				aRes['GID'] = sPrefix + '_' + aRes['ID'];
				aRes['NAME'] = TCJsUtils.htmlspecialcharsEx(aEl['NAME']);
				aRes['~NAME'] = aEl['NAME'];
				aRes['CNT'] = aEl['CNT'];
				aResult[aRes['GID']] = aRes;
				t.oPointer.push(aRes['GID']);
				// Graph
				oDiv = t.oDiv.appendChild(document.createElement("DIV"));
				oDiv.id = aRes['GID'];
				oDiv.name = sPrefix + '_div';

				oDiv.className = 'search-popup-row';

				oDiv.onmouseover = function(){t.Init(); this.className='search-popup-row-active';};
				oDiv.onmouseout = function(){t.Init(); this.className='search-popup-row';};
				oDiv.onclick = function(e){
						t.oActive = this.id;
						t.Replace();
						t.Destroy();
						BX.PreventDefault(e);
					};

				oSpan = oDiv.appendChild(document.createElement("DIV"));
				oSpan.id = oDiv.id + '_NAME';
				oSpan.className = "search-popup-el search-popup-el-cnt";
				oSpan.innerHTML = aRes['CNT'];

				oSpan = oDiv.appendChild(document.createElement("DIV"));
				oSpan.id = oDiv.id + '_NAME';
				oSpan.className = "search-popup-el search-popup-el-name";
				oSpan.innerHTML = aRes['NAME'];
			}
		}
		t.oPointer.push('input_field');
		t.oPointer_default = t.oPointer;
		return aResult;
	};

	t.Destroy = function()
	{
		try
		{
			TCJsUtils.hide(t.oDiv);
			t.oDiv.parentNode.removeChild(t.oDiv);
		}
		catch(e)
		{}
		t.aDiv = [];
		t.oPointer = [];
		t.oPointer_default = [];
		t.oPointer_this = 'input_field';
		t.bReady = true;
		t.eFocus = true;
		t.oActive = null;

		TCJsUtils.removeEvent(document, "click", t.CheckMouse);
		TCJsUtils.removeEvent(document, "keydown", t.CheckKeyword);
	};

	t.Replace = function()
	{
		if (typeof t.oActive == 'string')
		{
			var tmp = t.aDiv[t.oActive];
			var tmp1 = '';
			if (typeof tmp == 'object')
			{
				var elEntities = document.createElement("textarea");
				elEntities.innerHTML = tmp['~NAME'];
				tmp1 = elEntities.value;
			}
			//this preserves leading spaces
			var start = t.oEl['start'];
			while(start < t.oObj.value.length && t.oObj.value.substring(start, start+1) == " ")
				start++;

			t.oObj.value = t.oObj.value.substring(0, start) + tmp1 + t.oObj.value.substr(t.oEl['end']);
			TCJsUtils.setCursorPosition(t.oObj, start + tmp1.length);
		}
	};

	t.Init = function()
	{
		t.oActive = false;
		t.oPointer = t.oPointer_default;
		t.Clear();
		t.oPointer_this = 'input_pointer';
	};

	t.Clear = function()
	{
		var oEl = t.oDiv.getElementsByTagName("div");
		if (oEl.length > 0 && typeof oEl == 'object')
		{
			for (var ii in oEl)
			{
				if (oEl.hasOwnProperty(ii))
				{
					var oE = oEl[ii];
					if (oE && (typeof oE == 'object') && (oE.name == t.oDiv.id + '_div'))
					{
						oE.className = "search-popup-row";
					}
				}
			}
		}
	};

	t.CheckMouse = function()
	{
		t.Replace();
		t.Destroy();
	};

	t.CheckKeyword = function(e)
	{
		if (!e)
			e = window.event;
		var oP = null;
		var oEl = null;
		if ((37 < e.keyCode && e.keyCode <41) || (e.keyCode == 13))
		{
			t.Clear();

			switch (e.keyCode)
			{
				case 38:
					oP = t.oPointer.pop();
					if (t.oPointer_this == oP)
					{
						t.oPointer.unshift(oP);
						oP = t.oPointer.pop();
					}

					if (oP != 'input_field')
					{
						t.oActive = oP;
						oEl = document.getElementById(oP);
						if (typeof oEl == 'object')
						{
							oEl.className = "search-popup-row-active";
						}
					}
					t.oPointer.unshift(oP);
					break;
				case 40:
					oP = t.oPointer.shift();
					if (t.oPointer_this == oP)
					{
						t.oPointer.push(oP);
						oP = t.oPointer.shift();
					}
					if (oP != 'input_field')
					{
						t.oActive = oP;
						oEl = document.getElementById(oP);
						if (typeof oEl == 'object')
						{
							oEl.className = "search-popup-row-active";
						}
					}
					t.oPointer.push(oP);
					break;
				case 39:
					t.Replace();
					t.Destroy();
					break;
				case 13:
					t.Replace();
					t.Destroy();
					if (TCJsUtils.IsIE())
					{
						e.returnValue = false;
						e.cancelBubble = true;
					}
					else
					{
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
			t.oPointer_this	= oP;
		}
		else
		{
			t.Destroy();
		}
	}
}

var TCJsUtils =
{
	arEvents:  [],

	addEvent: function(el, evname, func)
	{
		if(el.attachEvent) // IE
			el.attachEvent("on" + evname, func);
		else if(el.addEventListener) // Gecko / W3C
			el.addEventListener(evname, func, false);
		else
			el["on" + evname] = func;
		this.arEvents[this.arEvents.length] = {'element': el, 'event': evname, 'fn': func};
	},

	removeEvent: function(el, evname, func)
	{
		if(el.detachEvent) // IE
			el.detachEvent("on" + evname, func);
		else if(el.removeEventListener) // Gecko / W3C
			el.removeEventListener(evname, func, false);
		else
			el["on" + evname] = null;
	},

	getCursorPosition: function(oObj)
	{
		var result = {'start': 0, 'end': 0};
		if (!oObj || (typeof oObj != 'object'))
			return result;
		try
		{
			if (document.selection != null && oObj.selectionStart == null)
			{
				oObj.focus();
				var oRange = document.selection.createRange();
				var oParent = oRange.parentElement();
				var sBookmark = oRange.getBookmark();
				var sContents_ = oObj.value;
				var sContents = sContents_;
				var sMarker = '__' + Math.random() + '__';

				while(sContents.indexOf(sMarker) != -1)
				{
					sMarker = '__' + Math.random() + '__';
				}

				if (!oParent || oParent == null || (oParent.type != "textarea" && oParent.type != "text"))
				{
					return result;
				}

				oRange.text = sMarker + oRange.text + sMarker;
				sContents = oObj.value;
				result['start'] = sContents.indexOf(sMarker);
				sContents = sContents.replace(sMarker, "");
				result['end'] = sContents.indexOf(sMarker);
				oObj.value = sContents_;
				oRange.moveToBookmark(sBookmark);
				oRange.select();
				return result;
			}
			else
			{
				return {
					'start': oObj.selectionStart,
					'end': oObj.selectionEnd
				};
			}
		}
		catch(e){}
		return result;
	},

	setCursorPosition: function(oObj, iPosition)
	{
		if (typeof oObj != 'object')
			return false;

		oObj.focus();

		try
		{
			if (document.selection != null && oObj.selectionStart == null)
			{
				var oRange = document.selection.createRange();
				oRange.select();
			}
			else
			{
				oObj.selectionStart = iPosition;
				oObj.selectionEnd = iPosition;
			}
			return true;
		}
		catch(e)
		{
			return false;
		}
	},

	printArray: function (oObj, sParser, iLevel)
	{
		try
		{
			var result = '';
			var space = '';

			if (iLevel==undefined)
				iLevel = 0;
			if (!sParser)
				sParser = "\n";

			for (var j=0; j<=iLevel; j++)
				space += '  ';

			for (var i in oObj)
			{
				if (oObj.hasOwnProperty(i))
				{
					if (typeof oObj[i] == 'object')
						result += space+i + " = {"+ sParser + TCJsUtils.printArray(oObj[i], sParser, iLevel+1) + ", " + sParser + "}" + sParser;
					else
						result += space+i + " = " + oObj[i] + "; " + sParser;
				}
			}
			return result;
		}
		catch(e)
		{
		}
	},

	empty: function(oObj)
	{
		if (oObj)
		{
			for (var i in oObj)
			{
				if (oObj.hasOwnProperty(i))
				{
					return false;
				}
			}
		}
		return true;
	},

	show: function(oDiv, iLeft, iTop)
	{
		if (typeof oDiv != 'object')
			return;
		var zIndex = parseInt(oDiv.style.zIndex);
		if(zIndex <= 0 || isNaN(zIndex))
			zIndex = 2200;
		oDiv.style.zIndex = zIndex;
		oDiv.style.left = iLeft + "px";
		oDiv.style.top = iTop + "px";
		return oDiv;
	},

	hide: function(oDiv)
	{
		if (oDiv)
			oDiv.style.display = 'none';
	},

	GetRealPos: function(el)
	{
		if(!el || !el.offsetParent)
			return false;

		var res = {};
		var objParent = el.offsetParent;
		res["left"] = el.offsetLeft;
		res["top"] = el.offsetTop;
		while(objParent && objParent.tagName != "BODY")
		{
			res["left"] += objParent.offsetLeft;
			res["top"] += objParent.offsetTop;
			objParent = objParent.offsetParent;
		}
		res["right"]=res["left"] + el.offsetWidth;
		res["bottom"]=res["top"] + el.offsetHeight;
		res["width"]=el.offsetWidth;
		res["height"]=el.offsetHeight;

		return res;
	},

	IsIE: function()
	{
		return (document.attachEvent && !TCJsUtils.IsOpera());
	},

	IsOpera: function()
	{
		return (navigator.userAgent.toLowerCase().indexOf('opera') != -1);
	},

	htmlspecialcharsEx: function(str)
	{
		return str.replace(/&amp;/g, '&amp;amp;').replace(/&lt;/g, '&amp;lt;').replace(/&gt;/g, '&amp;gt;').replace(/&quot;/g, '&amp;quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	},

	htmlspecialcharsback: function(str)
	{
		return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;;/g, '"').replace(/&amp;/g, '&');
	}
};

/* End */
;; /* /bitrix/components/bitrix/socialnetwork.admin.set/templates/.default/script.js?15622056192527*/
; /* /bitrix/components/bitrix/socialnetwork.group_create.ex/templates/.default/script.min.js?156220562021538*/
; /* /bitrix/components/bitrix/main.file.input/templates/.default/script.min.js?15622054959095*/
; /* /bitrix/components/bitrix/main.user.selector/templates/.default/script.min.js?15622054955945*/
; /* /bitrix/components/bitrix/ui.tile.selector/templates/.default/script.min.js?156220563712760*/
; /* /bitrix/components/bitrix/main.ui.selector/templates/.default/script.min.js?156220549512758*/
; /* /bitrix/components/bitrix/search.tags.input/templates/.default/script.js?156220561413020*/

//# sourceMappingURL=page_e3cf767915e39e51873f2b99e44b3a48.map.js