<?php
// Событие происходит при формировании списка дополнительного
// функционала соц.сети
// В обработчике можно изменить или дополнить список
AddEventHandler("socialnetwork", "OnFillSocNetFeaturesList", "__AddSocNetFeature");

// Событие происходит при формировании списка закладок
// В обработчике можно изменить список закладок
AddEventHandler("socialnetwork", "OnFillSocNetMenu", "__AddSocNetMenu");

// Событие происходит в комплексном компоненте при работе в ЧПУ
// режиме при формировании списка шаблонов адресов страниц
// комплексного компонента
AddEventHandler("socialnetwork", "OnParseSocNetComponentPath", "__OnParseSocNetComponentPath");

// Событие происходит в комплексном компоненте при работе в
// не ЧПУ режиме при формировании списка псевдонимов переменных
AddEventHandler("socialnetwork", "OnInitSocNetComponentVariables", "__OnInitSocNetComponentVariables");

// При формировании списка дополнительного функционала
// добавим дополнительную запись resrequests
function __AddSocNetFeature(&$arSocNetFeaturesSettings)
{
    $arSocNetFeaturesSettings["resrequests"] = array(
        "FeatureName" => "Ресурсная потребность",
        "allowed" => array(SONET_ENTITY_USER, SONET_ENTITY_GROUP),
        "operations" => array(
            "write" => array(SONET_ENTITY_USER => SONET_RELATIONS_TYPE_NONE, SONET_ENTITY_GROUP => SONET_ROLES_MODERATOR),
            "view" => array(SONET_ENTITY_USER => SONET_RELATIONS_TYPE_ALL, SONET_ENTITY_GROUP => SONET_ROLES_USER),
        ),
        "minoperation" => "view",
        "title" => "Ресурсная потребность"
    );
}

// При формировании списка закладок добавим дополнительную
// закладку для функционала resrequests
function __AddSocNetMenu(&$arResult)
{
    // Достуна для показа - надо связать с настройкой в меню
    $arResult["CanView"]["resrequests"] = true;
    // Ссылка закладки
    $arResult["Urls"]["resrequests"] = CComponentEngine::MakePathFromTemplate("/workgroups/group/#group_id#/resrequests/", array("group_id" => $arResult["Group"]["ID"]));
    // Название закладки
    $arResult["Title"]["resrequests"] = "Ресурсные потребности";
}

// При формировании списка шаблонов адресов страниц
// комплексного компонента в режиме ЧПУ добавим шаблон
// для resrequests
function __OnParseSocNetComponentPath(&$arUrlTemplates, &$arCustomPagesPath)
{
    // Шаблон адреса страницы
    $arUrlTemplates["resrequests"] = "group/#group_id#/resrequests/";
    // Путь относительно корня сайта,
    // по которому лежит страница
    $arCustomPagesPath["resrequests"] = "/local/php_interface/";
}

// Если компонент соц.сети работает в режиме
// ЧПУ, то этот обработчик не нужен
function __OnInitSocNetComponentVariables(&$arVariableAliases, &$arCustomPagesPath)
{

}
