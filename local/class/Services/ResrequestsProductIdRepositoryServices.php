<?php
/**
 * Created by PhpStorm.
 * @author Alexander Danilin <danilin2010@yandex.ru>
 * Date: 23.09.2019
 * Time: 9:19
 */

namespace local\Services;

use local\Domain\Repository\ResrequestsProductIdRepository;

class ResrequestsProductIdRepositoryServices
{

    /**
     * @param $Id
     * @param $vacancyId
     * @throws \Bitrix\Main\ArgumentException
     * @throws \Bitrix\Main\LoaderException
     * @throws \Bitrix\Main\ObjectPropertyException
     * @throws \Bitrix\Main\SystemException
     */
    public static function updateVacancy($Id, $vacancyId){
        $ResrequestsProductIdRepository=new ResrequestsProductIdRepository();
        $search = $ResrequestsProductIdRepository->GetList([
            'limit' => 1,
            'filter' => [
                "UF_PRODUCT_ID" => $Id,
            ]
        ]);
        if (count($search) == 1){
            $ResrequestsProductArray = $search[0];
            $ResrequestsProductIdRepository->updateVacancy($ResrequestsProductArray->getId(),$vacancyId);
        }
    }

}