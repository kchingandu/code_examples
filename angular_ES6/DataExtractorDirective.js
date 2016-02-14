import angular from 'angular-1.4.8';

class DataExtractor {

  constructor() {

    this.scope      = {};
    this.restrict   = 'A';
    this.controller = DataExtractorController;
  }

  static createInstance(ColorDataService) {
    return new DataExtractor(ColorDataService);
  }
}

class DataExtractorController {

  constructor(ColorDataService, $element) {

    this.element          = $element;
    this.ColorDataService = ColorDataService;

    this.extractDataFromElement();
  }

  extractDataFromElement() {

    let key            = this.element[0].getAttribute('value');
    let serialisedData = this.element[0].getAttribute('data-model');
    this.ColorDataService.deserialiseAndStoreData(key, serialisedData);
  }

}

DataExtractorController.$inject = ['ColorDataService', '$element'];

angular.module('app').directive('DataExtractor', DataExtractor.createInstance);
