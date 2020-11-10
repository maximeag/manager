export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app.managedBaremetal.users.add', {
    url: '/add',
    params: {
      passwordPolicy: null,
    },
    views: {
      modal: {
        component: 'dedicatedCloudUserAdd',
      },
    },
    layout: 'modal',
    resolve: {
      passwordPolicy: /* @ngInject */ ($transition$) =>
        $transition$.params().passwordPolicy,
    },
  });
};
