import template from './billing-payments-details.html';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('billing.main.payments.details', {
    url: '/:id/details',
    template,
    controller: 'Billing.PaymentDetailsCtrl',
    controllerAs: '$ctrl',
  });
};
