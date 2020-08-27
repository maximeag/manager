angular.module('managerApp').config(($stateProvider) => {
  $stateProvider.state(
    'telecom.telephony.billingAccount.line.dashboard.answer.defaultVoicemail',
    {
      url: '/defaultVoicemail',
      views: {
        'lineView@telecom.telephony.billingAccount.line.dashboard': {
          templateUrl:
            'app/telecom/telephony/line/answer/defaultVoicemail/telecom-telephony-line-answer-defaultVoicemail.html',
          noTranslations: true,
        },
        'voicemailView@telecom.telephony.billingAccount.line.dashboard.answer.defaultVoicemail': {
          templateUrl:
            'app/telecom/telephony/service/voicemail/default/telecom-telephony-service-voicemail-default.html',
          controller: 'TelecomTelephonyServiceVoicemailDefaultCtrl',
          controllerAs: 'DefaultVoicemailCtrl',
        },
      },
      translations: {
        value: ['..', '../../../service/voicemail/default'],
        format: 'json',
      },
    },
  );
});
