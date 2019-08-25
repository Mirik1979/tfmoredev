<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
global $USER;
//print_r($arResult["ITEMS"]);
if(!$USER->IsAdmin()) {
    unset($arResult["TABS"][0]);
    unset($arResult["TABS"][1]);
    unset($arResult["TABS"][2]);
    unset($arResult["TABS"][3]);
    unset($arResult["TABS"][4]);
    unset($arResult["TABS"][5]);
    if (\Bitrix\Main\Loader::includeModule('crm'))
    {
        $res = CCrmDeal::GetList(array("ID" => ASC), array("ID" => $arResult['ENTITY_ID']));
        while($ob = $res->GetNext())
        {
            $stage = substr($ob['STAGE_ID'],0, 1);
            if($stage=='C') {
                unset($arResult["TABS"][7]);
            }
        }
    }
}



