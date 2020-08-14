import { version } from "package.json";

export const environment = {
  version : "0.0.2",
  buildDate: '13/08/2020',
  production: true,

  projectId: "e1175c26fea511e8bb4f0050569c0a8e",
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
      workflowId: "bec29b30999b11eaa360c282e0885855",
      processId: "05373b4099a411eaa360c282e0885855",
    },
    resetUserPassword: {
      workflowId: "bec29b30999b11eaa360c282e0885855",
      processId: "9c6c75849a7b11eab90cc282e0885855",
    },
    createUser: {
      workflowId: "27f4ad189dbc11eaa360c282e0885855",
      processId: "28148b6a9dbc11eaa360c282e0885855",
    },
    fetchUserByMobileNumber: {
      workflowId: "d2ab1974c4de11eab220727d5ac274b2",
      processId: "b2374f7ac59f11eab220727d5ac274b2",
    },
    blockUserWhatsappAccess: {
      workflowId: "d2ab1974c4de11eab220727d5ac274b2",
      processId: "d2d6f080c4de11eab220727d5ac274b2",
    },
    fetchUsers: {
      workflowId: "d2ab1974c4de11eab220727d5ac274b2",
      processId: "3183021ec68211eab22b727d5ac274b2",
    },
    fetchUserActivityList: {
      workflowId: "d2ab1974c4de11eab220727d5ac274b2",
      processId: "a9790b38c69611eab22b727d5ac274b2",
    },
    updateUser: {
      workflowId: "d2ab1974c4de11eab220727d5ac274b2",
      processId: "570b5632c69911eab22b727d5ac274b2",
    },
    disableUser: {
      workflowId: "27f4ad189dbc11eaa360c282e0885855",
      processId: "31116bf29e5c11eaa360c282e0885855",
    },
    whatsappReport: {
      workflowId: "54b48f28c6a511eab22b727d5ac274b2",
      processId: "54d2fe86c6a511eab22b727d5ac274b2",
    },
    createMessageTemplate: {
      projectId: "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId: "2356727ad5a511eab60b727d5ac274b2",
      processId: "28952a4cd5a511eab60b727d5ac274b2",
    },
    createPromotionalTemplate: {
      projectId: "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId: "2356727ad5a511eab60b727d5ac274b2",
      processId: "32445f1ad5bc11eab60b727d5ac274b2",
    },
    updateTemplate: {
      projectId: "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId: "2356727ad5a511eab60b727d5ac274b2",
      processId: "e81eed10d5ac11eab60b727d5ac274b2",//LOCAL && PROD
    },

    fetchTemplates: {
      projectId: "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId: "102df80ed5a911eab60b727d5ac274b2",
      processId: "f24acf34d5bb11eab60b727d5ac274b2",
    },
    deactivateTemplate: {
      projectId: "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId: "5a3bad14d6e511eab60b727d5ac274b2",
      processId: "390f605ad72511eab60c727d5ac274b2",
    },
    activateTemplate: {
      projectId: "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId: "5a3bad14d6e511eab60b727d5ac274b2",
      processId : "0da2875ed72411eab60c727d5ac274b2" //LOCAL
    },
    createPreappovedOffer: {
      projectId: "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId: "2356727ad5a511eab60b727d5ac274b2",
      processId: "c4acd156d86511eab60c727d5ac274b2",
    },
    fetchcheckerScreenTemplates : {
      projectId: "e45e9cf0d5a411eab60b727d5ac274b2",
      workflowId: "102df80ed5a911eab60b727d5ac274b2",
      processId: "34c44c92dbbf11eab60d727d5ac274b2", //LOCAL
     // processId:  "eab3b07cdcb111ea854a46113bb841db" //Production
    },
  },
  host: "/appiyo",
};
