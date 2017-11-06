/* global vis, console */
/* jshint strict: true, browser:true, jquery: true */

$(document).ready(function () {

    'use strict';

    $.dynatableSetup({

        features: {
            sort: true,
            search: false,
            pushState: true,
            perPageSelect: false
        },

        dataset: {
            ajax: true,
            records: [],
            ajaxOnLoad: true,
            recordCount: true,
            perPageDefault: 20,
            perPageSelect: true,
            perPageOptions: [5, 10, 20, 50, 100]
        },

        inputs: {
            pageText: 'Páginas:',
            paginationNext: 'Próximo',
            queryEvent: null,
            paginationPrev: 'Anterior',
            recordCountText: 'Mostrando ',
            processingText: 'A processar ...',
            perPageText: 'Resultados por página:&nbsp;&nbsp;',
            recordCountPageUnboundedTemplate: '{recordsShown} de',
            recordCountTotalTemplate: '{recordsQueryCount} registos',
            recordCountPageBoundTemplate: 'de {pageLowerBound} até {pageUpperBound} de',
            recordCountFilteredTemplate: ' (filtrados de {recordsTotal} registos no total)'
        }

    });
    
    // all bootstrap defined tooltips that have the defined data-tooltip="iu-tooltip"
    $(document).tooltip({container: 'body', selector: '[data-tooltip="ui-tooltip"]', trigger: 'hover'});

});

