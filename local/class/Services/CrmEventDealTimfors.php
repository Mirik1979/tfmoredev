<?php
/**
 * Created by PhpStorm.
 * @author Alexander Danilin <danilin2010@yandex.ru>
 * Date: 10.08.2019
 * Time: 23:52
 */

namespace local\Services;

use Bitrix\Main\Loader;
use Bitrix\Main\LoaderException;
use Bitrix\Crm\Timeline\Entity\TimelineTable;
use Bitrix\Main\Entity\Event;
use CCrmDeal;
use CCrmStatus;
use Bitrix\Main\ArgumentException;
use Bitrix\Main\ObjectPropertyException;
use Bitrix\Main\SystemException;
use local\Domain\Repository\CrmEventDealTimforsRepository;
use local\Domain\Factory\CrmEventDealTimforsFactory;

class CrmEventDealTimfors
{

    /**
     * CrmEventDealTimfors constructor.
     */
    public function __construct()
    {
        Loader::includeModule("crm");
    }

    /**
     * @param int $id
     * @return string
     * @throws ArgumentException
     * @throws LoaderException
     * @throws ObjectPropertyException
     * @throws SystemException
     */
    public function getNameAsId($id){
        $CrmEventDealTimforsRepository=new CrmEventDealTimforsRepository();
        $el=$CrmEventDealTimforsRepository->GetList([
            "select" => ["*"],
            "order" => ["ID" => "ASC"],
            "limit" => 1,
            "filter" => ["UF_TIMELINE_ID"=>$id],
        ]);
        if(count($el)>0)
            return "Статус: ".$el[0]->getStageName();
        return "";
    }

    /**
     * @param Event $event
     * @throws ArgumentException
     * @throws LoaderException
     * @throws ObjectPropertyException
     * @throws SystemException
     */
    public static function OnAfterCrmAddEvent(Event $event){
        $id = $event->getParameter("id");
        $CrmEventDealTimfors=new self();
        $param=$CrmEventDealTimfors->getEventInfo($id);
        if($param){
            $CrmEventDealTimforsRepository=new CrmEventDealTimforsRepository();
            $CrmEventDealTimforsRepository->add(CrmEventDealTimforsFactory::createFromArray($param));
        }
    }

    /**
     * @param $EVENT_ID
     * @return array|bool
     * @throws ArgumentException
     * @throws ObjectPropertyException
     * @throws SystemException
     */
    public function getEventInfo($EVENT_ID){
        $arrResult=false;
        $dealId=0;
        $rs=TimelineTable::getList(array(
            'order' => array("ID" => "DESC"),
            'filter' => array(
                '=ID' => $EVENT_ID
            ),
            'select'=>array("*", "BINDINGS")
        ));
        $new=[];
        while($ar = $rs->Fetch())
        {
            $new[]=$ar;
            if($ar['CRM_TIMELINE_ENTITY_TIMELINE_BINDINGS_ENTITY_TYPE_ID']==2)
                $dealId=(int)$ar['CRM_TIMELINE_ENTITY_TIMELINE_BINDINGS_ENTITY_ID'];
        }
        if($dealId<=0){
            \Bitrix\Crm\Timeline\TimelineManager::prepareDisplayData($new, 0, false);
            foreach ($new as $ar){
                if($ar["ASSOCIATED_ENTITY"]["OWNER_TYPE_ID"]==2)
                    $dealId=(int)$ar['ASSOCIATED_ENTITY']["OWNER_ID"];
            }
        }
        //\Bitrix\Main\Diag\Debug::writeToFile($new);
        if($dealId>0){
            $res = CCrmDeal::GetList([],[
                'CHECK_PERMISSIONS'=> 'N',
                'ID'=>$dealId,
            ],[],1);
            if($arr=$res->GetNext()){
                $STAGE=CCrmStatus::GetList([],['STATUS_ID'=>$arr["STAGE_ID"],'ENTITY_ID'=>'DEAL_STAGE'])->GetNext();
                $arrResult=[
                    "TimelineId"=>$EVENT_ID,
                    "DealId"=>$dealId,
                    "StageId"=>$arr["STAGE_ID"],
                    "StageName"=>$STAGE["NAME"],
                ];
            }
        }
        return $arrResult;
    }

}