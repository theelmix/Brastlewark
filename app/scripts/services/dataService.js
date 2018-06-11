/* recommended */

// dataservice factory
angular
    .module('Brastlewark')
    .factory('dataservice', dataservice);

dataservice.$inject = ['$http'];

function dataservice($http, logger) {
    return {
        getAvengers: getAvengers
    };

    function getAvengers() {
        return $http.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json', { cache: true })
            .then(getAvengersComplete)
            .catch(getAvengersFailed);

        function getAvengersComplete(response) {
            console.log(response);
            return response.data.Brastlewark;
        }

        function getAvengersFailed(error) {
            console.error('XHR Failed for getAvengers.' + error.data);
        }
    }
}