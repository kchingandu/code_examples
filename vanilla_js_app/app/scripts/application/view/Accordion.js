/**
 * FOR DOCUMENTATION REFER TO AccordionSpec.js
 */
define(['jquery'], function ($) {
  'use strict';

  function Accordion() {
  }

  Accordion.prototype.activate = function () {

    var sidebarHeading = $('#sidebar');
    sidebarHeading.on('click', 'h4', $.proxy(this.toggleAccordionElement, this));

  };

  Accordion.prototype.toggleAccordionElement = function (accordionHeader) {
    $(accordionHeader.currentTarget).next().slideToggle();
    return false;
  };

  return Accordion;
});
