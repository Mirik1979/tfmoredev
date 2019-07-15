<?php
/**
 * Created by PhpStorm.
 * @author Alexander Danilin <danilin2010@yandex.ru>
 * Date: 15.07.2019
 * Time: 21:21
 */

namespace local\Services\ResRequests;

class SocialNetworkServices
{

// При формировании списка закладок добавим дополнительную
// закладку для функционала resrequests
    function __AddSocNetMenu(&$arResult)
    {
        // Достуна для показа
        if(array_key_exists("resrequests",$arResult["ActiveFeatures"]))
            $arResult["CanView"]["resrequests"] = true;
        else
            $arResult["CanView"]["resrequests"] = false;

        // Ссылка закладки
        $arResult["Urls"]["resrequests"] = \CComponentEngine::MakePathFromTemplate("/workgroups/group/#group_id#/resrequests/", array("group_id" => $arResult["Group"]["ID"]));
        // Название закладки
        $arResult["Title"]["resrequests"] = "Ресурсные потребности";
    }

}