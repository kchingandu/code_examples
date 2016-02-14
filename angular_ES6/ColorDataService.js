import angular from 'angular-1.4.8';

class ColorDataService {

  constructor() {
    this.colorDataVOs = {};
  }

  deserialiseAndStoreData(key, dataString) {

    let colorDataVO        = angular.fromJson(dataString);
    this.colorDataVOs[key] = colorDataVO;
  }

  getColorDataVOs() {
    return this.colorDataVOs;
  }
}

angular.module('app').service('ColorDataService', ColorDataService);
