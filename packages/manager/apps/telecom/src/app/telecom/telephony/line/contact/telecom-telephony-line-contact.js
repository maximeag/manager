angular.module('managerApp').config(($stateProvider) => {
  $stateProvider.state(
    'telecom.telephony.billingAccount.line.dashboard.contact',
    {
      url: '/contact',
      views: {
        'lineInnerView@telecom.telephony.billingAccount.line.dashboard': {
          templateUrl:
            'app/telecom/telephony/service/contact/telecom-telephony-service-contact.html',
          controller: 'TelecomTelephonyServiceContactCtrl',
          controllerAs: 'ServiceContactCtrl',
        },
      },
      translations: { value: ['../../service/contact'], format: 'json' },
    },
  );
});
