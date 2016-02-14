import angular from 'angular-1.4.8';

class SizeAndColorSectionController {

  constructor(ColorDataService) {

    this.vm           = this;
    this.ColorDataVOs = ColorDataService.getColorDataVOs();
  }

  handleSizeSelected(selectedSizeId) {

    this.selectedSizeId = selectedSizeId;

  }

  handleColorSelected(selectedColorName) {
    this.selectedColorName = selectedColorName;
  }

  getColorVO(key) {

    let colorVO = {live: true};

    if (this.selectedSizeId) {
      colorVO = this.ColorDataVOs[key][this.selectedSizeId];
    }

    return colorVO;
  }
}

SizeAndColorSectionController.$inject = ['ColorDataService'];

angular.module('app').controller('SizeAndColorSectionController', SizeAndColorSectionController);
