import { version } from "package.json";
import { environment as environmentProd } from './environment.prod';

export const environment = {
  version: environmentProd.version,
  buildDate:  environmentProd.buildDate,
  production: false,

  projectId: "32df24a650b311ebb890727d5ac274b2",
  api: {
    getUserDetails: {
      workflowId: "bec29b30999b11eaa360c282e0885855",
      processId: "bf086020999b11eaa360c282e0885855",
    },
    getForgetDetails: {
      workflowId: "bec29b30999b11eaa360c282e0885855",
      processId: "3dd579ae9a8e11eab90cc282e0885855",
    },
    changeUserPassword: {
      workflowId: "fdaa8714517811eb8844727d5ac274b2",
      processId: "fdd9c2a4517811eb8844727d5ac274b2",
    },
    resetUserPassword: {
      workflowId: "bec29b30999b11eaa360c282e0885855",
      processId: "9c6c75849a7b11eab90cc282e0885855",
    },
    createUser: {
      workflowId: "08d6090a53d211eb88e9727d5ac274b2",
      processId: "08e6b1ba53d211eb88e9727d5ac274b2",
      projectId  : "32df24a650b311ebb890727d5ac274b2"
    },
    fetchUserByMobileNumber: {
      workflowId: "7b812786595511eb8906727d5ac274b2", //AU Bank
      processId: "b2374f7ac59f11eab220727d5ac274b2",
    },
    blockUserWhatsappAccess: {
      workflowId: "7b812786595511eb8906727d5ac274b2",
      processId: "d2d6f080c4de11eab220727d5ac274b2",
    },
    fetchUsers: {
      workflowId: "7b812786595511eb8906727d5ac274b2",
      processId: "3183021ec68211eab22b727d5ac274b2",
      projectId :  "32df24a650b311ebb890727d5ac274b2"
    },
    fetchUserActivityList: {
      workflowId: "7b812786595511eb8906727d5ac274b2",
      processId: "a9790b38c69611eab22b727d5ac274b2",
    },
    updateUser: {
      workflowId: "7b812786595511eb8906727d5ac274b2",
      processId: "570b5632c69911eab22b727d5ac274b2",
    },
    disableUser: {
      workflowId: "08d6090a53d211eb88e9727d5ac274b2",
      processId: "0902354853d211eb88e9727d5ac274b2",
    },
    whatsappReport: { //AU Bank
      workflowId: "3d860f48595811eb8908727d5ac274b2",
      processId:"9db7d912e5c911eaad68be9bade7af1e",
    },
    createMessageTemplate: { //AU BANK
      projectId: "32df24a650b311ebb890727d5ac274b2",
      workflowId: "454f978650ba11ebb890727d5ac274b2",
      processId: "28952a4cd5a511eab60b727d5ac274b2",
    },
    createPromotionalTemplate: { //AU Bank
      projectId: "32df24a650b311ebb890727d5ac274b2",
      workflowId: "454f978650ba11ebb890727d5ac274b2",
      processId: "32445f1ad5bc11eab60b727d5ac274b2",
    },
    updateTemplate: {
      projectId: "32df24a650b311ebb890727d5ac274b2",
      workflowId: "454f978650ba11ebb890727d5ac274b2",
      processId: "e81eed10d5ac11eab60b727d5ac274b2",
    },

    fetchTemplates: {
      projectId: "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId: "102df80ed5a911eab60b727d5ac274b2",
      processId: "f24acf34d5bb11eab60b727d5ac274b2",
    },

    deactivateTemplate: {
      projectId: "32df24a650b311ebb890727d5ac274b2",
      workflowId: "c763841250ba11ebb890727d5ac274b2",
      processId: "390f605ad72511eab60c727d5ac274b2", //AU Bank
    },

    activateTemplate: {
      projectId: "32df24a650b311ebb890727d5ac274b2",
      workflowId: "c763841250ba11ebb890727d5ac274b2",
      processId : "0da2875ed72411eab60c727d5ac274b2" //AU Bank
    },
    createPreappovedOffer: {
      projectId: "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId: "2356727ad5a511eab60b727d5ac274b2",
      processId: "c4acd156d86511eab60c727d5ac274b2",
    },

    fetchcheckerScreenTemplates : {
      projectId: "32df24a650b311ebb890727d5ac274b2",
      workflowId: "431bd4fa50b711ebb890727d5ac274b2",
      processId: "eab3b07cdcb111ea854a46113bb841db",  //Production
    },

    fetchViewTemplate : {
      projectId : "32df24a650b311ebb890727d5ac274b2",
      workflowId: "c763841250ba11ebb890727d5ac274b2",
      processId: "e2942064dcb311ea81f946113bb841db", //AU
      
    },

    fetchPromotionalDropDownData : {
      projectId : "32df24a650b311ebb890727d5ac274b2",
      workflowId : "454f978650ba11ebb890727d5ac274b2",
      processId : "dd2d9a6aec6211ea9c031a78550cd107", //AU Bank
    },

    fetchPreApprovedDropDownData : {
      projectId : "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId : "2356727ad5a511eab60b727d5ac274b2",
      processId : "03ef3a3eec6611ea90b71a78550cd107",//PRODUCTION
      // processId : "093e269ced0d11eab613727d5ac274b2",//LOCAL
    },
    getTriggerTimeBlocked : {
      projectId : "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId : "d9710a7af8e611eab613727d5ac274b2",
      processId : "ca265cb0f8ea11eab613727d5ac274b2"
    },
    updateBlockTriggerTimeApi : {
      projectId : "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId : "d9710a7af8e611eab613727d5ac274b2",
      processId : "d9a17f98f8e611eab613727d5ac274b2"
    },
    fetchTimeZonesBasedBlockedTimeApi : {
      projectId : "32df24a650b311ebb890727d5ac274b2",
      workflowId : "047bf4e250bb11ebb890727d5ac274b2" , //AU Bank
      processId : "790a6676182711eba7dbce6815002bdf", //AU Bank
    },
    timeZonesBasedBlockedTimeUpdateApi : {
      projectId :"32df24a650b311ebb890727d5ac274b2",
      workflowId:"047bf4e250bb11ebb890727d5ac274b2", //Au Bank
      processId : "bd93bbe0183a11eb957bce6815002bdf", //Au Bank
    },
    createAdminPromotionalAndPreApprovedTemplate : {
      projectId : "32df24a650b311ebb890727d5ac274b2", 
      workflowId : "e17397c650b911ebb890727d5ac274b2", //Au Bank
      processId : "e0b1c8301ce811eba2384adb402d20cb", 
    },
    fetchAdminTemplateApi : {
      projectId : "32df24a650b311ebb890727d5ac274b2",
      workflowId : "e17397c650b911ebb890727d5ac274b2", //Production
      processId : "a34778981ce611eb8d2a4adb402d20cb" //Production
    },


    //AU BANK API's


    userLoginApi :  {
      projectId :  '32df24a650b311ebb890727d5ac274b2',
      workflowId :  'fdaa8714517811eb8844727d5ac274b2',
      processId :  'fdbb39e2517811eb8844727d5ac274b2'
    },
    fetchMakerScreenTemplates :  {
      projectId :  '32df24a650b311ebb890727d5ac274b2',
      workflowId :  '431bd4fa50b711ebb890727d5ac274b2',
      processId  :  'f24acf34d5bb11eab60b727d5ac274b2'
    },
    fetReportsApi :  {
      projectId :  '32df24a650b311ebb890727d5ac274b2',
      workflowId: '6a4efcd2595911eb8908727d5ac274b2',
      processId :  '84ac85f024b011eb9266920f90331d16'
    }
  },
  host: "http://178.128.125.44/appiyo",
  appiyoDrive: "/d/drive/upload/",
  newAppiyoDrive: "/account/appiyo_drive/docs/",
  previewDocappiyoDrive :  "/d/drive/docs/"
};
