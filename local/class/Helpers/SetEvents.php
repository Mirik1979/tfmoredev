<?php

namespace local\Helpers;

use Bitrix\Main\EventManager;

class SetEvents
{

    public static function init()
    {
// Событие происходит при формировании списка закладок
// В обработчике можно изменить список закладок
        EventManager::getInstance()->addEventHandler(
            'socialnetwork',
            'OnFillSocNetMenu',
            array(
                "local\\Services\\ResRequests\\SocialNetworkServices",
                "__AddSocNetMenu"
            )
        );




    }

}



